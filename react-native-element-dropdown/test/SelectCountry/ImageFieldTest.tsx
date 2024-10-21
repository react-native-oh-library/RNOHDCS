import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const imageSource = require('../assets/react-native-logo.png');
const imageSource1 = require('../assets/star.jpg');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];
const data1 = [
  {label: 'Item 1', value: '1', icon: imageSource1},
  {label: 'Item 2', value: '2', icon: imageSource1},
  {label: 'Item 3', value: '3', icon: imageSource1},
  {label: 'Item 4', value: '4', icon: imageSource1},
  {label: 'Item 5', value: '5', icon: imageSource1},
];

const Demo = (props: any) => {
  const [country, setCountry] = useState<string>('');
  return (
    <>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={data}
        valueField="value"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={(e: any) => {
          setCountry(e.value);
        }}
        labelField={'label'}
        {...props}
      />
    </>
  );
};

export const ImageFieldTest = () => {
  return (
    <Tester>
      <TestSuite name="imageField">
        <TestCase itShould="image">
          <Demo />
        </TestCase>
      </TestSuite>
      <TestSuite name="imageField">
        <TestCase itShould="icon">
          <Demo data={data1} imageField={'icon'} />
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
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: '#FF2D3B36',
  },
  containerStyle: {
    marginTop: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
