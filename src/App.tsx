import React, { useEffect, useState, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './navigations/rootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
export default function App() {
  const appState = useRef<AppStateStatus>(AppState.currentState);

  const [user, setUser] = useState<{ email: string; password: string; username?: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true); 
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user'); 
      setIsLoggedIn(false);  
      setUser(null);
      setUsername('');
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
    }
  };
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setUsername(parsedUser.username || parsedUser.email);
          setIsLoggedIn(true); 
        }
      } catch (error) {
        console.log('Error reading user data from storage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }
      if(appState.current === 'active' && nextAppState.match(/inactive|background/)) {
        console.log('App has gone to the background!');
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, []);

  if (loading) return null; 

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator
          user={user}
          setUser={setUser}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          setUsername={setUsername}
          onLogout={handleLogout}
        />
      </NavigationContainer>
    </Provider>
  );
}
