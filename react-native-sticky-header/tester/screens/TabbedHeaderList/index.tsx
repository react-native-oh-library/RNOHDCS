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
import TabbedHeaderListDemoDefault from './DefaultDemo/index';
import TabbedHeaderListDemoChild1 from './TestDemo/ChildDemo1';
import TabbedHeaderListDemoChild2 from './TestDemo/ChildDemo2';
//定义组件测试testID
const testIdObject = {
  default: 'TabbedHeaderPagerDemoDefault_testID',
  child1: 'TabbedHeaderPagerDemoChild1_testID',
  child2: 'TabbedHeaderPagerDemoChild2_testID',
};
const defaultRouter = {
  routeName: CHILDROUTES.TabbedHeaderListDemoDefault,
  label: 'TabbedHeaderList默认组件',
  testID: testIdObject.default,
  title: '默认组件TabbedHeaderListDemoDefault(设置基准属性值)',
  testProps: {
    backgroundColor: 'rgb(78,15,255)',
    contentContainerStyle: `backgroundColor:'white'`,
    enableSafeAreaTopInset: 'true',
    leftTopIcon: '左上角icon图标',
    leftTopIconOnPress: '左上角icon图标点击触发回调',
    hasBorderRadius: 'true',
    headerHeight: '默认值100',
    parallaxHeight: '300(默认值53%屏幕高度)',
    image: 'Brandon.image(左上角的头像)',
    renderHeaderBar: '默认组件使用默认headerBar',
    rightTopIcon: '右上角icon图标',
    rightTopIconOnPress: '右上角icon图标点击触发回调',
    snapStartThreshold: '默认值',
    snapStopThreshold: '默认值',
    snapToEdge: 'true',
    stickyTabs: 'true',
    title: 'Brandon',
    titleStyle: `color:'white'`,
  },
};
const childRouter1 = {
  routeName: CHILDROUTES.TabbedHeaderListDemoChild1,
  label: 'TabbedHeaderList测试子组件1',
  testID: testIdObject.child1,
  title: '测试组件TabbedHeaderListDemoChild1(设置对比属性值)',
  testProps: {
    backgroundColor: 'rgb(255,78,15)',
    contentContainerStyle: `backgroundColor:'red'`,
    containerStyle: `borderWidth:1;borderColor:'green'`,
    enableSafeAreaTopInset:
      'false（设置为false,表现headerBar部分会减少内边距）',
    renderHeaderBar: '自定义headerBar<Text onPress={goBack}>返回</Text>',
    snapStartThreshold: '300',
    snapStopThreshold: '300',
    title: 'BrandonChild1',
    titleStyle: `color:'green'`,
  },
};
const childRouter2 = {
  routeName: CHILDROUTES.TabbedHeaderListDemoChild2,
  label: 'TabbedHeaderList测试子组件2',
  testID: testIdObject.child2,
  title: '测试组件TabbedHeaderListDemoChild1(设置对比属性值)',
  testProps: {
    hasBorderRadius: 'false',
    leftTopIconTestID: '用例标识符，用作唯一标识，传递即生效',
    rightTopIconTestID: '用例标识符，用作唯一标识，传递即生效',
    titleTestID: '用例标识符，用作唯一标识，传递即生效',
    onHeaderLayout: '内部已调用，组件动画响应滑动手势依赖该回调',
    onMomentumScrollBegin: '内部已调用，组件动画响应滑动手势依赖该回调',
    onMomentumScrollEnd: '内部已调用，组件动画响应滑动手势依赖该回调',
    onScroll: '内部已调用，组件动画响应滑动手势依赖该回调',
    onScrollBeginDrag: '内部已调用，组件动画响应滑动手势依赖该回调',
    onScrollEndDrag: '内部已调用，组件动画响应滑动手势依赖该回调',
    onTabsLayout: '内部已调用，组件动画响应滑动手势依赖该回调',
    onTopReached: '内部已调用，组件动画响应滑动手势依赖该回调',
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
const TabbedHeaderListDemoScreen: React.FC = () => {
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
            <Text>TabbedHeaderList组件测试页面</Text>
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
              <View style={styles.sectionPart}>
                <Text>{childRouter2.title}</Text>
                <SimpleTable obj={childRouter2.testProps}></SimpleTable>
                <Text>测试链接：</Text>
                <ExampleLink key={childRouter2.routeName} {...childRouter2} />
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
    height: 18,
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

export default TabbedHeaderListDemoScreen;
export {
  TabbedHeaderListDemoDefault,
  TabbedHeaderListDemoChild1,
  TabbedHeaderListDemoChild2,
};
