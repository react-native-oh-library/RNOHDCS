import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import CodePushDemo from './CodePushDemo';

export default function CodePushTest() {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <Tester style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            {/* case1: check update */}
            <TestSuite name="Case1: CheckUpdate">
              <TestCase itShould="check update">
                <CodePushDemo style={{flex: 1}} />
              </TestCase>
            </TestSuite>
          </ScrollView>
        </Tester>
      </SafeAreaView>
    </View>
  );
}
