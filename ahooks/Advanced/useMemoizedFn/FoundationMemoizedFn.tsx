/**
 * title: Default usage
 * desc: useMemoizedFn is the same as useCallback.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: useMemoizedFn 与 useCallback 可以实现同样的效果。
 */

import React, { useState, useCallback } from 'react';
import { message } from 'antd';
import { useMemoizedFn } from 'ahooks';
import { View, Text, Button, Alert } from 'react-native';

export function FoundationMemoizedFn() {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    Alert.alert(`Current conut is${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    Alert.alert(`Current conut is${count}`);
  });

  return (
    <View>
      <Text>count: {count}</Text>
      <Button
        title="Add Count"
        onPress={() => {
          setCount((c) => c + 1)
        }}
      />
      <View style={{ marginTop: 16 }}>
        <Button title="call callbackFn" onPress={callbackFn} />
        <Button title="call memoizedFn" onPress={memoizedFn} />
      </View>
    </View>
  );
};
