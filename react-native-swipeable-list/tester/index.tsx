import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer, Page} from './componets';
import ReactNativeSwipeableListDemoDefault1 from './examples/ReactNativeSwipeableListDemoDefault1';
import ReactNativeSwipeableListDemoDefault2 from './examples/ReactNativeSwipeableListDemoDefault2';
import ReactNativeSwipeableListDemoDefault3 from './examples/ReactNativeSwipeableListDemoDefault3';
import ReactNativeSwipeableListDemoDefault4 from './examples/ReactNativeSwipeableListDemoDefault4';
import ReactNativeSwipeableListDemoDefault5 from './examples/ReactNativeSwipeableListDemoDefault5';
const App = () => {
  // renders
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <Page
            name={`EXAMPLE: ReactNativeSwipeableListDemoDefault1 测试data属性使用data/dummyData.ts的Mock数据,标题展示Raphael、Aquila、Geraldine、Beroma...`}>
            <ReactNativeSwipeableListDemoDefault1 />
          </Page>
          <Page
            name={`EXAMPLE: ReactNativeSwipeableListDemoDefault2 测试renderItem属性 自定义renderItem方法渲染竖向长列表,设置每一项的title为红色,subject文字为斜体,下方text文本颜色为绿色`}>
            <ReactNativeSwipeableListDemoDefault2 />
          </Page>
          <Page
            name={`EXAMPLE: ReactNativeSwipeableListDemoDefault3 测试shouldBounceOnMount属性 是否展示横向滑动动画 效果是：当进入页面时，第一行会显示横向滑动的提示动画，提示可以进行横向滑动`}>
            <ReactNativeSwipeableListDemoDefault3 />
          </Page>
          <Page
            name={`EXAMPLE: ReactNativeSwipeableListDemoDefault4 测试maxSwipeDistance属性 最大滑动距离 设置为240(3*80) 横向滑动部分展示三个按钮(Archive、Snoose、Delete)每个按钮宽度80`}>
            <ReactNativeSwipeableListDemoDefault4 />
          </Page>
          <Page
            name={`EXAMPLE: ReactNativeSwipeableListDemoDefault5 测试renderQuickActions属性 自定义renderQuickActions方法渲染横向滑动后展示的部分,渲染三个按钮(Archive、Snoose、Delete),设置三个按钮边框（边框颜色与文字颜色一致）`}>
            <ReactNativeSwipeableListDemoDefault5 />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
