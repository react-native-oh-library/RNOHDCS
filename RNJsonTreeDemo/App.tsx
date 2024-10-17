import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer, Page} from './tests/react-native-json-tree/components/Navigation';

import {App as JSONTreeApp} from './tests/react-native-json-tree/JsonTreeTest';

function App() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <NavigationContainer>
          <View id="__harmony::ready" />
          <Page name="JsonTreeTest">
            <JSONTreeApp />
          </Page>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
