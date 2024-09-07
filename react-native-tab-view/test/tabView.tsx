import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from "react-native-tab-view";



export function NewTabViewExample() {
  // 选项卡视图的状态,
  type State = NavigationState<{
    key: string,
    title: string,
  }>;

  // 第一个选项卡的页面
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <Text
        style={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
        }}
      >
        {swipeStr}
      </Text>
    </View>
  );

  // 第二个选项卡的页面
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
      <Text
        style={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
        }}
      >
        {swipeStr}
      </Text>
    </View>
  );

  // 第三个选项卡的页面
  const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#38e0f2' }}>
      <Text
        style={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
        }}
      >
        {swipeStr}
      </Text>
    </View>
  );

  const renderLazyPlaceholder = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );

  // 用于 renderScene 道具的函数, 接受route.key 映射到 React 组件的对象
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  });

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled={scrollEnabled}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
      getLabelText={({ route }) =>  route.title}
      getAccessible={({route}) =>  true}
      getAccessibilityLabel={({route}) => route.title}
      renderIcon={({ route }) =>  route.title}
      // renderLabel={({ route }) =>  route.title}
      onTabPress={onTabPress}
      onTabLongPress={onTabLongPress}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      pressOpacity={pressOpacity}
      indicatorContainerStyle={{backgroundColor:'white'}}
      contentContainerStyle={{backgroundColor:'white'}}
      gap={gap}
      pressColor={'#ff0000'}
      bounces={true}
    >
    </TabBar>
  );

  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ]);

  const onSwipeStart = () => {
    setSwipeStr('滑动开始')
  };

  const onSwipeEnd = () => {
    setSwipeStr('滑动结束')
  };

  const onTabPress = () => {
    setSwipeStr('按钮按下')
  }

  const onTabLongPress = () => {
    setSwipeStr('按钮长按')
  }

  // 初始布局
  const initialLayout = { width: 200 }

  const [index, setIndex] = React.useState(0);
  const [showRenderTabBar, setShowRenderTabBar] = React.useState(true);
  const [showTabBar, setShowTabBar] = React.useState('top');
  const [showLazy, setshowLazy] = React.useState(false);
  const [preload, setPreload] = React.useState(0);
  const [boardDismiss, setBoardDismiss] = React.useState('auto');
  const [showSwipeEnabled, setShowSwipeEnabled] = React.useState(true);
  const [animation, setAnimation] = React.useState(true);
  const [swipeStr, setSwipeStr] = React.useState('');
  const [initial, setInitial] = React.useState(true);
  const [overScroll, setOverScroll] = React.useState('');
  const [sceneContainer, setSceneContainer] = React.useState(350);
  const [activeColor, setActiveColor] = React.useState('blue');
  const [inactiveColor, setInactiveColor] = React.useState('gray');
  const [pressOpacity, setPressOpacity] = React.useState(0.5);
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const [gap, setGap] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Tester>
        <TestSuite name={'TabViewTest'}>
          <TestCase itShould={'TabView renderScene'}>
            <View style={{
              padding: 0,
              margin: 0,
              width: '100%',
              height: 200,
            }}>
              <TabView
                style={{
                  flex: 1,
                  width: 350,
                  height: 100,
                  backgroundColor: "#6D8585",
                }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={showRenderTabBar ? renderTabBar : undefined}
                tabBarPosition={showTabBar === 'top' ? 'top' : 'bottom'}
                lazy={showLazy}
                lazyPreloadDistance={preload}
                renderLazyPlaceholder={showLazy == true ? renderLazyPlaceholder : undefined}
                keyboardDismissMode={boardDismiss == 'auto' ? 'auto' : (boardDismiss == 'none' ? 'none' : 'on-drag')}
                swipeEnabled={showSwipeEnabled}
                animationEnabled={animation}
                onSwipeStart={onSwipeStart}
                onSwipeEnd={onSwipeEnd}
                initialLayout={initial ? initialLayout : undefined}
                overScrollMode={overScroll == 'auto' ? 'auto' : (overScroll == 'never' ? 'never' : 'always')}
                sceneContainerStyle={{ width: sceneContainer }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>

      <ScrollView style={{ height: 2000 }} bounces={false}>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>renderTabBar:{showRenderTabBar}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowRenderTabBar(true); }} >设置renderTabBar</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowRenderTabBar(false); }} >关闭renderTabBar</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>tabBarPosition:{showTabBar}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowTabBar('top'); }} >top</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowTabBar('bottom'); }} >bottom</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>lazy:{showLazy.toString()}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setshowLazy(true); }} >true</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setshowLazy(false); }} >false</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>lazyPreloadDistance:{preload}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setPreload(0); }} >0</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPreload(1); }} >1</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>keyboardDismissMode:{boardDismiss}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setBoardDismiss('auto'); }} >auto</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setBoardDismiss('none'); }} >none</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setBoardDismiss('on-drag'); }} >on-drag</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>swipeEnabled:{showSwipeEnabled.toString()}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowSwipeEnabled(true); }} >true</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowSwipeEnabled(false); }} >false</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>animationEnabled:{animation.toString()}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setAnimation(true); }} >true</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setAnimation(false); }} >false</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>initialLayout:{initial.toString()}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setInitial(true); }} >true</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setInitial(false); }} >false</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>overScrollMode:{overScroll}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setOverScroll('auto'); }} >auto</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setOverScroll('never'); }} >never</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setOverScroll('always'); }} >always</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>sceneContainerStyle:{sceneContainer}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setSceneContainer(100); }} >100</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setSceneContainer(200); }} >200</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setSceneContainer(350); }} >350</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>activeColor:{activeColor}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setActiveColor('red'); }} >red</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setActiveColor('purple'); }} >purple</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setActiveColor('orange'); }} >orange</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>inactiveColor:{inactiveColor}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setInactiveColor('pink'); }} >pink</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setInactiveColor('white'); }} >white</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setInactiveColor('skyblue'); }} >skyblue</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>pressOpacity:{pressOpacity}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setPressOpacity(0); }} >0</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPressOpacity(0.5); }} >0.5</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPressOpacity(1); }} >1</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>scrollEnabled:{scrollEnabled.toString()}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setScrollEnabled(true); }} >true</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setScrollEnabled(false); }} >false</Text>
        </View>

        <View style={styles.flex_row} >
          <Text style={{ flex: 0.25 }}>gap:{gap}</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setGap(0); }} >0</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setGap(10); }} >10</Text>
          <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setGap(20); }} >20</Text>
        </View>


      </ScrollView>
    </View>



  );
}


const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#1af0b7",
    height: 70,
    width: 350,
  },
  indicator: {
    backgroundColor: "#ffeb3b",
    width: 175,
    height: 5,
  },
  label: {
    fontWeight: "400",
    fontSize: 20,
    width: 100,
    height: 50,
    color: "black",
  },
  tabStyle: {
    height: 65,
    width: 175,
  },
  sceneContainer: {
    width: 150,
    height: 150,
    color: 'blue',
    backgroundColor: 'blue',
  },
  pager: {
    width: 150,
    height: 150,
    backgroundColor: 'orange',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  flex_row: {
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
    padding: 0,
    marginTop: 2,
  },
  scenc: {
    backgroundColor: 'yellow',
  }
});
