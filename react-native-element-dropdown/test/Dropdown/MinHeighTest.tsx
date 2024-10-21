import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  // {label: 'Item 3', value: '3', image: imageSource},
  // {label: 'Item 4', value: '4', image: imageSource},
  // {label: 'Item 5', value: '5', image: imageSource},
];


export const MinHeighTest = () => {
  const [value, setValue] = useState<string>('');

  const [minHeight, setMinHeight] = useState(400);
  return (
    <Tester>
      <TestSuite name="MinHeigh">
        <TestCase itShould={`minHeight:${minHeight}`}>
          <Dropdown
            style={styles.dropdown}
            mode="default"
            labelField="label"
            valueField="value"
            data={data}
            search
            minHeight={minHeight}
            placeholder="请选择....."
            value={value}
            onChange={(item: any) => {
              setValue(item.value);
            }}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeMaxHeigh"
              onPress={() => {
                setMinHeight(v => (v === 400 ? 200 : 400));
              }}
            />
          </View>
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
