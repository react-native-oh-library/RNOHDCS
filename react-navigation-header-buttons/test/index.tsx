import * as React from 'react';
import {Button, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons/HeaderButtonsProvider';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {
  HeaderButtonsTester,
  HeaderButtons_childrenTester,
  HeaderButtons_Left_true,
  HeaderButtons_Left_false,
  HeaderButtons_Preset_tabHeader,
  HeaderButtons_Preset_stackHeader,
  HeaderButtons_Item_Title,
  HeaderButtons_Item_Style,
  HeaderButtons_Item_OnPress,
  HeaderButtons_Item_IconName,
  HeaderButtons_Item_ButtonStyle,
  HeaderButtons_OverflowMenu_OverflowIcon,
  HeaderButtons_OverflowMenu_Style,
  HeaderButtons_OverflowMenu_OnPress,
  HeaderButtons_OverflowMenu_Children,
  HeaderButtons_OverflowMenu_Preset_stackHeader,
  HeaderButtons_OverflowMenu_Preset_tabHeader,
  HeaderButtons_OverflowMenu_Left_true,
  HeaderButtons_OverflowMenu_Left_false,
  HeaderButtons_HiddenItem_Title,
  HeaderButtons_HiddenItem_Style,
  HeaderButtons_HiddenItem_TitleStyle,
  HeaderButtons_HiddenItem_OnPress,
  HeaderButtons_HiddenItem_Disabled,
  HeaderButtons_HeaderButton_Title,
  HeaderButtons_HeaderButton_RenderButton,
  HeaderButtons_HeaderButton_Style,
  HeaderButtons_HeaderButton_OnPress,
} from './tester';
const stackType = 'native';
const Stack = createNativeStackNavigator();

function HomePage({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Tester style={{flex: 1}}>
        <TestSuite name="HeaderButtons">
          <TestCase
            itShould="HeaderButtonComponent:ComponentType<HeaderButtonProps>"
            tags={['C_API']}>
            <Button
              title="HeaderButtonComponent"
              onPress={() => {
                navigation.navigate('HeaderButtonsTester');
              }}
            />
          </TestCase>
          <TestCase itShould="children:ReactNode" tags={['C_API']}>
            <Button
              title="Children"
              onPress={() => {
                navigation.navigate('HeaderButtons_childrenTester');
              }}
            />
          </TestCase>
          <TestCase itShould="left:boolean" tags={['C_API']}>
            <Button
              title="Left(true)"
              onPress={() => {
                navigation.navigate('HeaderButtons_Left_true');
              }}
            />
            <Button
              title="Left(false)"
              onPress={() => {
                navigation.navigate('HeaderButtons_Left_false');
              }}
            />
          </TestCase>
          <TestCase itShould="preset:(tabHeader,stackHeader)" tags={['C_API']}>
            <Button
              title="Preset(tabHeader)"
              onPress={() => {
                navigation.navigate('HeaderButtons_Preset_tabHeader');
              }}
            />
            <Button
              title="Preset(stackHeader)"
              onPress={() => {
                navigation.navigate('HeaderButtons_Preset_stackHeader');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Item">
          <TestCase itShould="title:string" tags={['C_API']}>
            <Button
              title="Item组件的title属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_Item_Title');
              }}
            />
          </TestCase>
          <TestCase itShould="style:ViewStyle" tags={['C_API']}>
            <Button
              title="Item组件的style属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_Item_Style');
              }}
            />
          </TestCase>
          <TestCase itShould="onPress:function" tags={['C_API']}>
            <Button
              title="Item组件的onPress属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_Item_OnPress');
              }}
            />
          </TestCase>
          <TestCase itShould="iconName:string" tags={['C_API']}>
            <Button
              title="Item组件的iconName属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_Item_IconName');
              }}
            />
          </TestCase>
          <TestCase itShould="buttonStyle:ViewStyle" tags={['C_API']}>
            <Button
              title="Item组件的buttonStyle属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_Item_ButtonStyle');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="OverflowMenu">
          <TestCase
            itShould="OverflowIcon:ReactElement / ComponentType"
            tags={['C_API']}>
            <Button
              title="OverflowMenu组件的OverflowIcon属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_OverflowIcon');
              }}
            />
          </TestCase>
          <TestCase itShould="style:ViewStyle" tags={['C_API']}>
            <Button
              title="OverflowMenu组件的style属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_Style');
              }}
            />
          </TestCase>
          <TestCase itShould="onPress:function" tags={['C_API']}>
            <Button
              title="OverflowMenu组件的onPress属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_OnPress');
              }}
            />
          </TestCase>
          <TestCase itShould="children:ReactNode" tags={['C_API']}>
            <Button
              title="OverflowMenu组件的children属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_Children');
              }}
            />
          </TestCase>
          <TestCase
            itShould="preset:'tabHeader' / 'stackHeader'"
            tags={['C_API']}>
            <Button
              title="OverflowMenu组件的preset属性(stackHeader)"
              onPress={() => {
                navigation.navigate(
                  'HeaderButtons_OverflowMenu_Preset_stackHeader',
                );
              }}
            />
            <Button
              title="OverflowMenu组件的preset属性(tabHeader)"
              onPress={() => {
                navigation.navigate(
                  'HeaderButtons_OverflowMenu_Preset_tabHeader',
                );
              }}
            />
          </TestCase>
          <TestCase itShould="left(boolean)" tags={['C_API']}>
            <Button
              title="OverflowMenu组件的left属性(ture)"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_Left_true');
              }}
            />
            <Button
              title="OverflowMenu组件的left属性(false)"
              onPress={() => {
                navigation.navigate('HeaderButtons_OverflowMenu_Left_false');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="HiddenItem">
          <TestCase itShould="title:string" tags={['C_API']}>
            <Button
              title="HiddenItem组件的title属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HiddenItem_Title');
              }}
            />
          </TestCase>
          <TestCase itShould="style:ViewStyle" tags={['C_API']}>
            <Button
              title="HiddenItem组件的style属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HiddenItem_Style');
              }}
            />
          </TestCase>
          <TestCase itShould="titleStyle:TextStyle" tags={['C_API']}>
            <Button
              title="HiddenItem组件的titleStyle属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HiddenItem_TitleStyle');
              }}
            />
          </TestCase>
          <TestCase itShould="onPress:function" tags={['C_API']}>
            <Button
              title="HiddenItem组件的onPress属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HiddenItem_OnPress');
              }}
            />
          </TestCase>
          <TestCase itShould="disabled:boolean" tags={['C_API']}>
            <Button
              title="HiddenItem组件的disabled属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HiddenItem_Disabled');
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="HeaderButton">
          <TestCase itShould="title:string" tags={['C_API']}>
            <Button
              title="HeaderButton组件的title属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HeaderButton_Title');
              }}
            />
          </TestCase>
          <TestCase itShould="style:ViewStyle" tags={['C_API']}>
            <Button
              title="HeaderButton组件的style属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HeaderButton_Style');
              }}
            />
          </TestCase>
          <TestCase itShould="onPress:function" tags={['C_API']}>
            <Button
              title="HeaderButton组件的onPress属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HeaderButton_OnPress');
              }}
            />
          </TestCase>
          <TestCase itShould="renderButton:ReactNode" tags={['C_API']}>
            <Button
              title="HeaderButton组件的renderButton属性"
              onPress={() => {
                navigation.navigate('HeaderButtons_HeaderButton_RenderButton');
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

export default function HeaderButtonExample() {
  return (
    <NavigationContainer>
      <HeaderButtonsProvider stackType={stackType}>
        <Stack.Navigator initialRouteName="react-navigation-header-buttons">
          <Stack.Screen
            name="react-navigation-header-buttons"
            component={HomePage}
          />
          <Stack.Screen
            name="HeaderButtonsTester"
            component={HeaderButtonsTester}
          />
          <Stack.Screen
            name="HeaderButtons_childrenTester"
            component={HeaderButtons_childrenTester}
          />
          <Stack.Screen
            name="HeaderButtons_Left_true"
            component={HeaderButtons_Left_true}
          />
          <Stack.Screen
            name="HeaderButtons_Left_false"
            component={HeaderButtons_Left_false}
          />
          <Stack.Screen
            name="HeaderButtons_Preset_tabHeader"
            component={HeaderButtons_Preset_tabHeader}
          />
          <Stack.Screen
            name="HeaderButtons_Preset_stackHeader"
            component={HeaderButtons_Preset_stackHeader}
          />
          <Stack.Screen
            name="HeaderButtons_Item_Title"
            component={HeaderButtons_Item_Title}
          />
          <Stack.Screen
            name="HeaderButtons_Item_Style"
            component={HeaderButtons_Item_Style}
          />
          <Stack.Screen
            name="HeaderButtons_Item_OnPress"
            component={HeaderButtons_Item_OnPress}
          />
          <Stack.Screen
            name="HeaderButtons_Item_IconName"
            component={HeaderButtons_Item_IconName}
          />
          <Stack.Screen
            name="HeaderButtons_Item_ButtonStyle"
            component={HeaderButtons_Item_ButtonStyle}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_OverflowIcon"
            component={HeaderButtons_OverflowMenu_OverflowIcon}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Style"
            component={HeaderButtons_OverflowMenu_Style}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_OnPress"
            component={HeaderButtons_OverflowMenu_OnPress}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Children"
            component={HeaderButtons_OverflowMenu_Children}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Preset_stackHeader"
            component={HeaderButtons_OverflowMenu_Preset_stackHeader}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Preset_tabHeader"
            component={HeaderButtons_OverflowMenu_Preset_tabHeader}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Left_true"
            component={HeaderButtons_OverflowMenu_Left_true}
          />
          <Stack.Screen
            name="HeaderButtons_OverflowMenu_Left_false"
            component={HeaderButtons_OverflowMenu_Left_false}
          />
          <Stack.Screen
            name="HeaderButtons_HiddenItem_Title"
            component={HeaderButtons_HiddenItem_Title}
          />
          <Stack.Screen
            name="HeaderButtons_HiddenItem_Style"
            component={HeaderButtons_HiddenItem_Style}
          />
          <Stack.Screen
            name="HeaderButtons_HiddenItem_TitleStyle"
            component={HeaderButtons_HiddenItem_TitleStyle}
          />
          <Stack.Screen
            name="HeaderButtons_HiddenItem_OnPress"
            component={HeaderButtons_HiddenItem_OnPress}
          />
          <Stack.Screen
            name="HeaderButtons_HiddenItem_Disabled"
            component={HeaderButtons_HiddenItem_Disabled}
          />
          <Stack.Screen
            name="HeaderButtons_HeaderButton_Title"
            component={HeaderButtons_HeaderButton_Title}
          />
          <Stack.Screen
            name="HeaderButtons_HeaderButton_RenderButton"
            component={HeaderButtons_HeaderButton_RenderButton}
          />
          <Stack.Screen
            name="HeaderButtons_HeaderButton_Style"
            component={HeaderButtons_HeaderButton_Style}
          />
          <Stack.Screen
            name="HeaderButtons_HeaderButton_OnPress"
            component={HeaderButtons_HeaderButton_OnPress}
          />
        </Stack.Navigator>
      </HeaderButtonsProvider>
    </NavigationContainer>
  );
}
