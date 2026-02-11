import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Text from '../atoms/Text';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  onPress,
  containerStyle,
  children,
}) => {
  const content = (
    <View style={[styles.card, containerStyle]}>
      {image && <Image source={image} style={styles.image} />}
      <View style={styles.content}>
        <Text variant="h3" weight="600">
          {title}
        </Text>
        {subtitle && (
          <Text variant="subtitle" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
        {description && (
          <Text variant="body" color="#666666" style={styles.description}>
            {description}
          </Text>
        )}
        {children}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  description: {
    marginTop: 8,
  },
});

export default Card;
