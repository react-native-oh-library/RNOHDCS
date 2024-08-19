import React from 'react';
import { StyleSheet, Text,Button,Platform,View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import { FastImagePreloadExample } from './FastImagePreloadExample';
import { FastImageProgressExample } from './FastImageProgressExample';
import { FastImageErrorExample } from './FastImageErrorExample';

export function FastImageMothodDemo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Tester>
        <ScrollView>
          <FastImageProgressExample></FastImageProgressExample>
          <FastImageErrorExample></FastImageErrorExample>
            
          <TestSuite name="static mothod">
            <TestCase itShould='preload'><FastImagePreloadExample/></TestCase>
            <TestCase itShould="清除图片磁盘缓存"
              initialState={false}
              arrange={({setState}) => <Button title="清除图片磁盘缓存" onPress={
                () => { FastImage.clearDiskCache()
                                  .then(()=>{setState(true);console.log('清除图片磁盘缓存完成'); })
                                  .catch(()=>{ setState(false) });console.log('清除图片磁盘缓存失败'); }}></Button> }
              assert={({state, expect}) => { expect(state).to.be.true; }} 
            />
            <TestCase itShould="清除图片内存缓存"
              initialState={false}
              arrange={({setState}) => <Button title="清除图片内存缓存" onPress={
                () => { FastImage.clearMemoryCache()
                                  .then(()=>{setState(true);console.log('清除图片内存缓存完成'); })
                                  .catch(()=>{ setState(false) });console.log('清除图片内存缓存失败'); }}></Button> }
              assert={({state, expect}) => { expect(state).to.be.true; }} 
            />
          </TestSuite>
        </ScrollView>
      </Tester>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  item: {
    paddingLeft: 30,
    width: '100%',
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
  },
  label: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
  },
  label2: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
});