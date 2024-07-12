import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function ModalDemo() { 
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <Tester>
    <TestSuite name='ModalText'>
        <TestCase itShould='Default'>
        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
        </TestCase>
     </TestSuite>
  </Tester>
  )
}
export default ModalDemo;