
import React from 'react';
import { View } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ViewTest">
      <TestCase itShould="render a view style={{ height: 100,width:100,backgroundColor:'red'}}" tags={['C_API']}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red'
          }}>
        </View>
      </TestCase>
      <TestCase itShould="render a view children={{width:50,height:50,backgroundColor:'blue'}}" tags={['C_API']}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'pink'
          }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
        </View>
      </TestCase>
    </TestSuite>
  );
};