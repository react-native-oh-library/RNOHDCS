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
import workletCode from '../../assets/workletCodeList.png';
import workletRunlog from '../../assets/workletRunlogList.png';
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
    containerStyle: `flex:1`,
    enableSafeAreaTopInset:
      'false（设置为false,表现headerBar部分会减少内边距）',
    foregroundImage: '左下角带圆角绿色背景白色quiz文字的图片',
    logo: '左上角netguru quiz的图标',
    logoStyle: '右下角的阴影',
    logoContainerStyle: 'logo外侧border边框',
    renderHeaderBar:
      '自定义headerBar,设置背景色与backgroundColor一致，同时展示白色文字：自定义HeaderBar部分',
    tabs: 'Tab栏部分数据源，负责提供整个组件的数据(Pizza、Burgers、Kebab、Chinese Food、Sushi、Pasta)',
  },
};
const childRouter1 = {
  routeName: CHILDROUTES.TabbedHeaderListDemoChild1,
  label: 'TabbedHeaderList测试子组件1',
  testID: testIdObject.child1,
  title: '测试组件TabbedHeaderListDemoChild1(设置对比属性值)',
  testProps: {
    backgroundColor: 'rgb(255,78,15)',
    parallaxHeight:
      '设置parallaxHeight的值为50<100(headerHeight)*2,左下角header实际以200的高度渲染',
    headerHeight: `默认值100`,
    parallaxHeight:
      '如上所属，视差高度值parallaxHeight(默认值 53% of screen 的高度)，实际效果可参照默认组件（parallaxHeight的值生效）',
    onTabsLayout: `TabbedHeaderList:测试testTabsLayout,布局完成后由组件内部自动调用`,
    onTopReached: `TabbedHeaderList:测试testTopReached，触顶事件发生时由组件内部自动调用`,
    snapStartThreshold: '设置默认值50',
    stickyTabs: 'true',
  },
};
const showCallbackInfo = {
  onMomentumScrollBegin:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderList-worklet)',
  onMomentumScrollEnd:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderList-worklet)',
  onScroll:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderList-worklet)',
  onScrollBeginDrag:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderList-worklet)',
  onScrollEndDrag:
    ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderList-worklet)',
};
const childRouter2 = {
  routeName: CHILDROUTES.TabbedHeaderListDemoChild2,
  label: 'TabbedHeaderList测试子组件2',
  testID: testIdObject.child2,
  title: '测试组件TabbedHeaderListDemoChild1(设置对比属性值)',
  testProps: {
    tabTextStyle: `color:'black'`,
    tabTextActiveStyle: `color:'red'`,
    tabTextContainerStyle: `backgroundColor:'yellow'`,
    tabTextContainerActiveStyle: `borderWidth:1;borderColor:'yellow'`,
    tabUnderlineColor: `color:'white'`,
    tabWrapperStyle: `borderWidth:1;borderColor:'yellow'`,
    tabsContainerBackgroundColor: '#rgb(255,102,0)',
    tabsContainerHorizontalPadding: '设置tab容器水平方向左右内边距20',
    stickyTabs: 'false',
    tabsContainerStyle: `borderWidth: 1,borderColor: 'red',`,
    title: 'Food delivery app',
    titleStyle: `color:'white'`,
    titleTestID: '用例标识符，用作唯一标识，传递即生效',
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
              <View style={styles.sectionPart}>
                <Text>单独展示相关回调方法测试结果</Text>
                <SimpleTable obj={showCallbackInfo}></SimpleTable>
                <Text>测试结果展示：</Text>
                <Image style={styles.testImage} source={workletCode}></Image>
                <Image style={styles.testImage} source={workletRunlog}></Image>
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
  testImage: {
    width: '100%',
  },
});

export default TabbedHeaderListDemoScreen;
export {
  TabbedHeaderListDemoDefault,
  TabbedHeaderListDemoChild1,
  TabbedHeaderListDemoChild2,
};
