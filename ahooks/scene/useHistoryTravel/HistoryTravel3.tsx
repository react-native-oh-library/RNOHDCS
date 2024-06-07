/**
 * title: Limit maximum history length
 * desc: Limit the maximum number of history records to avoid excessive memory consumption.
 *
 * title.zh-CN: 限制历史记录最大长度
 * desc.zh-CN: 限制最大历史记录数量,避免过度占用内存。
 */

import { useHistoryTravel } from 'ahooks';
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export function HistoryTravel3(){
  const maxLength = 3;
  const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>(
    '',
    maxLength,
  );

  return (
    <View>
      <View>
        <Text>maxLength: {maxLength}</Text>
        <Text>backLength: {backLength}</Text>
        <Text>forwardLength: {forwardLength}</Text>
      </View>
      <TextInput value={value || ''} onChangeText={setValue} style={{ borderWidth: 1, fontSize: 16 }} />
      <View 
        style={{ marginHorizontal: 8 }}>
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