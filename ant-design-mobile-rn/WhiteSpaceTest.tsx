
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const PlaceHolder = (props: any) => (
    <View
      style={{
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}>
      <Text style={{ color: '#bbb' }}>Block</Text>
    </View>
  )
  return (
    <TestSuite name="WhiteSpaceTest">
      <TestCase itShould="render a WhiteSpace size=xs" tags={['C_API']}>
        <WhiteSpace size="xs" />
        <PlaceHolder />
      </TestCase>
      <TestCase itShould="render a WhiteSpace size=sm" tags={['C_API']}>
        <WhiteSpace size="sm" />
        <PlaceHolder />
      </TestCase>
      <TestCase itShould="render a WhiteSpace size=md" tags={['C_API']}>
        <WhiteSpace />
        <PlaceHolder />
      </TestCase>
      <TestCase itShould="render a WhiteSpace size=lg" tags={['C_API']}>
        <WhiteSpace size="lg" />
        <PlaceHolder />
      </TestCase>
      <TestCase itShould="render a WhiteSpace size=xl" tags={['C_API']}>
        <WhiteSpace size="xl" />
        <PlaceHolder />
      </TestCase>
    </TestSuite>
  );
};