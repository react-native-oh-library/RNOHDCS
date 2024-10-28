import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Demo = (props: any) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Dropdown
        style={styles.MultiSelect}
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
        activeColor="#FF8A2D2D"
        {...props}
      />
      <Text>itemTestIDField:{JSON.stringify(value)}</Text>
    </>
  );
};

export const ItemTestIDField = () => {
  return (
    <Tester>
      <TestSuite name="itemTestIDField">
        <View>
          <Text style={{color: '#fff'}}>
            itemTestIDField是选中item唯一的身份id：必须是唯一值，且不能重复，设置成label或者value效果是一样的
          </Text>
        </View>
        <TestCase itShould="label">
          <Demo itemTestIDField="label" />
        </TestCase>
      </TestSuite>
      <TestSuite name="itemTestIDField">
        <TestCase itShould="value">
          <Demo itemTestIDField="value" />
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
});
