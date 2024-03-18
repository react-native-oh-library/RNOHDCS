/**
 * title: Store complex types such as array or object
 * desc: useLocalStorageState will do the serialization and deserialization work automatically.
 *
 * title.zh-CN: 存储数组或对象等复杂类型
 * desc.zh-CN: useLocalStorageState 会自动处理序列化和反序列化的操作。
 */

import React from 'react';
import { useLocalStorageState } from 'ahooks';
import { Button, View } from 'react-native';

const defaultArray = ['a', 'e', 'i', 'o', 'u'];

export function LocalStorageState2() {
  const [value, setValue]: any = useLocalStorageState('use-local-storage-state-demo2', {
    defaultValue: defaultArray,
  });

  return (
    <View>
      <p>{value?.join('-')}</p>
      <View style={{ marginRight: 16 }}>
        <Button
          title="push random"
          onPress={() => setValue([...value, Math.random().toString(36).slice(-1)])} />
      </View>
      <Button title="reset" onPress={() => setValue(defaultArray)} />
    </View>
  );
}