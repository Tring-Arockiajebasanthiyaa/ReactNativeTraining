import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightActionTitle?: string;
  onRightActionPress?: () => void;
  containerStyle?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  rightActionTitle,
  onRightActionPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.header, containerStyle]}>
      <View style={styles.leftSection}>
        {showBackButton && (
          <TouchableOpacity
            onPress={onBackPress}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text variant="h2">←</Text>
          </TouchableOpacity>
        )}
        <View>
          <Text variant="h2" weight="700">
            {title}
          </Text>
          {subtitle && (
            <Text variant="caption" color="#666666">
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {rightActionTitle && (
        <Button
          title={rightActionTitle}
          onPress={onRightActionPress}
          variant="outline"
          size="small"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  backButton: {
    padding: 8,
  },
});

export default Header;
