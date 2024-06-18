import React from 'react';
import { withTheme } from './Themes';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  theme: {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    secondaryColor: string;
    textSize: number;
  };
};

class ThemedClassComponent extends React.Component<Props> {
  render() {
    const { theme } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundColor, borderColor: theme.primaryColor }]}>
        <Text style={{ fontSize: theme.textSize, color: theme.textColor }}>This is a class component with the withtheme!</Text>
      </View>
    );
  }
}

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

export default withTheme(ThemedClassComponent);