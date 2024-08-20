import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  MD2Colors,
  RadioButton,
  Text,
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';;

type State = 'normal' | 'normal-ios' | 'normal-item' | 'custom';
type status ='checked' | 'unchecked'

type RadioButtonStatus = {
  [key: string]: string ;
};

const RadioButtonExample = () => {

  const [status, setStatus] = React.useState<RadioButtonStatus>({});
  const _getStatus = (name: string) => status[name] ? 'unchecked' : 'checked';
  const _showStatus = (name: string) => () =>
  setStatus({ ...status, [name]: status[name] === 'checked' ? 'unchecked' : 'checked' });

  const RadioButtonProps = [
    {
      key: 'RadioButton style:value ={"first"}',
      value: {
        value:"first",
        status:_getStatus("RadioButton") as status,
        onPress:_showStatus("RadioButton")
      }
    },
    {
      key: 'RadioButton style:value ={"second"}',
      value: {
        value:"second",
        status:_getStatus("RadioButton1") as status,
        onPress:_showStatus("RadioButton1")
      }
    },
    {
      key: 'RadioButton style:disabled ={true}',
      value: {
        value:"second",
        disabled:true,
        status:_getStatus("RadioButton2") as status,
        onPress:_showStatus("RadioButton2")
      }
    },
    {
      key: 'RadioButton style:disabled ={false}',
      value: {
        value:"second",
        disabled:false,
        status:_getStatus("RadioButton3") as status,
        onPress:_showStatus("RadioButton3")
      }
    },
    {
      key: 'RadioButton fuction:onPress ={_showStatus("RadioButton3")}',
      value: {
        value:"second",
        status:_getStatus("RadioButton4") as status,
        onPress:_showStatus("RadioButton4")
      }
    },
    {
      key: 'RadioButton style:uncheckedColor ={MD2Colors.red100}',
      value: {
        value:"second",
        uncheckedColor:MD2Colors.red100,
        status:_getStatus("RadioButton4") as status,
        onPress:_showStatus("RadioButton4")
      }
    },
    {
      key: 'RadioButton style:uncheckedColor ={MD2Colors.blue100}',
      value: {
        value:"second",
        uncheckedColor:MD2Colors.blue100,
        status:_getStatus("RadioButton5") as status,
        onPress:_showStatus("RadioButton5")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.red100}',
      value: {
        value:"second",
        color:MD2Colors.red100,
        status:_getStatus("RadioButton6") as status,
        onPress:_showStatus("RadioButton6")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.blue100}',
      value: {
        value:"second",
        color:MD2Colors.blue100,
        status:_getStatus("RadioButton7") as status,
        onPress:_showStatus("RadioButton7")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.blue100}',
      value: {
        value:"second",
        color:MD2Colors.blue100,
        status:_getStatus("RadioButton8") as status,
        onPress:_showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:theme ={ colors: { primary: "green"} }',
      value: {
        value:"second",
        theme:{ colors: { primary: 'green' } },
        status:_getStatus("RadioButton8") as status,
        onPress:_showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:testID ={ "RadioButton" }',
      value: {
        value:"second",
        testID:'RadioButton',
        status:_getStatus("RadioButton8") as status,
        onPress:_showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:testID ={ "RadioButton1" }',
      value: {
        value:"second",
        testID:'RadioButton1',
        status:_getStatus("RadioButton8") as status,
        onPress:_showStatus("RadioButton8")
      }
    },
  ]

  const [value, setValue] = React.useState('first');
  
  const RadioButtonGroupProps = [
    {
      key: 'RadioButtonGroup style:onValueChange={newValue => setValue(newValue)} value={value}',
      value: {

      }
    },
  ]

  const _onPress = () => {
    console.info('fuction onPress')

  }
  const _onLongPress = () => {
    console.info('fuction onLongPress')

  }

  const RadioButtonItemProps = [
    {
      key: 'RadioButtonGroup style:value={"first"}',
      value: {
        label:'First item',
        value:'first'
      }
    },
    {
      key: 'RadioButtonGroup style:value={"Second "}',
      value: {
        label:'Second  item',
        value:'Second '
      }
    },
    {
      key: 'RadioButtonGroup style:label ={"first item"}',
      value: {
        label:'First item',
        value:'first'
      }
    },
    {
      key: 'RadioButtonGroup style:label={"Second  item"}',
      value: {
        label:'Second  item',
        value:'Second '
      }
    },
    {
      key: 'RadioButtonGroup style:disabled={true}',
      value: {
        label:'First item',
        value:'first',
        disabled:true
      }
    },
    {
      key: 'RadioButtonGroup style:disabled={false}',
      value: {
        label:'First item',
        value:'first',
        disabled:false
      }
    },
    {
      key: 'RadioButtonGroup style:background={color:MD2Colors.red100}(该属性仅限于Android)',
      value: {
        label:'First item',
        value:'first',
        background:{color:MD2Colors.red100}
      }
    },
    {
      key: 'RadioButtonGroup fuction:onPress={_onPress}',
      value: {
        label:'First item',
        value:'first',
        onPress:_onPress,
      }
    },
    {
      key: 'RadioButtonGroup fuction:onLongPress={_onLongPress}',
      value: {
        label:'First item',
        value:'first',
        onLongPress:_onLongPress,
      }
    },
    {
      key: 'RadioButtonGroup style:accessibilityLabel={"accessibilityLabel"}',
      value: {
        label:'First item',
        value:'first',
        accessibilityLabel:"accessibilityLabel",
      }
    },
    {
      key: 'RadioButtonGroup style:uncheckedColor={MD2Colors.red100}',
      value: {
        label:'First item',
        value:'first',
        uncheckedColor:MD2Colors.red100
      }
    },
    {
      key: 'RadioButtonGroup style:color={MD2Colors.red100}',
      value: {
        label:'First item',
        value:'first',
        color:MD2Colors.red100
      }
    },
    {
      key: 'RadioButtonGroup style:rippleColor={MD2Colors.red100}',
      value: {
        label:'First item',
        value:'first',
        rippleColor:MD2Colors.red100
      }
    },
    {
      key: 'RadioButtonGroup style:status={"checked"}',
      value: {
        label:'First item',
        value:'first',
        status:'checked' as 'checked' | 'unchecked'
      }
    },
    {
      key: 'RadioButtonGroup style:status={"unchecked"}',
      value: {
        label:'First item',
        value:'first',
        status:'unchecked' as 'checked' | 'unchecked'
      }
    },
    {
      key: 'RadioButtonGroup style:{backgroundColor:MD2Colors.blue100}',
      value: {
        label:'First item',
        value:'first',
        style:{backgroundColor:MD2Colors.blue100},
      }
    },
    {
      key: 'RadioButtonGroup labelStyle:{backgroundColor:MD2Colors.blue100}',
      value: {
        label:'First item',
        value:'first',
        labelStyle:{backgroundColor:MD2Colors.blue100},
      }
    },
    {
      key: 'RadioButtonGroup labelVariant:{"bodyLarge"}',
      value: {
        label:'First item',
        value:'first',
        labelVariant :'bodyLarge' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonGroup labelVariant:{"bodyMedium"}',
      value: {
        label:'First item',
        value:'first',
        labelVariant :'bodyMedium' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonGroup labelVariant:{"bodySmall"}',
      value: {
        label:'First item',
        value:'first',
        labelVariant :'bodySmall' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonGroup style:labelMaxFontSizeMultiplier={1}',
      value: {
        label:'First item',
        value:'first',
        labelMaxFontSizeMultiplier :1,
      }
    },
    {
      key: 'RadioButtonGroup style:labelMaxFontSizeMultiplier={2}',
      value: {
        label:'First item',
        value:'first',
        labelMaxFontSizeMultiplier :2,
      }
    },
    {
      key: 'RadioButtonGroup style:theme = { colors: { primary: "green" } }',
      value: {
        label:'First item',
        value:'first',
        theme :{ colors: { primary: 'green' } },
      }
    },
    {
      key: 'RadioButtonGroup style:testID = { "RadioButtonGroup" }',
      value: {
        label:'First item',
        value:'first',
        testID :'RadioButtonGroup',
      }
    },
    {
      key: 'RadioButtonGroup style:testID = { "RadioButtonGroup1" }',
      value: {
        label:'First item',
        value:'first',
        testID :'RadioButtonGroup1',
      }
    },
    {
      key: 'RadioButtonGroup style:mode = { "android" }',
      value: {
        label:'First item',
        value:'first',
        mode :'android' as 'android' | 'ios',
      }
    },
    {
      key: 'RadioButtonGroup style:mode = { "ios" }',
      value: {
        label:'First item',
        value:'first',
        mode :'ios' as 'android' | 'ios',
      }
    },
    {
      key: 'RadioButtonGroup style:position = { "leading" }',
      value: {
        label:'First item',
        value:'first',
        position :'leading' as 'leading' | 'trailing'
      }
    },
    {
      key: 'RadioButtonGroup style:position = { "trailing" }',
      value: {
        label:'First item',
        value:'first',
        position :'trailing' as 'leading' | 'trailing'
      }
    },
  ]


  return (
    <ScrollView>
    <Tester>
      <TestSuite name='RadioButton' >
      {RadioButtonProps.map((item) => {
      return (
        <TestCase itShould={item.key}  key={item.key}>
          <RadioButton {...item.value}/>
        </TestCase>
        );
      })},
      {RadioButtonGroupProps.map((item) => {
      return (
        <TestCase itShould={item.key}  key={item.key}>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View>
              <Text>First</Text>
              <RadioButton value="first" />
            </View>
            <View>
              <Text>Second</Text>
              <RadioButton value="second" />
            </View>
          </RadioButton.Group>
        </TestCase>
        );
      })},
      {RadioButtonItemProps.map((item) => {
      return (
        <TestCase itShould={item.key}  key={item.key}>
          <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item {...item.value} />
          </RadioButton.Group>
        </TestCase>
        );
      })},
      </TestSuite>
    </Tester>
    </ScrollView>
  );
};

RadioButtonExample.title = 'Radio Button';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default RadioButtonExample;