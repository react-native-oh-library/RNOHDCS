import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './tests/components/Navigation';
import {SechartsTest} from './tests/secharts/SechartsTestIndex';
import SechartsOptionTest from './tests/secharts/option-test/SechartsOptionTest';


function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
            <View id="__harmony::ready" />
            <Page name="SechartsTest">
                <SechartsTest />
            </Page>
            <Page name="SechartsOptionTest">
                <SechartsOptionTest />
            </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
