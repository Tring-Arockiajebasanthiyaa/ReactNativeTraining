import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/homepageScreen';
import DetailsScreen from '../pages/detailsScreen';
import ProfileScreen from '../pages/profileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const drawer = createDrawerNavigator();
const HomeStack = ({ username, onLogout }: any) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeStack">
      {(props:any) => <HomeScreen {...props} username={username} onLogout={onLogout} />}
    </Stack.Screen>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const HomeTabs = ({ username, onLogout }: any) => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home">
      {() => <HomeStack username={username} onLogout={onLogout} />}
    </Tab.Screen>
     {/* <drawer.Navigator>
      <drawer.Screen name="ProfileDrawer" onLogout={onLogout} />
    </drawer.Navigator> */}
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);



export default HomeTabs;
