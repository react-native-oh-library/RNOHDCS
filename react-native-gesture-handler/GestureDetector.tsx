/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {Tester} from '@rnoh/testerino';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {NewApiTest, OldApiTest, SharedAPITest} from './src';

type RootViewMode = 'Component' | 'HOC';

const DEV_MODE = false;

function App({}): JSX.Element | null {
  const [rootViewMode, setRootViewMode] = useState<RootViewMode>('Component');

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
    <>
      <Tester style={{flex: 1}}>
          <ScrollView style={{width: '100%', flex: 1}}>
            <NewApiTest />
          </ScrollView>
      </Tester>
    </>
  );
}

export default App;