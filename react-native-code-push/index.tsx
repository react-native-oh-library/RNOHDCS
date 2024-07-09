import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer, Page, TestCase} from '../components';
import {PortalProvider} from '@gorhom/portal';
import {TestSuite, Tester} from '@rnoh/testerino';
import CodePushDemo from './CodePushDemo';

export function CodePushTest() {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <PortalProvider>
            <Page name="CodePushTest">
              <Tester style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                  {/* case1: check update */}
                  <TestSuite name="Case1: CheckUpdate">
                    <TestCase.Example itShould="check update">
                      <CodePushDemo style={{flex: 1}} />
                    </TestCase.Example>
                  </TestSuite>
                </ScrollView>
              </Tester>
            </Page>
          </PortalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
