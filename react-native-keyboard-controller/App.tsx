import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer, Page } from './components';
import { KeyboardProvider } from "react-native-keyboard-controller";
import * as keyboardControllerExample from './examples/keyboardController'
import { PortalHost, PortalProvider } from '@gorhom/portal';
function App() {

  return (
     <>
     <KeyboardProvider enabled={true} statusBarTranslucent={false} navigationBarTranslucent={false}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer>
            <PortalProvider>
              {Object.entries(keyboardControllerExample).map(
                ([exampleName, Example]) => {
                  return (
                    <Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
                      <Example />
                    </Page>
                  );
                },
              )}
            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </KeyboardProvider>
    </>
  );
}

export default App;
