import * as React from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Portal, Text, TouchableRipple } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function PortalDemo() {

  return (
    <ScrollView>
    <Tester>
     <TestSuite name='ModalText'>
        <TestCase itShould='Modal style:children<text> theme={}'>
          <Portal theme={{ colors: { primary: 'green' } }}>
            <Text>This is rendered at a different place</Text>
          </Portal>
        </TestCase>

        <TestCase itShould='Portal.Host style:children<text> theme={}'>
          <Portal.Host>
            <Text>Content of the app</Text>
          </Portal.Host>
        </TestCase>
     </TestSuite>
    </Tester>
    </ScrollView>
  )

}


export default PortalDemo;