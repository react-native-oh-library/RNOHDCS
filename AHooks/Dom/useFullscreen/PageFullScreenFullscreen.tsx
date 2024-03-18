/**
 * title: Page full screen
 *
 * title.zh-CN: 页面全屏
 */

import React, { useRef } from 'react';
import { useFullscreen } from 'ahooks';
import { View, Text, Button, StyleSheet } from 'react-native';

export function PageFullScreenFullscreen() {
  const ref = useRef(null);
  const [isFullscreen, { toggleFullscreen, enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  return (

    <View style={styles.container}>
      <View style={styles.fullscreenContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.fullscreenText}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</Text>
          <Button title="Enter Fullscreen" onPress={enterFullscreen} />
          <Button title="Exit Fullscreen" onPress={exitFullscreen} />
          <Button title="Toggle Fullscreen" onPress={toggleFullscreen} />
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
    backgroundColor: 'white',
  },
  fullscreenContainer: {
    backgroundColor: '#4B6BCD',
    padding: 12,
  },
  contentContainer: {
    marginBottom: 16,
  },
  fullscreenText: {
    color: 'white',
    marginBottom: 8,
  },
  buttonMargin: {
    margin: 8,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
