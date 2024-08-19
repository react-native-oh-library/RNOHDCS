import React, {useEffect, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {Button} from './Button';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const AudioRecorder=new AudioRecorderPlayer()


 export const ProgressViewDemo = () => {
  const [recorderTime,setRecorderTime]=useState('00:00:00')
  const [playTime,setPlayTime]=useState('00:00:00')
  const [duration,setDuration]=useState('00:00:00')
  const [value,setValue]=useState('')
  const Meun = [
    {
      key: 'recorder-player_1',
      itShould: 'Start recording',
      label: 'startRecord',
      onPress:async (setState: (arg0: boolean) => void) => {
        const url=await  AudioRecorder.startRecorder()
        setValue(url)
          AudioRecorder.addRecordBackListener((r)=>{
              console.log(r)
              setState(!!r.isRecording)
              setRecorderTime(AudioRecorder.mmssss(r.currentPosition))
          })
      },
    },
    {
      key: 'recorder-player_2',
      itShould: 'Pause recording',
      label: 'Pause',
      onPress: async(setState: (arg0: boolean) => void) => {
       const r=await   AudioRecorder.pauseRecorder()
       setValue(r)
       setState(!!r)
       
      },
    },
    {
      key: 'recorder-player_3',
      itShould: 'Resume recording' ,
      label: 'Resume',
      onPress:async (setState: (arg0: boolean) => void) => {
         const r=await AudioRecorder.resumeRecorder()
         setValue(r)
         setState(!!r)
       
      },
    },
    {
      key: 'recorder-player_4',
      itShould: 'Stop recording',
      label: 'Stop',
      onPress: async(setState: (arg0: boolean) => void) => {
        const url=await  AudioRecorder.stopRecorder()
        setValue(url)
        setState(!!url)
      },
    },
    {
      key: 'recorder-player_5',
      itShould: 'Playing url' ,
      label: 'Play（url）',
      onPress: (setState: (arg0: boolean) => void) => {
          AudioRecorder.startPlayer('https://er-sycdn.kuwo.cn/5b858d0bd5f89c809d37cd56f7b6d738/66aa16aa/resource/30106/trackmedia/M800001ASMC447Mslm.mp3')
          AudioRecorder.addPlayBackListener((r)=>{
            console.log(r)
              setState(!!r.currentPosition)
              setPlayTime(AudioRecorder.mmssss(r.currentPosition))
              setDuration(AudioRecorder.mmssss(r.duration))
          })
       
      },
    }, {
      key: 'recorder-player_6',
      itShould: 'Playing',
      label: 'Play',
      onPress: async(setState: (arg0: boolean) => void) => {
         const r= await AudioRecorder.startPlayer()
         setValue(r)
          AudioRecorder.addPlayBackListener((r)=>{
            console.log(r)
            setState(!!r.currentPosition)
            setPlayTime(AudioRecorder.mmssss(r.currentPosition))
            setDuration(AudioRecorder.mmssss(r.duration))
          })
       
      },
    },
    {
      key: 'recorder-player_7',
      itShould: 'Pause playing' ,
      label: 'Pause',
      onPress:async (setState: (arg0: boolean) => void) => {
        const r=await  AudioRecorder.pausePlayer()
       setValue(r)
       setState(!!r)
      },
    }, {
      key: 'recorder-player_8',
      itShould: 'Resume playing',
      label: 'Resume',
      onPress: async(setState: (arg0: boolean) => void) => {
        const r=await  AudioRecorder.resumePlayer()
        setValue(r)
       setState(!!r)
       
      },
    },
    {
      key: 'recorder-player_9',
      itShould: 'Stop playing' ,
      label: 'Stop',
      onPress:async (setState: (arg0: boolean) => void) => {
        const r=await AudioRecorder.stopPlayer()
          setValue(r)
          setState(!!r)
      },
    }, {
      key: 'recorder-player_10',
      itShould: 'setSubscriptionDuration',
      label: 'setSubscriptionDuration 3s',
      onPress:async (setState: (arg0: boolean) => void) => {
        const r=await AudioRecorder.setSubscriptionDuration(3)
        setState(!!r)
         setValue(r)
      },
    },
    {
      key: 'recorder-player_11',
      itShould: 'setVolume' ,
      label: 'setVolume to 0.8',
      onPress:async(setState: (arg0: boolean) => void) => {
        const r=await AudioRecorder.setVolume(0.8)
        setState(!!r)
        setValue(r)
      },
    }, {
      key: 'recorder-player_12',
      itShould: 'setVolume -',
      label: 'setVolume to 0.4',
      onPress: async(setState: (arg0: boolean) => void) => {
        const r=await AudioRecorder.setVolume(0.4)
        setState(!!r)
        setValue(r)
      },
    },
    {
      key: 'recorder-player_13',
      itShould: 'seekToPlayer to 1s' ,
      label: 'seekToPlayer to 1s',
      onPress: async(setState: (arg0: boolean) => void) => {
        const r=await AudioRecorder.seekToPlayer(1000)
        setState(!!r)
        setValue(r)
      },
    },
    {
      key: 'recorder-player_14',
      itShould: 'seekToPlayer to 10s' ,
      label: 'seekToPlayer to 10s',
      onPress: async(setState: (arg0: boolean) => void) => {
        const r=await  AudioRecorder.seekToPlayer(10000)
          setState(!!r)
        setValue(r)
       
      },
    },
   
  ];
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="@react-native-audio-recorder-player">
          <View style={{marginTop:20,flexDirection:'row'}}><Text style={{color:'#fff'}}>Recorder Time :</Text><Text style={{color:'#fff'}}>{recorderTime}</Text></View>
          <View style={{marginTop:20,flexDirection:'row'}}><Text style={{color:'#fff'}}>Player Time :</Text><Text style={{color:'#fff'}}>{playTime}/{duration}</Text></View>
          <View style={{marginTop:20,flexDirection:'row',marginBottom:20}}><Text style={{color:'#fff'}}>return Value:</Text><Text style={{color:'#fff'}}>{value}</Text></View>
          {Meun.map(item => (
            <TestCase
              key={item.key}
              itShould={item.itShould}
              tags={['C_API']}
              initialState={false}
              arrange={({setState}) => {
                return (
                  <View style={{flex: 1}}>
                    <Button
                      label={item.label}
                      onPress={() => {
                        item.onPress(setState);
                      }}></Button>
                  </View>
                );
              }}
              assert={async ({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          ))}
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};