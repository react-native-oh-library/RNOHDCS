
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
      <TestCase itShould="render a Stepper disabled" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} disabled />
      </TestCase>
      <TestCase itShould="render a Stepper readOnly={true}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} readOnly />
      </TestCase>
      <TestCase itShould="render a Stepper styles={borderColor: 'red'}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} styles={{ container: styles.stepper }} />
      </TestCase>
      <TestCase itShould="render a Stepper inputStyle={{backgroundColor: 'green'}}" tags={['C_API']}>
        <Stepper min={0} defaultValue={3} max={20} inputStyle={{ backgroundColor: 'green' }} />
      </TestCase>
    </TestSuite>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  stepper: {
    borderColor: 'red',
  },
});
