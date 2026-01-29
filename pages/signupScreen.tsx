import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface SignupScreenProps {
  onSignup: (email: string, password: string) => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onSignup }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 360;
  const isTablet = width >= 768;

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
    <SafeAreaView style={[styles.safe, isDarkMode ? styles.darkBg : styles.lightBg]}>
      <ImageBackground
        source={require('../assets/hand-touching-login-username.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              keyboardShouldPersistTaps="handled"
            >
              <View style={[styles.card, isTablet && styles.cardTablet]}>
                <Text style={[styles.header]}>Signup</Text>

                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.input}
                />
                <TextInput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  style={styles.input}
                />

                <TouchableOpacity onPress={handleSignup} style={styles.button}>
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1 },
  flex: { flex: 1 },
  background: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 16 },
  darkBg: { backgroundColor: Colors.darker },
  lightBg: { backgroundColor: Colors.lighter },
  card: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.92)',
    padding: 20,
  },
  cardTablet: { width: 420, padding: 32 },
  header: { fontWeight: '700', textAlign: 'center', marginBottom: 24, fontSize: 26 },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#464648',
    borderRadius: 8,
    minHeight: Platform.OS === 'ios' ? 44 : 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

export default SignupScreen;
