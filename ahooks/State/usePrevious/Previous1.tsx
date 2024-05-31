/**
 * title: Basic usage
 * desc: Record the previous value.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 记录上次的 count 值
 */

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { usePrevious } from 'ahooks';

export function Previous1(){
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  return (
    <View>
      <Text>counter current value: {count}</Text>
      <Text style={{ marginBottom: 8 }}>counter previous value: {previous}</Text>
      <Button onPress={() => setCount((c) => c + 1)} title="increase" />
      <View style={{ margin: 8 }}>
      <Button onPress={() => setCount((c) => c - 1)} title="decrease" />
      </View>
    </View>
  );
};

