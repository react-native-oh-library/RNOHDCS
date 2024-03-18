import React from 'react';
import { View, Text, Button } from 'react-native';
import { useList } from 'react-use';

const UseListDemo = () => {
  const [list, { set, push, updateAt, insertAt, update, updateFirst, upsert, sort, filter, removeAt, clear, reset }] = useList([1, 2, 3, 4, 5]);

  return (
    <View>
      <Button title='Set to [1, 2, 3]' onPress={() => set([1, 2, 3])} />
      <Button title='Push timestamp' onPress={() => push(Date.now())} />
      <Button title='Update value at index 1' onPress={() => updateAt(1, Date.now())} />
      <Button title='Remove element at index 1' onPress={() => removeAt(1)} />
      <Button title='Filter even values' onPress={() => filter(item => item % 2 === 0)} />
      <Button title='Sort ascending' onPress={() => sort((a, b) => a - b)} />
      <Button title='Sort descending' onPress={() => sort((a, b) => b - a)} />
      <Button title='Clear' onPress={clear} />
      <Button title='Reset' onPress={reset} />
      <Text>{JSON.stringify(list, null, 2)}</Text>
    </View>
  );
};

export default UseListDemo;