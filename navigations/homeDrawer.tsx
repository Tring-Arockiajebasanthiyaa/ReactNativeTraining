import React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import HomeTabs from './homeTab';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, username, onLogout }: any) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={`Home`}
        onPress={() => navigation.navigate('HomeTabs')}
      />

      <DrawerItem
        label="Logout"
        onPress={() => {
          Alert.alert(
            'Logout',
            'Are you sure?',
            [
              { text: 'Cancel', style: 'cancel', onPress: () => navigation.closeDrawer() },
              { 
                text: 'Logout', 
                style: 'destructive', 
                onPress: () => {
                  if (onLogout && typeof onLogout === 'function') {
                    onLogout().catch((err: any) => console.log(err));
                  } else {
                    console.warn('onLogout is not defined');
                  }
        }
              },
            ],
            { cancelable: false }
          );
        }}
      />
    </DrawerContentScrollView>
  );
};

const HomeDrawer = ({ username, onLogout }: any) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} username={username} onLogout={onLogout} />}
    >
      <Drawer.Screen name="HomeTabs">
        {() => <HomeTabs username={username}/>}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
