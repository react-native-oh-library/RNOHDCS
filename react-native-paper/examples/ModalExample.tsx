import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider, MD2Colors } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { ScrollView } from 'react-native-harmony';

type ModalVisibility = {
  [key: string]: boolean | undefined;
};

function ModalDemo() { 
  const [visible, setVisible] = React.useState<ModalVisibility>({});
  const _getVisible = (name: string) => !!visible[name];
  const _showModal = (name: string) => () =>
  setVisible({ ...visible, [name]: !visible[name] });

  const _hideModal =(name: string) => () => 
  setVisible({ ...visible, [name]: !visible[name] });

  const containerStyle = {backgroundColor: 'white', padding: 20, height:200};


  const ModalProps = [
    {
      key: ' Menu style:visible={getVisible("menu1")}(点击Show可切换visible值为true)',
      value: {
        visible :_getVisible('Modal1'),
        onDismiss:_showModal('Modal1'),
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal1'),
      }
    },
    {
      key: ' Menu style:dismissable={true}',
      value: {
        visible :_getVisible('Modal2'),
        onDismiss:_showModal('Modal2'),
        dismissable:true,
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal2'),
      }
    },
    {
      key: ' Menu style:dismissable={false}',
      value: {
        visible :_getVisible('Modal3'),
        onDismiss:_showModal('Modal3'),
        dismissable:false,
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal3'),
      },
      textValue:{
        onPress:_showModal('Modal3')
      }
    },
    {
      key: ' Menu style:dismissableBackButton={false}',
      value: {
        visible :_getVisible('Modal4'),
        onDismiss:_showModal('Modal4'),
        dismissableBackButton:false,
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal4'),
      }
    },
    {
      key: ' Menu style:dismissableBackButton={true}',
      value: {
        visible :_getVisible('Modal5'),
        onDismiss:_showModal('Modal5'),
        dismissableBackButton:true,
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal5'),
      }
    },
    {
      key: ' Menu style:contentContainerStyle={containerStyle}',
      value: {
        visible :_getVisible('Modal6'),
        onDismiss:_showModal('Modal6'),
        contentContainerStyle:containerStyle
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal6'),
      }
    },
    {
      key: ' Menu style:style={backgroundColor:MD2Colors.red100}',
      value: {
        visible :_getVisible('Modal7'),
        onDismiss:_showModal('Modal7'),
        contentContainerStyle:containerStyle,
        style:{backgroundColor:MD2Colors.red100},
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal7'),
      }
    },
    {
      key: ' Menu style:theme={ colors: { primary: "green" } }',
      value: {
        visible :_getVisible('Modal8'),
        onDismiss:_showModal('Modal8'),
        contentContainerStyle:containerStyle,
        theme :{ colors: { primary: 'green' } }
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal8'),
      }
    },
    {
      key: ' Menu style:testID={"Menu1"}',
      value: {
        visible :_getVisible('Modal9'),
        onDismiss:_showModal('Modal9'),
        contentContainerStyle:containerStyle,
        testID :'Menu1'
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal9'),
      }
    }
    ,
    {
      key: ' Menu style:testID={"Menu2"}',
      value: {
        visible :_getVisible('Modal10'),
        onDismiss:_showModal('Modal10'),
        contentContainerStyle:containerStyle,
        testID :'Menu2'
      },
      buttonValue:{
        style:{marginTop: 30},
        onPress:_showModal('Modal10'),
      }
    }
  ]

  return (
    <ScrollView>
       <Tester>
        <TestSuite name='ModalText'>
          {ModalProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                    <Portal>
                      <Modal {...item.value}>
                        <Text {...item.textValue}>Example Modal.  Click outside this area to dismiss.</Text>
                      </Modal>
                    </Portal>
                    <Button {...item.buttonValue}>
                      Show
                    </Button>
                </TestCase>
              );
            })},
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}
export default ModalDemo;