import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Button } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import IconFont from '../generate-ts';
import IconUser from '../generate-ts/IconUser';
import IconTerm from '../generate-ts/IconTerm';
import IconSetup from '../generate-ts/IconSetup';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 80,
    marginBottom: 10,
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minContainer: {
    height: 30,
    width: 40,
    marginBottom: 10,
  },
});

class IconFontSummary extends Component {
  static title = 'use summaryIcon component';
  render() {
    return (
      <View style={styles.minContainer}>
        <IconFont name="user" />
      </View>
    );
  }
}

class IconFontSingle extends Component {
  static title = 'use a single icon';
  render() {
    return (
      <View style={styles.minContainer}>
        <IconTerm/>
      </View>
    );
  }
}

class IconFontSize extends Component {
  static title = 'two types use icon font size attribute';
  render() {
    return (
      <View style={styles.container}>
        <IconFont name="user" size={50}/>
      </View>
    );
  }
}

class IconFontColor extends Component {
  static title = 'use icon font color attribute';
  render() {
    return (
      <View style={styles.minContainer}>
        <IconSetup color="blue" size={30}/>
      </View>
    );
  }
}

class IconFontColorArr extends Component {
  static title = 'use icon font color arr attribute';
  render() {
    return (
      <View style={styles.container}>
        <IconFont name="setup" color={["blue", "orange"]} size={50} />
        <IconFont name="alipay" color={["blue", "orange"]} size={50} />
      </View>
    );
  }
}

const icon = [IconFontSummary, IconFontSingle, IconFontSize, IconFontColor, IconFontColorArr];

export { icon };

export default function () {
  return (
    <ScrollView >
      <Tester style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <TestCase itShould="<IconFont name='user'/>">
          <IconFontSummary />
        </TestCase>
        <TestCase itShould="<IconTerm/>">
          <IconFontSingle />
        </TestCase>
        <TestCase itShould="<IconFont name='user' size={50}/>">
          <IconFontSize />
        </TestCase>
        <TestCase itShould="<IconSetup color='blue' size={30}/>">
          <IconFontColor />
        </TestCase>
        <TestCase itShould="<IconFont name='setup' color={['blue', 'orange']} size={50}/>">
          <IconFontColorArr />
        </TestCase>
      </Tester>
    </ScrollView>
  )
}