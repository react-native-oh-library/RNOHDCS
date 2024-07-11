
import React from 'react';
import { View, Text } from 'react-native';
import { WingBlank } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const PlaceHolder = (props: any) => (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}>
      <Text style={{ color: '#bbb' }}>Block</Text>
    </View>
  )
  return (
    <TestSuite name="WingBlankTest">
      <TestCase itShould="render a WingBlank size=lg" tags={['C_API']}>
        <WingBlank>
          <PlaceHolder />
        </WingBlank>
      </TestCase>
      <TestCase itShould="render a WingBlank size=md" tags={['C_API']}>
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>
      </TestCase>
      <TestCase itShould="render a WingBlank size=sm" tags={['C_API']}>
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </TestCase>
    </TestSuite>
  );
};