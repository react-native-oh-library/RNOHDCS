import React, { Component } from 'react';
import { Button, PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Switch, Systrace, Text, View, InteractionManager, ScrollView } from 'react-native';
import Slider from '@react-native-oh-tpl/react-native-slider';
import { Player, Recorder, MediaStates } from '@react-native-community/audio-toolkit';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';

const filename = 'test.mp4';


type Props = {};

type State = {
  playPauseButton: string,
  recordButton: string,

  stopButtonDisabled: boolean,
  playButtonDisabled: boolean | undefined,
  recordButtonDisabled: boolean,

  recordPauseButtonDisabled: boolean,

  loopButtonStatus: boolean,
  progress: number,

  error: string | null
};

export default class AudioToolkitDemo extends Component<Props, State> {
  player: Player | null = null;
  recorder: Recorder | null = null;
  lastSeek: number = 0;
  _progressInterval: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      playPauseButton: 'Preparing...',
      recordButton: 'Preparing...',

      stopButtonDisabled: true,
      playButtonDisabled: true,
      recordButtonDisabled: true,
      recordPauseButtonDisabled:true,

      loopButtonStatus: false,
      progress: 0,

      error: null
    };
  }

  componentWillMount() {
    this.player = null;
    this.recorder = null;
    this.lastSeek = 0;
    this._reloadPlayer();
    this._reloadRecorder();

    this._progressInterval = setInterval(() => {
      if (this.player && this._shouldUpdateProgressBar()) {
        let currentProgress = Math.max(0, this.player.currentTime) / this.player.duration;
        if (isNaN(currentProgress)) {
          currentProgress = 0;
        }
        this.setState({ progress: currentProgress });
      }
    }, 100);
  }

  componentWillUnmount() {
    if (this._progressInterval) {
      clearInterval(this._progressInterval);
    }
  }

  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState() {

    this.setState({
      playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play',
      recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

      recordPauseButtonDisabled: !this.recorder || !this.recorder.isRecording,

      stopButtonDisabled: !this.player || !this.player.canStop,
      playButtonDisabled: !this.player || !this.player.canPlay || this.recorder?.isRecording,
      recordButtonDisabled: (!this.recorder || (this.player && !this.player.isStopped)) ?? true,
    });
  }

  _playPause() {
    this.player?.playPause((err, paused) => {
      if (err) {
        this.setState({
          error: err.message
        });
      }
      this._updateState();
    });
  }

  _stop() {
    this.player?.stop(() => {
      this._updateState();
    });
  }

  _seek(percentage: number) {
    if (!this.player) {
      return;
    }

    this.lastSeek = Date.now();
    let position = percentage * this.player.duration;

    this.player.seek(position, () => { });
  }

  _getPlayPath() {
    if (this.recorder) {
      return this.recorder.fsPath;
    }
    return filename;
  }

  _reloadPlayer() {
    if (this.player) {
      this.player.destroy();
    }
    this.player = new Player(this._getPlayPath(), {
      autoDestroy: false
    }).prepare((err) => {
      if (err) {
        console.log('error at _reloadPlayer():');
        console.log(err);
      } else {
        if (this.player) {
          this.player.looping = this.state.loopButtonStatus;
        }
      }

      this._updateState();
    });

    this._updateState();

    this.player.on('ended', () => {
      this._updateState();
    });
    this.player.on('pause', () => {
      this._updateState();
    });
  }

  _reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: 256000,
      channels: 2,
      sampleRate: 44100,
      quality: 'max'
    });

    this._updateState();
  }

  _toggleRecord() {
    if(this.recorder && this.recorder.state === MediaStates.PAUSED){
      this.recorder?.record((err) => {
        this._updateState();
      })
      return
    }
    if (this.player) {
      this.player.destroy();
    }

    let recordAudioRequest;
    if (Platform.OS == 'android') {
      recordAudioRequest = this._requestRecordAudioPermission();
    } else {
      recordAudioRequest = new Promise(function (resolve, reject) { resolve(true); });
    }

    recordAudioRequest.then((hasPermission) => {
      if (!hasPermission) {
        this.setState({
          error: 'Record Audio Permission was denied'
        });
        return;
      }
     
      this.recorder?.toggleRecord((err, stopped) => {
        if (err) {
          this.setState({
            error: err.message
          });
        }
        if (stopped) {
          this._reloadPlayer();
          this._reloadRecorder();
        }
        this._updateState();
      });
    });
  }

  async _requestRecordAudioPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'ExampleApp needs access to your microphone to test react-native-audio-toolkit.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  _toggleLooping(value: boolean) {
    this.setState({
      loopButtonStatus: value
    });
    if (this.player) {
      this.player.looping = value;
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.title}>
            Playback
          </Text>
        </View>
        <View >
          <Button title={this.state.playPauseButton} disabled={this.state.playButtonDisabled} onPress={() => this._playPause()} />
          <Button title={'Stop'} disabled={this.state.stopButtonDisabled} onPress={() => this._stop()} />
        </View>
        <View style={styles.settingsContainer}>
          <Switch
            onValueChange={(value) => this._toggleLooping(value)}
            value={this.state.loopButtonStatus} />
          <Text>Toggle Looping</Text>
        </View>
        <View style={styles.slider}>
          <Slider step={0.0001} disabled={this.state.playButtonDisabled} onValueChange={(percentage) => this._seek(percentage)} value={this.state.progress} />
        </View>
        <View>
          <Text style={styles.title}>
            Recording
          </Text>
        </View>
        <View>
          <Button title={this.state.recordButton} disabled={this.state.recordButtonDisabled} onPress={() => this._toggleRecord()} />
        </View>
        
        <View style={styles.recordPause}>
          <Button title={'Pause recording'} disabled={this.state.recordPauseButtonDisabled} onPress={() => {
            this.recorder?.pause((err) => {
              this._updateState();
            })
          }} />
        </View>
        <View>
          <Text style={styles.errorMessage}>{this.state.error}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
    marginBottom: 30,
  },
  settingsContainer: {
    alignItems: 'center',
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  errorMessage: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'red'
  },
  recordPause:{
    marginTop:15
  }
});