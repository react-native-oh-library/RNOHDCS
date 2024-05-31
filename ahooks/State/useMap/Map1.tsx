import React from 'react';
import { View, Button, Text } from 'react-native';
import { useMap } from 'ahooks';

export function Map1(){
  const [map, { set, setAll, remove, reset, get }] = useMap<string | number, string>([
    ['msg', 'hello world'],
    [123, 'number type'],
  ]);

  return (
    <View>
      <Button onPress={() => set(String(Date.now()), new Date().toJSON())} title="Add" />
      <Button onPress={() => setAll([['text', 'this is a new Map']])} title="Set new Map" />
      <Button onPress={() => remove('msg')} title="Remove 'msg'" disabled={!get('msg')} />
      <Button onPress={() => reset()} title="Reset" />
      <View style={{ marginTop: 16 }}>
        <Text>{JSON.stringify(Array.from(map), null, 2)}</Text>
      </View>
    </View>
  );
};

