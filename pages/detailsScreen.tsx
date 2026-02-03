import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, this is {name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
