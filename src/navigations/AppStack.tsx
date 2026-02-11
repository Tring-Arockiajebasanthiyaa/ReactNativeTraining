import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/homepageScreen';
import DetailsScreen from '../pages/detailsScreen';
import ProfileScreen from '../pages/profileScreen';
import HomeDrawer from './homeDrawer';
import HomeTabs from './homeTab';

const Stack = createStackNavigator();

export default function AppStack({ username, onLogout }: any) {
  return (
    <HomeDrawer username={username} onLogout={onLogout} />
  );
}
