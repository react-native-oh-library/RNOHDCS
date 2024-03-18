import React from 'react';
import { View, Text } from 'react-native';
import { useMount } from 'react-use';

const UseMountDemo = (props: any) => {

  const [count, setCount] = React.useState(1);

  useMount(() => setCount(count + 1))

  return (
    <View>
      <Text>初始值为1，执行了会+1：{count}</Text>
    </View>
  )
};

export default UseMountDemo;