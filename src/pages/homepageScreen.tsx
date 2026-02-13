import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Input,
  Button,
  Spacer,
  Header,
  ScreenContainer,
} from '../components';

interface HomeScreenProps {
  username: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ username }) => {
  const [name, setName] = useState('');
  const navigation = useNavigation<any>();

  const handleNavigateToDetails = () => {
    if (name.trim()) {
      navigation.navigate('Details', { name });
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <Header
          title={`Welcome, ${username}`}
          subtitle="Check user details"
        />

        <View style={styles.container}>
          <Text variant="h2" weight="700" style={styles.title}>
            Find User Details
          </Text>

          <Spacer height={8} />

          <Text variant="body" color="#666666" style={styles.description}>
            Enter a name below to view detailed information
          </Text>

          <Spacer height={24} />

          <Input
            placeholder="Enter a name..."
            value={name}
            onChangeText={setName}
          />

          <Spacer height={16} />

          <Button
            title="View Details"
            onPress={handleNavigateToDetails}
            variant="primary"
            size="large"
            disabled={!name.trim()}
          />
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
  },
});
