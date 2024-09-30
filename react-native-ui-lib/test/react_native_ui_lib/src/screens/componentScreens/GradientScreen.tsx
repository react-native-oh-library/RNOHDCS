import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Gradient} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

class GradientScreen extends Component {
  render() {
    return (
      <TestSuite name="Gradient">
        <TestCase itShould="设置color: green, numberOfSteps: 4">
          <View padding-20>
            <Gradient style={{height: 10}} color={'green'} numberOfSteps={4} />
          </View>
        </TestCase>
        <TestCase itShould="type: hue">
          <View padding-20>
            <Gradient style={{height: 10}} color={'green'} numberOfSteps={4} type="hue" />
          </View>
        </TestCase>
        <TestCase itShould="type: lightness">
          <View padding-20>
            <Gradient style={{height: 10}} color={'green'} numberOfSteps={4} type="lightness" />
          </View>
        </TestCase>
        <TestCase itShould="type: saturation">
          <View padding-20>
            <Gradient style={{height: 10}} color={'green'} numberOfSteps={3} type="saturation" />
          </View>
        </TestCase>
      </TestSuite>
    );
  }
}

export default GradientScreen;

const styles = StyleSheet.create({});
