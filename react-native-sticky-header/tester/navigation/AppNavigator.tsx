import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  YodaScreen,
  RouteCenterScreen,
  TabbedHeaderPagerDemoScreen,
  TabbedHeaderListDemoScreen,
  DetailsHeaderScrollViewDemoScreen,
  DetailsHeaderFlatListDemoScreen,
  DetailsHeaderSectionListDemoScreen,
  AvatarHeaderScrollViewDemoScreen,
  AvatarHeaderFlatListDemoScreen,
  AvatarHeaderSectionListDemoScreen,
  StickyHeaderScrollViewDemoScreen,
  StickyHeaderFlatListDemoScreen,
  StickyHeaderSectionListDemoScreen,
  TabbedHeaderFlashListDemoScreen,
  AvatarHeaderFlashListDemoScreen,
  DetailsHeaderFlashListDemoScreen,
  StickyHeaderFlashListDemoScreen,
} from '../screens';
import {
  AvatarHeaderFlashListDemoDefault,
  AvatarHeaderFlashListDemoChild1,
  AvatarHeaderFlashListDemoChild2,
} from '../screens/AvatarHeaderFlashList/index';
import {
  AvatarHeaderFlatListDemoDefault,
  AvatarHeaderFlatListDemoChild1,
} from '../screens/AvatarHeaderFlatList/index';
import {AvatarHeaderSectionListDemoDefault} from '../screens/AvatarHeaderSectionList/index';
import {
  DetailsHeaderScrollViewDemoDefault,
  DetailsHeaderScrollViewDemoChild1,
  DetailsHeaderScrollViewDemoChild2,
} from '../screens/DetailsHeaderScrollView/index';
import {DetailsHeaderSectionListDemoDefault} from '../screens/DetailsHeaderSectionList/index';
import {
  DetailsHeaderFlatListDemoDefault,
  DetailsHeaderFlatListDemoChild1,
} from '../screens/DetailsHeaderFlatList/index';
import {
  StickyHeaderScrollViewDemoDefault,
  StickyHeaderScrollViewDemoChild1,
} from '../screens/StickyHeaderScrollView/index';
import {StickyHeaderSectionListDemoDefault} from '../screens/StickyHeaderSectionList/index';
import {StickyHeaderFlatListDemoDefault} from '../screens/StickyHeaderFlatList/index';
import {StickyHeaderFlashListDemoDefault} from '../screens/StickyHeaderFlashList/index';
import {
  TabbedHeaderPagerDemoDefault,
  TabbedHeaderPagerDemoChild1,
  TabbedHeaderPagerDemoChild2,
} from '../screens/TabbedHeaderPager/index';
import {
  TabbedHeaderListDemoDefault,
  TabbedHeaderListDemoChild1,
  TabbedHeaderListDemoChild2,
} from '../screens/TabbedHeaderList/index';
import {DetailsHeaderFlashListDemoDefault} from '../screens/DetailsHeaderFlashList/index';
import {TabbedHeaderFlashListDemoDefault} from '../screens/TabbedHeaderFlashList/index';
import {YodaDemoDefault} from '../screens/YodaScreen/index';
import {ROUTES, CHILDROUTES} from './routes';
import type {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.ROUTECENTER} component={RouteCenterScreen} />
        {/* 测试TabbedHeaderPager组件start*/}
        <Stack.Screen
          name={ROUTES.TabbedHeaderPagerDEMO}
          component={TabbedHeaderPagerDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderPagerDemoDefault}
          component={TabbedHeaderPagerDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderPagerDemoChild1}
          component={TabbedHeaderPagerDemoChild1}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderPagerDemoChild2}
          component={TabbedHeaderPagerDemoChild2}
        />
        {/* 测试TabbedHeaderPager组件end*/}
        {/* 测试TabbedHeaderList组件start*/}
        <Stack.Screen
          name={ROUTES.TabbedHeaderListDEMO}
          component={TabbedHeaderListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderListDemoDefault}
          component={TabbedHeaderListDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderListDemoChild1}
          component={TabbedHeaderListDemoChild1}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderListDemoChild2}
          component={TabbedHeaderListDemoChild2}
        />
        {/* 测试TabbedHeaderList组件end*/}
        {/* 测试DetailsHeaderScrollView组件start*/}
        <Stack.Screen
          name={ROUTES.DetailsHeaderScrollViewDemo}
          component={DetailsHeaderScrollViewDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderScrollViewDemoDefault}
          component={DetailsHeaderScrollViewDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderScrollViewDemoChild1}
          component={DetailsHeaderScrollViewDemoChild1}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderScrollViewDemoChild2}
          component={DetailsHeaderScrollViewDemoChild2}
        />
        {/* 测试DetailsHeaderScrollView组件end*/}
        {/* 测试DetailsHeaderFlatList组件start*/}
        <Stack.Screen
          name={ROUTES.DetailsHeaderFlatListDemo}
          component={DetailsHeaderFlatListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderFlatListDemoDefault}
          component={DetailsHeaderFlatListDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderFlatListDemoChild1}
          component={DetailsHeaderFlatListDemoChild1}
        />
        {/* 测试DetailsHeaderFlatList组件start*/}
        {/* 测试DetailsHeaderSectionList组件start*/}
        <Stack.Screen
          name={ROUTES.DetailsHeaderSectionListDemo}
          component={DetailsHeaderSectionListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderSectionListDemoDefault}
          component={DetailsHeaderSectionListDemoDefault}
        />
        {/* 测试DetailsHeaderSectionList组件end*/}
        <Stack.Screen
          name={ROUTES.AvatarHeaderScrollViewDemo}
          component={AvatarHeaderScrollViewDemoScreen}
        />
        {/* 测试AvatarHeaderFlatList组件start*/}
        <Stack.Screen
          name={ROUTES.AvatarHeaderFlatListDemo}
          component={AvatarHeaderFlatListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderFlatListDemoDefault}
          component={AvatarHeaderFlatListDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderFlatListDemoChild1}
          component={AvatarHeaderFlatListDemoChild1}
        />
        {/* 测试AvatarHeaderFlatList组件end*/}
        {/* 测试AvatarHeaderSectionList组件start*/}
        <Stack.Screen
          name={ROUTES.AvatarHeaderSectionListDemo}
          component={AvatarHeaderSectionListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderSectionListDemoDefault}
          component={AvatarHeaderSectionListDemoDefault}
        />
        {/* 测试AvatarHeaderSectionList组件end*/}
        {/* 测试StickyHeaderScrollView组件start*/}
        <Stack.Screen
          name={ROUTES.StickyHeaderScrollViewDemo}
          component={StickyHeaderScrollViewDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.StickyHeaderScrollViewDemoDefault}
          component={StickyHeaderScrollViewDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.StickyHeaderScrollViewDemoChild1}
          component={StickyHeaderScrollViewDemoChild1}
        />
        {/* 测试StickyHeaderScrollView组件end*/}
        {/* 测试StickyHeaderFlatList组件start*/}
        <Stack.Screen
          name={ROUTES.StickyHeaderFlatListDemo}
          component={StickyHeaderFlatListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.StickyHeaderFlatListDemoDefault}
          component={StickyHeaderFlatListDemoDefault}
        />
        {/* 测试StickyHeaderFlatList组件end*/}
        {/* 测试StickyHeaderSectionList组件start*/}
        <Stack.Screen
          name={ROUTES.StickyHeaderSectionListDemo}
          component={StickyHeaderSectionListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.StickyHeaderSectionListDemoDefault}
          component={StickyHeaderSectionListDemoDefault}
        />
        {/* 测试StickyHeaderSectionList组件end*/}
        {/* 测试TabbedHeaderFlashList组件start*/}
        <Stack.Screen
          name={ROUTES.TabbedHeaderFlashListDemo}
          component={TabbedHeaderFlashListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.TabbedHeaderFlashListDemoDefault}
          component={TabbedHeaderFlashListDemoDefault}
        />
        {/* 测试TabbedHeaderFlashList组件end*/}
        {/* 测试AvatarHeaderFlashList组件start*/}
        <Stack.Screen
          name={ROUTES.AvatarHeaderFlashListDemo}
          component={AvatarHeaderFlashListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderFlashListDemoDefault}
          component={AvatarHeaderFlashListDemoDefault}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderFlashListDemoChild1}
          component={AvatarHeaderFlashListDemoChild1}
        />
        <Stack.Screen
          name={CHILDROUTES.AvatarHeaderFlashListDemoChild2}
          component={AvatarHeaderFlashListDemoChild2}
        />
        {/* 测试AvatarHeaderFlashList组件end*/}
        {/* 测试DetailsHeaderFlashList组件start*/}
        <Stack.Screen
          name={ROUTES.DetailsHeaderFlashListDemo}
          component={DetailsHeaderFlashListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.DetailsHeaderFlashListDemoDefault}
          component={DetailsHeaderFlashListDemoDefault}
        />
        {/* 测试DetailsHeaderFlashList组件end*/}
        {/* 测试StickyHeaderFlashList组件start*/}
        <Stack.Screen
          name={ROUTES.StickyHeaderFlashListDemo}
          component={StickyHeaderFlashListDemoScreen}
        />
        <Stack.Screen
          name={CHILDROUTES.StickyHeaderFlashListDemoDefault}
          component={StickyHeaderFlashListDemoDefault}
        />
        {/* 测试StickyHeaderFlashList组件end*/}
        {/* 测试Yoda组件start*/}
        <Stack.Screen name={ROUTES.YODA} component={YodaScreen} />
        <Stack.Screen
          name={CHILDROUTES.YodaDemoDefault}
          component={YodaDemoDefault}
        />
        {/* 测试Yoda组件end*/}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
