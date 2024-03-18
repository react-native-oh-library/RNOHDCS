/**
 * title: Basic usage
 * desc: useSize can receive ref as argument
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: useSize 可以接收 ref 参数
 */

import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import { View, Text } from 'react-native';

export function FullscreenSize() {
  const ref = useRef(null);
  const size = useSize(ref);
  
  return (
    <View ref={ref}>
      <Text>Try to resize the preview window </Text>
      <Text>
        width: {size?.width}px, height: {size?.height}px
      </Text>
    </View>
  );
};
