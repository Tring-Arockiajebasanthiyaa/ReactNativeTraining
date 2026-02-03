import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const route = useRoute<any>();
  const { username } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../assets/usersprofiles.jpg')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.username}>This is {username}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile Details</Text>
          <Text style={styles.cardItem}>Email: {username}</Text>
          <Text style={styles.cardItem}>Account: Active</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  drawerBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
  },
  logoutBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff3b30',
  },
  logoutText: { color: '#ff3b30', fontWeight: '600', fontSize: 14 },
  leftHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 60, height: 60, borderRadius: 50, marginRight: 12 },
  username: { fontSize: 16, fontWeight: '600' },
  content: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  cardItem: { fontSize: 14, marginBottom: 4 },
});
