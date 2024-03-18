/**
 * title: Default usage
 * desc: Please click button or outside of button to show effects.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 请点击按钮或按钮外查看效果。
 */

import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';
import { TouchableOpacity, Text, View } from 'react-native';

export function ClickAway() {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <View>
      <TouchableOpacity ref={ref}>
        <Text>box</Text>
      </TouchableOpacity>
      <Text>counter: {counter}</Text>
    </View>
  );
};
