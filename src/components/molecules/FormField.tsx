import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  containerStyle?: ViewStyle;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  required = false,
  multiline = false,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text variant="subtitle" weight="600">
          {label}
        </Text>
        {required && <Text color="#FF3B30">*</Text>}
      </View>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
      />
      {error && (
        <Text variant="caption" color="#FF3B30" style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  errorText: {
    marginTop: 4,
  },
});

export default FormField;
