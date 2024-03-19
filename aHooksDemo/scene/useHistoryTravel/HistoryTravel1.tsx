/**
 * title: Basic usage
 * desc: Redo and undo operations，click back and forward after input something.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 撤销跟重做操作，输入内容后，点击 back 和 forward。
 */

import { useHistoryTravel } from 'ahooks';
import React from 'react';
import { View, TextInput, Button } from 'react-native';

export function HistoryTravel1(){
  const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>();

  return (
    <View>
      <TextInput value={value || ''} onChangeText={setValue} />
      <View style={{ marginHorizontal: 8 }}>
      <Button
        title="back"
        disabled={backLength <= 0}
        onPress={back}
      />
      </View>
      <Button title="forward" disabled={forwardLength <= 0} onPress={forward} />
    </View>
  );
};
