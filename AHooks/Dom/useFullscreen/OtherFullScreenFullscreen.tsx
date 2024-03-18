/**
 * title: Coexist with other full screen operations
 * desc: The element's full screen may be modified by other scripts, don't worry, ahooks can work with them.
 *
 * title.zh-CN: 与其它全屏操作共存
 * desc.zh-CN: 元素的全屏情况可能被其它脚本修改，不用担心，ahooks 可以与它们共存。
 */

import React, { useRef, useState } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

export function OtherFullScreenFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef(null);

  const toggleFullscreen = () => {
    // This approach simulates a full-screen effect by hiding the status bar
    setIsFullscreen(true);
    StatusBar.setHidden(true);
  };

  const vanillaToggleFullscreen = () => {
    // Simulate toggling fullscreen using native APIs (not directly supported in pure React Native)
    console.log('Vanilla toggleFullscreen');
    // You can add your custom logic here to simulate fullscreen mode
  };

  return (
    <View style={{ backgroundColor: 'white', padding: 16 }}>
      <View style={{ marginBottom: 16 }}>
        <Text>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="aHooks toggleFullscreen" onPress={toggleFullscreen} />
        <Button title="Vanilla toggleFullscreen" onPress={vanillaToggleFullscreen} />
      </View>
    </View>
  );
};
