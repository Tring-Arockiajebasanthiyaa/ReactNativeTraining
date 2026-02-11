import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Text from '../atoms/Text';
import Divider from '../atoms/Divider';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  containerStyle?: ViewStyle;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  containerStyle,
}) => {
  return (
    <View style={[styles.badge, styles[variant], containerStyle]}>
      <Text
        variant="caption"
        weight="600"
        color={getTextColor(variant)}
      >
        {label}
      </Text>
    </View>
  );
};

const getTextColor = (variant: string): string => {
  const colors: { [key: string]: string } = {
    primary: '#FFFFFF',
    secondary: '#333333',
    success: '#FFFFFF',
    danger: '#FFFFFF',
  };
  return colors[variant] || '#FFFFFF';
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#E8E8E8',
  },
  success: {
    backgroundColor: '#34C759',
  },
  danger: {
    backgroundColor: '#FF3B30',
  },
});

export default Badge;
