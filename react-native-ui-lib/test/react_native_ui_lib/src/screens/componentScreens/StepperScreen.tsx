import React, {Component} from 'react';
import {View, Text, Stepper} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class StepperScreen extends Component {
  state = {
    stepperValue: 1,
  };

  stepperProps = {
    minValue: 0,
    maxValue: 3,
    value: 1,
  };

  onValueChange = (value: number, _?: string) => {
    this.setState({stepperValue: value});
  };

  render() {
    const {stepperValue} = this.state;

    return (
      <TestSuite name="Stepper">
        <TestCase itShould="Default">
          <View padding-20>
            <View row spread centerV>
              <Text text70 $textDefault>
                Default
              </Text>
              <Stepper />
            </View>
          </View>
        </TestCase>
        <TestCase itShould="Disabled">
          <View padding-20>
            <View row spread centerV>
              <Text text70 $textDefault>
                disabled
              </Text>
              <Stepper disabled />
            </View>
          </View>
        </TestCase>
        <TestCase itShould="step, Small">
          <View padding-20>
            <View row spread marginT-30>
              <Text text70 $textDefault>
                Step (0.5)
              </Text>
              <Stepper step={0.5} />
            </View>
            <View row spread marginT-30>
              <Text text70 $textDefault>
                Small
              </Text>
              <Stepper small />
            </View>
          </View>
        </TestCase>
        <TestCase itShould="maxValue: 10, minValue: 1">
          <View padding-20>
            <Stepper maxValue={10} minValue={1} testID={'Stepper1'} />
          </View>
        </TestCase>
        <TestCase
          itShould="设置throttleTime:1200 和 onPress 属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20 centerH>
              <View padding-5>
                <Text text80M $textDefault>
                  Stepper value: {stepperValue}
                </Text>
                <Text $textDefault marginT-3>
                  Initial value: {this.stepperProps.value}
                </Text>
                <Text $textDefault marginT-3>
                  Min value: {this.stepperProps.minValue}
                </Text>
                <Text $textDefault marginT-3>
                  Max value: {this.stepperProps.maxValue}
                </Text>
              </View>
              <Stepper
                  onValueChange={(e) => {
                    this.onValueChange(e)
                    setState(true)
                  }}
                  maxValue={this.stepperProps.maxValue}
                  minValue={this.stepperProps.minValue}
                  value={stepperValue}
                  testID={'Stepper1'}
                />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    );
  }
}
