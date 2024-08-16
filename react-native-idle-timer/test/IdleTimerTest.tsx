import {Button, SafeAreaView } from 'react-native';
import IdleTimerManager from 'react-native-idle-timer';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
// export default IdleTimerExample;
const IdleTimerTest=()=>{
    return <SafeAreaView>
      <Tester>
      <TestSuite name="test idle_timer">
        <TestCase itShould="keep screen on">
          <Button title="Disable Idle Timer" onPress={()=>{alert('Idle timer disabled');IdleTimerManager.setIdleTimerDisabled(true);}} />
        </TestCase>
        <TestCase itShould="keep screen off">
          <Button title="Enable Idle Timer" onPress={()=>{alert('Idle timer enabled');IdleTimerManager.setIdleTimerDisabled(false);}} />
        </TestCase>
      </TestSuite>
    </Tester>
    </SafeAreaView>
};

export default IdleTimerTest;