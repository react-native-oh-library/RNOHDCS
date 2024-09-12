
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stepper } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(3);
  return (
    <TestSuite name="StepperTest">
      <TestCase itShould="render a Stepper defaultValue={3}" tags={['C_API']}>
        <Stepper defaultValue={3} />
      </TestCase>
      <TestCase itShould="render a Stepper min={1}" tags={['C_API']}>
        <Stepper defaultValue={3} min={1} />
      </TestCase>
      <TestCase itShould="render a Stepper max={10}" tags={['C_API']}>
        <Stepper defaultValue={3} min={1} max={10} />
      </TestCase>
      <TestCase itShould="render a Stepper value" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} value={value} onChange={value => { setValue(value) }} />
        <Text>value:{value}</Text>
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
    </TestSuite>
  );
};
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
