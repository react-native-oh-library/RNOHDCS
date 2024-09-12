import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, Page} from '../components/Navigation';
import * as CompByNames from './components';

export function DragSortableViewDemo() {
  return (
    <View style={{backgroundColor: 'black'}}>
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
export default DragSortableViewDemo;
