import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Text,
  Button,
  Card,
  Header,
  ScreenContainer,
  Spacer,
} from '../components';

const DetailsScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { name } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenContainer scrollable>
        <Header
          title="User Details"
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.container}>
          <Card
            title={`User: ${name}`}
            description="Detailed information"
          >
            <Spacer height={16} />

            <View style={styles.detailRow}>
              <Text variant="subtitle" weight="600">
                Name:
              </Text>
              <Text variant="body" color="#666666">
                {name}
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
                Account Type:
              </Text>
              <Text variant="body" color="#666666">
                Premium
              </Text>
            </View>
          </Card>

          <Spacer height={24} />

          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
            variant="outline"
            size="large"
          />
        </View>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
