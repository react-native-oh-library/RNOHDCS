import React, {Component} from 'react';
import {Text, View, Switch, Colors} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

class SwitchScreen extends Component {
  state = {
    value1: true,
    value2: false,
    value3: true,
    value4: false,
    value5: false,
  };

  render() {
    return (
      <TestSuite name="Switch">
        <TestCase
          itShould="设置 value, onValueChange"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20>
              <Switch
                testID="switch"
                value={this.state.value1}
                onValueChange={(value1: boolean) => {
                  this.setState({value1});
                  setState(true);
                }}
                style={{marginBottom: 20}}
              />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="onColor: purple, offColor: red">
          <View padding-20>
            <Switch
              onColor={'purple'}
              offColor={'red'}
              value={this.state.value2}
              onValueChange={(value2: boolean) => this.setState({value2})}
              style={{marginBottom: 20}}
            />
          </View>
        </TestCase>
        <TestCase itShould="width: 80, height: 38, thumbSize: 34">
          <View padding-20>
            <Switch
              width={80}
              height={38}
              thumbSize={34}
              value={this.state.value3}
              onValueChange={(value3: boolean) => this.setState({value3})}
              style={{marginBottom: 20}}
            />
          </View>
        </TestCase>
        <TestCase itShould="disabled">
          <View row marginB-20 padding-20>
            <Text text70 centerV>
              Disabled:{' '}
            </Text>
            <Switch
              disabled
              value={this.state.value5}
              onValueChange={(value5: boolean) => this.setState({value5})}
              style={{marginRight: 10}}
            />
            <Switch
              disabled
              value={!this.state.value5}
              onValueChange={(value5: boolean) => this.setState({value5})}
            />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

export default SwitchScreen;
