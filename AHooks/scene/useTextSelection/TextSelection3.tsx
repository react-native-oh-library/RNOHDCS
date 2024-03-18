/**
 * title: Listen specified area
 * desc: useTextSelection can receive dom or ref, for listen specified area.
 *
 * title.zh-CN: 监听特定区域文本选择
 * desc.zh-CN: useTextSelection 可以接收 dom 或 ref，指定监听区域。
 */

import React, { useRef } from 'react';
import { useTextSelection } from 'ahooks';
import { Text } from 'react-native';
import { View } from 'react-native';

export function TextSelection3(){
  const ref = useRef(null);
  const selection = useTextSelection(ref);
  return (
    <View>
      <View ref={ref} style={{ borderWidth:1,borderStyle:"solid", padding: 20 }}>
        <Text>Please swipe your mouse to select any text on this paragraph.</Text>
      </View>
      <Text >Result：{JSON.stringify(selection)}</Text>
    </View>
  );
};