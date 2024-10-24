import React, {Component} from 'react';
import {View, Text, LoaderScreen, Colors} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

export default class LoadingScreen extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2500);
  }

  render() {
    const {loading} = this.state;
    return (
      <TestSuite name="Loader">
        <TestCase itShould="设置 message 属性 Loading...">
          <View padding-20>
            <View flex bg-orange70 center>
              <Text text10>Content Content Content</Text>
              {loading && (
                <LoaderScreen
                  color={Colors.blue30}
                  message="Loading..."
                  overlay
                />
              )}
            </View>
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}
