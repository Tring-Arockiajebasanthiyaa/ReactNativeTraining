import React, { useState } from 'react';
import { View, Alert, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  Input,
  Button,
  Spacer,
  ScreenContainer,
} from '../components';

// import { Colors } from 'react-native/Libraries/NewAppScreen';

interface LoginScreenProps {
  user: { email: string; password: string } | null;
  onLoginSuccess: (username: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ user, onLoginSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    if (!user || user.email !== email || user.password !== password) {
      Alert.alert('Error', 'Invalid credentials');
      return;
    }

    try {
      const userData = { ...user, username: email };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.log('Error saving user data:', error);
    }

    onLoginSuccess(email);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <View style={styles.container}>
          <Text variant="h1" weight="700" style={styles.heading}>
            Welcome Back
          </Text>
          <Text variant="subtitle" color="#666666" style={styles.subheading}>
            Login to your account
          </Text>

          <Spacer height={24} />

          <Input
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Spacer height={16} />

          <Input
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Spacer height={24} />

          <Button
            title="Login"
            onPress={handleLogin}
            variant="primary"
            size="large"
          />
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 8,
  },
  subheading: {
    marginBottom: 16,
  },
});

export default LoginScreen;
