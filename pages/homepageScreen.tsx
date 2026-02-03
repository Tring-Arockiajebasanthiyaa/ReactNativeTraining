import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
interface HomeScreenProps {
  username: string;
  onNavigateToDetails: (name: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  username,
  onNavigateToDetails,
}) => {
  const [name, setName] = useState('');
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safe}>
        {/* <View style={styles.header}>
          <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View> */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.username}>
            This is HomeScreen for {username}
          </Text>
        </View>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
         onPress={() => {
          if (name.trim()) {
            navigation.navigate('Details', { name });
          }
        }}

        >
          <Text style={styles.buttonText}>See Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  username: { fontSize: 16, fontWeight: '600' },
  logoutBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff3b30',
  },
  logoutText: {
    color: '#ff3b30',
    fontWeight: '600',
    fontSize: 14,
  },
  content: { padding: 16 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
