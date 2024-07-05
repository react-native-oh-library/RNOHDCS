import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import KeepAwake, { activateKeepAwake, deactivateKeepAwake, useKeepAwake } from 'react-native-keep-awake'


export const KeepAwakeExample = () => {
  const [state, setState] = useState("当前默认常亮");

  useKeepAwake();

  return (
    <Tester>
      <TestSuite name="KeepAwake open">

        <TestCase
          tags={['C_API']}
          itShould="KeepAwake open use new functions">
          <TouchableOpacity onPress={() => {
            activateKeepAwake();
            setState('当前常亮');
          }}>
            <Text>KeepAwake open use new functions</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase
          tags={['C_API']}
          itShould="KeepAwake open use old functions">
          <TouchableOpacity onPress={() => {
            KeepAwake.activate();
            setState('当前常亮');
          }}>
            <Text>KeepAwake open use old functions</Text>
          </TouchableOpacity>
        </TestCase>
      </TestSuite>

      <TestSuite name="KeepAwake close">

        <TestCase
          tags={['C_API']}
          itShould="KeepAwake close use new functions">
          <TouchableOpacity onPress={() => {
            deactivateKeepAwake();
            setState('当前不常亮');
          }}>
            <Text>KeepAwake close use new functions</Text>
          </TouchableOpacity>
        </TestCase>

        <TestCase
          tags={['C_API']}
          itShould="KeepAwake close use old functions">
          <TouchableOpacity onPress={() => {
            KeepAwake.deactivate();
            setState('当前不常亮');
          }}>
            <Text>KeepAwake close use old functions</Text>
          </TouchableOpacity>
        </TestCase>
      </TestSuite>

      <TestSuite name="当前屏幕状态">
        <TestCase
          tags={['C_API']}
          itShould="当前屏幕状态">
          <Text>{state}</Text>
        </TestCase>
      </TestSuite>

    </Tester>
  );
};
