import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Column, Center, Heading, Divider} from 'native-base';
export function ColumnExample() {
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
      <ScrollView style={styles.content}>
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
