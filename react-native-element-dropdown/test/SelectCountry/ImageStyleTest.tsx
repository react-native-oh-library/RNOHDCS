import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Demo = () => {
  const [country, setCountry] = useState<string>('');
  const [width, setWidth] = useState<number>(15);
  const [color, setColor] = useState<string>('blue');
  return (
    <>
      <View>
        <Text>color:{color}</Text>
        <Text>width:{width}</Text>
      </View>
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
        imageStyle={{
          marginRight: 10,
          width: width,
          height: width,
          backgroundColor: color,
        }}
      />
      <View style={styles.actionBtn}>
        <Button
          title="changeColor"
          onPress={() => {
            setColor(v => (v === 'red' ? 'blue' : 'red'));
          }}
        />
        <Button
          title="changeWidth"
          onPress={() => {
            setWidth(v => (v === 15 ? 20 : 15));
          }}
        />
      </View>
    </>
  );
};

export const ImageStyleTest = () => {
  return (
    <Tester>
      <TestSuite name="ImageStyle">
        <TestCase itShould="">
          <Demo />
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
