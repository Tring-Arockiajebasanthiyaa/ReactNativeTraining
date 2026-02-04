import React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './homeTab';
import HomeScreen from '../pages/homepageScreen';
const Drawer = createDrawerNavigator();

const HomeDrawer = ({ username, onLogout }: any) => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeTabs">
          {() => <HomeTabs username={username} onLogout={onLogout} />}
        </Drawer.Screen>

       <Drawer.Screen
        name="Logout"
        listeners={{
            focus: () => {
            Alert.alert(
                'Logout',
                'Are you sure?',
                [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Logout', onPress: onLogout },
                ]
            );
            },
        }}
        >
        {() => null}
        </Drawer.Screen>

      </Drawer.Navigator>

  );
};

export default HomeDrawer;
