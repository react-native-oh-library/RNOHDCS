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

  // 第四个选项卡的页面
  const FourthRoute = () => (
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
  const renderLazyPlaceholderNone = () => (
    <View style={{ flex: 1, backgroundColor: '#38e0f2' }}>
      <Text
        style={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
        }}
      >
      </Text>
    </View>
  );

  // 用于 renderScene 道具的函数, 接受route.key 映射到 React 组件的对象
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute
  });

  const getLabel = (route: any) => {
    return route.title
  }

  const getAccessible = (route: any) => {
    if (route.title == 'First') {
      return true
    } else {
      return false
    }
  }

  const renderIcon = (route: any) => {
    if (route.title == 'First') {
      return <Text>First</Text>
    }
  }

  const renderTabBarItem = (route: any) => {
    return <Text>{route.title}</Text>
  }

  const renderIndicatorFn = (route: any) => {
    styles.indicator.backgroundColor = 'blue'
    return <Text>{route.title}</Text>
  }


  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={scrollEnabled}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
      getLabelText={({ route }) => getLabel(route)}
      getAccessible={({ route }) => getAccessible(route)}
      getAccessibilityLabel={({ route }) => getLabel(route)}
      renderIcon={icon ? ({ route }) => renderIcon(route) : undefined}
      renderLabel={label ? ({ route }) => renderIcon(route) : undefined}
      renderTabBarItem={tabBarItem ? ({ route }) => renderTabBarItem(route) : undefined}
      renderIndicator={indicator ? (route) => renderIndicatorFn(route) : undefined}
      renderBadge={({ route }) => getLabel(route)}
      onTabPress={onTabPress}
      onTabLongPress={onTabLongPress}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      pressOpacity={pressOpacity}
      indicatorContainerStyle={{ backgroundColor: 'white' }}
      contentContainerStyle={{ backgroundColor: 'white' }}
      gap={gap}
    >
    </TabBar>
  );

  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
    { key: "fourth", title: "Fourth" },
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
  const initialLayout = { width: 200, height: 500 }

  const [index, setIndex] = React.useState(0);
  const [showRenderTabBar, setShowRenderTabBar] = React.useState(true);
  const [showTabBar, setShowTabBar] = React.useState('top');
  const [showLazy, setshowLazy] = React.useState(true);
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
  const [icon, setIcon] = React.useState(false);
  const [label, setLabel] = React.useState(false);
  const [tabBarItem, setTabBarItem] = React.useState(false);
  const [indicator, setIndicator] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Tester>
        <TestSuite name={'TabViewTest'}>
          <TestCase itShould={'TabView show'}>
            <View style={{
              padding: 0,
              margin: 0,
              width: 350,
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
                renderLazyPlaceholder={showLazy == true ? renderLazyPlaceholder : renderLazyPlaceholderNone}
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

      <ScrollView bounces={false}>
        <Tester>
          <TestSuite name={'TabViewTest'}>
            <TestCase itShould={'TabView renderTabBar'}>
              <View style={styles.flex_row} >
                <Text style={{ flex: 0.25 }}>renderTabBar:{showRenderTabBar}</Text>
                <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowRenderTabBar(true); }} >设置renderTabBar</Text>
                <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowRenderTabBar(false); }} >关闭renderTabBar</Text>
              </View>
            </TestCase>
          </TestSuite>

          <TestCase itShould={'TabView tabBarPosition'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>tabBarPosition:{showTabBar}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowTabBar('top'); }} >top</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowTabBar('bottom'); }} >bottom</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView lazy'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>lazy:{showLazy.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setshowLazy(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setshowLazy(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView lazyPreloadDistance'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>lazyPreloadDistance:{preload}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setPreload(0); }} >0</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPreload(1); }} >1</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView keyboardDismissMode'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>keyboardDismissMode:{boardDismiss}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setBoardDismiss('auto'); }} >auto</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setBoardDismiss('none'); }} >none</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setBoardDismiss('on-drag'); }} >on-drag</Text>
              <TextInput style={styles.input}></TextInput>
            </View>
          </TestCase>

          <TestCase itShould={'TabView swipeEnabled'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>swipeEnabled:{showSwipeEnabled.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setShowSwipeEnabled(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setShowSwipeEnabled(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView animationEnabled'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>animationEnabled:{animation.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setAnimation(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setAnimation(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView sceneContainerStyle'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>sceneContainerStyle:{sceneContainer}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setSceneContainer(100); }} >100</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setSceneContainer(200); }} >200</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setSceneContainer(350); }} >350</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView activeColor'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>activeColor:{activeColor}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setActiveColor('red'); }} >red</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setActiveColor('purple'); }} >purple</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setActiveColor('orange'); }} >orange</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView inactiveColor'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>inactiveColor:{inactiveColor}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setInactiveColor('pink'); }} >pink</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setInactiveColor('white'); }} >white</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setInactiveColor('skyblue'); }} >skyblue</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView pressOpacity'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>pressOpacity:{pressOpacity}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setPressOpacity(0); }} >0</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPressOpacity(0.5); }} >0.5</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setPressOpacity(1); }} >1</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView scrollEnabled'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>scrollEnabled:{scrollEnabled.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setScrollEnabled(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setScrollEnabled(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView gap'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>gap:{gap}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setGap(0); }} >0</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setGap(10); }} >10</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setGap(20); }} >20</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView onSwipeStart'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25 }}  >onSwipeStart</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView onSwipeEnd'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25 }}  >onSwipeEnd</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView onTabPress'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25 }}  >onTabPress</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView onTabLongPress'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25 }}  >onTabLongPress</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView getLabelText'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} >{getLabel(routes[index])}</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView getAccessible'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }}>{getAccessible(routes[index]).toString()}</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView getAccessibilityLabel'}>
            <View style={styles.flex_row} >
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }}>{getLabel(routes[index])}</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView renderIcon'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>renderIcon:{icon.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setIcon(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setIcon(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView renderLabel'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>renderLabel:{label.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setLabel(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setLabel(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView renderTabBarItem'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>renderTabBarItem:{tabBarItem.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setTabBarItem(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setTabBarItem(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView renderIndicator'}>
            <View style={styles.flex_row} >
              <Text style={{ flex: 0.25 }}>renderIndicator:{indicator.toString()}</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25 }} onPress={() => { setIndicator(true); }} >true</Text>
              <Text style={{ backgroundColor: "orange", flex: 0.25, marginLeft: 10 }} onPress={() => { setIndicator(false); }} >false</Text>
            </View>
          </TestCase>

          <TestCase itShould={'TabView renderBadge'}>
            <View style={styles.flex_row} >
              <Text >{getLabel(routes[index])}</Text>
            </View>
          </TestCase>

        </Tester>
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
    backgroundColor: "pink",
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
