import React from 'react';
import { View, Text, Button } from 'react-native';
import { useGetSetState } from 'react-use';

 const UseGetSetStateDemo = () => {
  const [get, setState] = useGetSetState({ cnt: 0 });
  const onClick = () => {
    let timeout=setTimeout(() => {
      setState({ cnt: get().cnt + 1 })
      clearTimeout(timeout);
    }, 1000);
  };

  return (
    <View>
      <Text>useGetSet和useGetSetState的混合， 在每次点击1秒后递增1</Text>
      <Text>Clicked：{get().cnt}</Text>
      <Button title='执行' onPress={onClick} />
    </View>
  );
};
export default UseGetSetStateDemo