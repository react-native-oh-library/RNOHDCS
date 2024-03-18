/**
 * title: Image full screen
 *
 * title.zh-CN: 图片全屏
 */

import React, { useRef } from 'react';
import { View, Image, Button } from 'react-native';
import { useFullscreen } from 'ahooks';

const img = require('./react-hooks.jpg');

export function ImgFullScreenFullscreen() {
  const imageRef = useRef(null);
  const [, { enterFullscreen }] = useFullscreen(() => imageRef.current);

  return (
    <View style={{ backgroundColor: 'white', marginBottom: 16 }}>
      <Image ref={imageRef} source={img} style={{ width: 320 }} />
      <Button title="enterFullscreen" onPress={enterFullscreen} />
    </View>
  );
};