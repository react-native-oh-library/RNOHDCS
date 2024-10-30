import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {MultiSelect, IDropdownRef} from 'react-native-element-dropdown';
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
  const ref = useRef<IDropdownRef>(null);

  return (
    <>
      <MultiSelect
        ref={ref}
        style={styles.dropdown}
        labelField="label"
        valueField="value"
        data={data}
        search
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        accessibilityLabel="select!!!"
        onConfirmSelectItem={(item) => {
          Alert.alert('Confirm', 'Message confirm', [
            {
              text: 'Cancel',
              onPress: () => {},
            },
            {
              text: 'Confirm',
              onPress: () => {
                setValue(item);
              },
            },
          ]);
        }}
        {...props}
      />
    </>
  );
};

export const ConfirmUnSelectItemTest = () => {
  return (
    <Tester>
      <TestSuite name="ConfirmUnSelectItemTest">
        <TestCase itShould={`true`}>
          <Demo confirmUnSelectItem />
        </TestCase>
      </TestSuite>
      <TestSuite name="ConfirmUnSelectItemTest">
        <TestCase itShould={`false`}>
          <Demo confirmUnSelectItem={false} />
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
