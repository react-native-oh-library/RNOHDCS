/**
 * title: Default usage
 * desc: ThrottledValue will change every 500ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: ThrottledValue 每隔 500ms 变化一次。
 */

import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useThrottle } from 'ahooks';

export function Throttle1(){
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <View style={{ alignItems: 'center' }}>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Typed value"
        style={{ width: 280, borderWidth: 1, borderColor: 'black', padding: 8 }}
      />
      <Text style={{ marginTop: 16 }}>throttledValue: {throttledValue}</Text>
    </View>
  );
};

