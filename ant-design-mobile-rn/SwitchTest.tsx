
import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const sleep1s = () => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    });
  };

  const onChangeAsync = async (val: boolean) => {
    await sleep1s();
    setLoading(false);
    setChecked(val);
  }
  return (
    <TestSuite name="SwitchTest">
      <TestCase itShould="render a Switch checked={true}, checked={false}" tags={['C_API']}>
        <Switch checked />
        <Switch checked={false} />
      </TestCase>
      <TestCase itShould="render a Switch defaultChecked={true}, defaultChecked={false}" tags={['C_API']}>
        <Switch defaultChecked={true} />
        <Switch defaultChecked={false} />
      </TestCase>
      <TestCase itShould="render a Switch disabled={true}, disabled={false}" tags={['C_API']}>
        <Switch disabled={true} />
        <Switch disabled={false} />
      </TestCase>
      <TestCase itShould="render a Switch loading" tags={['C_API']}>
        <View>
          <Switch checked loading />
        </View>
      </TestCase>
      <TestCase itShould="render a Switch onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Switch
            loading={loading}
            checked={checked}
            onChange={(val: boolean) => {
              onChangeAsync(val);
              setState(true);
            }}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Switch color='red', color='yellow'" tags={['C_API']}>
        <Switch checked color="red" />
        <Switch checked color="yellow" />
      </TestCase>
      <TestCase itShould="render a Switch  checkedChildren='开'" tags={['C_API']}>
        <Switch
          checkedChildren="开"
          defaultChecked
        />
      </TestCase>
      <TestCase itShould="render a Switch  unCheckedChildren='关'" tags={['C_API']}>
        <Switch
          unCheckedChildren="关"
        />
      </TestCase>
    </TestSuite>
  );
};