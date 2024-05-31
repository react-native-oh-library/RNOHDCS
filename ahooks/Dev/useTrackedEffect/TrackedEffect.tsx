/**
 * title: Default usage
 * desc: Display the changed deps when effect function is executed.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 查看每次 effect 执行时发生变化的依赖项
 */

import React, { useState } from 'react';
import { useTrackedEffect } from 'ahooks';
import { View, Text, Button } from 'react-native';

export function TrackedEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useTrackedEffect(
    (changes) => {
      console.log('Index of changed dependencies: ', changes);
    },
    [count, count2],
  );

  return (
    <View>
      <Text>Please open the browser console to view the output!</Text>
      <View>
        <Text>Count: {count}</Text>
        <Button title="count + 1" onPress={() => setCount((c) => c + 1)} />
      </View>
      <View style={{ marginTop: 16 }}>
        <Text>Count2: {count2}</Text>
        <Button title="count + 1" onPress={() => setCount2((c) => c + 1)} />
      </View>
    </View>
  );
};
