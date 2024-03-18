/**
 * title: Listen keydown
 * desc: Press any key to preview.
 *
 * title.zh-CN: 监听 keydown 事件
 * desc.zh-CN: 按下键盘查看效果。
 */

import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useEventListener } from 'ahooks';

export function KeydownEventListener() {
  const [value, setValue] = useState('');

  useEventListener('keydown', (ev) => {
    setValue(ev.code);
  });

  return <Text>Your press key is {value}</Text>;
};
