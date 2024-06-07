/**
 * title: Default usage
 * desc: DebouncedValue will change after the input ends 500ms.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: DebouncedValue 只会在输入结束 500ms 后变化。
 */

import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { useDebounce } from 'ahooks';

export function Debounce1(){
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <View style={{ alignItems: 'center' }}>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Typed value"
        style={{ width: 280, borderWidth: 1, borderColor: 'black', padding: 8, fontSize: 16 }}
      />
      <Text style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</Text>
    </View>
  );
};
