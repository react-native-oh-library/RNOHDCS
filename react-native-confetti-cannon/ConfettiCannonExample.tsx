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
              {renderElement('start', () => {
                $ref.current.start();
              })}
              {renderElement('stop', () => {
                if (isStart) {
                  $ref.current.stop();
                }
              })}
              {renderElement('resume', () => {
                if (isStart && isStop) {
                  $ref.current.resume();
                }
              })}

              <TestCase itShould="onAnimationStart">
                <Text>{isStartText}</Text>
              </TestCase>
              <TestCase itShould="onAnimationStop">
                <Text>{isStopText}</Text>
              </TestCase>
              <TestCase itShould="onAnimationResume">
                <Text>{isResumeText}</Text>
              </TestCase>
              <TestCase itShould="onAnimationEnd">
                <Text>{isEndText}</Text>
              </TestCase>

              {renderElement('count 20', () => {
                setCount(20);
              })}
              {renderElement('count 50', () => {
                setCount(50);
              })}

              {renderElement('origin {x: 200, y: 200}', () => {
                setOrigin({x: 200, y: 200});
              })}
              {renderElement('origin {x: -10, y: -10}', () => {
                setOrigin({x: -10, y: -10});
              })}

              {renderElement('explosionSpeed 3000', () => {
                setExplosionSpeed(3000);
              })}
              {renderElement('explosionSpeed 1000', () => {
                setExplosionSpeed(1000);
              })}

              {renderElement('fallSpeed 3000', () => {
                setFallSpeed(3000);
              })}
              {renderElement('fallSpeed 1000', () => {
                setFallSpeed(1000);
              })}

              {renderElement('fadeOut true', () => {
                setFadeOut(true);
              })}
              {renderElement('fadeOut false', () => {
                setFadeOut(false);
              })}

              {renderElement("colors `['red', 'blue', 'green']`", () => {
                setColors(['red', 'blue', 'green']);
              })}
              {renderElement('colors undefined', () => {
                setColors(undefined);
              })}

              {renderElement('autoStart false', () => {
                setAutoStart(false);
              })}
              {renderElement('autoStart true', () => {
                setAutoStart(true);
                $ref.current.start();
              })}

              <TestCase
                itShould={'autoStartDelay 5000'}
                initialState={false}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
                arrange={({setState}) => (
                  <Button
                    title={'autoStartDelay 5000'}
                    onPress={() => {
                      setAutoStartDelay(5000);
                      setTimeout(() => {
                        $ref.current.start();
                        setState(true);
                      }, 5000);
                    }}></Button>
                )}></TestCase>

              <TestCase
                itShould={'autoStartDelay 3000'}
                initialState={false}
                assert={({expect, state}) => {
                  expect(state).to.be.true;
                }}
                arrange={({setState}) => (
                  <Button
                    title={'autoStartDelay 3000'}
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
