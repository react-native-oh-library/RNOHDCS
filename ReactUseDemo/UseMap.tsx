import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMap } from 'react-use';

const UseMapDemo = () => {
  const [map, { set, setAll, remove, reset }] = useMap({
    hello: 'there',
  });

  return (
    <View>
      <Button title='Add' onPress={() => set(String(Date.now()), new Date().toJSON())} />

      <Button title='Reset' onPress={() => reset()} />

      <Button title='Set new data' onPress={() => setAll({ hello: 'new', data: 'data' })} />

      <Button title='Remove "hello"' onPress={() => remove('hello')} disabled={!map.hello} />

      <Text>{JSON.stringify(map, null, 2)}</Text>
    </View>
  );
};

export default UseMapDemo;