import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {MultiSelect, IMultiSelectRef} from 'react-native-element-dropdown';
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
  const ref = useRef<IMultiSelectRef>(null);

  return (
    <>
      <MultiSelect
        ref={ref}
        style={styles.MultiSelect}
        labelField="label"
        valueField="value"
        data={data}
        search
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        accessibilityLabel="select!!!"
        closeModalWhenSelectedItem
        confirmSelectItem
        onConfirmSelectItem={(item: any) => {
          Alert.alert('Confirm', 'Message confirm', [
            {
              text: 'Cancel',
              onPress: () => {
                ref.current?.close();
              },
            },
            {
              text: 'Confirm',
              onPress: () => {
                setValue(item);
                ref.current?.close();
              },
            },
          ]);
        }}
        {...props}
      />
    </>
  );
};

export const ConfirmSelectItemAndOnConfirmSelectItem = () => {
  return (
    <Tester>
      <TestSuite name="confirmSelectItem,onConfirmSelectItem">
        <Text style={{color: '#fff'}}>
          confirmSelectItem属性需要和onConfirmSelectItem一起使用
        </Text>
        <TestCase itShould={`启用自定义confirmSelectItem`}>
          <Demo />
        </TestCase>
      </TestSuite>
      <TestSuite name="confirmSelectItem,onConfirmSelectItem">
        <TestCase itShould={`不启用`}>
          <Demo confirmSelectItem={false} />
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
