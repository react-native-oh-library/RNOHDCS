import * as React from 'react';
import { FlatList } from 'react-native';

import { Divider, List } from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';

const items = ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'];

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DividerText() {

  return (
    <Tester>
    <TestSuite name='Divider' >
        <TestCase itShould='Default'>
          <DividerExample></DividerExample>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}


const DividerExample = () => {
  return (
    <FlatList
      renderItem={({ item }) => <List.Item title={item} />}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={Divider}
      data={items}
      alwaysBounceVertical={false}
    />
  );
};

DividerExample.title = 'Divider';

export default DividerText;