import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ScrollView,
} from 'react-native';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';

interface FooterProps {
  copyright?: string;
  showLinks?: boolean;
  onAboutPress?: () => void;
  onPrivacyPress?: () => void;
  onContactPress?: () => void;
  containerStyle?: ViewStyle;
}

const Footer: React.FC<FooterProps> = ({
  copyright = '© 2026 MyApp. All rights reserved.',
  showLinks = true,
  onAboutPress,
  onPrivacyPress,
  onContactPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.footer, containerStyle]}>
      <Divider color="#EEEEEE" thickness={1} />

      {showLinks && (
        <>
          <View style={styles.linksContainer}>
            {onAboutPress && (
              <Button
                title="About"
                onPress={onAboutPress}
                variant="secondary"
                size="small"
                style={styles.linkButton}
              />
            )}
            {onPrivacyPress && (
              <Button
                title="Privacy"
                onPress={onPrivacyPress}
                variant="secondary"
                size="small"
                style={styles.linkButton}
              />
            )}
            {onContactPress && (
              <Button
                title="Contact"
                onPress={onContactPress}
                variant="secondary"
                size="small"
                style={styles.linkButton}
              />
            )}
          </View>
        </>
      )}

      <Text variant="caption" color="#999999" align="center" style={styles.copyright}>
        {copyright}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 16,
    flexWrap: 'wrap',
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  copyright: {
    marginTop: 8,
  },
});

export default Footer;
