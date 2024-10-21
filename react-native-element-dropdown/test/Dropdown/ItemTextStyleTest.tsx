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

export const ItemTextStyleTest = () => {
  const [value, setValue] = useState<string>('');
  const [color, setColor] = useState<string>('red');
  const [fontSize, setFontSize] = useState<number>(16);
  return (
    <Tester>
      <TestSuite name="itemTextStyle">
        <TestCase itShould={`color:${color}---fontSize:${fontSize}`}>
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
            searchField="label"
            itemTextStyle={{color: color, fontSize}}
          />
          <View style={styles.actionBtn}>
            <Button
              title="changeColor"
              onPress={() => {
                setColor(v => (v === 'red' ? 'blue' : 'red'));
              }}
            />
            <Button
              title="changeFontSize"
              onPress={() => {
                setFontSize(v => (v === 16 ? 20 : 16));
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
