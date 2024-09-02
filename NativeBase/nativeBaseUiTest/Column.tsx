import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Column, Center, Heading, Divider} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
export function ColumnTest() {
  const getExampleColumn = (examplePara: Object) => {
    return (
      <Column {...examplePara} space={4} alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
      </Column>
    );
  };
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="direction">
            <TestCase itShould="direction" tags={['dev']}>
              <Heading size="md">column</Heading>
              {getExampleColumn({direction: 'column'})}
              <Divider />
              <Heading size="md">column-reverse</Heading>
              {getExampleColumn({direction: 'column-reverse'})}
              <Divider />
              <Heading size="md">row</Heading>
              {getExampleColumn({direction: 'row'})}
              <Divider />
              <Heading size="md">row-reverse</Heading>
              {getExampleColumn({direction: 'row-reverse'})}
              <Divider />
              <Heading size="md">column</Heading>
              {getExampleColumn({direction: 'column'})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="divider">
            <TestCase itShould="divider" tags={['dev']}>
              {getExampleColumn({divider: <Divider />})}
            </TestCase>
          </TestSuite>
          <TestSuite name="space">
            <TestCase itShould="space" tags={['dev']}>
              <Heading size="md">md</Heading>
              {getExampleColumn({space: 'md'})}
              <Divider />
              <Heading size="md">xs</Heading>
              {getExampleColumn({space: 'xs'})}
              <Divider />
              <Heading size="md">lg</Heading>
              {getExampleColumn({space: 'lg'})}
              <Divider />
              <Heading size="md">number</Heading>
              {getExampleColumn({space: 4})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="reversed">
            <TestCase itShould="reversed" tags={['dev']}>
              <Heading size="md">reversed:true</Heading>
              {getExampleColumn({reversed: true})}
              <Divider />
              <Heading size="md">reversed:false</Heading>
              {getExampleColumn({reversed: false})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="isHovered">
            <TestCase itShould="isHovered" tags={['dev']}>
              <Heading size="md">isHovered:false</Heading>
              {getExampleColumn({isHovered: false})}
              <Divider />
              <Heading size="md">isHovered:true</Heading>
              {getExampleColumn({isHovered: true})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="isFocused">
            <TestCase itShould="isFocused" tags={['dev']}>
              <Heading size="md">isFocused:false</Heading>
              {getExampleColumn({isFocused: false})}
              <Divider />
              <Heading size="md">isFocused:true</Heading>
              {getExampleColumn({isFocused: true})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <Heading size="md">isDisabled:false</Heading>
              {getExampleColumn({isDisabled: false})}
              <Divider />
              <Heading size="md">isDisabled:true</Heading>
              {getExampleColumn({isDisabled: true})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="isInvalid">
            <TestCase itShould="isInvalid" tags={['dev']}>
              <Heading size="md">isInvalid:false</Heading>
              {getExampleColumn({isInvalid: false})}
              <Divider />
              <Heading size="md">isInvalid:true</Heading>
              {getExampleColumn({isInvalid: true})}
              <Divider />
            </TestCase>
          </TestSuite>
          <TestSuite name="isReadOnly">
            <TestCase itShould="isReadOnly" tags={['dev']}>
              <Heading size="md">isReadOnly:false</Heading>
              {getExampleColumn({isReadOnly: false})}
              <Divider />
              <Heading size="md">isReadOnly:true</Heading>
              {getExampleColumn({isReadOnly: true})}
              <Divider />
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
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
