import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SpacerProps {
  width?: number;
  height?: number;
  style?: ViewStyle;
}

const Spacer: React.FC<SpacerProps> = ({ width, height, style }) => {
  return (
    <View
      style={[
        {
          width: width || 0,
          height: height || 0,
        },
        style,
      ]}
    />
  );
};

export default Spacer;
