import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item1', value: '1', image: imageSource},
  {label: 'Item2', value: '2', image: imageSource},
  {label: 'Item3', value: '3', image: imageSource},
  {label: 'Item4', value: '4', image: imageSource},
  {label: 'Item5', value: '5', image: imageSource},
];

const Demo = (props: any) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        mode="default"
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
        searchField="label"
        {...props}
      />
    </>
  );
};

export const SearchFieldTest = () => {
  return (
    <Tester>
      <TestSuite name="searchField">
        <TestCase itShould="label">
          <Demo searchField="label" />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchField">
        <TestCase itShould="value">
          <Demo searchField="value" />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
