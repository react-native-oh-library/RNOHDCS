/**
 * title: Custom transformer function
 * desc: Controlled input component with number input only
 *
 * title.zh-CN: 自定义转换函数
 * desc.zh-CN: 只能输入数字的 input 组件
 */

import React from 'react';
import { useEventTarget } from 'ahooks';
import { View, TextInput, Button } from 'react-native';

export function FoundationEventTarget() {
  const [value, { onChange, reset }] = useEventTarget({
    initialValue: '',
    transformer: (val: string) => val.replace(/[^\d]/g, ''),
  });

  return (
     <View style={{ flexDirection: 'row' }}>
     <TextInput
       value={value}
       onChangeText={onChange}
       style={{ width: 200, marginRight: 20, borderWidth: 1, padding: 10 }}
     />
     <Button title="reset" onPress={reset} />
   </View>
  );
};
