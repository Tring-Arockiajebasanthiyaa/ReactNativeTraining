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
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Colors } from 'react-native/Libraries/NewAppScreen';

interface LoginScreenProps {
  user: { email: string; password: string } | null;
  onLoginSuccess: (username: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ user, onLoginSuccess }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();
  const isSmallDevice = width < 360;
  const isTablet = width >= 768;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
  if (!user || user.email !== email || user.password !== password) {
    Alert.alert('Error', 'Invalid credentials');
    return;
  }

  try {
    const userData = { ...user, username: email }; // save username/email for later
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.log('Error saving user data:', error);
  }

  onLoginSuccess(email); // triggers auto login
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
                <Text style={[styles.header]}>Login</Text>

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

                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
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
  darkBg: { backgroundColor: '#222' },
  lightBg: { backgroundColor: '#f0f0f0' },
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
  buttonText: { color:Platform.OS ==='ios'? 'red' : '#2df713', fontWeight: '600', fontSize: 16 },
});

export default LoginScreen;
