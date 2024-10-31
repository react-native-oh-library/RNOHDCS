import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {Box} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

const BoxTest = () => {
  const ref = useRef(null);

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="children">
            <TestCase
              itShould="children"
              children={
                <View style={styles.section}>
                  <Box style={styles.box}>
                    <Button key="button001" title="button"></Button>
                    <Text>测试children属性</Text>
                  </Box>
                </View>
              }
              tags={['dev']}
            />
          </TestSuite>
          
          <TestSuite name="_text">
            <TestCase itShould="_text" tags={['dev']}>
              <Box>
                <Box
                  alignSelf="center" // bg="primary.500"
                  _text={{
                    fontSize: 'md',
                    fontWeight: 'medium',
                    color: 'warmGray.50',
                    letterSpacing: 'lg',
                  }}
                  bg={['red.400', 'blue.400']}>
                  测试_text属性
                </Box>
              </Box>
            </TestCase>
          </TestSuite>

          <TestSuite name="bg">
            <TestCase
              itShould="bg"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} bg="#87CEFA"></Box>
                </View>
              }
              tags={['dev']}
            />
          </TestSuite>
          <TestSuite name="background">
            <TestCase
              itShould="background"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} background="#87CEFA"></Box>
                </View>
              }
              tags={['dev']}
            />
          </TestSuite>
          <TestSuite name="bgColor">
            <TestCase
              itShould="bgColor:#87CEFA"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} bgColor="#87CEFA"></Box>
                </View>
              }
              tags={['dev']}
            />
            <TestCase
              itShould="bgColor:#00FAA4"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} bgColor="#00FAA4"></Box>
                </View>
              }
              tags={['dev']}
            />
          </TestSuite>
          <TestSuite name="backgroundColor">
            <TestCase
              itShould="backgroundColor: #87CEFA"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} backgroundColor="#87CEFA"></Box>
                </View>
              }
              tags={['dev']}
            />
            <TestCase
              itShould="backgroundColor: #00ADAD"
              children={
                <View style={styles.section}>
                  <Box style={styles.box} backgroundColor="#00ADAD"></Box>
                </View>
              }
              tags={['dev']}
            />
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

export default BoxTest;
