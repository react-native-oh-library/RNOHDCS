/**
 * title: Basic usage
 * desc: Execute after 3000ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在 3000ms 后执行。
 */

import React, { useState } from 'react';
import { useRafTimeout } from 'ahooks';
import { View, Text } from 'react-native';

export function UseRafTimeout() {
  const [count, setCount] = useState(0);

  useRafTimeout(() => {
    setCount(count + 1);
  }, 2000);

  return <View><Text>count: {count}</Text></View>;
};
