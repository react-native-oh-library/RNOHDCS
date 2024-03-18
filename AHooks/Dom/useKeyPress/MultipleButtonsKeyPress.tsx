import { useKeyPress } from 'ahooks';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export function MultipleButtonsKeyPress() {
  const [num, setNum] = useState<string>();
  const [key, setKey] = useState<string>();

  const filterKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  useKeyPress(filterKey, (event) => {
    setNum(event.key);
  });

  // a s d f, Backspace, 8
  useKeyPress([65, 83, 68, 70, 8, '8'], (event) => {
    setKey(event.key);
  });

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <View>
        <Text>1. Number key [0-9]: <Text style={{ color: '#f00' }}>{num}</Text></Text>
      </View>
      <View>
        <Text>2. Press key [a, s, d, f, Backspace, 8]: <Text style={{ color: '#f00' }}>{key}</Text></Text>
      </View>
    </View>
  );
};
