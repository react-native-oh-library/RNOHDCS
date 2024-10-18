import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  PressableProps,
} from 'react-native';
import {Avatar, Icon} from '@rneui/themed';
import {Text} from '@rneui/base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

interface IconProps {
  // 定义props的属性和类型
}

class ImageComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Image
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          alignSelf: 'center',
        }}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        }}></Image>
    );
  }
}

const Icons: React.FunctionComponent<IconProps> = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);

  return (
    <Tester style={{flex: 1, backgroundColor: '#000'}}>
      <ScrollView>
        <TestSuite name="Icon属性Component 传入一个图片组件">
          <TestCase itShould="Component" tags={['C_API']}>
            <Icon
              name="home"
              type="font-awesome"
              color="red"
              size={100}
              Component={ImageComponent}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性brand 使用band字体">
          <TestCase itShould="brand" tags={['C_API']}>
            <Icon
              name="home"
              brand={true}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性containerStyle 设置容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <Icon
              name="home"
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性disabled 设置disable后点击事件失效">
          <TestCase itShould="disabled" tags={['C_API']}>
            <Icon
              disabled={true}
              name="home"
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性disabledStyle 设置disable状态下的样式">
          <TestCase itShould="disabledStyle" tags={['C_API']}>
            <Icon
              disabled={true}
              disabledStyle={{backgroundColor: 'green', borderRadius: 20,borderWidth:2,borderColor:'gray'}}
              name="home"
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性iconProps 设置iconProps 来显示icon">
          <TestCase itShould="iconProps" tags={['C_API']}>
            <Icon
              iconProps={{name: 'save', color: 'green', size: 50}}
              name="home"
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性onLongPress 长按事件 切换icon">
          <TestCase itShould="onLongPress" tags={['C_API']}>
            <Icon
              name={onlongPress ? 'home' : 'save'}
              onLongPress={() => {
                setOnlongPress(!onlongPress);
              }}
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性onPress 点击事件 切换icon">
          <TestCase itShould="onPress" tags={['C_API']}>
            <Icon
              name={onPress ? 'home' : 'save'}
              onPress={() => {
                setOnPress(!onPress);
              }}
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性onPressIn 手指按下触发 切换icon">
          <TestCase itShould="onPressIn" tags={['C_API']}>
            <Icon
              name={onPressIn ? 'home' : 'save'}
              onPressIn={() => {
                setOnPressIn(!onPressIn);
              }}
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性onPressOut 手指松开触发 切换icon">
          <TestCase itShould="onPressOut" tags={['C_API']}>
            <Icon
              name={onPressOut ? 'home' : 'save'}
              onPressOut={() => {
                setonPressOut(!onPressOut);
              }}
              containerStyle={{
                padding: 10,
                backgroundColor: 'pink',
                borderRadius: 20,
                width: 100,
                height: 100,
                alignSelf: 'center',
              }}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性raised 自动添加阴影">
          <TestCase itShould="raised" tags={['C_API']}>
            <Icon
              name={'save'}
              raised
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性reverse 与raised的颜色互换">
          <TestCase itShould="reverse" tags={['C_API']}>
            <Icon
              name={'save'}
              reverse
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性reverseColor 设置reverseColor下的图标颜色">
          <TestCase itShould="reverseColor" tags={['C_API']}>
            <Icon
              name={'save'}
              reverseColor="yellow"
              reverse
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性solid 设置solid字体">
          <TestCase itShould="solid" tags={['C_API']}>
            <Icon
              name={'save'}
              solid={true}
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性testID 设置testID">
          <TestCase itShould="testID" tags={['C_API']}>
            <Icon
              name={'save'}
              testID="testID"
             
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性numberOfLines 接收React-Native原生Text组件的numberOfLines">
          <TestCase itShould="Text组件的numberOfLines" tags={['C_API']}>
            <Icon
              name={'save'}
              numberOfLines={1}
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
        <TestSuite name="Icon属性ellipsizeMode 接收React-Native原生Text组件的ellipsizeMode">
          <TestCase itShould="Text组件的ellipsizeMode" tags={['C_API']}>
            <Icon
              name={'save'}
              ellipsizeMode={'middle'}
              containerStyle={{alignSelf: 'center'}}
              type="font-awesome"
              color="red"
              size={100}></Icon>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Icons;
