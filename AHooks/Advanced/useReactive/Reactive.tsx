import React from 'react';
import { useReactive } from 'ahooks';
import { View, Text, Button, TextInput } from 'react-native';

export function Reactive() {
  const state = useReactive({
    count: 0,
    val: {
      val1: {
        val2: '',
      },
    },
    arr: [1],
  });

  return (
    <View>
      <Text> counter state.count:{state.count}</Text>
      <Button title="state.count++" onPress={() => (state.count += 1)} />
      <Button title="state.count--" onPress={() => (state.count -= 1)} />
      <Text>state.arr:{JSON.stringify(state.arr)}</Text>
      <Button title="push" onPress={() => state.arr.push(1)} />
      <Button title="pop" onPress={() => state.arr.pop()} />
      <Button title="shift" onPress={() => state.arr.shift()} />
      <Button title="unshift" onPress={() => state.arr.unshift(2)} />
      <Button title="reverse" onPress={() => state.arr.reverse()} />
      <Button title="sort" onPress={() => state.arr.sort()} />
      <Text>nested structure</Text>
      <Text>{state.val.val1.val2}</Text>
      <TextInput
        style={{ width: 220, borderWidth: 1 }}
        onChangeText={(text) => {
          state.val.val1.val2 = text;
        }}
      />
    </View>
  );
};