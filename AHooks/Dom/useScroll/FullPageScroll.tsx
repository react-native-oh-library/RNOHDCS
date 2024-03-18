/**
 * title: Listen Page Scroll
 * desc: Try to scroll this webpage.
 *
 * title.zh-CN: 监测整页的滚动
 * desc.zh-CN: 尝试滚动一下页面。
 */

import React, { useRef } from 'react';
import { useScroll } from 'ahooks';
import { View } from 'react-native';

export function FullPageScroll() {
  const ref = useRef(null);
  const scroll = useScroll(ref);
  return (
    <View>
      <View>{JSON.stringify(scroll)}</View>
    </View>
  );
};
