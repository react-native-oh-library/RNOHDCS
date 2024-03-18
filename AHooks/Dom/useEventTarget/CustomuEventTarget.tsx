/**
 * title: Basic usage
 * desc: Controlled input component，support reset.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 受控的 input，支持 reset。
 */

import React from 'react';
import { useEventTarget } from 'ahooks';
import { View, TextInput, Button } from 'react-native';

export function CustomuEventTarget() {
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' });

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={{ width: 200, marginRight: 20, borderWidth: 1, padding: 10 }}
        placeholder="Please type here"
        keyboardType='numeric' //设置键盘类型为数字
      />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};
