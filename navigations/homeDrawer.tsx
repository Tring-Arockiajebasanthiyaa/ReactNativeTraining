import React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './homeTab';

const Drawer = createDrawerNavigator();

const HomeDrawer = ({ username, onLogout }: any) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home">
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
    </NavigationContainer>
  );
};

export default HomeDrawer;
