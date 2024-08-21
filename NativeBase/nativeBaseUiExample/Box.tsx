import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import {Box} from 'native-base';

export function BoxExample() {
  const ref = useRef(null);

  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Box style={styles.box}>
            <Button key="button001" title="button"></Button>
            <Text>测试Text</Text>
            <View>测试View</View>
          </Box>
        </View>

        <View style={styles.section}>
          <Box style={styles.box} _text={{color: 'red'}}>
            测试text
          </Box>
        </View>

        <View style={styles.section}>
          <Box style={styles.box} bg="#87CEFA"></Box>
          <Box style={styles.box} background="#87CEFA"></Box>
          <Box
            style={styles.box}
            backgroundColor="#87CEFA"
            safeAreaProps={{
              safeAreaTop: 10,
              safeAreaBottom: 10,
              safeAreaLeft: 20,
              safeAreaRight: 20,
            }}></Box>
        </View>
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
