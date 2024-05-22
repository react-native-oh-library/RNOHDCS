import React from 'react';
import { View, Text, Button } from 'react-native';
import { useEffectOnce } from 'react-use';

 const UseEffectOnceDemo = () => {
  const [count, setCount] = React.useState(1);
  const [number, setNumber] = React.useState(1);

  useEffectOnce(() => setCount(count + 1));
  const numAdd = () => setNumber(number + 1);

  return (
    <View>
      <Text>初始值都为1</Text>
      <Text>useEffectOnce方法+1:：{count}</Text>
      <Text>普通方法+1：{number}</Text>
      <Button title='useEffectOnce' onPress={() => useEffectOnce} />
      <Button title='普通方法' onPress={() => numAdd()} />
    </View>
  )
};
export default UseEffectOnceDemo