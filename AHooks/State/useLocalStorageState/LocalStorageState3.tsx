/**
 * title: Custom serialization and deserialization functions
 * desc: You may not need the default `JSON.stringify/JSON.parse` to serialize string.
 *
 * title.zh-CN: 自定义序列化和反序列化函数
 * desc.zh-CN: 对于普通的字符串，可能你不需要默认的 `JSON.stringify/JSON.parse` 来序列化。
 */

import React from 'react';
import { useLocalStorageState } from 'ahooks';
import { View, TextInput, Button } from 'react-native';

export function LocalStorageState3() {
  const [message, setMessage] = useLocalStorageState<string | undefined>(
    'use-local-storage-state-demo3',
    {
      defaultValue: 'Hello~',
      serializer: (v) => v ?? '',
      deserializer: (v) => v,
    },
  );

  return (
    <View>
      <TextInput
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <View style={{ marginHorizontal: 8, marginVertical: 0 }}>
        <Button title="Reset" onPress={() => setMessage('Hello~')} />
      </View>
      <Button title="Clear" onPress={() => setMessage(undefined)} />
    </View>
  );
}
