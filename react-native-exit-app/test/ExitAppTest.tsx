/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
} from 'react-native';
import RTNExitApp from "react-native-exit-app"
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
function App(): React.JSX.Element {

  return (
    <Tester>
      <TestSuite name="exit app">
        <TestCase tags={["C_API"]} itShould="exit app">
       <Text 
      onPress={ () => {
        RTNExitApp.exitApp();
      }}
        >
          exitApp
      </Text> 
      </TestCase>
      </TestSuite>
    </Tester>
  );
}
export default App;
