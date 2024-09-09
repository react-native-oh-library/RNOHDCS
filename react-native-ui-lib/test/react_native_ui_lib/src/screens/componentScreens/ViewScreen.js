import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import _ from 'lodash';
import {TestCase, TestSuite} from '@rnoh/testerino';

class ViewScreen extends Component {

  render() {
    return (
      <TestSuite name="View">
        <TestCase itShould="设置 background: red 属性">
          <View padding-20 centerH>
            <View padding-20 backgroundColor="red" />
          </View>
        </TestCase>
        <TestCase itShould="设置 renderDelay: 1000 属性, 渲染延迟">
          <View padding-20 centerH>
            <View padding-20 backgroundColor="red" renderDelay={1000} />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

export default ViewScreen;
