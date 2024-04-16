import React from 'react';
import { View, Text, Button } from 'react-native';
import { useGetSet } from 'react-use';

 const UseGetSetDemo = () => {
  const [get, set] = useGetSet(0);
  const onClick = () => {
    let timeout=setTimeout(() => {
      set(get() + 1);
      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <View>
      <Text>下面的示例使用useGetSet 在每次点击1秒后递增1</Text>
      <Text>Clicked：{get()}</Text>
      <Button title='执行' onPress={onClick} />
    </View>
  );
};
export default UseGetSetDemo