/**
 * title: Default usage
 * desc: Tracking cursor position.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 获取鼠标位置。
 */

import { useMouse } from 'ahooks';
import React from 'react';
import { View, Text } from 'react-native';

export function FullscreenMouse() {
  const mouse = useMouse();

  return (
    <View>
      <Text>
        Client - x: {mouse.clientX}, y: {mouse.clientY}
      </Text>
      <Text>
        Page - x: {mouse.pageX}, y: {mouse.pageY}
      </Text>
      <Text>
        Screen - x: {mouse.screenX}, y: {mouse.screenY}
      </Text>
    </View>
  );
};
