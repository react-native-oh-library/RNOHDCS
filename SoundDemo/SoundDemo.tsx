/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport'
import { TurboModuleRegistry } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
  Button
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Sound from 'react-native-sound';

type SectionProps = PropsWithChildren<{
  title: string;
  func: ()=> void;
}>;

type SliderSectionProps = PropsWithChildren<{
  duration:number;
  value: number;
  func: ()=> void;
}>;

function Section({title,func}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Button
       // onPress={() => Alert.alert('Simple Button pressed')}
       onPress={func}
        title={title}
        color="#2196f3"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}


function SoundDemo(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationOptions = (props: { navigation: { state: { params: { title: any; }; }; }; }) => ({
    title:props.navigation.state.params.title,}
  );


let sound=new Sound('whoosh.mp3');

  const setActive=()=>{
    Sound.setActive(true);
  }
  
  //播放
  const onPlay=()=>{
   sound.play();
  }

  //暂停
  const onPuase=()=>{
    sound.pause();
  }

  //停止
  const onStop=()=>{
    sound.stop();
  }

  // 设置播放时间在2000ms
  const jump2sRight=()=>{
    sound.setCurrentTime(2000);
  }

 //设置声音
  const setVolume=()=>{
    sound.setVolume(0.5);
  }

 //获取当前播放时间点
  const getCurrentTime=()=>{
    sound.getCurrentTime();
  }

  //获取声音大小
  const getVolume=()=>{
    sound.getVolume();
  }

  //获取播放时长
  const getDuration=()=>{
    sound.getDuration();
  }

 //设置 播放速度
  const setSpeed=()=>{
    sound.setSpeed(3);
 }

  //设置 播放速度
  const getSpeed=()=>{
    sound.getSpeed();
 }

  //是否播放中
  const isPlaying=()=>{
    sound.isPlaying();
  }

  //重置
  const onReset=()=>{
    sound.reset();
  }

    //释放资源
  const release=()=>{
    sound.release();
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
      
          {/* <Section title="setActive" func={setActive}></Section>  */}
          <Section title="play" func={onPlay}></Section>
          <Section title="pause" func={onPuase}></Section>
          <Section title="stop" func={onStop}></Section>
          <Section title="reset" func={onReset}></Section> 
          <Section title="setVolume(0.5)" func={setVolume}></Section>
          <Section title="getVolume" func={getVolume}></Section>
          <Section title="getCurrentTime" func={getCurrentTime}></Section> 
          <Section title="getDuration" func={getDuration}></Section> 
          <Section title="设置播放时间到2s,setCurrentTime()" func={jump2sRight}></Section>
          <Section title="setSpeed" func={setSpeed}></Section>
          <Section title="getSpeed" func={getSpeed}></Section> 
          <Section title="isPlaying" func={isPlaying}></Section>
          <Section title="release" func={release}></Section>   

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default SoundDemo;
