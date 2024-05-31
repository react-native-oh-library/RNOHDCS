/**
 * title: Basic usage
 * desc: The function is called right before the component is unmounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件卸载时，执行函数。
 */

import { useBoolean, useUnmount } from 'ahooks';
import React from 'react';
import { Button, View, Text,Alert  } from 'react-native';

const MyComponent = () => {
  useUnmount(() => {
    Alert.alert('unmount');
  });

  return <Text>Hello World!</Text>;
};

export function Unmount1() {
  const [state, { toggle }] = useBoolean(true);

  return (
    <View>
      <Button title={state ? 'unmount' : 'mount'} onPress={toggle} />
      {state && <MyComponent />}
    </View>
  );
};