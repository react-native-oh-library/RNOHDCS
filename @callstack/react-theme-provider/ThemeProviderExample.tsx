import React, { useState } from 'react';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ThemedComponent from './ThemedComponent';
import ThemedClassComponent from './WithTheme';
import { ThemeProvider, themes } from './Themes';

const RNThemeProvider = () => {
  const [theme, setTheme] = useState(themes.normal);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.normal ? themes.crazy : themes.normal
    );
  };

  const ThemedView = () => {
    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundColor, borderColor: theme.primaryColor }]}>
        <Text style={{ fontSize: theme.textSize, color: theme.textColor }}>Hello, Themed World!</Text>
      </View>
    );
  };


  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView>
        <TestSuite name="RNThemeProvider">
          <ThemeProvider theme={theme}>
            <TestCase itShould="Switch the theme" tags={['C_API']}>
              <TouchableOpacity style={styles.button} onPress={toggleTheme}>
                <Text>Toggle Theme</Text>
              </TouchableOpacity>
            </TestCase>
            <TestCase itShould="use local component" tags={['C_API']}>
              <ThemedView />
            </TestCase>
            <TestCase itShould="useTheme" tags={['C_API']}>
              <ThemedComponent />
            </TestCase>
            <TestCase itShould="withTheme" tags={['C_API']}>
              <ThemedClassComponent />
            </TestCase>
          </ThemeProvider>
        </TestSuite >
      </ScrollView>
    </Tester >
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
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  }
});

export default RNThemeProvider;