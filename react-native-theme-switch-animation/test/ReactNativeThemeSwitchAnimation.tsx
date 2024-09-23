import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

function GoPage() {
  const navigate1 = useNavigation()

  const onPressFade = () => {
      return navigate1.navigate('Fade')
  }

  const onPressInvertedCircular = () => {
    return navigate1.navigate('InvertedCircular')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Tester style={{ flex: 1 }}>
        <TestSuite name='theme switch animation'>
          <TestCase itShould='render animation' tags={['C_API']}>

            <View style={{ margin: 10 }}>
              <Button title="fade" onPress={onPressFade} ></Button>
            </View>

            <View style={{ margin: 10 }}>
              <Button title="inverted-circular" onPress={onPressInvertedCircular} ></Button>
            </View>

          </TestCase>
        </TestSuite>
      </Tester>
    </View>

  );
}

function Fade() {
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
          title="duration = 1000"
          onPress={() => {
            switchTheme({
              switchThemeFunction: () => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              },
              animationConfig: {
                type: 'fade',
                duration: 1000,
                startingPoint: {
                  cxRatio: 0.5,
                  cyRatio: 0.5,
                },
              },
            });
          }}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="duration = 2000"
          onPress={() => {
            switchTheme({
              switchThemeFunction: () => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              },
              animationConfig: {
                type: 'fade',
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

      <View style={{ marginTop: 10 }}>
        <Button
          title="duration = 3000"
          onPress={() => {
            switchTheme({
              switchThemeFunction: () => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              },
              animationConfig: {
                type: 'fade',
                duration: 3000,
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

interface State {
  KeyboardShown?: number;
}

function InvertedCircular() {
  const [theme, setTheme] = React.useState('light');
  
  const [state, setState] = useState({
    KeyboardShown: 500,
  })
  
  return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: theme === 'light' ? 'white' : 'black',
        }}
      >
        <View style={{ margin: 10 }}><Button title='duration = 1000' onPress={() =>{ state.KeyboardShown = 1000 }}></Button></View>
        <View style={{ marginBottom: 10 }}><Button title='duration = 2000' onPress={() =>{ state.KeyboardShown = 2000 }}></Button></View>
        <View style={{ marginBottom: 10 }}><Button title='duration = 3000' onPress={() =>{ state.KeyboardShown = 3000 }}></Button></View>
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
            title="cx = 300, cy = 300"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cx: 300,
                    cy: 300,
                  },
                },
              });
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="cx = 200, cy = 400"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cx: 200,
                    cy: 400,
                  },
                },
              });
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="cx = 100, cy = 500"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cx: 100,
                    cy: 500,
                  },
                },
              });
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="cxRatio = 0.2, cyRatio = 0.3"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cxRatio: 0.2,
                    cyRatio: 0.3,
                  },
                },
              });
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="cxRatio = 0.5, cyRatio = 0.5"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cxRatio: 0.5,
                    cyRatio: 0.5,
                  },
                },
              });
            }}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Button
            title="cxRatio = 0.7, cyRatio = 0.8"
            onPress={() => {
              switchTheme({
                switchThemeFunction: () => {
                  setTheme(theme === 'light' ? 'dark' : 'light');
                },
                animationConfig: {
                  type: 'inverted-circular',
                  duration: state.KeyboardShown,
                  startingPoint: {
                    cxRatio: 0.7,
                    cyRatio: 0.8,
                  },
                },
              });
            }}
          />
        </View>
      
      </View>
  );
}

const HomeStack = createStackNavigator();

export function ReactNativeThemeSwitchAnimation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack.Navigator >
            <HomeStack.Screen name="GoPage" component={GoPage} />
            <HomeStack.Screen name="Fade" component={Fade} />
            <HomeStack.Screen name="InvertedCircular" component={InvertedCircular} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
