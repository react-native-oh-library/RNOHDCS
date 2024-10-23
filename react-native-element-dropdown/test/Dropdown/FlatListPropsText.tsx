import React, {useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
  {label: 'Item 6', value: '6', image: imageSource},
  {label: 'Item 7', value: '7', image: imageSource},
  {label: 'Item 8', value: '8', image: imageSource},
  {label: 'Item 9', value: '9', image: imageSource},
  {label: 'Item 10', value: '10', image: imageSource},
];

const Demo = (props: any) => {
  const [value, setValue] = useState<string>('');
  const RenderEmpty = () => {
    return (
      <View>
        <Text>List Empty!</Text>
      </View>
    );
  };

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        mode="default"
        labelField="label"
        valueField="value"
        data={data}
        search
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
        }}
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
        }}
        {...props}
      />
    </>
  );
};

export const FlatListPropsText = () => {
  return (
    <Tester>
      <TestSuite name="flatListProps">
        <TestCase itShould={`自定义`}>
          <Demo />
        </TestCase>
      </TestSuite>
      <TestSuite name="flatListProps">
        <TestCase itShould={`默认`}>
          <Demo flatListProps={{}} />
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
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
