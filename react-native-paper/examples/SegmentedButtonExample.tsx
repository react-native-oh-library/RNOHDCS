import * as React from 'react';
import { List} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { SegmentedButtonDefault,SegmentedButtonCustomColorCheck,SegmentedButtonDisabled,SegmentedButtonMultiselect} from './SegementedButtons';
import { ScrollView } from 'react-native-harmony';

function SegmentedButtonDemo() { 
  return (
    <Tester>
      <ScrollView>
      <TestSuite name='SegmentedButton' >
          <TestCase itShould='Segmented Button'>
            <SegmentedButtonDefault></SegmentedButtonDefault>
          </TestCase>

          <TestCase itShould='Segmented Button - Custom Colors'>
            <SegmentedButtonCustomColorCheck></SegmentedButtonCustomColorCheck>
          </TestCase>

          <TestCase itShould='Segmented Button - disabled'>
            <SegmentedButtonDisabled></SegmentedButtonDisabled>
          </TestCase>

          <TestCase itShould='Segmented Button - disabled'>
            <SegmentedButtonMultiselect></SegmentedButtonMultiselect>
          </TestCase>
      </TestSuite>
      </ScrollView>  
    </Tester>
  )
}

export default SegmentedButtonDemo;