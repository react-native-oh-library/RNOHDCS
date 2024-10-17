import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import * as testSuiteByName from './index';
import {Page, NavigationContainer} from './components/Navigation';

export function CameraKitTestExampleApp() {
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

export default {
  displayName: 'react-native-camera-kit_test_app',
  framework: 'React',
  category: 'UI',
  title: 'react-native-camera-kit',
  documentationURL: 'https://github.com/react-native-oh-library/react-native-camera-kit',
  description: 'React Native Camera Kit',
  examples: [
    {
      title: 'react-native-camera-kit',
      render: function (): any {
        return <CameraKitTestExampleApp />;
      },
    },
  ],
};
