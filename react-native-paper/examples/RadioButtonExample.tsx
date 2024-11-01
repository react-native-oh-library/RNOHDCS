import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  MD2Colors,
  RadioButton,
  Text,
} from 'react-native-paper';

import { TestSuite, TestCase, Tester } from '@rnoh/testerino';;


type State = 'normal' | 'normal-ios' | 'normal-item' | 'custom';
type status = 'checked' | 'unchecked'

type RadioButtonStatus = {
  [key: string]: string;
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
        value: "first",
        status: _getStatus("RadioButton") as status,
        onPress: _showStatus("RadioButton")
      }
    },
    {
      key: 'RadioButton style:value ={"second"}',
      value: {
        value: "second",
        status: _getStatus("RadioButton1") as status,
        onPress: _showStatus("RadioButton1")
      }
    },
    {
      key: 'RadioButton style:disabled ={true}',
      value: {
        value: "second",
        disabled: true,
        status: _getStatus("RadioButton2") as status,
        onPress: _showStatus("RadioButton2")
      }
    },
    {
      key: 'RadioButton style:disabled ={false}',
      value: {
        value: "second",
        disabled: false,
        status: _getStatus("RadioButton3") as status,
        onPress: _showStatus("RadioButton3")
      }
    },
    {
      key: 'RadioButton fuction:onPress ={_showStatus("RadioButton3")}',
      value: {
        value: "second",
        status: _getStatus("RadioButton4") as status,
        onPress: _showStatus("RadioButton4")
      }
    },
    {
      key: 'RadioButton style:uncheckedColor ={MD2Colors.red100}',
      value: {
        value: "second",
        uncheckedColor: MD2Colors.red100,
        status: _getStatus("RadioButton4") as status,
        onPress: _showStatus("RadioButton4")
      }
    },
    {
      key: 'RadioButton style:uncheckedColor ={MD2Colors.blue100}',
      value: {
        value: "second",
        uncheckedColor: MD2Colors.blue100,
        status: _getStatus("RadioButton5") as status,
        onPress: _showStatus("RadioButton5")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.red100}',
      value: {
        value: "second",
        color: MD2Colors.red100,
        status: _getStatus("RadioButton6") as status,
        onPress: _showStatus("RadioButton6")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.blue100}',
      value: {
        value: "second",
        color: MD2Colors.blue100,
        status: _getStatus("RadioButton7") as status,
        onPress: _showStatus("RadioButton7")
      }
    },
    {
      key: 'RadioButton style:color ={MD2Colors.blue100}',
      value: {
        value: "second",
        color: MD2Colors.blue100,
        status: _getStatus("RadioButton8") as status,
        onPress: _showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:theme ={ colors: { primary: "green"} }',
      value: {
        value: "second",
        theme: { colors: { primary: 'green' } },
        status: _getStatus("RadioButton8") as status,
        onPress: _showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:testID ={ "RadioButton" }',
      value: {
        value: "second",
        testID: 'RadioButton',
        status: _getStatus("RadioButton8") as status,
        onPress: _showStatus("RadioButton8")
      }
    },
    {
      key: 'RadioButton style:testID ={ "RadioButton1" }',
      value: {
        value: "second",
        testID: 'RadioButton1',
        status: _getStatus("RadioButton8") as status,
        onPress: _showStatus("RadioButton8")
      }
    },
  ]

  const [value, setValue] = React.useState('first');

  const _onPress = () => {
    console.info('fuction onPress')
  }
  const _onLongPress = () => {
    console.info('fuction onLongPress')
  }

  const [unc, setunc] = React.useState('first');

  const RadioButtonItemProps = [
    {
      key: 'RadioButtonItem style:value={"first"}',
      value: {
        label: 'First item',
        value: 'first'
      }
    },
    {
      key: 'RadioButtonItem style:value={"Second "}',
      value: {
        label: 'Second  item',
        value: 'Second '
      }
    },
    {
      key: 'RadioButtonItem style:label ={"first item"}',
      value: {
        label: 'First item',
        value: 'first'
      }
    },
    {
      key: 'RadioButtonItem style:label={"Second  item"}',
      value: {
        label: 'Second  item',
        value: 'Second '
      }
    },
    {
      key: 'RadioButtonItem style:disabled={true}',
      value: {
        label: 'First item',
        value: 'first',
        disabled: true
      }
    },
    {
      key: 'RadioButtonItem style:disabled={false}',
      value: {
        label: 'First item',
        value: 'first',
        disabled: false
      }
    },
    {
      key: 'RadioButtonItem style:background={color:MD2Colors.red100}(该属性仅限于Android)',
      value: {
        label: 'First item',
        value: 'first',
        background: { color: MD2Colors.red100 }
      }
    },
    {
      key: 'RadioButtonItem fuction:onPress={_onPress}',
      value: {
        label: 'First item',
        value: 'first',
        onPress: _onPress,
      },
      customRender: <>
        <RadioButton.Item label='checked demo' value='1' status='checked' onPress={() => {
          console.log('RadioButton.Item onPress!')
        }}></RadioButton.Item>
      </>
    },
    {
      key: 'RadioButtonItem fuction:onLongPress={_onLongPress}',
      value: {
        label: 'First item',
        value: 'first',
        onLongPress: _onLongPress,
      },
      customRender: <>
        <RadioButton.Item label='checked demo' value='2' status='checked' onLongPress={() => {
          console.log('RadioButton.Item onLongPress!')
        }}></RadioButton.Item>
      </>
    },
    {
      key: 'RadioButtonItem style:accessibilityLabel={"accessibilityLabel"}',
      value: {
        label: 'First item',
        value: 'first',
        accessibilityLabel: "accessibilityLabel",
      }
    },
    {
      key: 'RadioButtonItem style:uncheckedColor={MD2Colors.red800}',
      value: {
        label: 'First item',
        value: 'first',
        uncheckedColor: MD2Colors.red100
      },
      customRender: <>
        <RadioButton.Group onValueChange={value => setunc(value)} value={unc}>
          <RadioButton.Item label="First item" value="first" uncheckedColor={MD2Colors.red800} />
          <RadioButton.Item label="Second item" value="second" uncheckedColor={MD2Colors.red800} />
        </RadioButton.Group>
      </>
    },
    {
      key: 'RadioButtonItem style:color={MD2Colors.red100}',
      value: {
        label: 'First item',
        value: 'first',
        color: MD2Colors.red100
      }
    },
    {
      key: 'RadioButtonItem style:rippleColor={MD2Colors.red100}',
      value: {
        label: 'First item',
        value: 'first',
        rippleColor: MD2Colors.red100
      }
    },
    {
      key: 'RadioButtonItem style:status={"checked"}',
      value: {
        label: 'First item',
        value: 'first',
        status: 'checked' as 'checked' | 'unchecked'
      },
      customRender: <>
        <RadioButton.Item label='checked demo' value='1' status='checked'></RadioButton.Item>
      </>
    },
    {
      key: 'RadioButtonItem style:status={"unchecked"}',
      value: {
        label: 'First item',
        value: 'first',
        status: 'unchecked' as 'checked' | 'unchecked'
      },
      customRender: <>
        <RadioButton.Item label='unchecked demo' value='1' status='unchecked'></RadioButton.Item>
      </>
    },
    {
      key: 'RadioButtonItem style:{backgroundColor:MD2Colors.blue100}',
      value: {
        label: 'First item',
        value: 'first',
        style: { backgroundColor: MD2Colors.blue100 },
      }
    },
    {
      key: 'RadioButtonItem labelStyle:{backgroundColor:MD2Colors.blue100}',
      value: {
        label: 'First item',
        value: 'first',
        labelStyle: { backgroundColor: MD2Colors.blue100 },
      }
    },
    {
      key: 'RadioButtonItem labelVariant:{"bodyLarge"}',
      value: {
        label: 'First item',
        value: 'first',
        labelVariant: 'bodyLarge' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonItem labelVariant:{"bodyMedium"}',
      value: {
        label: 'First item',
        value: 'first',
        labelVariant: 'bodyMedium' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonItem labelVariant:{"bodySmall"}',
      value: {
        label: 'First item',
        value: 'first',
        labelVariant: 'bodySmall' as 'bodyLarge' | 'bodyMedium' | 'bodySmall',
      }
    },
    {
      key: 'RadioButtonItem style:labelMaxFontSizeMultiplier={1}',
      value: {
        label: 'First item',
        value: 'first',
        labelMaxFontSizeMultiplier: 1,
      }
    },
    {
      key: 'RadioButtonItem style:labelMaxFontSizeMultiplier={2}',
      value: {
        label: 'First item',
        value: 'first',
        labelMaxFontSizeMultiplier: 2,
      }
    },
    {
      key: 'RadioButtonItem style:theme = { colors: { primary: "green" } }',
      value: {
        label: 'First item',
        value: 'first',
        theme: { colors: { primary: 'green' } },
      }
    },
    {
      key: 'RadioButtonItem style:testID = { "RadioButtonItem" }',
      value: {
        label: 'First item',
        value: 'first',
        testID: 'RadioButtonItem',
      }
    },
    {
      key: 'RadioButtonItem style:testID = { "RadioButtonItem1" }',
      value: {
        label: 'First item',
        value: 'first',
        testID: 'RadioButtonItem1',
      }
    },
    {
      key: 'RadioButtonItem style:mode = { "android" }',
      value: {
        label: 'First item',
        value: 'first',
        mode: 'android' as 'android' | 'ios',
      }
    },
    {
      key: 'RadioButtonItem style:mode = { "ios" }',
      value: {
        label: 'First item',
        value: 'first',
        mode: 'ios' as 'android' | 'ios',
      }
    },
    {
      key: 'RadioButtonItem style:position = { "leading" }',
      value: {
        label: 'First item',
        value: 'first',
        position: 'leading' as 'leading' | 'trailing'
      }
    },
    {
      key: 'RadioButtonItem style:position = { "trailing" }',
      value: {
        label: 'First item',
        value: 'first',
        position: 'trailing' as 'leading' | 'trailing'
      }
    },
  ]

  const [initialValueFirst, setinitialValueFirst] = React.useState('first');
  const [initialValueSecond, setinitialValueSecond] = React.useState('second');
  const [onchangeInitialValue, setonchangeInitialValue] = React.useState('first');


  return (
    <ScrollView>
      <Tester>
        <TestSuite name='RadioButton' >
          {RadioButtonProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key}>
                <RadioButton {...item.value} />
              </TestCase>
            );
          })},

          <TestCase itShould={'RadioButtonGroupProps value: first'} key={'RadioButtonGroupProps value1'}>
            <RadioButton.Group onValueChange={newValue => setinitialValueFirst(newValue)} value={initialValueFirst}>
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

          <TestCase itShould={'RadioButtonGroupProps value: second'} key={'RadioButtonGroupProps value2'}>
            <RadioButton.Group onValueChange={newValue => setinitialValueSecond(newValue)} value={initialValueSecond}>
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

          <TestCase itShould={'RadioButtonGroupProps children'} key={'RadioButtonGroupProps children'}>
            <RadioButton.Group onValueChange={newValue => setinitialValueSecond(newValue)} value={initialValueSecond} children={<>
              <View>
                <Text>First</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Second</Text>
                <RadioButton value="second" />
              </View>
            </>}>
            </RadioButton.Group>
          </TestCase>

          <TestCase
            itShould='RadioButtonGroup onValueChange'
            tags={['C_API']}
            initialState={false}
            arrange={({ setState }) => <>
              <RadioButton.Group onValueChange={newValue => {
                setState(true)
                setonchangeInitialValue(newValue)
              }} value={onchangeInitialValue}>
                <View>
                  <Text>First</Text>
                  <RadioButton value="first" />
                </View>
                <View>
                  <Text>Second</Text>
                  <RadioButton value="second" />
                </View>
              </RadioButton.Group>
            </>}
            assert={({ expect, state }) => {
              expect(state).to.be.equal(true);
            }}
          ></TestCase>

          {RadioButtonItemProps.map((item) => {
            return (
              <TestCase itShould={item.key} key={item.key}>
                {
                  item.customRender ? item.customRender :
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                      <RadioButton.Item {...item.value} />
                    </RadioButton.Group>
                }
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