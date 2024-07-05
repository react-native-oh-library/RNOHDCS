import React, { useState } from 'react';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { Image, ScrollView, StyleSheet, NativeEventEmitter, NativeModules, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export function DropDownCom() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
  ]);

  return (
    <Tester>
      <TestSuite name='BarTesteDemo'>
        <TestCase itShould='statusBar' tags={['C_API']}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
              {/*  */}
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Choose a fruit.'}
                placeholderStyle={{color:'red'}}
              />
            </View>
          </ScrollView>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}
