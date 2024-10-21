import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import * as testSuiteByName from './index';

import {NavigationContainer, Page} from '../../components/Navigation';

export function MultiSelectTestApp() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <SafeAreaView>
        <NavigationContainer>
          {Object.keys(testSuiteByName).map(testSuiteName => {
            const TestSuite =
              testSuiteByName[testSuiteName as keyof typeof testSuiteByName];
            return (
              <Page
                key={testSuiteName}
                name={`${testSuiteName.replace('Test', '')}`}>
                <View style={{flex: 1}}>
                  <ScrollView style={{flex: 1}}>
                    <TestSuite key={testSuiteName} />
                  </ScrollView>
                </View>
              </Page>
            );
          })}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
