import React, {Component} from 'react';
import {View, Text, Colors, ChipsInput} from 'react-native-ui-lib';
import _ from 'lodash';
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class ChipsInputScreen extends Component {
  state = {
    chips: [{label: 'one'}],
    chips2: [],
    chips3: [],
  };

  render() {
    return (
      <TestSuite name="ChipsInput">
        <TestCase
          itShould="设置onChange"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20>
              <ChipsInput
                label="onChange"
                chips={this.state.chips3}
                onChange={newChips => {
                  this.setState({chips3: newChips}, () => {
                    setState(true);
                  });
                }}
                maxChips={3}
              />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="设置 label: label, placeholder: Enter chips..., chips, maxChips: 3 ">
          <View padding-20>
            <ChipsInput
              label="label"
              placeholder="Enter chips..."
              chips={this.state.chips2}
              onChange={newChips => this.setState({chips2: newChips})}
              maxChips={3}
            />
          </View>
        </TestCase>
        <TestCase itShould="设置 defaultChipProps, validate={'required'}, validationMessage">
          <View padding-20>
            <ChipsInput
              label="required"
              placeholder="Enter chips..."
              chips={this.state.chips}
              onChange={newChips => this.setState({chips: newChips})}
              defaultChipProps={{
                backgroundColor: Colors.$backgroundPrimaryHeavy,
                labelStyle: {color: Colors.$textDefaultLight},
                containerStyle: {borderWidth: 0},
                dismissColor: Colors.$iconDefaultLight,
              }}
              validate={'required'}
              validateOnChange
              validationMessage={'You must add at least one chip'}
              marginB-10
            />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}
