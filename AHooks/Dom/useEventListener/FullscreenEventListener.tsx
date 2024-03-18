/**
 * title: Default usage
 * desc: Click the button to preview.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 点击按钮查看效果。
 */

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { useEventListener } from 'ahooks';

export function FullscreenEventListener() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEventListener(
    'click',
    () => {
      setValue(value + 1);
    },
    { target: ref },
  );

  return (
    <TouchableOpacity ref={ref} onPress={() => setValue(value + 1)} style={styles.clickedValue}>
      <Text>You clicked {value} times</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickedValue: {
    backgroundColor: 'blue',
    width: 150,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})