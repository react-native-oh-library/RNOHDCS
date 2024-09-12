import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ConnectionStatusBar, Typography, Colors} from 'react-native-ui-lib'; //eslint-disable-line
import {TestCase, TestSuite} from '@rnoh/testerino';

type ConnectionStatusBarScreenState = {
  isConnected: boolean;
};

ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
  // console.warn('what what?!? connection has been lost');
});

export default class ConnectionStatusBarScreen extends Component<
  {},
  ConnectionStatusBarScreenState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isConnected: true,
    };
  }

  render() {
    return (
      <TestSuite name="ConnectionStatusBar">
        <TestCase itShould="例子: 检测wifi连接">
          <View padding-20>
            <View style={styles.container}>
              <ConnectionStatusBar
                onConnectionChange={isConnected => this.setState({isConnected})}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 10,
                  ...Typography.text60,
                  color: Colors.grey40,
                }}>
                Turn your wifi on/off to see the component in action
              </Text>
              <Text style={{...Typography.text40}}>
                {this.state.isConnected ? 'Connected! :)' : 'No connection :('}
              </Text>
            </View>
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
});
