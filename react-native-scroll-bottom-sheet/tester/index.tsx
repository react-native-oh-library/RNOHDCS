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
import ScrollBottomSheetDemoDefault1 from './examples/ReactNativeScrollBottomDemoDefault1';
import ScrollBottomSheetDemoDefault2 from './examples/ReactNativeScrollBottomDemoDefault2';
import ScrollBottomSheetDemoDefault3 from './examples/ReactNativeScrollBottomDemoDefault3';
import ScrollBottomSheetDemoDefault4 from './examples/ReactNativeScrollBottomDemoDefault4';
import ScrollBottomSheetDemoDefault5 from './examples/ReactNativeScrollBottomDemoDefault5';
import ScrollBottomSheetDemoDefault6 from './examples/ReactNativeScrollBottomDemoDefault6';
import ScrollBottomSheetDemoDefault7 from './examples/ReactNativeScrollBottomDemoDefault7';
import ScrollBottomSheetDemoDefault8 from './examples/ReactNativeScrollBottomDemoDefault8';
import ScrollBottomSheetDemoDefault9 from './examples/ReactNativeScrollBottomDemoDefault9';
import ScrollBottomSheetDemoDefault10 from './examples/ReactNativeScrollBottomDemoDefault10';
import ScrollBottomSheetDemoDefault11 from './examples/ReactNativeScrollBottomDemoDefault11';
import ScrollBottomSheetDemoDefault12 from './examples/ReactNativeScrollBottomDemoDefault12';
import ScrollBottomSheetDemoDefault13 from './examples/ReactNativeScrollBottomDemoDefault13';
import ScrollBottomSheetDemoDefault14 from './examples/ReactNativeScrollBottomDemoDefault14';
import ScrollBottomSheetDemoDefault15 from './examples/ReactNativeScrollBottomDemoDefault15';
import ScrollBottomSheetDemoDefault16 from './examples/ReactNativeScrollBottomDemoDefault16';
import ScrollBottomSheetDemoDefault17 from './examples/ReactNativeScrollBottomDemoDefault17';
import ScrollBottomSheetDemoDefault18 from './examples/ReactNativeScrollBottomDemoDefault18';
import ScrollBottomSheetDemoDefault19 from './examples/ReactNativeScrollBottomDemoDefault19';
const App = () => {
  // renders
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault1 componentType="FlatList"`}>
            <ScrollBottomSheetDemoDefault1 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault2 componentType="SectionList"`}>
            <ScrollBottomSheetDemoDefault2 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault3 componentType="ScrollView"`}>
            <ScrollBottomSheetDemoDefault3 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault4 snapPoints={[128, '50%', WINDOW_HEIGHT - 200]}`}>
            <ScrollBottomSheetDemoDefault4 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault5 snapPoints={[128, '50%', WINDOW_HEIGHT - 200]} initialSnapIndex={2} 2代表初始时从上到下(上方空白部分)占据'WINDOW_HEIGHT - 200`}>
            <ScrollBottomSheetDemoDefault5 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault6 
            renderHandle={() => (
                <View style={styles.header}>
                  <View style={styles.panelHandle} />
                </View>
              )} 该属性用于自定义组件头部把手部分（红色方框所示）`}>
            <ScrollBottomSheetDemoDefault6 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault7 onSettle={onSettleCallback} initialSnapIndex={1} 滑动停止后，执行回调，弹窗展示文本信息`}>
            <ScrollBottomSheetDemoDefault7 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault8 onSettle={onSettleCallback} initialSnapIndex={1} topInset={100} 对比DemoDefault7，在原来“50%”高度的基础上向上偏移100`}>
            <ScrollBottomSheetDemoDefault8 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault9 默认不传animationType的情况下 默认为timing方式的动画效果 即线性动画效果`}>
            <ScrollBottomSheetDemoDefault9 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault10 animationType={'spring'} 传递animationType={'spring'}为spring类型的动画效果`}>
            <ScrollBottomSheetDemoDefault10 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault11 默认为timing方式的动画效果 animationConfig={{easing: Easing.inOut}}`}>
            <ScrollBottomSheetDemoDefault11 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault12 animationType={'spring'}为spring类型的动画效果 animationConfig={{easing: Easing.inOut}}`}>
            <ScrollBottomSheetDemoDefault12 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault13 animatedPosition={animatedPosition}滑动时检测到animatedPosition属性值被更改，见内部截图`}>
            <ScrollBottomSheetDemoDefault13 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault14 innerRef={scrollRef}测试innerRef属性 手指上滑，此时底部抽屉内部滚动条滑到底部 当点击回到顶部时 底部抽屉内部滚动条滑动到抽屉顶部`}>
            <ScrollBottomSheetDemoDefault14 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault15 containerStyle={backgroundColor:'yellow'}测试backgroundColor是不是被应用于把手及内容`}>
            <ScrollBottomSheetDemoDefault15 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault16  friction={0.25}(基准值) friction为阻尼系数(0~1)之间 阻尼系数越接近1 滑到底部节点后手指继续下滑 下滑趋势越明显`}>
            <ScrollBottomSheetDemoDefault16 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault17 friction={0.95} friction为阻尼系数(0~1)之间 阻尼系数越接近1 滑到底部节点后手指继续下滑 下滑趋势越明显`}>
            <ScrollBottomSheetDemoDefault17 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault18 enableOverScroll={false} 滑到底部节点后手指继续下滑 没有下滑趋势`}>
            <ScrollBottomSheetDemoDefault18 />
          </Page>
          <Page
            name={`EXAMPLE: ScrollBottomSheetDemoDefault19 enableOverScroll={true} 滑到底部节点后手指继续下滑 有下滑趋势`}>
            <ScrollBottomSheetDemoDefault19 />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
