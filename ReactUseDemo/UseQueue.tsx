import React from 'react';
import { View, Text, Button } from 'react-native';
import { useQueue } from 'react-use';

const UseQueueDemo = () => {
  const { add, remove, first, last, size } = useQueue();

  return (
    <View>
      <View>
        <Text>first: {first || 0}</Text>
        <Text>last: {last || 0}</Text>
        <Text>size: {size || 0}</Text>
      </View>
      <Text style={{height:10}}></Text>
      <Button title='Add' onPress={() => add((last || 0) + 1)} />
      <Text style={{height:10}}></Text>
      <Button title='Remove' onPress={() => remove()} />
    </View>
  );
};

export default UseQueueDemo;