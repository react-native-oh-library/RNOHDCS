import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer, Page } from '../components';
import * as exampleByName from './AwesomeGalleryTest';

const { TestCase, ...remainingExampleByName } = exampleByName;

function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          {
            Object.keys(TestCase).map(key => {
              let Example = remainingExampleByName[key];
              return (
                <Page key={key} name={TestCase[key]}>
                  <Example />
                </Page>
              );
            })
          }
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
