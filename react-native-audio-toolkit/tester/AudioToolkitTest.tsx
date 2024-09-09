import React, { Component } from 'react';
import { Button, PermissionsAndroid, Platform, StyleSheet, Switch, Text, View, ScrollView } from 'react-native';
import { Player, Recorder,MediaStates} from '@react-native-community/audio-toolkit';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import RTNPermissions, {RESULTS} from "@react-native-oh-tpl/react-native-permissions";

const filename = 'test.mp4';

interface Error {
  message: string;
}

type Props = {};

type State = {
  playPauseButton: string,
  recordButton: string,

  stopButtonDisabled: boolean,
  playButtonDisabled: boolean | undefined,
  recordButtonDisabled: boolean,
  recordPauseButtonDisabled: boolean,

  loopButtonStatus: boolean,
  canPlayBack: boolean,
  autoDestroy: boolean,
  progress: number,

  isRecorderChannelTwo: boolean;
  isMaxAudioBitrate: boolean;
  isOtherAudioSampleRate: boolean;
  isPlayTestAutoDestroy:boolean;

  error: string | null
};

export default class AudioToolkitTest extends Component<Props, State> {
  player: Player | null = null;
  netPlayer: Player | null = null;
  recorder: Recorder | null = null;
  lastSeek: number = 0;
  continuesToPlayInBackground: boolean = false;
  autoDestroy: boolean = false;
  recorderChannels: number = 2;
  audioBitrate: number = 48000;
  audioSampleRate: number = 48000;
  format:string = '';

  constructor(props: Props) {
    super(props);

    this.state = {
      playPauseButton: 'Preparing...',
      recordButton: 'Preparing...',

      stopButtonDisabled: true,
      playButtonDisabled: true,
      recordButtonDisabled: true,

      recordPauseButtonDisabled: true,

      loopButtonStatus: false,
      canPlayBack: false,
      autoDestroy: false,
      progress: 0,

      isRecorderChannelTwo: true,
      isMaxAudioBitrate: false,
      isOtherAudioSampleRate: false,
      isPlayTestAutoDestroy:true,

      error: null
    };
  }

  componentWillMount() {
    this.player = null;
    this.recorder = null;
    this.lastSeek = 0;
    this._netPlayer(false);
    this._reloadPlayer();
    this._reloadRecorder();
  }

  _shouldUpdateProgressBar() {
    // Debounce progress bar update by 200 ms
    return Date.now() - this.lastSeek > 200;
  }

  _updateState() {

    this.setState({
      playPauseButton: this.player && this.player.isPlaying ? 'Pause' : 'Play recorder',
      recordButton: this.recorder && this.recorder.isRecording ? 'Stop' : 'Record',

      recordPauseButtonDisabled: !this.recorder || !this.recorder.isRecording,

      stopButtonDisabled: !this.player || !this.player.canStop,
      playButtonDisabled: !this.player || !this.player.canPlay || this.recorder?.isRecording,
      recordButtonDisabled: (!this.recorder || (this.player && !this.player.isStopped)) ?? true,
    });
  }

  _playPause() {
    if (this.netPlayer && this.netPlayer.isPlaying) {
      this.netPlayer.pause();
    }
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
    if (!this.netPlayer) {
      return;
    }

    this.lastSeek = Date.now();
    let position = percentage * this.netPlayer.duration;
    this.netPlayer.seek(position, () => { });
    if (!this.netPlayer.isPlaying && percentage != 1) {
      this.netPlayer.play();
    }
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

  _netPlayer(isAutoPlay: boolean = true) {
    if (this.netPlayer) {
      this.netPlayer.destroy();
    }
    this.setState({
      isPlayTestAutoDestroy:true
    })
    this.netPlayer = new Player('https://image.oppo.com/content/dam/oppo/cn/mkt/how-to/video-12/video.mp4', {
      autoDestroy: this.autoDestroy,
      continuesToPlayInBackground: this.continuesToPlayInBackground,
    }).prepare((err) => {
      this.setState({
        isPlayTestAutoDestroy:false
      })
      if (err) {
        console.log(`err.message = ${err.message}`);
      } else {
        if (isAutoPlay) {
          this.netPlayer?.play();
        }
      }
    });
  }

  _reloadRecorder() {
    if (this.recorder) {
      this.recorder.destroy();
    }

    this.recorder = new Recorder(filename, {
      bitrate: this.audioBitrate,
      channels: this.recorderChannels,
      sampleRate: this.audioSampleRate,
      format: this.format,
      quality: 'max'
    });

    this._updateState();
  }

  _toggleRecord() {
    if (this.recorder && this.recorder.state === MediaStates.PAUSED) {
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
    } else if (Platform.OS === 'harmony') {
      recordAudioRequest = this._requestRecordAudioPermissionHs();
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
    
  async _requestRecordAudioPermissionHs() {
    try {
      let check = await RTNPermissions.request('ohos.permission.MICROPHONE');
      if (check === RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
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
    if (this.netPlayer) {
      this.netPlayer.looping = value;
      if (!this.netPlayer.isPlaying) {
        this.netPlayer.play();
      }
    }
  }

  _autoDestroy(value: boolean) {
    this.setState({
      autoDestroy: value,
    });
    this.autoDestroy = value;
    this._netPlayer();
  }

  _canPlayBack(value: boolean) {
    this.setState({
      canPlayBack: value,
    });
    this.continuesToPlayInBackground = value;
    this._netPlayer();
  }

  _recorderChannel(value: boolean) {
    this.setState({
      isRecorderChannelTwo: value,
    });
    this.recorderChannels = value ? 2 : 1
    this._reloadRecorder();
  }


  _recorderAudioBitrate(value: boolean) {
    this.setState({
      isMaxAudioBitrate: value,
    });
    this.audioBitrate = value ? 320000 : 48000
    this._reloadRecorder();
  }

  _recorderAudioSampleRate(value: boolean) {
    this.setState({
      isOtherAudioSampleRate: value,
    });
    this.audioSampleRate = value ? 16000 : 48000
    this._reloadRecorder();
  }


  _playSpeed(speed: number) {
    if (this.netPlayer) {
      this.netPlayer.speed = speed;
      if (!this.netPlayer.isPlaying) {
        this.netPlayer.play();
      }
    }
  }

  _playVolume(volume: number) {
    if (this.netPlayer) {
      this.netPlayer.volume = volume;
      if (!this.netPlayer.isPlaying) {
        this.netPlayer.play();
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <Tester>
          <View>
            <Text style={styles.title}>
              Playback
            </Text>
          </View>
          <View >
            <TestSuite name="audio play or pause Test">
              <TestCase itShould='test play or pause function'>
                <Button title={this.state.playPauseButton} disabled={this.state.playButtonDisabled} onPress={() => this._playPause()} />
              </TestCase>
            </TestSuite>
            <TestSuite name="audio stop Test">
              <TestCase itShould='test stop play function'>
                <Button title={'Stop'} disabled={this.state.stopButtonDisabled} onPress={() => this._stop()} />
              </TestCase>
            </TestSuite>
          </View>

          <View style={styles.settingsContainer}>
            <TestSuite name="audio recorder audioBitrate">
              <TestCase itShould='test recorder audioBitrate'>
                <Switch
                  onValueChange={(value) => this._recorderAudioBitrate(value)}
                  value={this.state.isMaxAudioBitrate}
                />
                <Text>打开为320000,关闭为48000</Text>
              </TestCase>
            </TestSuite>
            <View>
            </View>
          </View>

          <View style={styles.settingsContainer}>
            <TestSuite name="audio recorder sampleRate">
              <TestCase itShould='test recorder sampleRate'>
                <Switch
                  onValueChange={(value) => this._recorderAudioSampleRate(value)}
                  value={this.state.isOtherAudioSampleRate}
                />
                <Text>打开为16000,关闭为48000</Text>
              </TestCase>
            </TestSuite>
            <View>
            </View>
          </View>

          <View style={styles.settingsContainer}>
            <TestSuite name="audio recorder channels">
              <TestCase itShould='test recorder channels'>
                <Switch
                  onValueChange={(value) => this._recorderChannel(value)}
                  value={this.state.isRecorderChannelTwo}
                />
                <Text>Toggle recorder channels</Text>
              </TestCase>
            </TestSuite>
          </View>

          <TestSuite name="audio recorder set fileFormat">
              <TestCase itShould='test fileFormat'>
                <View style={styles.settingsSpeed}>
                  <View style={styles.buttonStyle}>
                    <Button title={'mp4'} onPress={() => {
                     this.format = 'mp4';
                     this._reloadRecorder();
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'m4a'} onPress={() => {
                      this.format = 'm4a';
                      this._reloadRecorder();
                    }} />
                  </View>
                </View>
              </TestCase>
            </TestSuite>

          <View>
            <TestSuite name="audio record or stop Test">
              <TestCase itShould='test audio record function'>
                <Button title={this.state.recordButton} disabled={this.state.recordButtonDisabled} onPress={() => this._toggleRecord()} />
              </TestCase>
            </TestSuite>
          </View>
          <View>
            <TestSuite name="audio pause recording Test">
              <TestCase itShould='test pause recording function'>
                <Button title={'Pause recording'} disabled={this.state.recordPauseButtonDisabled} onPress={() => {
                  this.recorder?.pause((err) => {
                    this._updateState();
                  })
                }} />
              </TestCase>
            </TestSuite>
          </View>
          <View>

            <View>
              <Text style={styles.errorMessage}>{'Play Property Test'}</Text>
            </View>

            <View style={styles.settingsContainer}>
              <TestSuite name="audio play Background">
                <TestCase itShould='test play Background'>
                  <Switch
                    onValueChange={(value) => this._canPlayBack(value)}
                    value={this.state.canPlayBack}
                  />
                  <Text>Toggle play Background</Text>
                </TestCase>
              </TestSuite>
            </View>

            <TestSuite name="audio play autoDestroy">
              <TestCase itShould='test play autoDestroy'
                initialState={false}
                assert={({ expect, state }) => {
                  expect(state).to.be.true;
                }}
                tags={['C_API']}
                arrange={({ setState }) => {
                  return <View style={styles.settingsContainer}>
                    <Switch
                      onValueChange={(value) => this._autoDestroy(value)}
                      value={this.state.autoDestroy}
                    />
                    <Button title={'play test'} disabled={this.state.isPlayTestAutoDestroy} onPress={() => {
                      if (this.player && this.player.isPlaying) {
                        this.player.pause();
                      }
                      this.netPlayer?.play((err) => {
                        if (err) {
                          setState(true)
                        } else {
                          setState(false)
                        }
                      });
                    }} />
                  </View>
                }} />
            </TestSuite>

            <View >
              <TestSuite name="audio play net resource">
                <TestCase itShould='test play net resource'>
                  <Button title={'play net resource'} onPress={() => {
                    if (this.player && this.player.isPlaying) {
                      this.player.pause();
                    }
                    this.netPlayer?.play((err) => {
                      if (err) {
                        this.setState({
                          error: err.message
                        });
                      }
                    });
                  }} />
                </TestCase>
              </TestSuite>
            </View>

            <View style={styles.settingsContainer}>
              <TestSuite name="audio loop play Test">
                <TestCase itShould='test loop play'>
                  <Switch
                    onValueChange={(value) => this._toggleLooping(value)}
                    value={this.state.loopButtonStatus} />
                  <Text>Toggle Looping</Text>
                </TestCase>
              </TestSuite>
            </View>

            <TestSuite name="audio play set seek">
              <TestCase itShould='test seek'>
                <View style={styles.settingsSpeed}>
                  <View style={styles.buttonStyle}>
                    <Button title={'0%'} onPress={() => {
                      this._seek(0);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'20%'} onPress={() => {
                      this._seek(0.2);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'80%'} onPress={() => {
                      this._seek(0.8);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'100%'} onPress={() => {
                      this._seek(1);
                    }} />
                  </View>
                </View>
              </TestCase>
            </TestSuite>

            <TestSuite name="audio play set speed">
              <TestCase itShould='test speed'>
                <View style={styles.settingsSpeed}>
                  <View style={styles.buttonStyle}>
                    <Button title={'1'} onPress={() => {
                      this._playSpeed(1);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'1.75'} onPress={() => {
                      this._playSpeed(3);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'2'} onPress={() => {
                      this._playSpeed(4);
                    }} />
                  </View>
                </View>
              </TestCase>
            </TestSuite>

            <TestSuite name="audio play set volume">
              <TestCase itShould='test volume'>
                <View style={styles.settingsSpeed}>
                  <View style={styles.buttonStyle}>
                    <Button title={'0.1'} onPress={() => {
                      this._playVolume(0.1);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'0.5'} onPress={() => {
                      this._playVolume(0.5);
                    }} />
                  </View>
                  <View style={styles.buttonStyle}>
                    <Button title={'1'} onPress={() => {
                      this._playVolume(1);
                    }} />
                  </View>
                </View>
              </TestCase>
            </TestSuite>

            <View>
              <Text style={styles.errorMessage}>{this.state.error}</Text>
            </View>
          </View>
        </Tester>
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
  settingsSpeed: {
    flexDirection: 'row',
    margin: 10
  },
  buttonStyle: {
    width: 65,
    margin: 10
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
  }
});