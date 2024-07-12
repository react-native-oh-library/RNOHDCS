import React from 'react';
import { useTheme } from './Themes';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const ThemedComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor, borderColor: theme.primaryColor }]}>
      <Text style={{ fontSize: theme.textSize, color: theme.textColor }}>This component changes with the useTheme!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 25,
    borderRadius: 5,
    borderWidth: 3,
  },
});

export default ThemedComponent;