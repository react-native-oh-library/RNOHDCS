import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {Box, HStack, Text, Badge, Spacer, Flex, Pressable} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const PressTest = () => {
  //此组件源码是用了RN里面的原生Pressable组件
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
              <Pressable
                children={
                  <Box alignItems="center">children内容</Box>
                }></Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled:true 禁用交互行为" tags={['dev']}>
              <Pressable
                isDisabled
                onPress={() => {
                  Alert.alert('isDisabled:true');
                }}>
                <Box alignItems="center">isDisabled:true</Box>
              </Pressable>
            </TestCase>
            <TestCase itShould="isDisabled:false 点击" tags={['dev']}>
              <Pressable
                isDisabled={false}
                onPress={() => {
                  Alert.alert('isDisabled:false');
                }}>
                <Box alignItems="center">isDisabled:false</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="_disabled">
            <TestCase
              itShould="_disabled禁用交互行为样式backgroundColor: 'amber.600',"
              tags={['dev']}>
              <Pressable
                isDisabled
                _disabled={{
                  backgroundColor: 'amber.600',
                }}
                onPress={() => {
                  Alert.alert('isDisabled:true');
                }}>
                <Box alignItems="center">isDisabled:true</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="isPressed-官方给用法按压的时候能返回isPressed的布尔值">
            <TestCase itShould="isPressed:true" tags={['dev']}>
              <Pressable>
                {({isPressed}) => {
                  return (
                    <Box
                      bg={isPressed ? 'coolGray.200' : 'coolGray.100'}
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300">
                      <Text mt="2" fontSize="sm" color="coolGray.700">
                        Unlock powerfull time-saving tools for creating email
                        delivery and collecting marketing data
                      </Text>
                    </Box>
                  );
                }}
              </Pressable>
            </TestCase>
            <TestCase itShould="isPressed:false 点击" tags={['dev']}>
              <Pressable
                isPressed={false}
                onPress={() => {
                  Alert.alert('isPressed:false');
                }}>
                <Box alignItems="center">isPressed:false</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="_pressed">
            <TestCase
              itShould="_pressed: 值backgroundColor:'amber.500'"
              tags={['dev']}>
              <Pressable
                isPressed
                _pressed={{
                  backgroundColor: 'amber.500',
                }}
                onPress={() => {
                  Alert.alert('isPressed:true');
                }}>
                <Box alignItems="center">isPressed:true</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="isFocused">
            <TestCase itShould="isFocused:true" tags={['dev']}>
              <Pressable
                isFocused
                onPress={() => {
                  Alert.alert('isFocused:true');
                }}>
                <Box alignItems="center">isFocused:true</Box>
              </Pressable>
            </TestCase>
            <TestCase itShould="isFocused:false 点击" tags={['dev']}>
              <Pressable
                isFocused={false}
                onPress={() => {
                  Alert.alert('isFocused:false');
                }}>
                <Box alignItems="center">isFocused:false</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="_focus">
            <TestCase
              itShould="_focus:值backgroundColor: 'amber.900'"
              tags={['dev']}>
              <Pressable
                isFocused
                _focus={{backgroundColor: 'amber.900'}}
                onPress={() => {
                  Alert.alert('_focus:true');
                }}>
                <Box alignItems="center">_focus:true</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="onBlur（无效）">
            <TestCase itShould="onBlur:失焦调用" tags={['dev']}>
              <Pressable
                isFocused={false}
                onBlur={() => {
                  Alert.alert('onBlur');
                }}>
                <Box alignItems="center">onBlur</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="onFocus">
            <TestCase itShould="onFocus:聚焦调用（无效）" tags={['dev']}>
              <Pressable
                isFocused
                onFocus={() => {
                  Alert.alert('onFocus');
                }}>
                <Box alignItems="center">onFocus</Box>
              </Pressable>
            </TestCase>
          </TestSuite>

          <TestSuite name="isFocusVisible（无效）">
            <TestCase itShould="isFocusVisible:true" tags={['dev']}>
              <Pressable
                isFocused
                isFocusVisible
                onPress={() => {
                  Alert.alert('isFocused:true');
                }}>
                <Box alignItems="center">isFocused:true</Box>
              </Pressable>
            </TestCase>
            <TestCase itShould="isFocusVisible:false" tags={['dev']}>
              <Pressable
                isFocused
                isFocusVisible={false}
                onPress={() => {
                  Alert.alert('isFocusVisible:false');
                }}>
                <Box alignItems="center">isFocusVisible:false</Box>
              </Pressable>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});

export default PressTest;
