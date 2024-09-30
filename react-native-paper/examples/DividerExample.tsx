import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Divider, List, MD2Colors, Text } from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';

const items = ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'];

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

export function DividerText() {

  const dividerProps = [
    {
      key: 'Divider style:leftInset={true}',
      value: {
        leftInset :true
      },
    },
    {
      key: 'Divider style:leftInset={false}',
      value: {
        leftInset :false
      },
    },
    {
      key: 'Divider style:horizontalInset ={true}',
      value: {
        horizontalInset  :true
      },
    },
    {
      key: 'Divider style:horizontalInset ={false}',
      value: {
        horizontalInset  :false
      },
    },
    {
      key: 'Divider style:bold ={false}',
      value: {
        bold :false
      },
    },
    {
      key: 'Divider style:bold ={true}',
      value: {
        bold :true
      },
    },
    {
      key: 'Divider style:{backgroundColor:MD2Colors.red100}',
      value: {
        style :{backgroundColor:MD2Colors.red100}
      },
    },
    {
      key: 'Divider style:theme={{ colors: { primary: "green"} }} ',
      value: {
        theme:{ colors: { primary: 'green' } }
      },
    },
  ]

  return (
    <ScrollView>
       <Tester>
        <TestSuite name='Divider' >
          {dividerProps.map((item) => {
                  return (
                    <TestCase itShould={item.key}  key={item.key}>
                      <Text>Lemon</Text>
                      <Divider {...item.value}/>
                      <Text>Mango</Text>
                      <Divider />
                  </TestCase>
                  );
              })},
        </TestSuite>
    </Tester>
    </ScrollView>
  )
}

export default DividerText;