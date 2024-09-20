import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from './Navigation';
import * as CompByNames from './components';

function AppTest() {
  return (
    <View style={{backgroundColor: 'black', paddingBottom: 70}}>
    <NavigationContainer>
      {Object.entries(CompByNames).map(([Name, Comp]) => {
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

export default AppTest;
