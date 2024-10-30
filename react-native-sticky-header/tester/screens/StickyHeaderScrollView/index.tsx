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
} from 'react-native';
import type {RootStackNavigationProp} from '../../navigation/types';
import {colors, screenStyles} from '../../constants/index';
import {ROUTES, CHILDROUTES} from '../../navigation/routes';
import {ExampleLink} from '../RouteCenterScreen/ExampleLink';

//引入组件测试demo
import StickyHeaderScrollViewDemoDefault from './DefaultDemo/index';
import StickyHeaderScrollViewDemoChild1 from './TestDemo/ChildDemo1';
//定义组件测试testID
const testIdObject = {
  default: 'StickyHeaderScrollViewDemoDefault_testID',
  child1: 'StickyHeaderScrollViewDemoChild1_testID',
};
const defaultRouter = {
  routeName: CHILDROUTES.StickyHeaderScrollViewDemoDefault,
  label: 'StickyHeaderScrollView默认组件',
  testID: testIdObject.default,
  title: '默认组件StickyHeaderScrollViewDemoDefault(设置基准属性值)',
  testProps: {
    stickyTabs: 'true',
    renderHeader: '自定义header组件展示一张图形图片（联网查看）',
    renderTabs: '自定义Tabs栏组件，展示Tab1~Tab5',
  },
};
const childRouter1 = {
  routeName: CHILDROUTES.StickyHeaderScrollViewDemoChild1,
  label: 'StickyHeaderScrollView测试子组件1',
  testID: testIdObject.child1,
  title: '测试组件StickyHeaderScrollViewDemoChild1(设置对比属性值)',
  testProps: {
    onMomentumScrollBegin:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderScrow)',
    onMomentumScrollEnd:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderScrow)',
    onScroll:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderScrow)',
    onScrollBeginDrag:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderScrow)',
    onScrollEndDrag:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：StickyHeaderScrow)',
  },
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
const StickyHeaderScrollViewDemoScreen: React.FC = () => {
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
            <Text>StickyHeaderScrollView组件测试页面</Text>
          </View>
          <ScrollView>
            <View style={styles.testCenter}>
              <View style={styles.sectionPart}>
                <Text>{defaultRouter.title}</Text>
                <SimpleTable obj={defaultRouter.testProps}></SimpleTable>
                <Text>测试链接：</Text>
                <ExampleLink key={defaultRouter.routeName} {...defaultRouter} />
              </View>
              <View style={styles.sectionPart}>
                <Text>{childRouter1.title}</Text>
                <SimpleTable obj={childRouter1.testProps}></SimpleTable>
                <Text>测试链接：</Text>
                <ExampleLink key={childRouter1.routeName} {...childRouter1} />
              </View>
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
    paddingBottom: 200,
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

export default StickyHeaderScrollViewDemoScreen;
export {StickyHeaderScrollViewDemoDefault, StickyHeaderScrollViewDemoChild1};
