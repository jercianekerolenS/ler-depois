import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";

export function LoginView({ navigation }) {

    const [email, setEmail] = useState("useAuth");
    const [password, setPassword] = useState("useAuth");

    const onPressSignIn = async () => {
        console.log("Trying sign in with user: " + email);
        try {
          await signIn(email, password);
        } catch (error) {
          const errorMessage = `Failed to sign in: ${error.message}`;
          console.error(errorMessage);
          Alert.alert(errorMessage);
        }
      };
    
      const onPressSignUp = async () => {
        console.log("Trying signup with user: " + email);
        try {
          await signUp(email, password);
          signIn(email, password);
        } catch (error) {
          const errorMessage = `Failed to sign up: ${error.message}`;
          console.error(errorMessage);
          Alert.alert(errorMessage);
        }
      };


  return (
    <View>
      <Text>Entre ou Cadastre-se:</Text>
      <View>
        <TextInput          
          placeholder="digite seu email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          placeholder="digite sua senha"
          secureTextEntry
        />
      </View>
      <Button title="Entrar" />
      <Button title="Cadastrar" />
    </View>
  );
}