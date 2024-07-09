
import React from 'react';
import { View } from 'react-native';
import { Progress } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {

  return (
    <TestSuite name="ProgressTest">
      <TestCase itShould="render a Progress percent={90}" tags={['C_API']}>
        <Progress percent={90} />
      </TestCase>
      <TestCase itShould="render a Progress position='normal'" tags={['C_API']}>
        <Progress percent={90} position='normal' />
      </TestCase>
      <TestCase itShould="render a Progress unfilled=false" tags={['C_API']}>
        <View>
          <Progress percent={50} unfilled={false} />
        </View>
      </TestCase>
      <TestCase itShould="render a Progress barStyle={{ borderColor: 'pink' }}" tags={['C_API']}>
        <View>
          <Progress percent={50} barStyle={{ borderColor: 'pink' }} />
        </View>
      </TestCase>
      <TestCase itShould="render a Progress style={{ width: 300, backgroundColor: 'green' }}" tags={['C_API']}>
        <Progress percent={50} style={{ width: 300, backgroundColor: 'green' }} />
      </TestCase>
    </TestSuite>
  );
};
