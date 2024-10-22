import React, {useState} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
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

export const DisableTest = () => {
  const [value, setValue] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(false);
  return (
    <Tester>
      <TestSuite name="disable">
        <TestCase itShould={`是否禁用选中：${disable ? '是' : '否'}`}>
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
            disable={disable}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeDisable"
              onPress={() => {
                setDisable(v => (v ? false : true));
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
