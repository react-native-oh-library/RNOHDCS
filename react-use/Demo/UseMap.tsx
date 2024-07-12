import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMap } from 'react-use';

 const UseMapDemo = () => {
  const [map, { set, setAll, remove, reset }] = useMap({
    hello: 'there',
  });

  function getTime(){
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; 
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  return (
    <View>
      <Button title='Add' onPress={() => set(String(Date.now()), getTime())} />

      <Button title='Reset' onPress={() => reset()} />

      <Button title='Set new data' onPress={() => setAll({ hello: 'new', data: 'data' })} />

      <Button title='Remove "hello"' onPress={() => remove('hello')} disabled={!map.hello} />

      <Text>{JSON.stringify(map, null, 2)}</Text>
    </View>
  );
};
export default UseMapDemo