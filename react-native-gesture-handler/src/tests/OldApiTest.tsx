import {TestCase, TestSuite} from '@rnoh/testerino';
import {forwardRef, useRef, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {PALETTE} from '../constants';
import {IssueWithAnimatedEvent} from './IssueWithAnimatedEvent';

export function OldApiTest() {
  return (
    <TestSuite name="old API">
      <TestCase
        itShould="export State object"
        fn={({expect}) => {
          expect(State).to.be.not.undefined;
        }}
      />
      <TappingTest />
      <PanningTest />
      <TestCase itShould="keep updating displayed gesture event object when dragging circle (Animated.event + onGestureEvent)">
        <IssueWithAnimatedEvent />
      </TestCase>
    </TestSuite>
  );
}

function TappingTest() {
  return (
    <TestSuite name="tapping">
      <TestCase
        itShould="toggle color on double tap"
        initialState={{
          hasBeenDoubleTapped: false,
          backgroundColor: PALETTE.DARK_BLUE,
        }}
        arrange={({setState, state}) => {
          return (
            <View style={styles.testCaseContainer}>
              <TapGestureHandler
                numberOfTaps={2}
                onActivated={() => {
                  setState({
                    hasBeenDoubleTapped: true,
                    backgroundColor:
                      state.backgroundColor === PALETTE.DARK_BLUE
                        ? PALETTE.LIGHT_GREEN
                        : PALETTE.DARK_BLUE,
                  });
                }}>
                <Rect
                  backgroundColor={state.backgroundColor}
                  label="DOUBLE TAP THIS RECT"
                />
              </TapGestureHandler>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state.hasBeenDoubleTapped).to.be.true;
        }}
      />
      <TestCase itShould="change color on tap as long as finger didn't move more than 100px horizontally (maxDeltaX)">
        <StateKeeper<string>
          renderContent={(backgroundColor, setBackgroundColor) => {
            return (
              <TapGestureHandler
                maxDeltaX={100}
                onActivated={() =>
                  setBackgroundColor(prev =>
                    prev === PALETTE.DARK_BLUE
                      ? PALETTE.LIGHT_GREEN
                      : PALETTE.DARK_BLUE,
                  )
                }>
                <View
                  style={{
                    backgroundColor: backgroundColor ?? PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 128,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: 100,
                      height: 128,
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderColor: 'white',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        styles.rectLabel,
                        {
                          padding: 8,
                        },
                      ]}>
                      TO FAIL: TOUCH, MOVE FINGER MORE THAN 100 PX, RELEASE
                      FINGER
                    </Text>
                  </View>
                </View>
              </TapGestureHandler>
            );
          }}
        />
      </TestCase>
    </TestSuite>
  );
}

function PanningTest() {
  return (
    <TestSuite name="panning">
      <TestCase
        itShould="change color to green when panning after 128px horizontally (panning + activeOffsetX)"
        initialState={{hasPanned: false, backgroundColor: PALETTE.DARK_BLUE}}
        arrange={({setState, state}) => {
          return (
            <View style={styles.testCaseContainer}>
              <PanGestureHandler
                activeOffsetX={[-128, 128]}
                onActivated={() => {
                  setState({
                    hasPanned: true,
                    backgroundColor: PALETTE.LIGHT_GREEN,
                  });
                }}
                onEnded={() => {
                  setState(prev => ({
                    ...prev,
                    backgroundColor: PALETTE.DARK_BLUE,
                  }));
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 128,
                    backgroundColor: state.backgroundColor,
                  }}>
                  <View
                    style={{
                      width: 128,
                      height: 128,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderColor: 'white',
                    }}>
                    <Text style={styles.rectLabel}>
                      PAN 128 ME PX HORIZONTALLY
                    </Text>
                  </View>
                </View>
              </PanGestureHandler>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state.hasPanned).to.be.true;
        }}
      />

      <TestCase<PanGestureHandlerEventPayload | undefined>
        itShould="display event received by onGestureEvent when dragging over blue rectangle"
        initialState={undefined}
        arrange={({state, setState}) => {
          return (
            <>
              <StateKeeper
                renderContent={(state2, setState2) => {
                  return (
                    <View style={styles.testCaseContainer}>
                      <PanGestureHandler
                        onGestureEvent={e => {
                          if (!state) {
                            setState(e.nativeEvent);
                          }
                          setState2(e.nativeEvent);
                        }}>
                        <Rect
                          backgroundColor={PALETTE.DARK_BLUE}
                          label="PAN ME"
                        />
                      </PanGestureHandler>
                      <ConsoleOutput height={128} data={state2} />
                    </View>
                  );
                }}
              />
            </>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.not.undefined;
          if (state) {
            expect(typeof state.absoluteX === 'number').to.be.true;
            expect(typeof state.absoluteY === 'number').to.be.true;
            expect(typeof state.translationX === 'number').to.be.true;
            expect(typeof state.translationY === 'number').to.be.true;
            expect(typeof state.velocityX === 'number').to.be.true;
            expect(typeof state.velocityY === 'number').to.be.true;
            expect(typeof state.x === 'number').to.be.true;
            expect(typeof state.y === 'number').to.be.true;
          }
        }}
      />

      <TestCase<PanGestureHandlerEventPayload | undefined>
        itShould="display event received by onHandlerStateChange when dragging over blue rectangle"
        initialState={undefined}
        arrange={({state, setState}) => {
          return (
            <>
              <StateKeeper
                renderContent={(state2, setState2) => {
                  return (
                    <View style={styles.testCaseContainer}>
                      <PanGestureHandler
                        onHandlerStateChange={e => {
                          if (!state) {
                            setState(e.nativeEvent);
                          }
                          setState2(e.nativeEvent);
                        }}>
                        <Rect
                          backgroundColor={PALETTE.DARK_BLUE}
                          label="PAN ME"
                        />
                      </PanGestureHandler>
                      <ConsoleOutput height={128} data={state2} />
                    </View>
                  );
                }}
              />
            </>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.not.undefined;
          if (state) {
            expect(typeof state.absoluteX === 'number').to.be.true;
            expect(typeof state.absoluteY === 'number').to.be.true;
            expect(typeof state.translationX === 'number').to.be.true;
            expect(typeof state.translationY === 'number').to.be.true;
            expect(typeof state.velocityX === 'number').to.be.true;
            expect(typeof state.velocityY === 'number').to.be.true;
            expect(typeof state.x === 'number').to.be.true;
            expect(typeof state.y === 'number').to.be.true;
          }
        }}
      />
      <TestCase
        itShould="recognize panning when dragging over blue rectangle, but not the red one (hit slop)"
        initialState={{
          hasBeenActivated: false,
          backgroundColor: PALETTE.DARK_BLUE,
        }}
        arrange={({setState, state}) => {
          return (
            <View style={styles.testCaseContainer}>
              <PanGestureHandler
                hitSlop={{right: -128}}
                onActivated={() =>
                  setState({
                    hasBeenActivated: true,
                    backgroundColor: PALETTE.LIGHT_GREEN,
                  })
                }
                onEnded={() => {
                  setState(prev => ({
                    ...prev,
                    backgroundColor: PALETTE.DARK_BLUE,
                  }));
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Rect label="PAN ME" backgroundColor={PALETTE.DARK_BLUE} />
                  <Rect label="PAN ME TOO" backgroundColor={PALETTE.DARK_RED} />
                </View>
              </PanGestureHandler>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state.hasBeenActivated).to.be.true;
        }}
      />
      <TestCase
        itShould="change color when panning left rect but not right"
        initialState={{hasPannedLeftRect: false, hasPannedRightRect: false}}
        arrange={({setState, state}) => {
          return (
            <View
              style={[
                styles.testCaseContainer,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              ]}>
              <PanGestureHandler
                onActivated={() =>
                  setState(prev => ({...prev, hasPannedLeftRect: true}))
                }>
                <Rect
                  label="PAN ME"
                  backgroundColor={
                    state.hasPannedLeftRect
                      ? PALETTE.LIGHT_GREEN
                      : PALETTE.DARK_BLUE
                  }
                />
              </PanGestureHandler>
              <PanGestureHandler
                enabled={false}
                onActivated={() =>
                  setState(prev => ({...prev, hasPannedRightRect: true}))
                }>
                <Rect
                  label="PAN ME TOO"
                  backgroundColor={
                    state.hasPannedRightRect
                      ? PALETTE.LIGHT_GREEN
                      : PALETTE.DARK_RED
                  }
                />
              </PanGestureHandler>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state.hasPannedLeftRect).to.be.true;
          expect(state.hasPannedRightRect).to.be.false;
        }}
      />
      <TestCase itShould="scale blue rect horizontally when dragging also horizontally (NativeAnimatedEvent)">
        <View style={styles.testCaseContainer}>
          <NativeAnimatedEventExample />
        </View>
      </TestCase>
    </TestSuite>
  );
}

const NativeAnimatedEventExample = () => {
  const animatedValue = useRef(new Animated.Value(100)).current;

  return (
    <PanGestureHandler
      onGestureEvent={Animated.event(
        [{nativeEvent: {absoluteX: animatedValue}}],
        {useNativeDriver: true},
      )}>
      <Animated.View
        style={{
          backgroundColor: PALETTE.DARK_BLUE,
          width: 128,
          height: 128,
          alignSelf: 'center',
          justifyContent: 'center',
          transform: [
            {
              scaleX: Animated.diffClamp(
                Animated.divide(animatedValue, 100),
                1,
                2,
              ),
            },
          ],
        }}>
        <Text style={styles.rectLabel}>PAN ME HORIZONTALLY</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Rect = forwardRef<
  View,
  {
    backgroundColor: string;
    label: string;
  }
>(({backgroundColor, label}, ref) => {
  return (
    <View
      ref={ref}
      style={{
        width: 128,
        height: 128,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
      }}>
      <Text style={styles.rectLabel}>{label}</Text>
    </View>
  );
});

function ConsoleOutput({height, data}: {height: number; data: any}) {
  return (
    <ScrollView
      style={{
        width: '100%',
        height,
        borderTopWidth: 2,
        borderColor: 'gray',
        backgroundColor: 'black',
        padding: 8,
      }}>
      <Text style={{color: 'white', fontSize: 8}}>
        {data === undefined ? 'undefined' : JSON.stringify(data, null, 2)}
      </Text>
    </ScrollView>
  );
}

function StateKeeper<T>(props: {
  renderContent: (
    value: T | undefined,
    setValue: React.Dispatch<React.SetStateAction<T | undefined>>,
  ) => void;
}) {
  const [value, setValue] = useState<T>();

  return <>{props.renderContent(value, setValue)}</>;
}

const styles = StyleSheet.create({
  testCaseContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  rectLabel: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});
