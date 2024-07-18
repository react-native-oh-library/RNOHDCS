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
      <StatusBar />
      <SafeAreaView style={{backgroundColor: '#222', flex: 1}}>
        {DEV_MODE ? (
          <GestureHandlerRootView style={{flex: 1}}>
            <Tester style={{flex: 1}} filter={{tags: ['dev']}}>
              <NewApiTest />
              <OldApiTest />
              <SharedAPITest />
            </Tester>
          </GestureHandlerRootView>
        ) : (
          <>
            <Button
              title={`toggle rootViewMode (current: ${rootViewMode})`}
              onPress={() => {
                setRootViewMode(prev =>
                  prev === 'Component' ? 'HOC' : 'Component',
                );
              }}
            />
            {rootViewMode === 'Component' && (
              <GestureHandlerRootView style={{flex: 1}}>
                <Tests />
              </GestureHandlerRootView>
            )}
            {rootViewMode === 'HOC' && <WrappedTests />}
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

function Tests() {
  const drawerLayoutRef = useRef<DrawerLayout>(null);
  const [drawerState, setDrawerState] = useState<
    'OPEN' | 'CLOSED' | 'CHANGING' | 'UNINITIALIZED'
  >('UNINITIALIZED');

  const onRenderNavigationView = useCallback(() => {
    return (
      <View>
        <Text>DrawerLayout isn't super responsive on Android</Text>
      </View>
    );
  }, []);

  return (
    <>
      <Button
        title={`Toggle Drawer (${drawerState})`}
        onPress={() => {
          if (drawerState === 'UNINITIALIZED') {
            setDrawerState('CLOSED');
          } else {
            const drawer = drawerLayoutRef.current;
            if (drawer) {
              drawer.state.drawerOpened
                ? drawer.closeDrawer()
                : drawer.openDrawer();
            }
          }
        }}
      />
      <Tester style={{flex: 1}}>
        {drawerState !== 'UNINITIALIZED' && (
          <DrawerLayout
            ref={drawerLayoutRef}
            useNativeAnimations
            drawerWidth={200}
            drawerPosition={'left'}
            drawerType="slide"
            drawerBackgroundColor="#ddd"
            renderNavigationView={onRenderNavigationView}
            onDrawerOpen={() => {
              setDrawerState('OPEN');
            }}
            onDrawerSlide={() => {
              setDrawerState('CHANGING');
            }}
            onDrawerClose={() => {
              setDrawerState('CLOSED');
            }}>
            <ScrollView style={{width: '100%', flex: 1}}>
              <NewApiTest />
              <OldApiTest />
              <SharedAPITest />
            </ScrollView>
          </DrawerLayout>
        )}
        {drawerState === 'UNINITIALIZED' && (
          <ScrollView style={{width: '100%', flex: 1}}>
            <NewApiTest />
            <OldApiTest />
            <SharedAPITest />
          </ScrollView>
        )}
      </Tester>
    </>
  );
}

const WrappedTests = gestureHandlerRootHOC(Tests);

export default App;
