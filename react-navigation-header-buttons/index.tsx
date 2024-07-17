import * as React from 'react';
import {Button, View, Text, Alert, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  HeaderButtons,
  Item,
  HiddenItem,
  OverflowMenu,
  Divider,
  ItemProps,
  HiddenItemProps,
  HeaderButtonProps,
  HeaderButton,
} from 'react-navigation-header-buttons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons/HeaderButtonsProvider';
import { HeaderButtonsProviderPlain } from "react-navigation-header-buttons/react-navigation-header-buttons";
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {
  OtherPage,
  HeaderButtons_children,
  HeaderButtons_HeaderButtonComponent,
  HeaderButtons_preset,
  HeaderButtons_presetTab,
  HeaderButtons_left,
  HeaderButtons_leftF,
  HeaderButtons_Item,
  HeaderButtons_Item_style,
  HeaderButtons_Item_onPress,
  HeaderButtons_Item_iconName,
  HeaderButtons_OverflowMenu,
  HeaderButtons_OverflowMenu2,
  HeaderButtons_OverflowMenu3,
  HeaderButtons_HiddenItem,
  HeaderButtons_HeaderButton,
} from './tester';
const stackType = 'native';
const Stack = createNativeStackNavigator();
const StackS = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HeaderButtonExample() {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="HeaderButtons">
          <TestCase itShould="OverflowMenu/HiddenItem " tags={['C_API']}>
            <View style={{height: 500}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                      tabBarIcon: () => null,
                    }}>
                    <Tab.Screen
                      name="OverflowMenu1"
                      component={HeaderButtons_OverflowMenu}
                    />
                    <Tab.Screen
                      name="OverflowMenu2"
                      component={HeaderButtons_OverflowMenu2}
                    />
                    <Tab.Screen
                      name="OverflowMenu3"
                      component={HeaderButtons_OverflowMenu3}
                    />
                    <Tab.Screen
                      name="HiddenItem"
                      component={HeaderButtons_HiddenItem}
                    />
                  </Tab.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase itShould="HeaderButtons (children) " tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                    }}>
                    <Stack.Screen
                      name="Home"
                      component={HeaderButtons_children}
                    />
                    <Stack.Screen name="OtherPage" component={OtherPage} />
                  </Stack.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase
            itShould="HeaderButtons (HeaderButtonComponent) "
            tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                    }}>
                    <Stack.Screen
                      name="Home"
                      component={HeaderButtons_HeaderButtonComponent}
                    />
                    <Stack.Screen name="OtherPage" component={OtherPage} />
                  </Stack.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase
            itShould="HeaderButtons (preset: stackHeader)"
            tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Tab.Navigator
                    screenOptions={{
                      headerShown: false,
                      tabBarIcon: () => null,
                    }}>
                    <Tab.Screen
                      name="Home"
                      component={HeaderButtons_preset}
                      options={{headerShown: true}}
                    />
                    <Tab.Screen name="OtherPage" component={OtherPage} />
                  </Tab.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase
            itShould="HeaderButtons (preset: tabHeader)"
            tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Tab.Navigator
                    screenOptions={{
                      headerShown: false,
                      tabBarIcon: () => null,
                    }}>
                    <Tab.Screen
                      name="Home"
                      component={HeaderButtons_presetTab}
                      options={{headerShown: true}}
                    />
                    <Tab.Screen name="OtherPage" component={OtherPage} />
                  </Tab.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase itShould="HeaderButtons (left:true) " tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <StackS.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                    }}>
                    <StackS.Screen name="Home" component={HeaderButtons_left} />
                    <StackS.Screen name="OtherPage" component={OtherPage} />
                  </StackS.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase itShould="HeaderButtons (left:false) " tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <StackS.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                    }}>
                    <StackS.Screen
                      name="Home"
                      component={HeaderButtons_leftF}
                    />
                    <StackS.Screen name="OtherPage" component={OtherPage} />
                  </StackS.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase
            itShould="Item(title,onPress,iconName,style,buttonStyle,other props)"
            tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                      tabBarIcon: () => null,
                    }}>
                    <Tab.Screen
                      name="Item_title"
                      component={HeaderButtons_Item}
                    />
                    <Tab.Screen
                      name="Item_style"
                      component={HeaderButtons_Item_style}
                    />
                    <Tab.Screen
                      name="Item_onPress"
                      component={HeaderButtons_Item_onPress}
                    />
                    <Tab.Screen
                      name="Item_iconName"
                      component={HeaderButtons_Item_iconName}
                    />
                  </Tab.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
          <TestCase itShould="HeaderButton" tags={['C_API']}>
            <View style={{height: 300}}>
              <NavigationContainer>
                <HeaderButtonsProvider stackType={stackType}>
                  <StackS.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                      headerTintColor: 'white',
                      headerStyle: {backgroundColor: 'tomato'},
                    }}>
                    <StackS.Screen
                      name="Home"
                      component={HeaderButtons_HeaderButton}
                    />
                    <StackS.Screen name="OtherPage" component={OtherPage} />
                  </StackS.Navigator>
                </HeaderButtonsProvider>
              </NavigationContainer>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
