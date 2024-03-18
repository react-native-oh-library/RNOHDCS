/**
 * title: Basic usage
 * desc: Supported keyCode and alias in keyboard events, pressing ArrowUp or ArrowDown to show effect.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 支持键盘事件中的 keyCode 和别名，请按 ArrowUp 或 ArrowDown 键进行演示。
 */

import React, { useState } from 'react';
import { useKeyPress } from 'ahooks';
import { View, Text } from 'react-native';

export function FullscreenKeyPress() {
  const [counter, setCounter] = useState(0);

  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1);
  });

  // keyCode value for ArrowDown
  useKeyPress(40, () => {
    setCounter((s) => s - 1);
  });

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <Text>1. Press ArrowUp by key to increase</Text>
      <Text>2. Press ArrowDown by key to decrease</Text>
      <Text>
        counter: <Text style={{ color: '#f00' }}>{counter}</Text>
      </Text>
    </View>
  );
};
