import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
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


export const MaxSelectTest = () => {
  const [value, setValue] = useState<string[]>([]);
  const [maxSelect, setMaxSelect] = useState<number>(2);

  return (
    <Tester>
      <TestSuite name="maxSelect">
        <TestCase itShould={`maxSelect:${maxSelect}`}>
          <MultiSelect
            style={styles.MultiSelect}
            mode="default"
            labelField="label"
            valueField="value"
            data={data}
            maxHeight={400}
            placeholder="请选择....."
            value={value}
            onChange={(item: any) => {
              setValue(item);
            }}
            activeColor="#FF8A2D2D"
            maxSelect={maxSelect}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeMaxSelect"
              onPress={() => {
                setMaxSelect(v => (v === 2 ? 4 : 2));
                setValue([])
              }}
            />
          </View>
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
