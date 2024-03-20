/**
 * title: Prevent duplicated submits
 * desc: Before the `submit` function finishes, the other click actions will be ignored.
 *
 * title.zh-CN: 防止重复提交
 * desc.zh-CN: 在 `submit` 函数执行完成前，其余的点击动作都会被忽略。
 */

import { useLockFn } from 'ahooks';
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export function UseLockFn() {
  const [count, setCount] = useState(0);

  const submit = useLockFn(async () => {
    Alert.alert('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    Alert.alert('Submit finished');
  });

  return (
    <View>
      <Text>Submit count: {count}</Text>
      <Button title="Submit" onPress={submit} />
    </View>
  );
};
