import * as React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

import { ToggleButton, List, MD2Colors, Button } from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { useRef } from 'react';


type ToggleButtonStatus = {
  [key: string]: string ;
};

function ToggleButtonDemo() { 
  const [status, setStatus] = React.useState<ToggleButtonStatus>({});
  const _getStatus = (name: string) => status[name] ? 'unchecked' : 'checked';
  const _showStatus = (name: string) => () =>
  setStatus({ ...status, [name]: status[name] === 'checked' ? 'unchecked' : 'checked' });
  
  const ToggleButtonProps = [
    {
      key: ' ToggleButton style:icon ={"bluetooth"}',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton")
      }
    },
    {
      key: ' ToggleButton style:size ={40}',
      value: {
        icon:"bluetooth",
        size:40,
        value:"bluetooth",
        status:_getStatus("ToggleButton1") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton1")
      }
    },
    {
      key: ' ToggleButton style:size ={60}',
      value: {
        icon:"bluetooth",
        size:60,
        value:"bluetooth",
        status:_getStatus("ToggleButton2") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton2")
      }
    },
    {
      key: ' ToggleButton style:iconColor ={MD2Colors.red100}',
      value: {
        icon:"bluetooth",
        iconColor:MD2Colors.red100,
        value:"bluetooth",
        status:_getStatus("ToggleButton3") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton3")
      }
    },
    {
      key: ' ToggleButton style:value ={"bluetooth"}',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton4") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton4")
      }
    },
    
    {
      key: ' ToggleButton style:value ={"bluetooth1"}',
      value: {
        icon:"bluetooth",
        value:"bluetooth1",
        status:_getStatus("ToggleButton5") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton5")
      }
    },
    {
      key: ' ToggleButton style:iconColor ={MD2Colors.blue100}',
      value: {
        icon:"bluetooth",
        iconColor:MD2Colors.blue100,
        value:"bluetooth",
        status:_getStatus("ToggleButton6") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton6")
      }
    },
    {
      key: ' ToggleButton style:rippleColor ={MD2Colors.blue100}',
      value: {
        icon:"bluetooth",
        rippleColor:MD2Colors.blue100,
        value:"bluetooth",
        status:_getStatus("ToggleButton7") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton7")
      }
    },
    {
      key: ' ToggleButton style:disabled ={true}',
      value: {
        icon:"bluetooth",
        disabled:true,
        value:"bluetooth",
        status:_getStatus("ToggleButton7") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton7")
      }
    },
    {
      key: ' ToggleButton style:disabled ={false}',
      value: {
        icon:"bluetooth",
        disabled:false,
        value:"bluetooth",
        status:_getStatus("ToggleButton7") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton7")
      }
    },
    {
      key: ' ToggleButton style:accessibilityLabel ={"accessibilityLabel"}',
      value: {
        icon:"bluetooth",
        accessibilityLabel:"accessibilityLabel",
        value:"bluetooth",
        status:_getStatus("ToggleButton7") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton7")
      }
    },
    {
      key: ' ToggleButton style:accessibilityLabel ={"accessibilityLabe1l"}',
      value: {
        icon:"bluetooth",
        accessibilityLabel:"accessibilityLabe0l",
        value:"bluetooth",
        status:_getStatus("ToggleButton8") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton8")
      }
    },
    {
      key: ' ToggleButton fuction:onPress ={_showStatus("ToggleButton9")}',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton9") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton9")
      }
    },
    {
      key: ' ToggleButton fuction:status ={_getStatus("ToggleButton9")}',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton9") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton9")
      }
    },
    {
      key: ' ToggleButton style:theme ={ colors: { primary:"green"} }',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton9") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton9"),
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' ToggleButton style:testID = {"ToggleButton"},',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton9") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton9"),
        testID:'ToggleButton',
      }
    },
    {
      key: ' ToggleButton style:testID = {"ToggleButton1"},',
      value: {
        icon:"bluetooth",
        value:"bluetooth",
        status:_getStatus("ToggleButton9") as 'checked' | 'unchecked',
        onPress:_showStatus("ToggleButton9"),
        testID:'ToggleButton1',
      }
    },
  ]

  const viewRef = useRef(null); 
  // 你可以使用这个ref来访问View组件，例如测量其尺寸  
  const measureView = () => {  
    if (viewRef.current) {  
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }  
  };  

  const [value, setValue] = React.useState('left')

  const ToggleButtonGroupProps = [
    {
      key: ' ToggleButton.Group fuction:onValueChange ={value => setValue(value)}  value ={value}',
      value: {
      }
    },
  ]

  const ToggleButtonRowGroupProps = [
    {
      key: ' ToggleButton.Row fuction:onValueChange ={value => setValue(value)}  value ={value}',
      value: {
      }
    },
  ]

  
  return (
    <Tester>
      <ScrollView>
      <TestSuite name='ToggleButton' >
         <TestCase itShould={'ToggleButton style:ref={viewRef}'}  >
         <ToggleButton
            icon="bluetooth"
            value="bluetooth"
            ref={viewRef}
            status={'checked'}/>
         <Button onPress={measureView} >Press me</Button>  
         </TestCase>
        {ToggleButtonProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                  <ToggleButton {...item.value}/>
              </TestCase>
            );
          })},
        {ToggleButtonGroupProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <ToggleButton.Group
                  onValueChange={value => setValue(value)}
                  value={value}>
                  <ToggleButton icon="format-align-left" value="left" />
                  <ToggleButton icon="format-align-right" value="right" />
                </ToggleButton.Group>
              </TestCase>
            );
          })},
         {ToggleButtonRowGroupProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                  <ToggleButton icon="format-align-left" value="left" />
                  <ToggleButton icon="format-align-right" value="right" />
                </ToggleButton.Row>
              </TestCase>
            );
          })},
       </TestSuite>
      </ScrollView>
    </Tester>
  )
}


const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  customImage: {
    width: 143,
    height: 153,
    margin: 2,
  },
  customButton: {
    position: 'absolute',
    right: 0,
  },
});

export default ToggleButtonDemo;