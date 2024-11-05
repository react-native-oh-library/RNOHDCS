import * as React from 'react';
import {Switch,MD2Colors} from 'react-native-paper'
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { ScrollView } from 'react-native-harmony';


type SwitchVisibility = {
  [key: string]: boolean | undefined;
};

function SwitchDemo() { 
  const [visible, setVisible] = React.useState<SwitchVisibility>({});
  const _getVisible = (name: string) => !!visible[name];
  const _showSwitch = (name: string) => () =>
  setVisible({ ...visible, [name]: !visible[name] });

  const SwitchProps = [
    {
      key: ' Switch style:value ={_getVisible("Switch")}',
      value: {
        value:_getVisible('Switch'),
        onValueChange:_showSwitch('Switch')
      }
    },
    {
      key: ' Switch fuction:onValueChange ={_showSwitch("Switch1")}',
      value: {
        value:_getVisible('Switch1'),
        onValueChange:_showSwitch('Switch1')
      }
    },
    {
      key: ' Switch style:disabled ={true}',
      value: {
        value:_getVisible('Switch2'),
        onValueChange:_showSwitch('Switch2'),
        disabled:true
      }
    },
    {
      key: ' Switch style:disabled ={false}',
      value: {
        value:_getVisible('Switch3'),
        onValueChange:_showSwitch('Switch3'),
        disabled:false
      }
    },
    {
      key: ' Switch style:color ={MD2Colors.red100}',
      value: {
        value:_getVisible('Switch3'),
        onValueChange:_showSwitch('Switch3'),
        color:MD2Colors.red100
      }
    },
    {
      key: ' Switch style:style ={MD2Colors.blue100}',
      value: {
        value:_getVisible('Switch4'),
        onValueChange:_showSwitch('Switch4'),
        style:{backgroundColor:MD2Colors.blue100},
      }
    },
    {
      key: ' Switch style:theme ={ colors: { primary:"green"} }',
      value: {
        value:_getVisible('Switch5'),
        onValueChange:_showSwitch('Switch5'),
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' Switch style:theme ={ colors: { primary:"red"} }',
      value: {
        value:_getVisible('Switch5'),
        onValueChange:_showSwitch('Switch5'),
        theme:{ colors: { primary: 'red' } }
      }
    },
  ]

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='Snackbar' >
        {SwitchProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                 <Switch {...item.value}/>;
            </TestCase>
          );
        })},
        </TestSuite>
    </Tester>
    </ScrollView>
  )
}


export default SwitchDemo ;