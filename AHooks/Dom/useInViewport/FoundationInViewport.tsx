/**
 * title: Default usage
 * desc: Observe if the element is visible.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 监听元素是否在可见区域内
 */

import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';
import { View, StyleSheet } from 'react-native';

export function FoundationInViewport() {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  const styles = StyleSheet.create({
    observer: {
      borderWidth: 1,
      height: 100,
      width: 100,
      textAlign: 'center',
      marginTop: 80,
    },
    inViewportView: {
      marginTop: 16,
      color: inViewport ? '#87d068' : '#f50'
    }
  })
  return (
    <View>
      <View style={{ width: 300, height: 300, overflow: 'scroll', borderWidth: 1, }}>
        scroll here
        <View style={{ height: 800 }}>
          <View
            ref={ref}
            style={styles.observer}
          >
            observer dom
          </View>
        </View>
      </View>
      <View style={styles.inViewportView}>
        inViewport: {inViewport ? 'visible' : 'hidden'}
      </View>
    </View>
  );
};


