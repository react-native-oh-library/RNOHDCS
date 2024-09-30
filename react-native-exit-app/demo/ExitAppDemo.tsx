/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Button,
} from 'react-native';
import  RNExitApp  from "react-native-exit-app"
import { Colors } from 'react-native/Libraries/NewAppScreen';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView>
    <StatusBar barStyle={"dark-content"} />
    <Button
    title="exitApp"
    onPress={ () => {
      RNExitApp.exitApp()
    }}
  />
  </SafeAreaView>
  );
}

export default App;
