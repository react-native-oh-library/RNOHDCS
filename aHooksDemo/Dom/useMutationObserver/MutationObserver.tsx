/**
 * title: Basic usage
 *
 * title.zh-CN: 基础用法
 */

import { useMutationObserver } from 'ahooks';
import React, { useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';

export function MutationObserver() {
  const [width, setWidth] = useState(200);
  const [count, setCount] = useState(0);

  const ref = useRef<View>(null);

  useMutationObserver(
    (mutationsList: any) => {
      mutationsList.forEach(() => setCount((c) => c + 1));
    },
    ref,
    { attributes: true },
  );

  return (
    <View>
      <View
        ref={ref}
        onLayout={() => { }}
        style={{
          width,
          padding: 12,
          borderWidth: 1,
          borderColor: '#000',
          marginBottom: 8,
        }}>
        <Text>current width：{width}</Text>
      </View>
      <Button title="widening" onPress={() => setWidth((w) => w + 10)} />
      <Text>Mutation count {count}</Text>
    </View>
  );
};