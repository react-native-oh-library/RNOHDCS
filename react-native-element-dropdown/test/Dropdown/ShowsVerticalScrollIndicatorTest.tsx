import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
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
      <Text>当此属性为 true 的时候，显示一个垂直方向的滚动条。</Text>
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

export const ShowsVerticalScrollIndicatorTest = () => {
  return (
    <Tester>
      <TestSuite name="showsVerticalScrollIndicator">
        <TestCase itShould={`true`}>
          <Demo showsVerticalScrollIndicator />
        </TestCase>
      </TestSuite>
      <TestSuite name="showsVerticalScrollIndicator">
        <TestCase itShould={`false`}>
          <Demo showsVerticalScrollIndicator={false} />
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
