import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls'
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

function VideoPlayerTest(){
  const Stack = createStackNavigator();
    function VideoTest({navigation}) {
      return (
      <ScrollView style={styles.scollvewcontainer}>
        <Tester>
          <TestSuite name='default properties'>
            <TestCase itShould="test VideoPlayer official web video">
              <VideoPlayer
                controlTimeout = {160000}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                style = {styles.video}
                paused = {true}
                title = "oceans"
              /> 
            </TestCase>
          </TestSuite>
         
         <TestSuite name = 'properties'>
           <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value false">
             <VideoPlayer 
                controlTimeout = {160000}
                toggleResizeModeOnFullscreen={false}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer toggleResizeModeOnFullscreen properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                toggleResizeModeOnFullscreen={true}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer showOnStart properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                showOnStart={false}
                source={{uri: ''}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer showOnStart properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                showOnStart={true}
                source={{uri: ''}}
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer navigator properties and set value navigation">
              <VideoPlayer
                navigator={navigation}
                source={{uri: ''}}
                paused = {true}
              />
            </TestCase>
            <TestCase itShould="test VideoPlayer controlAnimationTiming properties and set value 5000">
              <VideoPlayer
                controlAnimationTiming={5000}
                source={{uri: ''}}
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
            <TestCase itShould="test VideoPlayer scrubbing properties and set value 1000">
              <VideoPlayer
                scrubbing={1000}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                paused = {true}    
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer controlTimeout properties and set value 1000">
              <VideoPlayer
                controlTimeout ={1000}
                source={{uri: ''}} 
                paused = {true}   
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer videoStyle properties and set value {width,heigth}">
              <VideoPlayer
                controlTimeout = {160000}
                videoStyle={styles.videostyleone}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                paused = {true}   
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer style properties and set value {width,heigth}">
              <VideoPlayer
                controlTimeout = {160000}
                style={styles.videostyletwo}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}   
                paused = {true} 
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer seekColor properties and set value #00F5FF">
              <VideoPlayer
                controlTimeout = {160000}
                seekColor={'#00F5FF'}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} 
                paused = {true}   
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                tapAnywhereToPause={true}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}  
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer tapAnywhereToPause properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                tapAnywhereToPause={false}
                source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                paused = {true}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableFullscreen properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disableFullscreen={true}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableFullscreen properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disableFullscreen={false}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disablePlayPause properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disablePlayPause={true}
                paused = {true} 
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disablePlayPause properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disablePlayPause={false}
                paused = {true} 
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableSeekbar properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disableSeekbar={true}
                paused = {true}   
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableSeekbar properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disableSeekbar={false}
                paused = {true}   
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableVolume properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disableVolume={true}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableVolume properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disableVolume={false}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableTimer properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disableTimer={true}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableTimer properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disableTimer={false}
                paused = {true}
                source = {{uri:''}}
              />
            </TestCase>
            <TestCase itShould="test VideoPlayer disableBack properties and set value true">
              <VideoPlayer
                controlTimeout = {160000}
                disableBack={true}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
            <TestCase itShould="test VideoPlayer disableBack properties and set value false">
              <VideoPlayer
                controlTimeout = {160000}
                disableBack={false}
                paused = {true}
                source = {{uri:''}}
              /> 
            </TestCase>
          </TestSuite>
  
          <TestSuite name='onPress'>
            <TestCase itShould="test VideoPlayer onEnterFullscreen event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onEnterFullscreen = {()=>{
                      setState(true);
                      alert('onEnterFullscreen event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onExitFullscreen event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onExitFullscreen = {()=>{
                      setState(true);
                      alert('onExitFullscreen event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onHideControls event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onHideControls = {()=>{
                      setState(true);
                      alert('onHideControls event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onShowControls event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onShowControls = {()=>{
                      setState(true);
                      alert('onShowControls event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onError event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onError = {()=>{
                      setState(true);
                      alert('onError event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onPause event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onPause = {()=>{
                      setState(true);
                      alert('onPause event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onPlay event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onPlay = {()=>{
                      setState(true);
                      alert('onPlay event run success!');
                    }}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onBack event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onBack = {()=>{
                      setState(true);
                      alert('onBack event run success!');
                    }}
                    source={{uri: ''}}    
                    paused = {true}
                />
              )
            }}
            >
            </TestCase>
            <TestCase itShould="test VideoPlayer onEnd event function"
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
              initialState={false}
              tags={['C_API']}
              arrange={({ setState }) => {
                return (
                  <VideoPlayer
                    controlTimeout = {160000}
                    onEnd = {()=>{
                      setState(true);
                      alert('onEnd event run success!');
                    }}
                    source={{uri: ''}}    
                    paused = {true}
                  />
                )
              }}
            >
            </TestCase>
          </TestSuite>
        </Tester>
      </ScrollView>
      );
    }
    function HomeScreen({ navigation: { navigate } }) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home page</Text>
          <Button title="Go to VideoTest" onPress={() => navigate('VideoTest')} />
        </View>
      );
    }
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="VideoTest" component={VideoTest} />
        </Stack.Navigator>
      </NavigationContainer>
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

  
export default VideoPlayerTest;