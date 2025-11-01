import React, { useRef } from 'react';
import { Image, View, Button, StyleSheet } from 'react-native';
import Video from '@react-native-oh-tpl/react-native-video';

const App = () => {
  const videoPlayer = useRef(null);

  // 切换到全屏模式
  const handleFullscreen = () => {
    if (videoPlayer.current) {
      console.info('切换到全屏');
      videoPlayer.current.presentFullscreenPlayer();
    }
  };

  // 退出全屏模式
  const handleExitFullscreen = () => {
    if (videoPlayer.current) {
      videoPlayer.current.dismissFullscreenPlayer();
      // setIsFullscreen(false); // 退出全屏
    }
  };

  

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://res.vmallres.com/uomcdn/CN/cms/202502/6a8bb4ea489d48f8878a8a78664a91f1.jpg',
        }} // 替换为你的图片URL
        style={styles.image}
        onLoad={() => console.log('Image loaded!')} // 图片加载完成时触发
      />
      
      {/* 视频组件 */}
      <Video
        ref={videoPlayer}
        source={{
          uri: 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4',
        }} // 视频链接
        style={styles.backgroundVideo}
        resizeMode="contain"
        controls={true}
        paused={true}
        onFullscreenPlayerDidDismiss={handleExitFullscreen}
      />

      {/* 全屏按钮 */}
      <Button title="Go Fullscreen" onPress={handleFullscreen} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // 使子元素能够绝对定位
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
  image: {
    width: 200, // 可以根据需要调整宽度和高度
    height: 200,
    borderRadius: 10, // 可选：添加圆角
    shadowColor: '#000', // 可选：添加阴影
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4, // 对于Android设备，使用elevation属性添加阴影
  },
  exitButtonContainer: {
    position: 'absolute',
    top: 50, // 按钮离顶部的位置，可以调整
    zIndex: 1, // 确保按钮在视频元素上方
    width: '80%',
  },
});

export default App;
