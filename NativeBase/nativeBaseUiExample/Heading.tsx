import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {VStack, Heading} from 'native-base';
export function HeadingExample() {
  return (
    <>
      <ScrollView style={styles.content}>
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
        <Heading isTruncated>
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Heading>
      </ScrollView>
    </>
  );
}
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
