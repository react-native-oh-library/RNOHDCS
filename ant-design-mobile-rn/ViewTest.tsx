
import React from 'react';
import { View } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ViewTest">
      <TestCase itShould="render a view" tags={['C_API']}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
          <View style={{ backgroundColor: 'red', flex: 0.5 }} />
          <View>Hello World!</View>
        </View>
      </TestCase>
    </TestSuite>
  );
};