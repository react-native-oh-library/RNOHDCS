import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {NavigationContainer, Page} from './components/Navigation';

import {default as FileAccessTest} from './FileAccessTest';
import {Tester} from '@rnoh/testerino';

function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          <Page name="FileAccessTest">
            <Tester>
              <ScrollView>
                <FileAccessTest />
              </ScrollView>
            </Tester>
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
