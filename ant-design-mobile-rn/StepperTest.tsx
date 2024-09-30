
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stepper, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(3);
  return (
    <TestSuite name="StepperTest">
      <TestCase itShould="render a Stepper allowEmpty={true},allowEmpty={false}" tags={['C_API']}>
        <Stepper
          allowEmpty={true}
          min={10}
          max={20}
          onChange={(value) => {
            console.log(value)
          }}
        />
        <Stepper
          allowEmpty={false}
          min={10}
          max={20}
          onChange={(value) => {
            console.log(value)
          }}
        />
      </TestCase>
      <TestCase itShould="render a Stepper defaultValue={3}" tags={['C_API']}>
        <Stepper defaultValue={3} />
      </TestCase>
      <TestCase itShould="render a Stepper digits={1},digits={2}" tags={['C_API']}>
        <Stepper digits={1} />
        <Stepper digits={2} />
      </TestCase>
      <TestCase itShould="render a Stepper formatter={$93}" tags={['C_API']}>
        <Stepper
          defaultValue={93}
          formatter={(value) => `$ ${value}`}
          parser={(text) => parseFloat(text.replace('$', ''))}
        />
      </TestCase>
      <TestCase itShould="render a Stepper min={1}" tags={['C_API']}>
        <Stepper defaultValue={3} min={1} />
      </TestCase>
      <TestCase itShould="render a Stepper max={10}" tags={['C_API']}>
        <Stepper defaultValue={3} min={1} max={10} />
      </TestCase>
      <TestCase itShould="render a Stepper minusButtonProps={{ children: <Text>--</Text> }}" tags={['C_API']}>
        <Stepper minusButtonProps={{ children: <Text>--</Text> }} />
      </TestCase>
      <TestCase itShould="render a Stepper plusButtonProps={{ children: <Text>++</Text> }}" tags={['C_API']}>
        <Stepper plusButtonProps={{ children: <Text>++</Text> }} />
      </TestCase>
      <TestCase itShould="render a Stepper value" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} value={value} onChange={value => { setValue(value) }} />
        <Text>value:{value}</Text>
      </TestCase>
      <TestCase itShould="render a Stepper parser={(text) => parseFloat(text)}" tags={['C_API']}>
        <Stepper
          defaultValue={93}
          formatter={(value) => `${value}`}
          parser={(text) => parseFloat(text)}
        />
      </TestCase>
      <TestCase itShould="render a Stepper step={2}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} step={2} />
      </TestCase>
      <TestCase itShould="render a Stepper onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <Stepper min={0} value={value1} onChange={value => { setValue1(value); setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Stepper disabled={true}, disabled={false}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} disabled={true} />
        <Stepper min={0} defaultValue={3} max={20} disabled={false} />
      </TestCase>
      <TestCase itShould="render a Stepper readOnly={true}, readOnly={false}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} readOnly={true} />
        <Stepper min={0} defaultValue={3} max={20} readOnly={false} />
      </TestCase>
      <TestCase itShould="render a Stepper styles={backgroundColor: 'red'}" tags={['C_API']}>
        <View style={{ height: 100, width: '100%', backgroundColor: 'red' }}>
          <Stepper min={0} defaultValue={3} max={20} />
        </View>
      </TestCase>
      <TestCase itShould="render a Stepper inputStyle={{backgroundColor: 'green'}}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} inputStyle={{ backgroundColor: 'green' }} />
      </TestCase>
      <TestCase itShould="render a Stepper stringMode" tags={['C_API']}>
        <StringModeExample />
      </TestCase>
    </TestSuite>
  );
};
const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
const styles = StyleSheet.create({
  stepper: {
    backgroundColor: '#f0f0f0',
  },
  stepperContainer: {
    borderColor: '#d9d9d9',
  },
  stepperInput: {
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 4,
  },
});
