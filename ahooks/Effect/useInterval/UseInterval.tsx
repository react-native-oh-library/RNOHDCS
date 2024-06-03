/**
 * title: Basic usage
 * desc: Execute once per 1000ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 每1000ms，执行一次
 */

import React, { useState } from 'react';
import { useInterval } from 'ahooks';
import { View, Text } from 'react-native';

export function UseInterval() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <View>
      <Text>count: {count}</Text>
    </View>
  )
};
