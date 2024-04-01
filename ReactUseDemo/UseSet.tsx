import React from 'react';
import { View, Text, Button } from 'react-native';
import {useSet} from 'react-use';

const UseSetDemo = () => {
  const [set, { add, has, remove, toggle, reset, clear }] = useSet(new Set(['hello']));

  return (
    <View>
      <Button title='Add' onPress={() => add(String(Date.now()))} />
      <Button title='Reset' onPress={() => reset()} />
      <Button title='Clear' onPress={() => clear()} />
      <Button title='Remove "hello"' onPress={() => remove('hello')} disabled={!has('hello')} />
      <Button title='Toggle hello' onPress={() => toggle('hello')} />
      <Text>{JSON.stringify(Array.from(set), null, 2)}</Text>
    </View>
  );
};

export default UseSetDemo;