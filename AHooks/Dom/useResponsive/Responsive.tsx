/**
 * title: Get responsive info in components
 * desc: By calling useResponsive in components, you can retrieve the responsive infomation of the browser page and subscribe to it at the same time.
 *
 * title.zh-CN: 在组件中获取响应式信息
 * desc.zh-CN: 在组件中调用 useResponsive 可以获取并订阅浏览器窗口的响应式信息。
 */

import React from 'react';
import { configResponsive, useResponsive } from 'ahooks';
import { View, Text } from 'react-native';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

export function Responsive() {
  const responsive = useResponsive();
  return (
    <View>
      <Text>Please change the width of the screen to see the effect:</Text>
      {Object.keys(responsive).map((key) => (
        <Text key={key}>
          {key} {responsive[key] ? '✔' : '✘'}
        </Text>
      ))}
    </View>
  );
}
