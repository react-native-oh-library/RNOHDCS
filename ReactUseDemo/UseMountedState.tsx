import React from 'react';
import { View, Text } from 'react-native';
import { useMountedState } from 'react-use';

const UseMountedStateDemo = () => {
  const [start, setStart] = React.useState('');
  const isMounted = useMountedState();

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        setStart('成功');
      } else {
        setStart('失败');
      }
    }, 1000);
  });

  return (
    <View>
      <Text>如果组件已安装则返回成功，否则返回值失败</Text>
      <Text>{start}</Text>
    </View>
  )
};

export default UseMountedStateDemo;