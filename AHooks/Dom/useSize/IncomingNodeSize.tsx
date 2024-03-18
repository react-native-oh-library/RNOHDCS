/**
 * title: pass in the DOM element
 * desc: useSize can receive a dom element as parameter. In SSR scenarios, you can pass in function `() => dom`
 *
 * title.zh-CN: 传入 DOM 元素
 * desc.zh-CN: useSize 可以接收 dom，在 SSR 场景可以传入函数 `() => dom`
 */

import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import { View, Text } from 'react-native';

export function IncomingNodeSize() {
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