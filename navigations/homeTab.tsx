import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/homepageScreen';
import DetailsScreen from '../pages/detailsScreen';
import ProfileScreen from '../pages/profileScreen';
import PostsScreen from '../pages/postsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
      />
    </Stack.Navigator>
);

const HomeTabs = ({ username, onLogout }: any) => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    >
      {() => <HomeStack username={username} onLogout={onLogout} />}
    </Tab.Screen>

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      initialParams={{ username }}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? 'person' : 'person-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Posts"
      component={PostsScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={focused ? 'list' : 'list-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);




export default HomeTabs;
