import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
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

export const OnChangeTextTest = () => {
  const [value, setValue] = useState<string>('');
  const [text, setText] = useState<string>();

  return (
    <Tester>
      <TestSuite name="onChangeText">
        <TestCase itShould="输入框输入文本的回调">
          <View style={styles.actionBtn}>
            <Text style={{color: '#fff', fontSize: 20}}>
              我是输入的文本:{text}
            </Text>
          </View>
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
            onChangeText={(v: string) => {
              setText(v);
              console.log('====================================');
              console.log(v);
              console.log('====================================');
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
