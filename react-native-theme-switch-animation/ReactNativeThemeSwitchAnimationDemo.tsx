import * as React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';

export function ReactNativeThemeSwitchAnimationDemo() {
  const [theme, setTheme] = React.useState('light');
  
  return (
      <View
        style={{
          ...styles.container,
          backgroundColor: theme === 'light' ? 'white' : 'black',
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: theme === 'light' ? 'black' : 'white',
            borderRadius: 1.4,
            padding: 50,
          }}
        >
          <Text
            style={{
              color: theme === 'light' ? 'black' : 'white',
            }}
          >
            tests
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="start"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: 2000,
                  startingPoint: {
                    cxRatio: 0.5,
                    cyRatio: 0.5,
                  },
                },
              });
            }}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
