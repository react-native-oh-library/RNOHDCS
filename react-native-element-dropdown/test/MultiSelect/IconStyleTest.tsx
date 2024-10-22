import React, {useState} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
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

export const IconStyleTest = () => {
  const [value, setValue] = useState<string[]>([]);
  const [width, setWidth] = useState<number>(20);
  return (
    <Tester>
      <TestSuite name="iconStyle">
        <TestCase itShould="">
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
            iconStyle={{
              width: width,
              height: width,
              marginRight: 10,
            }}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeIconStyle"
              onPress={() => {
                setWidth(v => (v === 20 ? 40 : 20));
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
  MultiSelect: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
