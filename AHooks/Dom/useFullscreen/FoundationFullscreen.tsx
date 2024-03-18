/**
 * title: Default usage
 * desc: Use ref to set elements that need full screen
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 使用 ref 设置需要全屏的元素
 */

import React, { useRef } from 'react';
import { useFullscreen } from 'ahooks';
import { View, Text, Button, StyleSheet } from 'react-native';

export function FoundationFullscreen() {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);
  return (

    <View style={styles.container} ref={ref}>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="enterFullscreen" onPress={enterFullscreen} />
          <Button title="exitFullscreen" onPress={exitFullscreen} />
          <Button title="toggleFullscreen" onPress={toggleFullscreen} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
});