import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from './components/Navigation';
import * as testSuiteByName from './App';

const comList = Object.keys(testSuiteByName).map(testSuiteName => {
  return {
    name: testSuiteName,
    com: testSuiteByName[testSuiteName as keyof typeof testSuiteByName],
  };
});
// @ts-ignore
comList.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

export function CreditCardDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <NavigationContainer>
        {Object.entries(testSuiteByName).map(([Name, Comp]) => {
          return (
            <Page key={Name} name={Name}>
              <Comp />
            </Page>
          );
        })}
      </NavigationContainer>
    </View>
  );
}
export default CreditCardDemo;