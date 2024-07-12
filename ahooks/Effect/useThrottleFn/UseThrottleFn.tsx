/**
 * title: Default usage
 * desc: Frequent calls run, but the function is only executed every 500ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */

import React, { useState } from 'react';
import { useThrottleFn } from 'ahooks';
import { Button, Text, View } from 'react-native';

export function UseThrottleFn() {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );

  return (
    <View>
      <Text style={{ marginTop: 16 }}> Clicked count: {value} </Text>
      <Button title="Click fast!" onPress={run} />
    </View>
  );
};
