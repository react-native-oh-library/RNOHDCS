import React from 'react';
import { View, Text } from 'react-native';
import { useLifecycles } from 'react-use';

const UseLifecyclesDemo = () => {
  const [mount, setMount] = React.useState(1);
  const [unMount, setUnmount] = React.useState(1);

  useLifecycles(() => {
    setMount(mount + 1),
      () => setUnmount(unMount + 1)
  });

  return (
    <View>
      <Text>初始值都为1，mount和unMount阶段都给各自的初始值+1</Text>
      <Text>若mount执行会打印2：{mount}</Text>
      <Text>若unmount执行会打印2：{unMount}</Text>
    </View>
  )
};

export default UseLifecyclesDemo;