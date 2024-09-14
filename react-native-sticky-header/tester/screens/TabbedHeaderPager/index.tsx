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
import TabbedHeaderPagerDemoDefault from './DefaultDemo/index';
import TabbedHeaderPagerDemoChild1 from './TestDemo/ChildDemo1';
//定义组件测试testID
const testIdObject = {
  default: 'TabbedHeaderPagerDemoDefault_testID',
  child1: 'TabbedHeaderPagerDemoChild1_testID',
};
const defaultRouter = {
  routeName: CHILDROUTES.TabbedHeaderPagerDemoDefault,
  label: 'TabbedHeaderPager默认组件',
  testID: testIdObject.default,
  title: '默认组件TabbedHeaderPagerDemoDefault(设置基准属性值)',
  testProps: {
    backgroundColor: '#1ca75d',
    containerStyle: 'flex:1',
    enableSafeAreaTopInset: 'true',
    rememberTabScrollPosition: 'true',
    headerHeight: '100(默认值)',
    initialPage: '0',
    tabsContainerBackgroundColor: 'rgb(61,179,106)',
    logo: '左上角netguru文字logo图标',
    logoStyle: '右下角的阴影',
    logoContainerStyle: 'logo外侧border边框',
    title: 'Mornin Mark!...',
    titleStyle: `color:'white'`,
    foregroundImage: '人物头像图片',
    tabs: '自定义tab栏组件',
    tabTextStyle: `color:'white'`,
    snapToEdge: 'true(默认值）',
    stickyTabs: 'true(默认值)',
  },
};
const childRouter1 = {
  routeName: CHILDROUTES.TabbedHeaderPagerDemoChild1,
  label: 'TabbedHeaderPager测试子组件1',
  testID: testIdObject.child1,
  title: '测试组件TabbedHeaderPagerDemoChild1(设置对比属性值)',
  testProps: {
    backgroundColor: '#fca75d',
    tabsContainerBackgroundColor: 'rgb(61,179,106)',
    title: 'Mornin Jack!...',
    tabTextStyle: `color:'black'`,
    tabTextActiveStyle: `color:'red'`,
    tabTextContainerStyle: `backgroundColor:'yellow'`,
    tabTextContainerActiveStyle: `borderWidth:1;borderColor:'yellow'`,
    tabUnderlineColor: `color:'white'`,
    tabWrapperStyle: `borderWidth:1;borderColor:'yellow'`,
    tabsContainerBackgroundColor: '#rgb(255,102,0)',
    tabsContainerHorizontalPadding: 20,
    snapToEdge: 'false',
    stickyTabs: 'false',
    tabsContainerStyle: `borderWidth: 1,borderColor: 'red',`,
    onHeaderLayout: `console.log('TabbedHeaderPager:测试onHeaderLayout');`,
    onTabsLayout: `console.log('TabbedHeaderPager:测试testTabsLayout');`,
    onTopReached: `console.log('TabbedHeaderPager:测试testTopReached');`,
    onMomentumScrollBegin:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderPager)',
    onMomentumScrollEnd:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderPager)',
    onScroll:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderPager)',
    onScrollBeginDrag:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderPager)',
    onScrollEndDrag:
      ':内部已调用，组件动画响应滑动手势依赖该回调(log日志筛选关键词：TabbedHeaderPager)',
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
const TabbedHeaderPagerDemoScreen: React.FC = () => {
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
            <Text>TabbedHeaderPager组件测试页面</Text>
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
    height: 36,
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

export default TabbedHeaderPagerDemoScreen;
export {TabbedHeaderPagerDemoDefault, TabbedHeaderPagerDemoChild1};
