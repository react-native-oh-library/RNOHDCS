import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

export const RenderInputSearchTest = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Tester>
      <TestSuite name="renderInputSearch">
        <TestCase itShould={`自定义搜索`}>
          <MultiSelect
            renderInputSearch={() => <TextInput placeholder="我是自定义搜索" />}
            style={styles.MultiSelect}
            mode="default"
            labelField="label"
            valueField="value"
            data={data}
            search
            value={value}
            onChange={(item: any) => {
              setValue(item);
            }}
            activeColor="#FF8A2D2D"
          />
        </TestCase>
      </TestSuite>
      <TestSuite name="renderInputSearch">
        <TestCase itShould={`默认搜索`}>
          <MultiSelect
            searchPlaceholder="我是默认的搜索"
            style={styles.MultiSelect}
            mode="default"
            labelField="label"
            valueField="value"
            data={data}
            search
            value={value}
            onChange={(item: any) => {
              setValue(item);
            }}
          />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  MultiSelect: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap: 10,
  },
});
