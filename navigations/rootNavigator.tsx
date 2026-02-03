import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './authNavigator';
import AppStack from './AppTabs';

const Stack = createStackNavigator();

export default function RootNavigator(props: any) {
  const { isLoggedIn } = props;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="App">
          {() => <AppStack {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Auth">
          {() => <AuthStack {...props} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}
