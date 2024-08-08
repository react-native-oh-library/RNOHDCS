import {TestCase, TestSuite,Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
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

const Demo1 = () => {
  return <Demo imageStyle={{marginRight: 5}} />;
};

export const SelectCountryTest = () => {
  return (
    <ScrollView>
      <Tester>
      <View>
        <Text style={{color: '#fff', fontSize: 20}}>SelectCountryDemo</Text>
      </View>
      <TestSuite name="imageField">
        <TestCase itShould="imageField">
          <Demo />
        </TestCase>
      </TestSuite>
      <TestSuite name="imageStyle">
        <TestCase itShould="imageStyle">
          <Demo1 />
        </TestCase>
      </TestSuite>
      </Tester>
    </ScrollView>
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
