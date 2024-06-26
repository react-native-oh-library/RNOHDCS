import {Text, StyleSheet, ScrollView} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Tts from 'react-native-tts';

const speakText = `炎炎夏日，阳光如烈火般炙烤大地。`;

const speakText2 = `秋天，一抹深沉的金黄漫过天际，叶片如蝶般飘零。微风拂过，树叶沙沙作响，落叶编织地面的金色地毯。秋天的色彩斑斓而美丽，仿佛大自然为世界穿上一袭金黄的盛装，宁静而充满生机。`;

type SetStateProps = React.Dispatch<React.SetStateAction<boolean>>;

export function TTSDemo() {
  const caseList = [
    {
      describe: 'getInitStatus',
      cn: '获取初始化状态',
      key: 'getInitStatus',
      name: 'getInitStatus',
      value: '',
      fn: () => Tts.getInitStatus,
    },
    {
      describe: 'speak（short）',
      cn: '合成语音并播放',
      key: 'speak_a',
      name: 'speak',
      value: speakText,
      fn: (setState?: SetStateProps) => {
        const id = Tts.speak(speakText);
        setState?.(!!id);
      },
    },
    {
      describe: 'speak（long）',
      cn: '合成语音并播放',
      key: 'speak_b',
      name: 'speak',
      value: speakText2,
      fn: (setState?: SetStateProps) => {
        const id = Tts.speak(speakText2);
        setState?.(!!id);
      },
    },
    {
      describe: 'stop（ignore）',
      cn: '结束播放，忽略单词',
      key: 'stop_ignore',
      name: 'stop',
      value: false,
      fn: () => Tts.stop(false),
    },
    {
      describe: 'stop（wait）',
      cn: '结束播放，等待单词',
      key: 'stop_wait',
      name: 'stop',
      value: true,
      fn: () => Tts.stop(true),
    },
    {
      describe: 'pause（ignore）',
      cn: '暂停播放，忽略单词',
      key: 'pause_ignore',
      name: 'pause',
      value: false,
      fn: () => Tts.pause(false),
    },
    {
      describe: 'pause（wait）',
      cn: '暂停播放，等待单词',
      key: 'pause_wait',
      name: 'pause',
      value: true,
      fn: () => Tts.pause(true),
    },
    {
      describe: 'resume',
      cn: '继续播放',
      key: 'resume',
      name: 'resume',
      value: '',
      fn: () => Tts.resume(),
    },
    {
      describe: 'setDefaultRate（2）',
      cn: '设置默认语速，语速为2',
      key: 'setDefaultRate(2)',
      name: 'setDefaultRate',
      value: 2,
      fn: () => Tts.setDefaultRate(2),
    },
    {
      describe: 'setDefaultRate（0.5）',
      cn: '设置默认语速，语速为0.5',
      key: 'setDefaultRate(0.5)',
      name: 'setDefaultRate',
      value: 0.5,
      fn: () => Tts.setDefaultRate(0.5),
    },
    {
      describe: 'setDefaultPitch(2)',
      cn: '设置默认音调',
      key: 'setDefaultPitch(2)',
      name: 'setDefaultPitch',
      value: 2,
      fn: () => Tts.setDefaultPitch(2),
    },
    {
      describe: 'setDefaultPitch(0.5)',
      cn: '设置默认音调',
      key: 'setDefaultPitch(0.5)',
      name: 'setDefaultPitch',
      value: 0.5,
      fn: () => Tts.setDefaultPitch(0.5),
    },
    {
      describe: 'voices',
      cn: '设置默认音调',
      key: 'voices',
      name: 'voices',
      value: '',
      fn: (setState?: SetStateProps) => {
        Tts.voices().then(res => {
          setState?.(!!res.length);
        });
      },
    },
    {
      describe: 'addEventListener',
      cn: '添加事件监听',
      key: 'addEventListener',
      name: 'addEventListener',
      value: 'tts-start',
      fn: (setState?: SetStateProps) => {
        Tts.addEventListener('tts-start', () => {
          setState?.(true);
        });
      },
    },
    {
      describe: 'removeEventListener',
      cn: '移除事件监听',
      key: 'removeEventListener',
      name: 'removeEventListener',
      value: '',
      fn: (setState?: SetStateProps) => {
        Tts.removeEventListener('tts-start', () => {
          setState?.(true);
        });
      },
    },
  ];
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-tts">
          {caseList.map(item => {
            return (
              <TestCase
                tags={['C_API']}
                itShould={item.describe + `（${item.cn}）`}
                initialState={false}
                key={item.key}
                arrange={({setState}) => {
                  return (
                    <Text
                      style={styles.button}
                      onPress={() => item.fn(setState)}>
                      {item.name}
                    </Text>
                  );
                }}
                assert={async ({expect, state}) => {
                  expect(state).to.be.true;
                }}
              />
            );
          })}
        </TestSuite>
      </ScrollView>
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
