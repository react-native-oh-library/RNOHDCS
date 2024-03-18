/**
 * title: Observe element visible area ratio
 * desc: Pass in `options.threshold`, you can control the ratio to be triggered when the visible area reach every threshold. <br /> `options.root` can control the parent element, in this example, visible will not change relative to the browser viewport.
 *
 * title.zh-CN: 监听元素可见区域比例
 * desc.zh-CN: 传入 `options.threshold`, 可以控制在可见区域达到该比例时触发 ratio 更新。<br /> `options.root` 可以控制相对父级元素，在这个例子中，不会相对浏览器视窗变化。
 */

import React from 'react';
import { useInViewport } from 'ahooks';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export function ProportionInViewport() {
  const [inViewport, ratio] = useInViewport(() => document.getElementById('children'), {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: () => document.getElementById('parent'),
  });
  const styles = StyleSheet.create({
    element: {
      borderWidth: 1,
      height: 100,
      width: 100,
      textAlign: 'center',
      marginTop: 80,
    },
    inViewportText: {
      marginTop: 16,
      color: inViewport ? '#87d068' : '#f50'
    }
  })
  return (
    <View>
      <ScrollView style={{ width: 300, height: 300 }}>
        <Text>scroll here</Text>
        <View style={{ height: 800 }}>
          <View
            ref={useInViewport}
            style={styles.element}
          >
            <Text>observer dom</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inViewportText}>
        <Text>inViewport: {inViewport ? 'visible' : 'hidden'}</Text>
        <Text>ratio: {ratio}</Text>
      </View>
    </View>
  );
};
