import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

class TouchableOpacityTestScreen extends Component {
  state = {
    count: 0,
  };

  count() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <TestSuite name="TouchableOpacity">
        <TestCase
          itShould="设置throttleTime:1200 和 onPress 属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20 centerH>
              <TouchableOpacity
                throttleTime={1200}
                onPress={() => {
                  this.count();
                  setState(true);
                }}>
                <Text text40>Click Me!</Text>
              </TouchableOpacity>
              <View center marginT-20>
                <Text text20>{this.state.count}</Text>
              </View>
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="设置 activeBackgroundColor: red 属性 按下为红色反馈">
          <View padding-20 centerH>
            <TouchableOpacity activeBackgroundColor="red">
              <Text text40>Click Me!</Text>
            </TouchableOpacity>
          </View>
        </TestCase>
        <TestCase itShould="设置 backgroundColor: red 属性">
          <View padding-20 centerH>
            <TouchableOpacity backgroundColor="red">
              <Text text40>Click Me!</Text>
            </TouchableOpacity>
          </View>
        </TestCase>
        <TestCase
          itShould="设置 customValue 属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-20 centerH>
              <TouchableOpacity
                customValue="6666"
                onPress={e => {
                  if (e.customValue === '6666') {
                    setState(true);
                  }
                }}>
                <Text text40>Click Me!</Text>
              </TouchableOpacity>
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

export default TouchableOpacityTestScreen;
