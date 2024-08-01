import {useState, useCallback} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Tts from 'react-native-tts';

const cnText = `炎炎夏日，阳光如烈火般炙烤大地，空气中弥漫着热浪的气息。树荫下，蝉鸣声如同热浪中跳跃的音符，微风吹过，带来一丝清凉。远处的田野上，金黄的麦浪随风起伏，仿佛在舞动着夏天的节奏。天空湛蓝如洗，白云悠然飘过，似是一幅宁静而美丽的夏日画卷。`;

export function TtsDemo() {
  const [speakText, setSpeakText] = useState<string>(cnText);

  const addEvent = useCallback(() => {
    Tts.addEventListener('tts-start', res => {
      console.log('tts-start', res);
    });
  }, []);

  const removeEvent = useCallback(() => {
    Tts.addEventListener('tts-start', res => {
      console.log('tts-start', res);
    });
  }, []);

  const stopSpeak = useCallback(() => {
    Tts.stop();
  }, []);

  const speakFc = useCallback(() => {
    Tts.speak(speakText);
  }, []);

  const getInitStatus = useCallback(() => {
    Tts.getInitStatus().then(() => {
      console.log('初始化已完成');
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
    <>
      <SafeAreaView style={styles.constainer}>
        <Text style={styles.title}>react-native-tts功能验证</Text>
        <View style={styles.content}>
          <View style={styles.btnWrap}>
            <Text style={styles.button} onPress={getInitStatus}>
              getInitStatus
            </Text>
            <Text style={styles.button} onPress={speakFc}>
              speak（zh）
            </Text>
            <Text style={styles.button} onPress={stopSpeak}>
              stop
            </Text>
            <Text style={styles.button} onPress={pauseFc}>
              pause
            </Text>
            <Text style={styles.button} onPress={resumeFc}>
              resume
            </Text>
            <Text style={styles.button} onPress={setSpeakRate}>
              setDefaultRate
            </Text>
            <Text style={styles.button} onPress={setSpeakPitch}>
              setDefaultPitch
            </Text>
            <Text style={styles.button} onPress={queryVoices}>
              voices
            </Text>
            <Text style={styles.button} onPress={addEvent}>
              addEventListener
            </Text>
            <Text style={styles.button} onPress={removeEvent}>
              removeEventListener
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
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
