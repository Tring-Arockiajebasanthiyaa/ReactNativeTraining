import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import LoginScreen from './pages/loginScreen';
import SignupScreen from './pages/signupScreen';
import HomeScreen from './pages/homepageScreen';
const App = () => {
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState<{ email: string; password: string } | null>(null);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };
  return (
    <View style={{ flex: 1 }}>

    
      {!hasSignedUp ? (
        <SignupScreen
          onSignup={(email: string, password: string) => {
            setUser({ email, password });
            setHasSignedUp(true);

            Alert.alert(
              'Signup Success',
              'Please login to continue',
              [{ text: 'OK' }]
            );
          }}
        />

      ) : !isLoggedIn ? (
        <LoginScreen
          user={user}
          onLoginSuccess={(name: string) => {
            setUsername(name);

            Alert.alert(
              'Login Success',
              `Welcome ${name}`,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    setIsLoggedIn(true);
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />

      ) : (

        <HomeScreen username={username} onLogout={handleLogout}/>

      )}

    </View>
  );
};

export default App;
