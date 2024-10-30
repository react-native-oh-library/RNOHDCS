import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import type {RootStackNavigationProp} from '../../navigation/types';
import {colors, screenStyles} from '../../constants/index';
import {ROUTES, CHILDROUTES} from '../../navigation/routes';
import {ExampleLink} from '../RouteCenterScreen/ExampleLink';
// 引入日志截图
import workletCode from '../../assets/StickyHeaderFlatListCode.png';
import workletRunlog1 from '../../assets/stickyHeaderWorkletLog.png';
import workletRunlog2 from '../../assets/stickyHeaderWorkletLog2.png';
//引入组件测试demo
import StickyHeaderFlatListDemoDefault from './DefaultDemo/index';
//定义组件测试testID
const testIdObject = {
  default: 'StickyHeaderFlatListDemoDefault_testID',
};
const defaultRouter = {
  routeName: CHILDROUTES.StickyHeaderFlatListDemoDefault,
  label: 'StickyHeaderFlatList默认组件',
  testID: testIdObject.default,
  title: '默认组件StickyHeaderFlatListDemoDefault(设置对比属性值)',
  testProps: {
    containerStyle: 'flex:1，设置布局为弹性布局,默认生效',
    renderHeader: '自定义header组件展示一张图形图片（联网查看）',
    renderTabs: '自定义Tabs栏组件，展示Tab1~Tab5',
    data: 'FlatList组件必传属性，内部已生效',
    keyExtractor: 'FlatList组件必传属性，内部已生效',
    renderItem: 'FlatList组件Item渲染函数，内部已生效',
  },
};

const showCallbackInfo = {
  onHeaderLayout:
    ':header布局完成后的回调,组件内部自动调用,(log日志筛选关键词：StickyHeaderFlatList-header)',
  onMomentumScrollBegin:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderFlatList-worklet)',
  onMomentumScrollEnd:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderFlatList-worklet)',
  onScroll:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderFlatList-worklet)',
  onScrollBeginDrag:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderFlatList-worklet)',
  onScrollEndDrag:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderFlatList-worklet)',
};

const SimpleTable = props => {
  const Keys = Object.keys(props.obj);
  return (
    <View style={styles.tableContainer}>
      <View style={[styles.tableHeaderContainer, styles.lineBase]}>
        <Text>测试属性Prop</Text>
        <Text>Prop值/含义</Text>
      </View>
      {Keys.map((key, index) => (
        <View key={`${key}-${index}`} style={styles.lineBase}>
          <Text>{key}</Text>
          <Text>{props.obj[key]}</Text>
        </View>
      ))}
    </View>
  );
};
const StickyHeaderFlatListDemoScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryBlue}
          translucent
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>StickyHeaderFlatList组件测试页面</Text>
          </View>
          <ScrollView>
            <View style={styles.testCenter}>
              <View style={styles.sectionPart}>
                <Text>{defaultRouter.title}</Text>
                <SimpleTable obj={defaultRouter.testProps}></SimpleTable>
                <Text>测试链接：</Text>
                <ExampleLink key={defaultRouter.routeName} {...defaultRouter} />
              </View>
            </View>
            <View style={styles.sectionPart}>
              <Text>单独展示相关回调方法测试结果</Text>
              <SimpleTable obj={showCallbackInfo}></SimpleTable>
              <Text>测试结果展示：</Text>
              <Image style={styles.testImage} source={workletCode}></Image>
              <Image style={styles.testImage} source={workletRunlog1}></Image>
              <Image style={styles.testImage} source={workletRunlog2}></Image>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(193, 95%, 68%)',
  },
  header: {
    width: '100%',
    padding: 20,
    textAlign: 'center',
  },
  testCenter: {
    paddingBottom: 20,
  },
  sectionPart: {
    borderWidth: 1,
    borderColor: 'green',
    marginBottom: 20,
  },
  linkLabel: {
    color: colors.purplishBlue,
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 20,
    padding: 10,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
  },
  lineBase: {
    width: '100%',
    lineHeight: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  tableHeaderContainer: {
    fontWeight: 700,
    fontSize: 18,
  },
});

export default StickyHeaderFlatListDemoScreen;
export {StickyHeaderFlatListDemoDefault};
