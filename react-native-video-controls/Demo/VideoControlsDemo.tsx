import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import VideoPlayer from 'react-native-video-controls'

function VideoPlayerDemo() {
  const [isBack, setOnBack] = useState(false);

  function handleOnBack (){
    console.log("this is onBack event test,because navigator properties depends on others third-parity");
    setOnBack(true);
  }
  return(
    <View style = {styles.container}>
     <VideoPlayer
          title = 'oceans'
          style = {styles.video}
          source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          toggleResizeModeOnFullscreen = {true}
          controlAnimationTiming = {3000}
          doubleTapTime = {10}
          controlTimeout = {4000}
          scrubbing = {5}
          navigator = {null}
          showOnStart = {false}
          videoStyle = {styles.video}
          onBack = {handleOnBack}
          seekColor = {'#00FFFF'}
          tapAnywhereToPause = {true}
      />
      {isBack && (  
        <Text style={{ position: 'absolute', bottom: 50, left: '50%', transform: [{ translateX: -50 }], color: 'white' }}>  
          onBack run success!
        </Text>  
      )}
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    }, 
    video: {  
      width: '100%',  
      height: '100%',  
    }, 
  });

export default VideoPlayerDemo;