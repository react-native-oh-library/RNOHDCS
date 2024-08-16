import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import VideoPlayer from 'react-native-video-controls'

function VideoDemo(){
    function handleOnBack (){
      alert("this is onBack event test,because navigator properties depends on others parity");
    }
    return(
      <View style = {styles.container}>
       <VideoPlayer
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

export default VideoDemo;