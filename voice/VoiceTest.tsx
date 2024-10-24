import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';

type Props = {};
type State = {
  recognized: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  isAvailable: number;
  isRecognizing: number;
};

class VoiceTest extends Component<Props, State> {
  state = {
    recognized: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
    isAvailable: 0,
    isRecognizing: 0,
  };

  constructor(props: Props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('zh-CN').then((res)=>console.log(res));
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop().then((res)=>console.log(res));
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async (setCancelState: any) => {
    try {
      setCancelState(true);
      await Voice.cancel().then((res)=>console.log(res));
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async (setDestroyState: any) => {
    try {
      setDestroyState(true);
      await Voice.destroy().then((res)=>(console.log(res)));
      Voice.removeAllListeners()
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  _isAvailable = async () => {
    try {
      Voice.isAvailable().then((available: 0 | 1) => {
        this.setState({
          isAvailable: available ? 1 : 0,
        });
      });
    } catch (e) {
      console.error(e);
      this.setState({
        isAvailable: 2,
      });
    }
  };

  _isRecognizing = async () => {
    try {
      Voice.isRecognizing().then((isRecognizing: 0 | 1) => {
        console.log('isRecognizing2:' + isRecognizing);
        this.setState({
          isRecognizing: isRecognizing ? 1 : 0,
        });
        console.log('isRecognizing:' + isRecognizing);
      });
    } catch (e) {
      console.error(e);
      this.setState({
        isRecognizing: 2,
      });
    }
  };

  render() {
    return (
      <ScrollView>
        <Tester style={{display: 'flex', flexDirection: 'column'}}>
          <TestCase itShould="开始识别回调 Voice.onSpeechStart(event)">
            <View style={{height: 20}}>
              <Text style={styles.stat}>{`${this.state.started}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="正在识别回调 Voice.onSpeechRecognized(event)">
            <View style={{height: 20}}>
              <Text style={styles.stat}>{`${this.state.recognized}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="识别错误回调 Voice.onSpeechError(event)">
            <View style={{height: 30}}>
              <Text style={styles.stat}>{`${this.state.error}`}</Text>
            </View>
          </TestCase>
          <TestCase itShould="识别完成结果回调 Voice.onSpeechResults(event)">
            <View style={{minHeight: 30}}>
              {this.state.results.map((result, index) => {
                return (
                  <Text key={`result-${index}`} style={styles.stat}>
                    {result}
                  </Text>
                );
              })}
            </View>
          </TestCase>
          <TestCase itShould="识别任何结果回调(中间结果和最终结果) Voice.onSpeechPartialResults(event)">
            <View style={{minHeight: 50}}>
              {this.state.partialResults.map((result, index) => {
                return (
                  <Text key={`partial-result-${index}`} style={styles.stat}>
                    {result}
                  </Text>
                );
              })}
            </View>
          </TestCase>
          <TestCase itShould="停止识别回调 Voice.onSpeechEnd(event)">
            <Text style={styles.stat}>{` ${this.state.end}`}</Text>
          </TestCase>
          <TestCase itShould="是否提供语音识别服务 Voice.isAvailable()">
            <View style={styles.baseArea}>
              <Text style={{flex: 1}}>{`${this.state.isAvailable}`}</Text>
              <View style={{borderRadius: 4}}>
                <Button
                  title="isAvailable"
                  color="#841584"
                  onPress={this._isAvailable}></Button>
              </View>
            </View>
          </TestCase>
          <TestCase itShould="是否正在识别 Voice.isRecognizing()">
            <View style={styles.baseArea}>
              <Text style={{flex: 1}}>{`${this.state.isRecognizing}`}</Text>
              <View style={{borderRadius: 4}}>
                <Button
                  title="isRecognizing"
                  color="#841584"
                  onPress={this._isRecognizing}></Button>
              </View>
            </View>
          </TestCase>
          <View
            style={{
              marginBottom: 10,
              width: '100%',
            }}>
            <Button
              title="start"
              color="#841584"
              onPress={this._startRecognizing}
            />
          </View>
          <View
            style={{
              marginBottom: 10,
              width: '100%',
            }}>
            <Button
              title="stop"
              color="#841584"
              onPress={this._stopRecognizing}
            />
          </View>
          <TestCase
            itShould="取消识别 Voice.cancel()"
            tags={['C_API']}
            initialState={undefined}
            arrange={({setState}: any) => (
              <View style={{padding: 5}}>
                <Button
                  title="cancel"
                  color="#841584"
                  onPress={() => {
                    this._cancelRecognizing(setState);
                  }}></Button>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.eq(true);
            }}></TestCase>

          <TestCase
            itShould="销毁实例 Voice.destroy()后调用Voice.removeAllListeners"
            tags={['C_API']}
            initialState={undefined}
            arrange={({setState}: any) => (
              <View style={{padding: 5}}>
                <Button
                  title="destroy"
                  color="#841584"
                  onPress={() => {
                    this._destroyRecognizer(setState);
                  }}></Button>
              </View>
            )}
            assert={({expect, state}) => {
              expect(state).to.be.eq(true);
            }}></TestCase>
        </Tester>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
  baseArea: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderColor: '#000000',
    marginTop: 6,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default VoiceTest;
