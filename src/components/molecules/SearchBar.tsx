import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

interface SearchBarProps {
  onSearch: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  containerStyle,
}) => {
  const [searchText, setSearchText] = React.useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      onSearch(searchText);
    }
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Input
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        containerStyle={styles.input}
      />
      <View style={styles.buttonGroup}>
        <Button
          title="Search"
          onPress={handleSearch}
          variant="primary"
          size="small"
          style={styles.button}
        />
        <Button
          title="Clear"
          onPress={handleClear}
          variant="secondary"
          size="small"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  input: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default SearchBar;
