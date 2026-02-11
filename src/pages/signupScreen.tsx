import React, { useState } from 'react';
import { View, Alert, StyleSheet, SafeAreaView } from 'react-native';
import {
  Text,
  Input,
  Button,
  Spacer,
  ScreenContainer,
} from '../components';

interface SignupScreenProps {
  onSignup: (email: string, password: string) => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onSignup }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    } else if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    } else if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    onSignup(email, password);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <View style={styles.container}>
          <Text variant="h1" weight="700" style={styles.heading}>
            Create Account
          </Text>
          <Text variant="subtitle" color="#666666" style={styles.subheading}>
            Join us today
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
            placeholder="Enter your password (min 8 characters)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Spacer height={16} />

          <Input
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Spacer height={24} />

          <Button
            title="Create Account"
            onPress={handleSignup}
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

export default SignupScreen;
