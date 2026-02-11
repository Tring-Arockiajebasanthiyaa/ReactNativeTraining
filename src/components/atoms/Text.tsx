import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  TextStyle,
} from 'react-native';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'subtitle' | 'caption';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  weight?: '400' | '500' | '600' | '700';
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  numberOfLines?: number;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  weight = '400',
  color,
  align = 'left',
  style,
  numberOfLines,
}) => {
  return (
    <RNText
      style={[
        styles.text,
        styles[variant],
        { fontWeight: weight, color: color || styles[variant].color, textAlign: align },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333333',
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    lineHeight: 16,
  },
});

export default Text;
