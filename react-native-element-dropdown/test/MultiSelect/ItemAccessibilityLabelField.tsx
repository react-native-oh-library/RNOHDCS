import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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

const Demo = (props: any) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <MultiSelect
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
          setValue(item);
        }}
        searchField="label"
        activeColor="#FF8A2D2D"
        {...props}
      />
      <Text>itemAccessibilityLabelField:{JSON.stringify(value)}</Text>
    </>
  );
};

export const ItemAccessibilityLabelFieldTest = () => {
  return (
    <Tester>
      <TestSuite name="itemAccessibilityLabelField">
        <View>
          <Text style={{color: '#fff'}}>
            itemAccessibilityLabelField是辅助标签功能字段：必须是唯一值，且不能重复，设置成label或者value效果是一样的
          </Text>
        </View>
        <TestCase itShould="label">
          <Demo itemAccessibilityLabelField="label" />
        </TestCase>
      </TestSuite>
      <TestSuite name="itemAccessibilityLabelField">
        <TestCase itShould="value">
          <Demo itemAccessibilityLabelField="value" />
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
