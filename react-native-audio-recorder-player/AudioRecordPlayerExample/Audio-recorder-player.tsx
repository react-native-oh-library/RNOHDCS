import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    OutputFormatAndroidType,
  } from 'react-native-audio-recorder-player';
  import type {
    AudioSet,
    PlayBackType,
    RecordBackType,
  } from 'react-native-audio-recorder-player';
  import {
    Dimensions,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {Component} from 'react';
  
  import Button from './Button';
  import type {ReactElement} from 'react';
  
  const styles: any = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455A64',
      flexDirection: 'column',
      alignItems: 'center',
      height:Dimensions.get('screen').height
    },
    titleTxt: {
      marginTop: 100,
      color: 'white',
      fontSize: 28,
    },
    viewRecorder: {
      marginTop: 40,
      width: '100%',
      alignItems: 'center',
    },
    recordBtnWrapper: {
      flexDirection: 'row',
    },
    viewPlayer: {
      marginTop: 60,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    viewBarWrapper: {
      marginTop: 28,
      marginHorizontal: 28,
      alignSelf: 'stretch',
    },
    viewBar: {
      backgroundColor: '#ccc',
      height: 4,
      alignSelf: 'stretch',
    },
    viewBarPlay: {
      backgroundColor: 'white',
      height: 4,
      width: 0,
    },
    playStatusTxt: {
      marginTop: 8,
      color: '#ccc',
    },
    playBtnWrapper: {
      flexDirection: 'row',
      marginTop: 40,
    },
    btn: {
      borderColor: 'white',
      borderWidth: 1,
    },
    txt: {
      color: 'white',
      fontSize: 14,
      marginHorizontal: 8,
      marginVertical: 4,
    },
    txtRecordCounter: {
      marginTop: 32,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
      width:300
    },
    txtCounter: {
      marginTop: 12,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
      width:300
    },
  });
  
  interface State {
    isLoggingIn: boolean;
    recordSecs: number;
    recordTime: string;
    currentPositionSec: number;
    currentDurationSec: number;
    playTime: string;
    duration: string;
  }
  
  const screenWidth = Dimensions.get('screen').width;
  
   class Page extends Component<any, State> {
    private audioRecorderPlayer
    
    constructor(props: any) {
      super(props);
      this.state = {
        isLoggingIn: false,
        recordSecs: 0,
        recordTime: '00:00:00',
        currentPositionSec: 0,
        currentDurationSec: 0,
        playTime: '00:00:00',
        duration: '00:00:00',
      };
  
      this.audioRecorderPlayer = new AudioRecorderPlayer()
      this.audioRecorderPlayer.setSubscriptionDuration(0.5); // optional. Default is 0.5
    }
  
    public render(): ReactElement {
      let playWidth =
        (this.state.currentPositionSec / this.state.currentDurationSec) *
        (screenWidth - 56);
  
      if (!playWidth) {
        playWidth = 0;
      }
  
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleTxt}>Audio Recorder Player</Text>
          <Text style={styles.txtRecordCounter}>{this.state.recordTime}</Text>
          <View style={styles.viewRecorder}>
            <View style={styles.recordBtnWrapper}>
              <Button
                style={styles.btn}
                onPress={this.onStartRecord}
                textStyle={styles.txt}>
                startRecord
              </Button>
              <Button
                style={[
                  styles.btn,
                  {
                    marginLeft: 12,
                  },
                ]}
                onPress={this.onPauseRecord}
                textStyle={styles.txt}>
                Pause
              </Button>
              <Button
                style={[
                  styles.btn,
                  {
                    marginLeft: 12,
                  },
                ]}
                onPress={this.onResumeRecord}
                textStyle={styles.txt}>
                Resume
              </Button>
              <Button
                style={[styles.btn, {marginLeft: 12}]}
                onPress={this.onStopRecord}
                textStyle={styles.txt}>
                Stop
              </Button>
            </View>
          </View>
          <View style={styles.viewPlayer}>
            <TouchableOpacity
              style={styles.viewBarWrapper}
              onPress={this.onStatusPress}>
              <View style={styles.viewBar}>
                <View style={[styles.viewBarPlay, {width: playWidth}]} />
              </View>
            </TouchableOpacity>
            <Text style={styles.txtCounter}>
              {this.state.playTime} / {this.state.duration}
            </Text>
            <View style={styles.playBtnWrapper}>
              <Button
                style={styles.btn}
                onPress={this.onStartPlay}
                textStyle={styles.txt}>
                Play
              </Button>
              <Button
                style={[
                  styles.btn,
                  {
                    marginLeft: 12,
                  },
                ]}
                onPress={this.onPausePlay}
                textStyle={styles.txt}>
                Pause
              </Button>
              <Button
                style={[
                  styles.btn,
                  {
                    marginLeft: 12,
                  },
                ]}
                onPress={this.onResumePlay}
                textStyle={styles.txt}>
                Resume
              </Button>
              <Button
                style={[
                  styles.btn,
                  {
                    marginLeft: 12,
                  },
                ]}
                onPress={this.onStopPlay}
                textStyle={styles.txt}>
                Stop
              </Button>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  
    private onStatusPress = (e: any): void => {
      const touchX = e.nativeEvent.locationX;
      console.log(`touchX: ${touchX}`);
  
      const playWidth =
        (this.state.currentPositionSec / this.state.currentDurationSec) *
        (screenWidth - 56);
      console.log(`currentPlayWidth: ${playWidth}`);
  
      const currentPosition = Math.round(this.state.currentPositionSec);
  
      if (playWidth && playWidth < touchX) {
        const addSecs = Math.round(currentPosition + 1000);
        this.audioRecorderPlayer.seekToPlayer(addSecs);
        console.log(`addSecs: ${addSecs}`);
      } else {
        const subSecs = Math.round(currentPosition - 1000);
        this.audioRecorderPlayer.seekToPlayer(subSecs);
        console.log(`subSecs: ${subSecs}`);
      }
    };
  
    private onStartRecord = async (): Promise<void> => {
  
      const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
        OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
      };
  
      console.log('audioSet', audioSet);
  
      const uri = await this.audioRecorderPlayer.startRecorder(
        this.path,
        audioSet,
      );
  
      this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        console.log('record-back', e);
        this.setState({
          recordSecs: e.currentPosition,
          recordTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          ),
        });
      });
      
      console.log(`uri: ${uri}`);
    };
  
    private onPauseRecord = async (): Promise<void> => {
      try {
        const r = await this.audioRecorderPlayer.pauseRecorder();
        console.log(r);
      } catch (err) {
        console.log('pauseRecord', err);
      }
    };
  
    private onResumeRecord = async (): Promise<void> => {
      await this.audioRecorderPlayer.resumeRecorder();
    };
  
    private onStopRecord = async (): Promise<void> => {
      const result = await this.audioRecorderPlayer.stopRecorder();
      this.audioRecorderPlayer.removeRecordBackListener();
      this.setState({
        recordSecs: 0,
      });
      console.log(result,'>>>>>>>stopRecorder');
    };
  
    private onStartPlay = async (): Promise<void> => {
      console.log('onStartPlay');
  
      try {
        
        
          const msg = await this.audioRecorderPlayer.startPlayer();
          const volume = await this.audioRecorderPlayer.setVolume(1);
          this.audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
            console.log('playBackListener', e);
            this.setState({
              currentPositionSec: e.currentPosition,
              currentDurationSec: e.duration,
              playTime: this.audioRecorderPlayer.mmss(
                Math.floor(e.currentPosition),
              ),
              duration: this.audioRecorderPlayer.mmss(Math.floor(e.duration)),
            });
          });
         
        //? Default path
        // const msg = await this.audioRecorderPlayer.startPlayer();
        // console.log(`startPlayer: ${JSON.stringify(msg)} volume ${volume},r ${r}`);
          
       
       

      } catch (err) {
        console.log('startPlayer error', err);
      }
    };
  
    private onPausePlay = async (): Promise<void> => {
      await this.audioRecorderPlayer.pausePlayer();
    };
  
    private onResumePlay = async (): Promise<void> => {
      await this.audioRecorderPlayer.resumePlayer();
    };
  
    private onStopPlay = async (): Promise<void> => {
      console.log('onStopPlay');
      this.audioRecorderPlayer.stopPlayer();
      this.audioRecorderPlayer.removePlayBackListener();
    };
  }
  
  export default Page;
  