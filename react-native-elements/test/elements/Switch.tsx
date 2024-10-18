import React, { Component, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  PressableProps,
} from 'react-native';
import { Avatar, Icon, Switch } from '@rneui/themed';
import { Text } from '@rneui/base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

interface SwitchComponentProps {
  // 定义props的属性和类型
}

const Switchs: React.FunctionComponent<SwitchComponentProps> = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  const [value, setChangeValue] = useState(false);
  // trackColor={{ 'false': 'black', 'true': 'green' }} thumbColor={'pink'} color='yellow' value={value} onValueChange={(value) => {
  //     setChangeValue(value)
  // }}
  return (
    <Tester style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView>
        <TestSuite name="Swicth属性 设置style样式">
          <TestCase itShould="style" tags={['C_API']}>
            <Switch
              value={value}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性 设置trackColor  设置switch打开和关闭时候的颜色">
          <TestCase itShould="trackColor" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              value={value}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性 设置thumbColor  设置thumbColor">
          <TestCase itShould="thumbColor设置pink" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'pink'}
              value={value}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
          <TestCase itShould="thumbColor设置red" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={value}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性 onValueChange 修改swicth开关时触发 会回调当前状态 ">
          <TestCase itShould="onValueChange" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={value}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性value 接收React-native 原生Switch组件的value属性  true为打开 false则为关闭 ">
          <TestCase itShould="true" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
          <TestCase itShould="false" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={false}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性disable 接收React-native 原生Switch组件的disable属性 设置disable后 switch将不能滑动 ">
          <TestCase itShould="disable" tags={['C_API']}>
            <Switch
              disabled
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性style 接收 React-native 原生View组件的style">
          <TestCase itShould="设置原生View组件的style" tags={['C_API']}>
            <Switch
              style={{ backgroundColor: 'yellow', width: 80, alignSelf: 'center' }}
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}

            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性testID 接收 React-native 原生View组件的testID">
          <TestCase itShould="设置原生View组件的style" tags={['C_API']}>
            <Switch
              testID={'Switch'}
              style={{ backgroundColor: 'yellow', width: 80, alignSelf: 'center' }}
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}

            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Switchs;
