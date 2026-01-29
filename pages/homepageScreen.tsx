import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

interface HomeScreenProps {
  username: string;
  onLogout: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ username , onLogout}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../assets/usersprofiles.jpg')}
            style={styles.image} resizeMode='contain'
          />
          <Text style={styles.username}>This is {username}</Text>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome back </Text>
        <Text style={styles.subText}>Hope you’re having a great day!</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile Details</Text>
          <Text style={styles.cardItem}>Email: {username}</Text>
          <Text style={styles.cardItem}>Account: Active</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12,
    },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
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
  content: {
    padding: 16,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2, 
    shadowColor: '#000'
  
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardItem: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default HomeScreen;
