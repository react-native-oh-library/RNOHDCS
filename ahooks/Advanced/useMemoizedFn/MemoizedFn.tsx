/**
 * title: useMemoizedFn function reference will not change, which can be used for performance optimization.
 * desc: In the example, `memoizedFn` reference will not change, `callbackFn` will change when count changes.
 *
 * title.zh-CN: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc.zh-CN: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在 count 变化时变化。
 */

import { useMemoizedFn } from 'ahooks';
import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, Button } from 'react-native';

export function MemoizedFn() {
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
          setCount((c) => c + 1);
        }}
      />

      <Text>You can click the button to see the number of sub-component renderings</Text>

      <View style={{ marginTop: 32 }}>
        <Text>Component with useCallback function:</Text>
        {/* use callback function, ExpensiveTree component will re-render on state change */}
        <ExpensiveTree showCount={callbackFn} />
      </View>

      <View style={{ marginTop: 32 }}>
        <Text>Component with useMemoizedFn function:</Text>
        {/* use memoized function, ExpensiveTree component will only render once */}
        <ExpensiveTree showCount={memoizedFn} />
      </View>
    </View>
  );
};

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <View>
      <Text>Render Count: {renderCountRef.current}</Text>
      <Button title="showParentCount" onPress={showCount} />
    </View>
  );
});
