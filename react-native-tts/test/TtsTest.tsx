import {Text, StyleSheet, ScrollView} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Tts, {TtsEvents} from 'react-native-tts';

const speakText = `炎炎夏日，阳光如烈火般炙烤大地。`;

const speakText2 = `秋天，一抹深沉的金黄漫过天际，叶片如蝶般飘零。微风拂过，树叶沙沙作响，落叶编织地面的金色地毯。秋天的色彩斑斓而美丽，仿佛大自然为世界穿上一袭金黄的盛装，宁静而充满生机。`;

type SetStateProps = React.Dispatch<React.SetStateAction<boolean>>;

type fnBackProps = Promise<boolean | string | number | void>;

export function TtsTest() {
  const eventTypes: TtsEvents[] = [
    'tts-start',
    'tts-finish',
    'tts-error',
    'tts-cancel',
    'tts-progress',
    'tts-pause',
    'tts-resume',
  ] as TtsEvents[];

  const caseAddEventList = eventTypes.map(event => {
    return {
      describe: `addEventListener（${event}）`,
      cn: '添加事件监听',
      key: `addEventListener （${event}）`,
      name: 'addEventListener',
      value: event,
      defineFn: (setState?: SetStateProps) => {
        Tts.addEventListener(event, () => {
          setState?.(true);
        });
      },
    };
  });

  const caseRemoveEventList = eventTypes.map(event => {
    return {
      describe: `removeEventListener（${event}）`,
      cn: '移除事件监听',
      key: `removeEventListener （${event}）`,
      name: 'removeEventListener',
      value: event,
      defineFn: (setState?: SetStateProps) => {
        Tts.removeEventListener(event, () => {
          setState?.(true);
        });
      },
    };
  });

  const caseList = [
    {
      describe: 'getInitStatus',
      cn: '获取初始化状态',
      key: 'getInitStatus',
      name: 'getInitStatus',
      value: '',
      fn: (): fnBackProps => Tts.getInitStatus(),
    },
    {
      describe: 'speak（short）',
      cn: '合成语音并播放',
      key: 'speak_a',
      name: 'speak',
      value: speakText,
      defineFn: (setState?: SetStateProps) => {
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
      defineFn: (setState?: SetStateProps) => {
        const id = Tts.speak(speakText2);
        setState?.(!!id);
      },
    },
    {
      describe: 'stop',
      cn: '结束播放',
      key: 'stop',
      name: 'stop',
      value: false,
      fn: (): fnBackProps => Tts.stop(false),
    },
    {
      describe: 'pause',
      cn: '暂停播放',
      key: 'pause',
      name: 'pause',
      value: false,
      fn: (): fnBackProps => Tts.pause(false),
    },
    {
      describe: 'resume',
      cn: '继续播放',
      key: 'resume',
      name: 'resume',
      value: '',
      fn: (): fnBackProps => Tts.resume(),
    },
    {
      describe: 'setDefaultRate（0.8）',
      cn: '设置默认语速，语速为0.8',
      key: 'setDefaultRate(0.8)',
      name: 'setDefaultRate',
      value: 0.8,
      fn: (): fnBackProps => Tts.setDefaultRate(0.8),
    },
    {
      describe: 'setDefaultRate（0.5）',
      cn: '设置默认语速，语速为0.5',
      key: 'setDefaultRate(0.5)',
      name: 'setDefaultRate',
      value: 0.5,
      fn: (): fnBackProps => Tts.setDefaultRate(0.5),
    },
    {
      describe: 'setDefaultPitch(1)',
      cn: '设置默认音调',
      key: 'setDefaultPitch(1)',
      name: 'setDefaultPitch',
      value: 1,
      fn: (): fnBackProps => Tts.setDefaultPitch(1),
    },
    {
      describe: 'setDefaultPitch(1.5)',
      cn: '设置默认音调',
      key: 'setDefaultPitch(1.5)',
      name: 'setDefaultPitch',
      value: 1.5,
      fn: (): fnBackProps => Tts.setDefaultPitch(1.5),
    },
    {
      describe: 'voices',
      cn: '获取音色列表',
      key: 'voices',
      name: 'voices',
      value: '',
      defineFn: (setState?: SetStateProps) => {
        Tts.voices().then(res => {
          setState?.(!!res.length);
        });
      },
    },
    ...caseAddEventList,
    ...caseRemoveEventList,
  ];
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-tts">
          <TestCase tags={['C_API']} itShould="error回调专用">
            <Text
              style={styles.button}
              onPress={() => {
                Tts.speak(123);
              }}>
              触发异常
            </Text>
          </TestCase>
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
                      onPress={() =>
                        item.defineFn
                          ? item.defineFn(setState)
                          : item.fn().then(() => setState(true))
                      }>
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
        <Text style={{marginBottom: 100}}></Text>
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
