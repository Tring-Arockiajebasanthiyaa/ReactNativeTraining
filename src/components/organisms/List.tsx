import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Text from '../atoms/Text';
import Card from '../molecules/Card';

export interface ListItem {
  id: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  onPress?: () => void;
}

interface ListProps {
  items: ListItem[];
  loading?: boolean;
  emptyMessage?: string;
  containerStyle?: ViewStyle;
  onRefresh?: () => void;
}

const List: React.FC<ListProps> = ({
  items,
  loading = false,
  emptyMessage = 'No items found',
  containerStyle,
  onRefresh,
}) => {
  if (loading && items.length === 0) {
    return (
      <View style={[styles.centerContainer, containerStyle]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (items.length === 0) {
    return (
      <View style={[styles.centerContainer, containerStyle]}>
        <Text variant="body" color="#999999">
          {emptyMessage}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          onPress={item.onPress}
        />
      )}
      scrollEnabled={false}
      onRefresh={onRefresh}
      refreshing={loading}
      style={[styles.list, containerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default List;
