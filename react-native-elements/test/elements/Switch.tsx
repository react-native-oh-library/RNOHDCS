import React, { Component, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  PressableProps,
} from 'react-native';
import { Avatar, Icon, Switch,Button } from '@rneui/themed';
import { Text } from '@rneui/base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {panResponder}  from './RegistEvent'
interface SwitchComponentProps {
  // 定义props的属性和类型
}

const Switchs: React.FunctionComponent<SwitchComponentProps> = () => {
  const [onlongPress, setOnlongPress] = useState(false);
  const [onPress, setOnPress] = useState(false);
  const [onPressIn, setOnPressIn] = useState(false);
  const [onPressOut, setonPressOut] = useState(false);
  const [value, setChangeValue] = useState(false);
  const [value2, setChangeValue2] = useState(false);
  const [value1, setValue1] = useState('');
  const [value3, setChangeValue3] = useState(false);
  const [value4, setChangeValue4] = useState(false);
  const [value5, setChangeValue5] = useState(false);
  const [value6, setChangeValue6] = useState(false);
  const [value7, setChangeValue7] = useState(false);
  const [value8, setChangeValue8] = useState(false);
  const [changeBg,setChangeBg] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 100, height: 50 });
  const pan = panResponder()
  return (
    <Tester style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView>
        <TestSuite name="Swicth属性color 设置color">
          <TestCase itShould="color" tags={['C_API']}>
            <Switch
              color='pink'
              value={value3}
              onValueChange={value => {
                setChangeValue3(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性 设置style样式">
          <TestCase itShould="style" tags={['C_API']}>
            <Switch
              value={value4}
              onValueChange={value => {
                setChangeValue4(value4);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性 设置trackColor  设置switch打开和关闭时候的颜色">
          <TestCase itShould="trackColor" tags={['C_API']}>
            <Switch
              trackColor={{ false: 'black', true: 'green' }}
              value={value5}
              onValueChange={value => {
                setChangeValue5(value5);
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
              value={value6}
              onValueChange={value => {
                setChangeValue6(value6);
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
              value={value7}
              onValueChange={value => {
                setChangeValue7(value7);
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
          <TestCase itShould="disable为true" tags={['C_API']}>
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
          <TestCase itShould="disable为false" tags={['C_API']}>
            <Switch
              disabled={false}
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={value2}
              onValueChange={value => {
                setChangeValue2(value);
              }}
              style={{ width: 60, alignSelf: 'center', margin: 40 }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性onResponderRelease接收 React-native 原生View组件的onResponderRelease属性">
          <TestCase itShould="设置原生View组件的onResponderRelease" tags={['C_API']}>
            <Switch
            {...pan.panHandlers}
             onResponderRelease={(event)=>{
                setChangeBg(!changeBg)
             }}
              style={{ backgroundColor: changeBg ? 'blue' : 'yellow', width: 100, alignSelf: 'center',height:40 }}
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}

            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Swicth属性onLayout 接收React-native原生View组件的onLayout">
          <TestCase itShould="设置原生View组件的onLayout" tags={['C_API']}>
            <Switch
            
              style={{ backgroundColor: 'yellow', width:dimensions.width ,height:dimensions.height, alignSelf: 'center' }}
              trackColor={{ false: 'black', true: 'green' }}
              thumbColor={'red'}
              value={true}
              onValueChange={value => {
                setChangeValue(value);
              }}
              onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                const layoutString = `width: ${width}, height: ${height}`;
                setValue1(layoutString);
                console.log('Layout:', layoutString);
              }}

            />
             <View style={{ width: 200, marginLeft: 20, paddingBottom: 20, marginTop: 20 }}>
              <Text style={{ color: 'black' }}>onLayout回调方法显示组件的宽高</Text>
              <Text style={{ color: 'black' }}>
                {value1}
              </Text>
              <Button onPress={()=>{
                if (dimensions.width == 100 ) {
                  setDimensions({ width: 80, height: 30 })
                }else{
                  setDimensions({ width: 100, height: 50 })
                }       
              }}>修改组件的size</Button>
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Switchs;
