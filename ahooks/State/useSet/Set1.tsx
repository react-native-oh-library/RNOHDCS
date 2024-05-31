import React from 'react';
import { View, Button, Text } from 'react-native';
import { useSet } from 'ahooks';

export function Set1(){
  const [set, { add, remove, reset }] = useSet(['Hello']);

  return (
    <View>
      <Button onPress={() => add(String(Date.now()))} title="Add Timestamp" />
      <View style={{ margin: 8 }}>
      <Button
        onPress={() => remove('Hello')}
        title="Remove Hello"
        disabled={!set.has('Hello')}
      />
      </View>
      <Button onPress={() => reset()} title="Reset" />
      <View style={{ marginTop: 16 }}>
        <Text>{JSON.stringify(Array.from(set), null, 2)}</Text>
      </View>
    </View>
  );
};

