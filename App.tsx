// import React, { useState } from 'react';
// import { View, Alert ,Button} from 'react-native';
// import LoginScreen from './pages/loginScreen';
// import SignupScreen from './pages/signupScreen';
// import HomeDrawer from './navigations/homeDrawer';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeTabs from './navigations/homeTab';

// type Screen = 'Home' | 'Profile' | 'Details';

// const App = () => {
//   const [hasSignedUp, setHasSignedUp] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState<{ email: string; password: string } | null>(null);
//   const [username, setUsername] = useState('');
//   const [currentScreen, setCurrentScreen] = useState<Screen>('Home');
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentScreen('Home');
//     Alert.alert('Logged Out', 'You have been logged out.');
//   };

//   if (!hasSignedUp) {
//     return (
//       <SignupScreen
//         onSignup={(email, password) => {
//           setUser({ email, password });
//           setHasSignedUp(true);
//           Alert.alert('Signup Success', 'Please login to continue', [{ text: 'OK' }]);
//         }}
//       />
//     );
//   }

//   if (!isLoggedIn) {
//     return (
//       <LoginScreen
//         user={user}
//         onLoginSuccess={(name) => {
//           setUsername(name);
//           Alert.alert('Login Success', `Welcome ${name}`, [
//             { text: 'OK', onPress: () => setIsLoggedIn(true) },
//           ]);
//         }}
//       />
//     );
//   }
//   if (isLoggedIn) {
//   return (
//     <HomeDrawer
//       username={username}
//       onLogout={handleLogout}
//     />
//   );
// }

//   return (
//      <NavigationContainer>
//       <HomeTabs username={username} onLogout={handleLogout} />
//     </NavigationContainer>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigations/rootNavigator';

export default function App() {
  const [user, setUser] = useState<{ email: string; password: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <NavigationContainer>
      <RootNavigator
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        username={username}
        setUsername={setUsername}
      />
    </NavigationContainer>
  );
}
