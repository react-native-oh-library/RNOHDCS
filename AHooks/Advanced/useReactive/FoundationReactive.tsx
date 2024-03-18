import React from 'react';
import { useReactive } from 'ahooks';
import { View, Text, TextInput, Button } from 'react-native';

export function FoundationReactive() {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });

  return (
    <View>
      <Text>state.count: {state.count}</Text>
      <Button title="state.count++" onPress={() => (state.count += 1)} />
      <Button title="state.count--" onPress={() => (state.count -= 1)} />
      <Text>state.inputVal: {state.inputVal}</Text>
      <TextInput
        onChangeText={(text) => (state.inputVal = text)}
        value={state.inputVal}
      />
      <Text>state.obj.value: {state.obj.value}</Text>
      <TextInput
        onChangeText={(text) => (state.obj.value = text)}
        value={state.obj.value}
      />
    </View>
  );
}