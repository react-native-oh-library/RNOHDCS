/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import {Tester,TestCase, TestSuite} from '@rnoh/testerino';
import {
  GestureHandlerRootView,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {PALETTE} from './src/constants';

function App({}): JSX.Element | null {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#222', flex: 1}}>
          <GestureHandlerRootView style={{flex: 1}}>
            <Tests />
          </GestureHandlerRootView>
      </SafeAreaView>
    </View>
  );
}

function Tests() {

  return (
      <Tester style={{flex: 1}}>
        <ScrollView style={{width: '100%', flex: 1}}>
          <TestCase
            itShould="TouchableHighlight,change color to red when pressing the button (TouchableHighlight)"
            initialState={false}
            arrange={({setState}) => {
              return (
                <TouchableHighlight
                  style={{backgroundColor: PALETTE.DARK_BLUE, paddingVertical: 16}}
                  underlayColor={PALETTE.DARK_RED}
                  onPress={() => {
                    setState(true);
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                  PRESS ME
                  </Text>
                </TouchableHighlight>
              );
            }}
            assert={({expect, state}) => {
              expect(state).to.be.true;
            }}
          />

          <TestCase
            itShould="TouchableNativeFeedback,show ripple effect on press (Android)"
            skip={Platform.OS === 'android' ? false : 'android component'}
            initialState={false}
            arrange={({setState}) => {
              return (
                <>
                  <TouchableNativeFeedback
                    style={{
                      backgroundColor: PALETTE.DARK_BLUE,
                      paddingVertical: 16,
                    }}
                    onPress={() => {
                      setState(true);
                    }}>
                    <Text style={{color: 'red', textAlign: 'center'}}>
                      PRESS ME
                      </Text>
                      </TouchableNativeFeedback>
                    </>
                  );
                }}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
    
              <TestCase
                itShould="support TouchableOpacity"
                initialState={false}
                arrange={({setState}) => {
                  return (
                    <View style={styles.testCaseContainer}>
                      <TouchableOpacity
                        style={{
                          width: 128,
                          height: 128,
                          backgroundColor: PALETTE.DARK_BLUE,
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          setState(true);
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 12,
                            color: 'white',
                          }}>
                          PRESS ME
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
    
              <TestCase
                itShould="support TouchableWithoutFeedback"
                initialState={false}
                arrange={({setState}) => {
                  return (
                    <View style={styles.testCaseContainer}>
                      <TouchableWithoutFeedback
                        style={{
                          width: 128,
                          height: 128,
                          backgroundColor: PALETTE.DARK_BLUE,
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          setState(true);
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'white',
                            textAlign: 'center',
                          }}>
                          PRESS ME
                        </Text>
                      </TouchableWithoutFeedback>
                    </View>
                  );
                }}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
            </ScrollView>
          </Tester>
      );
    }
    
    const styles = StyleSheet.create({
      testCaseContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
    });
    
    export default App;