import React from 'react';
import { View, Button } from 'react-native';
import Picker from 'react-native-picker';

const MyPicker = () => {
  let data = {
    pickerData:
      [{
        a: [
          {
            a1: [1, 2, 3, 4]
          },
          {
            a2: [5, 6, 7, 8]
          },
          {
            a3: [9, 10, 11, 12]
          }
        ]
      },
      {
        b: [
          {
            b1: [11, 22, 33, 44]
          },
          {
            b2: [55, 66, 77, 88]
          },
          {
            b3: [99, 1010, 1111, 1212]
          }
        ]
      },
      {
        c: [
          {
            c1: ['a', 'b', 'c']
          },
          {
            c2: ['aa', 'bb', 'cc']
          },
          {
            c3: ['aaa', 'bbb', 'ccc']
          }
        ]
      },],
    isLoop: false,
    selectedValue: ['b', 'b1', 22],
    onPickerConfirm: data => {
      console.log('onPickerConfirm:', data)
    },
    onPickerCancel: data => {
      console.log('onPickerCancel:', data);
    },
    onPickerSelect: data => {
      console.log('onPickerSelect:', data);
    }
  }
  return (
    <View>
      <Button title='initPicker' onPress={() => Picker.init(data)} />
      <Button title='showPicker' onPress={() => {
        Picker.show()
        setTimeout(() => {
          Picker.select(['c', 'c1', 'a'])
        }, 2000);
      }} />
    </View>
  );
};

export default MyPicker;