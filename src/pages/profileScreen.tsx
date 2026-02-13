import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  Card,
  Header,
  ScreenContainer,
  Badge,
  Spacer,
} from '../components';

const ProfileScreen: React.FC = () => {
  const route = useRoute<any>();
  const { username } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <Header
          title="Profile"
          subtitle="User information"
          showBackButton={true}
        />

        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <Image
              source={require('../assets/usersprofiles.jpg')}
              style={styles.avatar}
              resizeMode="cover"
            />
            <Text variant="h2" weight="700" style={styles.username}>
              {username}
            </Text>
            <Badge label="Active" variant="success" />
          </View>

          <Spacer height={24} />

          <Card
            title="Account Details"
            description="User information"
          >
            <Spacer height={12} />
            <View style={styles.detailRow}>
              <Text variant="subtitle" weight="600">
                Email:
              </Text>
              <Text variant="body" color="#666666">
                {username}
              </Text>
            </View>

            <Spacer height={12} />

            <View style={styles.detailRow}>
              <Text variant="subtitle" weight="600">
                Status:
              </Text>
              <Text variant="body" color="#34C759">
                Active
              </Text>
            </View>

            <Spacer height={12} />

            <View style={styles.detailRow}>
              <Text variant="subtitle" weight="600">
                Member Since:
              </Text>
              <Text variant="body" color="#666666">
                2024
              </Text>
            </View>
          </Card>
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
  },
  username: {
    marginBottom: 12,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
