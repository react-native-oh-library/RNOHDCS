import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const sports = [
  {
    label: 'Football',
    value: 'football',
    key: 'football'
  },
  {
    label: 'Baseball',
    value: 'baseball',
    key: 'baseball'
  },
  {
    label: 'Hockey',
    value: 'hockey',
    key: 'hockey'
  },
];
const placeholder = {
  label: 'Select a sport...',
  value: null,
  color: '#9EA0A4',
};

export default function PickerSelectExample() {
  const firstTextInputRef = useRef<TextInput | null>(null);
  const favSport0Ref = useRef<RNPickerSelect | null>(null);
  const favSport1Ref = useRef<RNPickerSelect | null>(null);

  const [stateval, setStateval] = useState({
    favSport0: undefined,
    favSport1: undefined,
    favSport2: undefined
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", }}>
      <Text>Standard TextInput</Text>
      <TextInput
        ref={firstTextInputRef}
        returnKeyType="next"
        enablesReturnKeyAutomatically
        onSubmitEditing={() => {
          favSport0Ref.current!.togglePicker(true, () => {
            console.log('togglePicker');
          });
        }}
        style={styles.inputAndroid}
        blurOnSubmit={false}
      />

      <View style={styles.paddingView} />

      <Text>useNativeAndroidPickerStyle (default)</Text>
      <RNPickerSelect
        ref={favSport0Ref}
        style={styles}
        placeholder={placeholder}
        items={sports}
        onValueChange={value => {
          setStateval({ ...stateval, favSport0: value });
        }}
        onUpArrow={() => {
          firstTextInputRef.current!.focus();
        }}
        onDownArrow={() => {
          favSport1Ref.current!.togglePicker();
        }}
        value={stateval.favSport0}
      />

      <View style={styles.paddingView} />

      <Text>set useNativeAndroidPickerStyle to false</Text>
      <RNPickerSelect
        ref={favSport1Ref}
        style={styles}
        placeholder={placeholder}
        items={sports}
        onValueChange={value => {
          setStateval({ ...stateval, favSport1: value });
        }}
        value={stateval.favSport1}
        useNativeAndroidPickerStyle={false}
      />

      <Text>example</Text>
      <RNPickerSelect
        style={styles}
        placeholder={placeholder}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center"
  },
  paddingView: {
    margin: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: 200,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});