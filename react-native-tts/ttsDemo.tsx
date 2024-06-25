import {useState, useCallback} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Tts from 'react-native-tts';

const cnText = `炎炎夏日，阳光如烈火般炙烤大地，空气中弥漫着热浪的气息。树荫下，蝉鸣声如同热浪中跳跃的音符，微风吹过，带来一丝清凉。远处的田野上，金黄的麦浪随风起伏，仿佛在舞动着夏天的节奏。天空湛蓝如洗，白云悠然飘过，似是一幅宁静而美丽的夏日画卷。`;

export function TTSDemo() {
  const [speakText, setSpeakText] = useState<string>(cnText);

  const stopSpeak = useCallback(() => {
    Tts.stop();
  }, []);

  const speakFc = useCallback(() => {
    Tts.speak(speakText);
  }, []);

  const getInitStatus = useCallback(() => {
    Tts.getInitStatus().then(() => {
      Tts.speak('初始化已完成');
    });
  }, []);

  const pauseFc = useCallback(() => {
    Tts.pause();
  }, []);

  const resumeFc = useCallback(() => {
    Tts.resume();
  }, []);

  const setSpeakRate = useCallback(() => {
    Tts.setDefaultRate(2);
  }, []);

  const setSpeakPitch = useCallback(() => {
    Tts.setDefaultPitch(2);
  }, []);

  const queryVoices = useCallback(() => {
    Tts.voices().then(res => {
      const resTr = JSON.stringify(res);
      setSpeakText(resTr);
    });
  }, []);

  return (
    <Tester>
      <TestSuite name="react-native-tts">
        {/* <Text style={styles.text}>{speakText}</Text> */}

        <TestCase tags={['C_API']} itShould="getInitStatus">
          <Text style={styles.button} onPress={getInitStatus}>
            getInitStatus
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="speak">
          <Text style={styles.button} onPress={speakFc}>
            speak
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="stop">
          <Text style={styles.button} onPress={stopSpeak}>
            stop
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="pause">
          <Text style={styles.button} onPress={pauseFc}>
            pause
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="resume">
          <Text style={styles.button} onPress={resumeFc}>
            resume
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="setDefaultRate">
          <Text style={styles.button} onPress={setSpeakRate}>
            setDefaultRate
          </Text>
        </TestCase>
        <TestCase tags={['C_API']} itShould="setDefaultPitch">
          <Text style={styles.button} onPress={setSpeakPitch}>
            setDefaultPitch
          </Text>
        </TestCase>
        <TestCase
          tags={['C_API']}
          itShould="voices"
          initialState={false}
          arrange={({setState}) => {
            return (
              <Text
                style={styles.button}
                onPress={() => {
                  Tts.voices().then(res => {
                    setState(!!res.length);
                  });
                }}>
                voices
              </Text>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          tags={['C_API']}
          itShould="addEventListener"
          initialState={false}
          arrange={({setState}) => {
            return (
              <Text
                style={styles.button}
                onPress={() => {
                  Tts.addEventListener('tts-start', () => {
                    setState(true);
                  });
                }}>
                addEventListener
              </Text>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          tags={['C_API']}
          itShould="removeEventListener"
          initialState={false}
          arrange={({setState}) => {
            return (
              <Text
                style={styles.button}
                onPress={() => {
                  Tts.removeEventListener('tts-start', () => {
                    setState(true);
                  });
                }}>
                removeEventListener
              </Text>
            );
          }}
          assert={async ({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
  },
  btnWrap: {
    width: 'auto',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 20,
  },
  text: {
    padding: 20,
    fontSize: 20,
    color: 'white',
  },
  title: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'hsl(193, 95%, 68%)',
    borderWidth: 2,
    borderColor: 'hsl(193, 95%, 30%)',
  },
});
