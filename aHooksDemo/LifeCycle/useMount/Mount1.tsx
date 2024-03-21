/**
 * title: Basic usage
 * desc: The function is called right after the component is mounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */

import { useMount, useBoolean } from 'ahooks';
import React from 'react';
import { Alert } from 'react-native';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  useMount(() => {
    Alert.alert('mount');
  });

  return <Text>Hello World</Text>;
};

export function Mount1() {
  const [state, { toggle }] = useBoolean(false);

  return (
    <View>
      <Button title={state ? 'unmount' : 'mount'} onPress={toggle} />
      {state && <MyComponent />}
    </View>
  );
};