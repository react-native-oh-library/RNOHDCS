import { TouchableOpacity, Text } from 'react-native';
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
import KeepAwake, { activateKeepAwake, deactivateKeepAwake, useKeepAwake } from 'react-native-keep-awake'


export const KeepAwakeExample = () => {
  useKeepAwake();

  return (
    <Tester>
      <TestSuite name="KeepAwake open">

        <TestCase.Example
          tags={['C_API']}
          itShould="KeepAwake open use new functions">
          <TouchableOpacity onPress={() => {
            activateKeepAwake();
          }}>
            <Text>KeepAwake open use new functions</Text>
          </TouchableOpacity>
        </TestCase.Example>

        <TestCase.Example
          tags={['C_API']}
          itShould="KeepAwake open use old functions">
          <TouchableOpacity onPress={() => {
            KeepAwake.activate();
          }}>
            <Text>KeepAwake open use old functions</Text>
          </TouchableOpacity>
        </TestCase.Example>
      </TestSuite>

      <TestSuite name="KeepAwake close">

        <TestCase.Example
          tags={['C_API']}
          itShould="KeepAwake close use new functions">
          <TouchableOpacity onPress={() => {
            deactivateKeepAwake();
          }}>
            <Text>KeepAwake close use new functions</Text>
          </TouchableOpacity>
        </TestCase.Example>

        <TestCase.Example
          tags={['C_API']}
          itShould="KeepAwake close use old functions">
          <TouchableOpacity onPress={() => {
            KeepAwake.deactivate();
          }}>
            <Text>KeepAwake close use old functions</Text>
          </TouchableOpacity>
        </TestCase.Example>
      </TestSuite>

    </Tester>
  );
};
