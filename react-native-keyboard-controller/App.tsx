import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NavigationContainer, Page } from './components';
import { KeyboardProvider } from "react-native-keyboard-controller";
import * as keyboardControllerExample from './examples/keyboardController'
function App() {
  return (
    <>
    <KeyboardProvider enabled={true} statusBarTranslucent={false} navigationBarTranslucent={false}>
       <StatusBar barStyle="light-content" />
       <SafeAreaView>
         <NavigationContainer>
             {Object.entries(keyboardControllerExample).map(
               ([exampleName, Example]) => {
                 return (
                   <Page key={exampleName} name={`EXAMPLE: ${exampleName}`}>
                     <Example />
                   </Page>
                 );
               },
             )}
         </NavigationContainer>
       </SafeAreaView>
     </KeyboardProvider>
   </>
 
  );
}

export default App;
