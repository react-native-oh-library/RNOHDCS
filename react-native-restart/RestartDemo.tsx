import {Button, Text, View, Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import {Tester, TestSuite} from '@rnoh/testerino';
import {TestCase} from '../../components/TestCase';

export default function RestartDemoTester() {
  return (
    <Tester>
      <TestSuite name="restart">
        <TestCase.Example tags={['C_API']} itShould="restart">
          <Button title="重启(restart)" onPress={() => RNRestart.restart()} />
        </TestCase.Example>
        <TestCase.Example tags={['C_API']} itShould="Restart">
          <Button title="重启(Restart)" onPress={() => RNRestart.Restart()} />
        </TestCase.Example>
      </TestSuite>
    </Tester>
  );
}
