import React from 'react';
import { View, Text } from 'react-native';
import { Portal, Button, Icon } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  let key: number;
  const contents = (
    <View style={{ backgroundColor: 'green', padding: 20, width: '100%', height: 200, marginTop: 200 }}>
      <Button
        onPress={() => {
          Portal.remove(key)
        }}
        type="primary"
        style={{
          position: 'absolute',
          top: 50,
          right: 0,
        }}>
        <Icon name="close-circle" />
      </Button>
      <View>
        <Text>自定义Portal</Text>
      </View>
    </View>
  )
  return (
    <TestSuite name="PortalTest">
      <TestCase itShould="render a Portal" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Button
            onPress={() => {
              key = Portal.add(contents);
              setState(true);
            }}>
            {'Open Portal'}
          </Button>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};
