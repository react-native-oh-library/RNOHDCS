import {Button, Text, View, Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export function RestartDemoTester() {
  return (
    <Tester>
      <TestSuite name="restart">
        <TestCase tags={['C_API']} itShould="restart">
          <Button title="重启(restart)" onPress={() => RNRestart.restart()} />
        </TestCase>
        <TestCase tags={['C_API']} itShould="Restart">
          <Button title="重启(Restart)" onPress={() => RNRestart.Restart()} />
        </TestCase>
      </TestSuite>
    </Tester>
  );
}
