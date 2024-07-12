/**
 * title: Default usage
 * desc: unmountedRef.current means whether the component is unmounted
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: unmountedRef.current 代表组件是否已经卸载
 */

import { useBoolean, useUnmountedRef } from 'ahooks';
import React, { useEffect } from 'react';
import { Button ,Text, View, Alert } from 'react-native';

const MyComponent = () => {
  const unmountedRef = useUnmountedRef();
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.current) {
        Alert.alert('component is alive');
      }
    }, 3000);
  }, []);

  return <Text>Hello World!</Text>;
};

export function UnmountedRef1(){
  const [state, { toggle }] = useBoolean(true);

  return (
    <View>
      <Button title={state ? 'unmount' : 'mount'} onPress={toggle} />
      {state && <MyComponent />}
    </View>
  );
};