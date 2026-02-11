import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  style?: ViewStyle;
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = '#EEEEEE',
  thickness = 1,
  style,
}) => {
  return (
    <View
      style={[
        styles.divider,
        orientation === 'horizontal'
          ? { height: thickness }
          : { width: thickness },
        { backgroundColor: color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
