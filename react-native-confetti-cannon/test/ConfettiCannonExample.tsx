import {
  Animated,
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import ConfettiCannon from 'react-native-confetti-cannon';

type Origin = {
  x: number;
  y: number;
};

export default function ConfettiCannonExample() {
  const $ref = useRef<any>();
  const [isResume, setIsResume] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isStop, setIsStop] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const [isResumeText, setIsResumeText] = useState<string>('');
  const [isStartText, setIsStartText] = useState<string>('');
  const [isStopText, setIsStopText] = useState<string>('');
  const [isEndText, setIsEndText] = useState<string>('');

  const [count, setCount] = useState(50);
  const [origin, setOrigin] = useState<Origin>({x: -10, y: -10});
  const [explosionSpeed, setExplosionSpeed] = useState(1000);
  const [fallSpeed, setFallSpeed] = useState(1000);
  const [fadeOut, setFadeOut] = useState(false);
  const [colors, setColors] = useState<string[] | undefined>();
  const [autoStart, setAutoStart] = useState(true);
  const [autoStartDelay, setAutoStartDelay] = useState(10);

  const renderElement = (title: string, fn: Function) => (
    <TestCase
      itShould={title}
      initialState={false}
      assert={({expect, state}) => {
        expect(state).to.be.true;
      }}
      arrange={({setState}) => (
        <Button
          title={title}
          onPress={() => {
            fn();
            setState(true);
          }}></Button>
      )}></TestCase>
  );

  return (
    <View style={{position: 'relative'}}>
      <View pointerEvents="none" style={styles.box}>
        <ConfettiCannon
          count={count}
          origin={origin}
          explosionSpeed={explosionSpeed}
          fallSpeed={fallSpeed}
          fadeOut={fadeOut}
          colors={colors}
          autoStart={autoStart}
          autoStartDelay={autoStartDelay}
          onAnimationStart={() => {
            setIsStart(true);
            setIsEnd(false);
            setIsStartText('pass');
          }}
          onAnimationStop={() => {
            if (isStart) {
              setIsStop(true);
              setIsStopText('pass');
            }
          }}
          onAnimationResume={() => {
            setIsResume(true);
            setIsResumeText('pass');
          }}
          onAnimationEnd={() => {
            setIsStart(false);
            setIsStop(false);
            setIsResume(false);
            setIsEnd(true);
            setIsEndText('pass');
          }}
          testID="123"
          ref={$ref}
        />
      </View>
      <View style={styles.container}>
        <ScrollView style={{height: '80%'}}>
          <Tester>
            <TestSuite name="react-native-confetti-cannon">
              {renderElement('启动动画 start', () => {
                $ref.current.start();
              })}
              {renderElement('暂停动画 stop', () => {
                if (isStart) {
                  $ref.current.stop();
                }
              })}
              {renderElement('重启动画 resume', () => {
                if (isStart && isStop) {
                  $ref.current.resume();
                }
              })}

              <TestCase itShould="组件生命周期 组件启动就会触发 onAnimationStart">
                <Text>{isStartText}</Text>
              </TestCase>
              <TestCase itShould="组件生命周期 组件暂停就会触发 onAnimationStop">
                <Text>{isStopText}</Text>
              </TestCase>
              <TestCase itShould="组件生命周期 组件重启就会触发 onAnimationResume">
                <Text>{isResumeText}</Text>
              </TestCase>
              <TestCase itShould="组件生命周期 组件结束就会触发 onAnimationEnd">
                <Text>{isEndText}</Text>
              </TestCase>

              {renderElement('纸屑数量 count 20', () => {
                setCount(20);
              })}
              {renderElement('纸屑数量 count 50', () => {
                setCount(50);
              })}

              {renderElement('纸屑爆炸的原始起点 origin {x: 200, y: 200}', () => {
                setOrigin({x: 200, y: 200});
              })}
              {renderElement('纸屑爆炸的原始起点 origin {x: -10, y: -10}', () => {
                setOrigin({x: -10, y: -10});
              })}

              {renderElement('上升到顶部的时间 explosionSpeed 3000', () => {
                setExplosionSpeed(3000);
              })}
              {renderElement('上升到顶部的时间 explosionSpeed 1000', () => {
                setExplosionSpeed(1000);
              })}

              {renderElement('坠落到底部的时间 fallSpeed 3000', () => {
                setFallSpeed(3000);
              })}
              {renderElement('坠落到底部的时间 fallSpeed 1000', () => {
                setFallSpeed(1000);
              })}

              {renderElement('纸屑坠落后是否停留在底部 fadeOut true', () => {
                setFadeOut(true);
              })}
              {renderElement('纸屑坠落后是否停留在底部 fadeOut false', () => {
                setFadeOut(false);
              })}

              {renderElement("纸屑的颜色 colors `['red', 'blue', 'green']`", () => {
                setColors(['red', 'blue', 'green']);
              })}
              {renderElement('纸屑的颜色 colors undefined', () => {
                setColors(undefined);
              })}

              {renderElement('是否自动启动 autoStart false', () => {
                setAutoStart(false);
              })}
              {renderElement('是否自动启动 autoStart true', () => {
                setAutoStart(true);
                $ref.current.start();
              })}

              <TestCase
                itShould={'延迟启动 autoStartDelay 5000'}
                initialState={false}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
                arrange={({setState}) => (
                  <Button
                    title={'延迟启动 autoStartDelay 5000'}
                    onPress={() => {
                      setAutoStartDelay(5000);
                      setTimeout(() => {
                        $ref.current.start();
                        setState(true);
                      }, 5000);
                    }}></Button>
                )}></TestCase>

              <TestCase
                itShould={'延迟启动 autoStartDelay 3000'}
                initialState={false}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
                arrange={({setState}) => (
                  <Button
                    title={'延迟启动 autoStartDelay 3000'}
                    onPress={() => {
                      setAutoStartDelay(3000);
                      setTimeout(() => {
                        $ref.current.start();
                        setState(true);
                      }, 3000);
                    }}></Button>
                )}></TestCase>
            </TestSuite>
          </Tester>
          {/* <View style={{marginBottom: 50}} /> */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10%',
    height: '80%',
  },
  box: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
});
