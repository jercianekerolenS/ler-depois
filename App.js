import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from './views/LoginView';
import { AuthProvider } from './providers/AuthProvider';

const Stack = createStackNavigator();

export default function App() {
  return (

    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login View"
            component={LoginView}
            options={{ title: "Ler-Depois" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
