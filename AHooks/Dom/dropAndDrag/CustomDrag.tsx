/**
 * title: Customize Image
 * desc: Customize image that follow the mouse pointer during dragging.
 *
 * title.zh-CN: 自定义拖拽图像
 * desc.zh-CN: 自定义拖拽过程中跟随鼠标指针的图像。
 */

import React, { useRef } from 'react';
import { useDrag } from 'ahooks';
import { Image, View } from 'react-native';

const COMMON_STYLE = {
  border: 1,
  borderColor: '#e8e8e8',
  height: 50,
  lineHeight: 50,
  padding: 16,
  textAlign: 'center',
  marginRight: 16,
};

export function CustomDrag() {
  const dragRef = useRef(null);

  useDrag('', dragRef, {
    dragImage: {
      image: '/logo.svg',
    },
  });

  return (
    <View ref={dragRef} style={{ display: 'flex' }}>
      <Image source={require('./simple-logo.png')} style={COMMON_STYLE} />
      <View style={COMMON_STYLE}>drag me</View>
    </View>
  );
};
