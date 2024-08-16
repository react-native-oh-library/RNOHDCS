import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import VideoPlayer from 'react-native-video-controls'
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

function VideoTest(){
    function handleEnterFullscreen  ()  {  
      alert('this is onEnterFullscreen event Test');     
    };  
    function handleExitFullscreen  ()  {  
      alert('this is onExitFullscreen event Test');
    }; 
    function handleHideControls () {
      alert('this is onHideControls event Test');
    }
    function handleShowControls () {
      alert('this is onShowControls event Test');
    }
    function handleError () {
      alert('this is onError event Test');
    }
    function handlePause () {
      alert('this is onPause event Test');
    }
    function handlePlay () {
      alert('this is Play event Test');
    }
    function handleBack () {
      alert('this is onBack event Test');
    }
    function handleEnd () {
      alert('this is onEnd event Test');
    }
  
      return (
        <ScrollView style={styles.scollvewcontainer}>
            <Tester>
              <TestSuite name='default properties'>
                <TestCase itShould="test VideoPlayer official web video">
                  <VideoPlayer
                    controlTimeout = {90000}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    style = {styles.video}
                    paused = {true}
                  /> 
                </TestCase>
              </TestSuite>
             
             <TestSuite name = 'properties'>
               <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value false">
                 <VideoPlayer 
                    controlTimeout = {90000}
                    toggleResizeModeOnFullscreen={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    toggleResizeModeOnFullscreen={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer showOnStart properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    showOnStart={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer showOnStart properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    showOnStart={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer controlAnimationTiming properties and set value 5000">
                 <VideoPlayer
                    controlAnimationTiming={5000}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}
                  />
               </TestCase>
               <TestCase itShould="test VideoPlayer doubleTapTime properties and set value 2000">
                 <VideoPlayer
                    doubleTapTime={2000}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    paused = {true}    
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer controlTimeout properties and set value 1000">
                 <VideoPlayer
                    controlTimeout ={10000}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                    paused = {true}   
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer videoStyle properties and set styles video">
                 <VideoPlayer
                    controlTimeout = {90000}
                    videoStyle={styles.videostyleone}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                    paused = {true}   
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer style properties and set value styles videostyle">
                 <VideoPlayer
                    controlTimeout = {90000}
                    style={styles.videostyletwo}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   
                    paused = {true} 
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer seekColor properties and set value #00F5FF">
                 <VideoPlayer
                    controlTimeout = {90000}
                    seekColor={'#00F5FF'}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                    paused = {true}   
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    tapAnywhereToPause={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    tapAnywhereToPause={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableFullscreen properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableFullscreen={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableFullscreen properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableFullscreen={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disablePlayPause properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disablePlayPause={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   
                    paused = {true} 
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disablePlayPause properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disablePlayPause={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   
                    paused = {true} 
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableSeekbar properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableSeekbar={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                    paused = {true}   
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableVolume properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableVolume={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableVolume properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableVolume={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableTimer properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableTimer={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableTimer properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableTimer={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
               </TestCase>
               <TestCase itShould="test VideoPlayer disableBack properties and set value true">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableBack={true}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer disableBack properties and set value false">
                 <VideoPlayer
                    controlTimeout = {90000}
                    disableBack={false}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
               </TestCase>
             </TestSuite>
               
             <TestSuite name = 'onPress'>
               <TestCase itShould="test VideoPlayer onEnterFullscreen function">
                 <VideoPlayer 
                    controlTimeout = {90000}
                    onEnterFullscreen={handleEnterFullscreen}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                    paused = {true}   
                  /> 
               </TestCase>
               <TestCase itShould="test VideoPlayer onExitFullscreen function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onExitFullscreen={handleExitFullscreen}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onHideControls function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onHideControls={handleHideControls}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onShowControls function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onShowControls={handleShowControls}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onError function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onError={handleError}
                    source={{uri: 'https:vjs.zencdn.net/v/oceans.mp'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onPause function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onPause={handlePause}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onPlay function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onPlay={handlePlay}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}  
                    paused = {true}  
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onBack function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onBack={handleBack}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
              <TestCase itShould="test VideoPlayer onEnd function">
                 <VideoPlayer
                    controlTimeout = {90000}
                    onEnd={handleEnd}                 
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  /> 
              </TestCase>
             </TestSuite>
            </Tester>
        </ScrollView>
      );
  }
  const styles = StyleSheet.create({
    scollvewcontainer: {
      width: '100%',
      height: '100%', 
    },
    video: {  
      width: '100%',  
      height: '100%',  
    }, 
    videostyleone: {
      width: '50%',
      height: '50%',
    },
    videostyletwo: {
      width: '75%',
      height: '75%',
    },
  });

  
export default VideoTest;