/**
 * desc: useReactive returns a proxy object which always has the same reference. If `useEffect`, `useMemo`, `useCallback` and props passed to child component rely on the proxy, none of the above will be invoked by any changes to the proxy.
 *
 * desc.zh-CN: useReactive 产生可操作的代理对象一直都是同一个引用，`useEffect` , `useMemo` ,`useCallback` ,`子组件属性传递` 等如果依赖的是这个代理对象是**不会**引起重新执行。
 */

import React, { useEffect, useState } from 'react';
import { useReactive } from 'ahooks';
import { View, Button, Text } from 'react-native';

export function ProxyObjectReactive() {
  const state = useReactive({ count: 0 });
  const [stateCount, setStateCount] = useState(0);

  const state2 = useReactive({ count: 0 });
  const [stateCount2, setStateCount2] = useState(0);

  // Depends on the object, because it is always the same reference, it will not be executed
  useEffect(() => {
    setStateCount(stateCount + 1);
  }, [state]);

  // Depends on the underlying data type, so as long as it changes, it will be re-executed
  useEffect(() => {
    setStateCount2(stateCount2 + 1);
  }, [state2.count]);

  return (
    <View>
      <Button title="stateCount + 1" onPress={() => (state.count += 1)} />
      <Text>stateCount: {stateCount}</Text>

      <Button title="stateCount2 + 1" onPress={() => (state2.count += 1)} />
      <Text>stateCount2: {stateCount2}</Text>
    </View>
  );
};
