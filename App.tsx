// import React, { useState } from 'react';
// import { View, Alert } from 'react-native';
// import LoginScreen from './pages/loginScreen';
// import SignupScreen from './pages/signupScreen';
// import HomeScreen from './pages/homepageScreen';
// const App = () => {
//   const [hasSignedUp, setHasSignedUp] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [user, setUser] = useState<{ email: string; password: string } | null>(null);
//   const [username, setUsername] = useState('');

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     Alert.alert('Logged Out', 'You have been logged out.');
//   };
//   return (
//     <View style={{ flex: 1 }}>

    
//       {!hasSignedUp ? (
//         <SignupScreen
//           onSignup={(email: string, password: string) => {
//             setUser({ email, password });
//             setHasSignedUp(true);

//             Alert.alert(
//               'Signup Success',
//               'Please login to continue',
//               [{ text: 'OK' }]
//             );
//           }}
//         />

//       ) : !isLoggedIn ? (
//         <LoginScreen
//           user={user}
//           onLoginSuccess={(name: string) => {
//             setUsername(name);

//             Alert.alert(
//               'Login Success',
//               `Welcome ${name}`,
//               [
//                 {
//                   text: 'OK',
//                   onPress: () => {
//                     setIsLoggedIn(true);
//                   },
//                 },
//               ],
//               { cancelable: false }
//             );
//           }}
//     


import React, { useState } from 'react';
import { View, Alert ,Button} from 'react-native';
import LoginScreen from './pages/loginScreen';
import SignupScreen from './pages/signupScreen';
import HomeScreen from './pages/homepageScreen';
import ProfileScreen from './pages/profileScreen';
import DetailsScreen from './pages/detailsScreen';
type Screen = 'Home' | 'Profile' | 'Details';

const App = () => {
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; password: string } | null>(null);
  const [username, setUsername] = useState('');
  const [detailName, setDetailName] = useState('');
  const [currentScreen, setCurrentScreen] = useState<Screen>('Home');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('Home');
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  if (!hasSignedUp) {
    return (
      <SignupScreen
        onSignup={(email, password) => {
          setUser({ email, password });
          setHasSignedUp(true);
          Alert.alert('Signup Success', 'Please login to continue', [{ text: 'OK' }]);
        }}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <LoginScreen
        user={user}
        onLoginSuccess={(name) => {
          setUsername(name);
          Alert.alert('Login Success', `Welcome ${name}`, [
            { text: 'OK', onPress: () => setIsLoggedIn(true) },
          ]);
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Home' && <HomeScreen username={username}  onLogout={handleLogout}  onNavigateToDetails={(name) => {
        setDetailName(name);
        setCurrentScreen('Details');
      }}
       />}
      {currentScreen === 'Details' && (
    <DetailsScreen
      name={detailName}
      onBack={() => setCurrentScreen('Home')}
    />
  )}
      {currentScreen === 'Profile' && <ProfileScreen username={username} onLogout={handleLogout} />}
      
      <View style={{ flexDirection: 'row', height: 60, borderTopWidth: 1 }}>
        <View style={{ flex: 1 }}>
          <Button title="Home" onPress={() => setCurrentScreen('Home')} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Profile" onPress={() => setCurrentScreen('Profile')} />
        </View>
      </View>
    </View>
  );
};

export default App;
