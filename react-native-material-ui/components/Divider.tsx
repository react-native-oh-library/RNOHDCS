import { View, StyleSheet, Text } from 'react-native';
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'react-native-material-ui';
import Container from './Container';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const DividerDemo = () => {
  return (
    <Tester>
      <TestSuite name='Divider'>
        <TestCase itShould='props:inset,style'>
          <View style= {styles.container}>
          <Text>Hello world!</Text>
          <Divider inset style={{container:styles.divider}}/>
          <Text>Hello Divider!</Text>
          <Divider inset={false}/>
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
  },
  divider:{
    marginBottom:20,
  }
});
export default DividerDemo;