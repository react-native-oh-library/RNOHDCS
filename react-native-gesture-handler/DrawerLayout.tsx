/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef, useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { Tester } from '@rnoh/testerino';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  gestureHandlerRootHOC,
  DrawerType
} from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { NewApiTest, OldApiTest, SharedAPITest } from './src';

type RootViewMode = 'Component' | 'HOC';

const IS_HIDE: boolean = false;

function App({ }): JSX.Element | null {
  const [rootViewMode, setRootViewMode] = useState<RootViewMode>('Component');

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: '#222', flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Tests />
        </GestureHandlerRootView>
      </SafeAreaView>
    </View>
  );
}

function Tests() {
  const drawerLayoutRef = useRef<DrawerLayout>(null);
  const [drawerState, setDrawerState] = useState<
    'OPEN' | 'CLOSED' | 'CHANGING' | 'UNINITIALIZED'
  >('UNINITIALIZED');
  const [isHide, setIsHide] = useState(false);
  const [drawerType, setDrawerType] = useState<
    'back' | 'front' | 'slide'
  >('back');
  const [statusBarAnimation, setStatusBarAnimation] = useState<
    'fade' | 'none' | 'slide'
  >('fade');
  const [overlayColor, setOverlayColor] = useState('#00000000');
  const [edgeWidth, setEdgeWidth] = useState(20);

  const onRenderNavigationView = useCallback(() => {
    return (
      <View>
        <Text>我在抽屉内容里面</Text>
      </View>
    );
  }, []);

  const onRenderChildren = useCallback(() => {
    return (
      <ScrollView style={{ width: '100%', flex: 1, padding: 14, backgroundColor: 'white' }}>

        <View style={{ flex: 1 }}>
          <View style={{ height: 50 }}>
            <Button title="设置 drawerType('front')" onPress={() => { setDrawerType('front') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 drawerType('slide')" onPress={() => { setDrawerType('slide') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 overlayColor('red')" onPress={() => { setOverlayColor('red') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
          <Button title="设置 statusBarAnimation('slide')" onPress={() => { setStatusBarAnimation('slide') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 statusBarAnimation('fade')" onPress={() => { setStatusBarAnimation('fade') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 statusBarAnimation('none')" onPress={() => { setStatusBarAnimation('none') }}></Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 hideStatusBar('true or false')" onPress={() => {
              if (this.IS_HIDE) {
                this.IS_HIDE = false;
                setIsHide(false);
              } else {
                setIsHide(true);
                this.IS_HIDE = true;
              }
              }}>
            </Button>
          </View>
          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="设置 edgeWidth('300')" onPress={() => { setEdgeWidth(300); }}></Button>
          </View>

          <View style={{ height: 50, marginTop: 12 }}>
            <Button title="侧边栏按钮开关（也可手动拉开菜单）" onPress={() => {
              const drawer = drawerLayoutRef.current;
              if (drawer) {
                drawer.state.drawerOpened
                  ? drawer.closeDrawer()
                  : drawer.openDrawer();
              }
            }}></Button>
          </View>

        </View>
      </ScrollView>
    );
  }, []);

  return (
    <Tester style={{ flex: 1 }}>
      <DrawerLayout
        ref={drawerLayoutRef}
        useNativeAnimations
        drawerWidth={200}
        drawerPosition={'left'}
        drawerType={drawerType}
        edgeWidth={edgeWidth}
        hideStatusBar={isHide}
        statusBarAnimation={statusBarAnimation}
        overlayColor={overlayColor}
        onDrawerStateChanged={() => {
          console.log("DrawerLayout call onDrawerStateChanged");
        }}

        drawerBackgroundColor="#ddd"
        renderNavigationView={onRenderNavigationView}
        children={onRenderChildren}
        onDrawerOpen={() => {
          setDrawerState('OPEN');
          console.log("DrawerLayout call onDrawerOpen");
        }}
        onDrawerSlide={() => {
          setDrawerState('CHANGING');
          console.log("DrawerLayout call onDrawerSlide");
        }}
        onDrawerClose={() => {
          setDrawerState('CLOSED');
          console.log("DrawerLayout call onDrawerClose");
        }}>

      </DrawerLayout>
    </Tester>
  );
}

const WrappedTests = gestureHandlerRootHOC(Tests);

export default App;