/**
 * title: Default usage
 * desc: Tracking content of user text selection
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 实时获取页面上选择的文本
 */

import React from 'react';
import { useTextSelection } from 'ahooks';
import { Text } from 'react-native';
import { View } from 'react-native';

export function TextSelection1(){
  const { text } = useTextSelection();
  return (
    <View>
      <Text>You can select text all page.</Text>
      <Text>Result：{text}</Text>
    </View>
  );
};