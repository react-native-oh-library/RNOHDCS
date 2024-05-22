/**
 * title: Default usage
 * desc: Do async check when component is mounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 组件加载时进行异步的检查
 */


import { useAsyncEffect } from 'ahooks';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

function mockCheck(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

export function UseAsyncEffect() {
  const [pass, setPass] = useState<boolean>();

  useAsyncEffect(async () => {
    setPass(await mockCheck());
  }, []);

  return (
    <View>
      {pass === undefined && <Text>Checking...</Text>}
      {pass === true && <Text>Check passed.</Text>}
    </View>
  );
}