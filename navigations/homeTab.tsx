import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/homepageScreen';
import DetailsScreen from '../pages/detailsScreen';
import ProfileScreen from '../pages/profileScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = ({ username, onLogout }: any) => (
  <Stack.Navigator>
      <Stack.Screen name="Home">
        {(props) => (
          <HomeScreen
            {...props}
            username={username}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Details" component={DetailsScreen} />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ username }}
      />
    </Stack.Navigator>
);

const HomeTabs = ({ username, onLogout }: any) => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home">
      {() => <HomeStack username={username} onLogout={onLogout}/>}
    </Tab.Screen>
    <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ username }}/>
  </Tab.Navigator>
);



export default HomeTabs;
