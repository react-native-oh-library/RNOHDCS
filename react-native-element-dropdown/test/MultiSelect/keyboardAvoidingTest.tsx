import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
        activeColor="#FF8A2D2D"
        {...props}
      />
    </>
  );
};

export const keyboardAvoidingTest = () => {
  return (
    <Tester>
      <TestSuite name="keyboardAvoiding">
        <TestCase itShould="true">
          <Demo keyboardAvoiding />
        </TestCase>
      </TestSuite>
      <TestSuite name="keyboardAvoiding">
        <TestCase itShould="false">
          <Demo keyboardAvoiding={false} />
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
