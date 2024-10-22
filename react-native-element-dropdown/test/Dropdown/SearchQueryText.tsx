import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'item1', value: '1', image: imageSource},
  {label: 'item2', value: '2', image: imageSource},
  {label: 'item3', value: '3', image: imageSource},
  {label: 'item4', value: '4', image: imageSource},
  {label: 'item5', value: '5', image: imageSource},
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
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
        {...props}
      />
    </>
  );
};

export const SearchQueryText = () => {
  return (
    <Tester>
      <TestSuite name="searchQuery">
        <TestCase itShould={`模糊搜索`}>
          <Demo />
        </TestCase>
      </TestSuite>
      <TestSuite name="searchQuery">
        <TestCase itShould={`精准搜索，搜全名，例如item1`}>
          <Demo
            searchQuery={(text: string, labelText: string) => {
              return text === labelText;
            }}
          />
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
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap: 10,
  },
});
