import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {VStack, Heading} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const HeadingTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <VStack space={1} alignItems="center">
                <Heading size="xs">xs</Heading>
                <Heading size="sm">sm</Heading>
                <Heading size="md">md</Heading>
                <Heading size="lg">lg</Heading>
                <Heading size="xl">xl</Heading>
                <Heading size="2xl">2xl</Heading>
                <Heading size="3xl">3xl</Heading>
                <Heading size="4xl">4xl</Heading>
              </VStack>
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

export default HeadingTest;
