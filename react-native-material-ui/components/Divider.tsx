import { View, StyleSheet, Text } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const DividerDemo = () => {
  return (
    <Tester>
      <TestSuite name='Divider(分割线) inset 分割线后移 true'>
        <TestCase itShould='props:inset(true从文本开始)'>
          <View style= {styles.container}>
          <Text>Hello world!</Text>
          <Divider inset={true} style={{container:{height:5}}}/>
          </View>
          
        </TestCase>
      </TestSuite>
      <TestSuite name='Divider(分割线) inset 分割线后移 false'>
        <TestCase itShould='props:inset(true从文本开始)'>
          <View style= {styles.container}>
          <Text>Hello world!</Text>
          <Divider inset={false} style={{container:{height:5}}}/>
          </View>
          
        </TestCase>
      </TestSuite>
      <TestSuite name='Divider(分割线) style'>
        <TestCase itShould='props:style(样式) 背景为红色：red,高度为5'>
          <View style= {styles.container}>
          <Text>Hello world!</Text>
          <Divider style={{container:{backgroundColor:'red',height:5}}}/>
          </View>
          
        </TestCase>
      </TestSuite>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    marginTop: 20,
  }
});
export default DividerDemo;