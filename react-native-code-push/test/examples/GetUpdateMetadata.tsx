import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CodePush from 'react-native-code-push';
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      progressModalVisible: false,
      syncMessage: '',
      progress: {},
    };
  }

  syncImmediate() {
    const res = CodePush.getUpdateMetadata()
    this.setState({syncMessage: JSON.stringify(res)});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎使用热更新--test!</Text>
        <Text>getUpdateMetadata: {this.state.syncMessage}</Text>
        <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
          <Text style={styles.syncButton}>API getUpdateMetadata</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  syncButton: {
    color: 'green',
    fontSize: 17,
  },
});

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

export default CodePush(codePushOptions)(App);
