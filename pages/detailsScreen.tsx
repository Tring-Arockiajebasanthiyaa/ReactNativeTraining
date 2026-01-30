import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface DetailsScreenProps {
  name: string;
  onBack: () => void;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ name, onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hi, this is {name}
      </Text>

      <Button title="Go Back" onPress={onBack} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
});
