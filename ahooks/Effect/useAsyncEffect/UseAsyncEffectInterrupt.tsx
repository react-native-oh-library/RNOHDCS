/**
 * title: Break off
 * desc: Use `yield` to stop the execution when effect has been cleaned up.
 *
 * title.zh-CN: 中断执行
 * desc.zh-CN: 通过 `yield` 语句可以增加一些检查点，如果发现当前 effect 已经被清理，会停止继续往下执行。
 */

import React, { useState } from 'react';
import { useAsyncEffect } from 'ahooks';
import { View, Text, TextInput } from 'react-native';

function mockCheck(val: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val.length > 0);
    }, 1000);
  });
}

export function UseAsyncEffectInterrupt() {
  const [value, setValue] = useState('');
  const [pass, setPass] = useState(null);

  useAsyncEffect(async () => {
    setPass(null);
    const result: any = await mockCheck(value);
    setPass(result);
  }, [value]);

  return (
    <View>
      <TextInput
        value={value}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 16 }}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
      <Text>
        {pass === null && 'Checking...'}
        {pass === false && 'Check failed.'}
        {pass === true && 'Check passed.'}
      </Text>
    </View>
  );
}