import {TestCase, TestSuite} from '@rnoh/testerino';
import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Animated,
  Pressable,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Directions,
} from 'react-native-gesture-handler';
import {PALETTE} from '../constants';

export function NewApiTest() {
  return (
    <TestSuite name="new API">
      <TestSuite name="Gesture.Rotation">
        <TestCase
          itShould="rotate blue square 45 deg clockwise"
          initialState={new Animated.Value(0)}
          arrange={({setState, state}) => {
            const rotationGh = Gesture.Rotation()
              .onUpdate(({rotation}) => {
                state.setValue(rotation);
              })
              .onEnd(({rotation}) => {
                setState(new Animated.Value(rotation));
              });
            return (
              <GestureDetector gesture={rotationGh}>
                <Animated.View
                  style={{
                    width: 128,
                    height: 128,
                    margin: 32,
                    alignSelf: 'center',
                    backgroundColor: PALETTE.DARK_BLUE,
                    justifyContent: 'center',
                    transform: [
                      {
                        rotate: state.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0rad', '1rad'],
                        }),
                      },
                    ],
                  }}>
                  <Text
                    style={{textAlign: 'center', color: 'white', padding: 8}}>
                    ROTATE ME 45 DEG CLOCKWISE
                  </Text>
                </Animated.View>
              </GestureDetector>
            );
          }}
          assert={({expect, state}) => {
            expect((state as any).__getValue()).to.be.greaterThan(Math.PI / 4);
          }}
        />
      </TestSuite>
      <TestSuite name="Gesture.Exclusive">
        <TestCase<
          | undefined
          | 'DOUBLE_TAP_WITHOUT_SINGLE_TAP'
          | 'SINGLE_TAP_AND_DOUBLE_TAP'
        >
          itShould="pass when tap and later double tap are detected"
          initialState={undefined}
          arrange={({setState, reset}) => {
            let hasPressedOnce = false;

            return (
              <Example
                onReset={setBackgroundColor => {
                  hasPressedOnce = false;
                  setBackgroundColor(PALETTE.DARK_BLUE);
                  reset();
                }}
                createGesture={setBackgroundColor => {
                  const singleTap = Gesture.Tap().onStart(() => {
                    setBackgroundColor('gray');
                    hasPressedOnce = true;
                  });
                  const doubleTap = Gesture.Tap()
                    .onStart(() => {
                      if (hasPressedOnce) {
                        setState('SINGLE_TAP_AND_DOUBLE_TAP');
                        setBackgroundColor(PALETTE.LIGHT_GREEN);
                      } else {
                        setState('DOUBLE_TAP_WITHOUT_SINGLE_TAP');
                      }
                    })
                    .numberOfTaps(2)
                    .maxDelay(1000);
                  return Gesture.Exclusive(doubleTap, singleTap);
                }}
                size={128}
                label="TAP; WAIT 1 SEC; DOUBLE TAP"
              />
            );
          }}
          assert={({expect, state}) => {
            expect(state).to.be.eq('SINGLE_TAP_AND_DOUBLE_TAP');
          }}
        />
      </TestSuite>
      <TestSuite name="Gesture.Race & Gesture.Simultaneous">
        <TestCase<
          'DOUBLE_TAP' | 'DOUBLE_AND_TRIPLE_TAP' | 'TRIPLE_TAP' | undefined
        >
          itShould="pass when double tap was chosen by Gesture.Race and tripleTap was fired by Gesture.Simultaneous"
          initialState={undefined}
          arrange={({setState, reset}) => {
            let hasDoublePressed = false;

            return (
              <Example
                label="TRIPLE TAP ME"
                onReset={setBackgroundColor => {
                  reset();
                  setBackgroundColor(PALETTE.DARK_BLUE);
                }}
                size={128}
                createGesture={setBackgroundColor => {
                  const doubleTap = Gesture.Tap()
                    .numberOfTaps(2)
                    .onEnd(() => {
                      setBackgroundColor('gray');
                      hasDoublePressed = true;
                    });
                  const tripleTap = Gesture.Tap()
                    .numberOfTaps(3)
                    .maxDelay(2000)
                    .onEnd(() => {
                      setBackgroundColor(PALETTE.LIGHT_GREEN);
                      if (hasDoublePressed) {
                        setState('DOUBLE_AND_TRIPLE_TAP');
                      } else {
                        setState('TRIPLE_TAP');
                      }
                    });
                  return Gesture.Simultaneous(
                    Gesture.Race(doubleTap, tripleTap),
                    tripleTap,
                  );
                }}
              />
            );
          }}
          assert={({expect, state}) => {
            expect(state).to.be.eq('DOUBLE_AND_TRIPLE_TAP');
          }}
        />
      </TestSuite>
      <TestSuite name="Gesture.Fling">
        <TestCase
          itShould="pass after swiping from left to right"
          initialState={false}
          arrange={({setState, state, reset}) => {
            const flingRightGesture = Gesture.Fling()
              .direction(Directions.RIGHT)
              .onStart(() => {
                if (state) {
                  reset();
                } else {
                  setState(true);
                }
              });

            return (
              <GestureDetector gesture={flingRightGesture}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: PALETTE.DARK_BLUE,
                  }}>
                  <Text style={{color: 'white', paddingVertical: 24}}>
                    SWIPE ME FROM LEFT TO RIGHT
                  </Text>
                </View>
              </GestureDetector>
            );
          }}
          assert={({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
      <TestSuite name="Gesture.LongPress">
        <TestCase
          itShould="pass after pressing the blue rectangle for one second"
          initialState={false}
          arrange={({state, reset, setState}) => {
            const longPressGesture = Gesture.LongPress()
              .minDuration(1000)
              .onStart(() => {
                if (state) {
                  reset();
                } else {
                  setState(true);
                }
              });
            return (
              <GestureDetector gesture={longPressGesture}>
                <View
                  style={{
                    width: '100%',
                    height: 64,
                    backgroundColor: PALETTE.DARK_BLUE,
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    PRESS ME FOR 1 SEC
                  </Text>
                </View>
              </GestureDetector>
            );
          }}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
      <TestSuite name="Gesture.Manual">
        <TestCase
          itShould="pass after dragging over the blue area (touch down, move, and touch up)"
          initialState={{
            hasTouchedDown: false,
            hasMoved: false,
            hasReleased: false,
          }}
          arrange={({setState}) => {
            const state = {
              hasTouchedDown: false,
              hasMoved: false,
              hasReleased: false,
            };
            const gesture = Gesture.Manual()
              .onTouchesDown(() => {
                state.hasTouchedDown = true;
              })
              .onTouchesMove(() => {
                state.hasMoved = true;
              })
              .onTouchesUp(() => {
                state.hasReleased = true;
                setState(state);
              });

            return (
              <View style={{}}>
                <GestureDetector gesture={gesture}>
                  <View
                    style={[
                      {
                        backgroundColor: PALETTE.DARK_BLUE,
                        width: '100%',
                      },
                    ]}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        paddingVertical: 24,
                      }}>
                      DRAG OVER ME
                    </Text>
                  </View>
                </GestureDetector>
              </View>
            );
          }}
          assert={({expect, state}) => {
            expect(state).to.be.deep.eq({
              hasTouchedDown: true,
              hasMoved: true,
              hasReleased: true,
            });
          }}></TestCase>
      </TestSuite>
      <TestSuite name="Gesture.Pan">
        <TestCase
          itShould="change color to green when panning"
          initialState={false}
          arrange={({setState}) => {
            return (
              <Example
                label="PAN ME"
                createGesture={setBackgroundColor => {
                  return Gesture.Pan()
                    .onStart(() => {
                      setBackgroundColor(PALETTE.LIGHT_GREEN);
                      setState(true);
                    })
                    .onEnd(() => {
                      setBackgroundColor(PALETTE.DARK_BLUE);
                    });
                }}
              />
            );
          }}
          assert={({expect, state}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="not trigger onPress from RN after panning"
          initialState={{hasPanningEnded: false, hasRNTriggeredOnPress: false}}
          arrange={({setState, reset}) => {
            return (
              <View style={styles.testCaseContainer}>
                <View style={{position: 'absolute', top: 0, right: 0}}>
                  <Button
                    title="Reset"
                    onPress={() => {
                      reset();
                    }}
                  />
                </View>
                <GestureDetector
                  gesture={Gesture.Pan().onEnd(() => {
                    setState(prev => ({...prev, hasPanningEnded: true}));
                  })}>
                  <Pressable
                    onPress={() => {
                      setState(prev => ({
                        ...prev,
                        hasRNTriggeredOnPress: true,
                      }));
                    }}
                    style={{
                      width: 128,
                      height: 128,
                      alignSelf: 'center',
                      backgroundColor: PALETTE.DARK_BLUE,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      PAN ME
                    </Text>
                  </Pressable>
                </GestureDetector>
              </View>
            );
          }}
          assert={({expect, state}) => {
            expect(state.hasPanningEnded, 'hasRNTriggeredOnPress').to.be.true;
            expect(state.hasRNTriggeredOnPress, 'hasRNTriggeredOnPress').to.be
              .false;
          }}
        />
      </TestSuite>
      <TestCase
        itShould="toggle color on PINCH"
        initialState={false}
        arrange={({setState}) => {
          return (
            <Example
              label="PINCH ME"
              size={250}
              createGesture={setBackgroundColor => {
                return Gesture.Pinch().onStart(() => {
                  setState(true);
                  setBackgroundColor(prev =>
                    prev === PALETTE.DARK_BLUE
                      ? PALETTE.LIGHT_GREEN
                      : PALETTE.DARK_BLUE,
                  );
                });
              }}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="toggle color on tap"
        initialState={false}
        arrange={({setState}) => {
          return (
            <Example
              label="PRESS ME"
              createGesture={setBackgroundColor => {
                return Gesture.Tap().onStart(() => {
                  setState(true);
                  setBackgroundColor(prev =>
                    prev === PALETTE.DARK_BLUE
                      ? PALETTE.LIGHT_GREEN
                      : PALETTE.DARK_BLUE,
                  );
                });
              }}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="support TouchableOpacity"
        initialState={false}
        arrange={({setState}) => {
          return (
            <View style={styles.testCaseContainer}>
              <TouchableOpacity
                style={{
                  width: 128,
                  height: 128,
                  backgroundColor: PALETTE.DARK_BLUE,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setState(true);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: 'white',
                  }}>
                  PRESS ME
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="support TouchableWithoutFeedback"
        initialState={false}
        arrange={({setState}) => {
          return (
            <View style={styles.testCaseContainer}>
              <TouchableWithoutFeedback
                style={{
                  width: 128,
                  height: 128,
                  backgroundColor: PALETTE.DARK_BLUE,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setState(true);
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  PRESS ME
                </Text>
              </TouchableWithoutFeedback>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="display red and green rectangles inside ScrollView (RNGH provides its own ScrollView)"
        modal>
        <ScrollView style={{width: '100%', height: 200}}>
          <View
            style={{
              height: 150,
              backgroundColor: PALETTE.LIGHT_RED,
            }}
          />
          <View
            style={{
              height: 150,
              backgroundColor: PALETTE.LIGHT_GREEN,
            }}
          />
        </ScrollView>
      </TestCase>
    </TestSuite>
  );
}

function Example(props: {
  label: string;
  createGesture: (
    setColor: React.Dispatch<React.SetStateAction<string>>,
  ) => React.ComponentProps<typeof GestureDetector>['gesture'];
  rightHitSlop?: number;
  size?: number;
  onReset?: (setColor: React.Dispatch<React.SetStateAction<string>>) => void;
}) {
  const [backgroundColor, setBackgroundColor] = useState(PALETTE.DARK_BLUE);

  const gesture = React.useMemo(() => {
    return props.createGesture(setBackgroundColor);
  }, []);

  return (
    <View style={styles.testCaseContainer}>
      {props.onReset && (
        <View style={{position: 'absolute', top: 0, right: 0}}>
          <Button
            title="Reset"
            onPress={() => {
              props.onReset!(setBackgroundColor);
            }}
          />
        </View>
      )}
      <GestureDetector gesture={gesture}>
        <View
          style={{
            width: props.size ?? 128,
            height: props.size ?? 128,
            alignSelf: 'center',
            backgroundColor,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
            {props.label}
          </Text>
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  testCaseContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
