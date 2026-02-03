import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../pages/signupScreen';
import LoginScreen from '../pages/loginScreen';

const Stack = createStackNavigator();

export default function AuthStack({
  user,
  setUser,
  setIsLoggedIn,
  setUsername,
}: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup">
        {(props) => (
          <SignupScreen
            {...props}
            onSignup={(email, password) => {
              setUser({ email, password });
              props.navigation.navigate('Login');
            }}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Login">
        {(props) => (
          <LoginScreen
            {...props}
            user={user}
            onLoginSuccess={(username: string) => {
              setUsername(username);
              setIsLoggedIn(true);
            }}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
