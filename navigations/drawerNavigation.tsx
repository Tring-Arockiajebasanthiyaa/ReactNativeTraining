import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/homepageScreen';
import DetailsScreen from '../pages/detailsScreen';
import ProfileScreen from '../pages/profileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Home stack: HomeScreen -> DetailsScreen
const HomeStack = ({ username, onLogout }: any) => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
      {(prop: any) => (
        <HomeScreen
          {...prop}
          username={username}
          onLogout={onLogout}
          onNavigateToDetails={(name: string) =>
            prop.navigation.navigate('DetailsScreen', { name })
          }
        />
      )}
    </Stack.Screen>

    <Stack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{ headerShown: true, title: 'Details' }}
    />
  </Stack.Navigator>
);

// Root Drawer
const RootDrawer = ({ username, onLogout }: any) => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home">
        {() => <HomeStack username={username} onLogout={onLogout} />}
      </Drawer.Screen>

      <Drawer.Screen name="Profile">
        {() => <ProfileScreen username={username} onLogout={onLogout} />}
      </Drawer.Screen>

      {/* Logout Drawer Item */}
      <Drawer.Screen
        name="Logout"
        component={() => <View />} // empty screen
        listeners={{
          focus: () => {
            onLogout(); // trigger logout when drawer item is pressed
          },
        }}
        options={{ title: 'Logout' }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootDrawer;
