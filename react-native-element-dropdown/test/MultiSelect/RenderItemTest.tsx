import React, {useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
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

const Demo1 = () => {
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
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        activeColor="#FF8A2D2D"
      />
    </>
  );
};
const Demo2 = () => {
  const [value, setValue] = useState<string[]>([]);
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>我是自定义：{item.label}</Text>
        {item.value === value && (
          <Image style={{width: 15, height: 15}} source={imageSource} />
        )}
      </View>
    );
  };

  return (
    <>
      <MultiSelect
        style={styles.MultiSelect}
        mode="default"
        labelField="label"
        valueField="value"
        data={data}
        search
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        renderItem={renderItem}
      />
    </>
  );
};

export const RenderItemTest = () => {
  return (
    <Tester>
      <TestSuite name="renderItem">
        <TestCase itShould={`使用自定义item`}>
          <Demo2 />
        </TestCase>
      </TestSuite>
      <TestSuite name="RenderLeftIcon">
        <TestCase itShould={`默认`}>
          <Demo1 />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  textItem: {
    flex: 1,
    fontSize: 16,
  },
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
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
