/* eslint-disable react-native/no-inline-styles */
import {
    SafeAreaView,
    ScrollView,
  } from 'react-native';
  import {
    GestureHandlerRootView,
  } from 'react-native-gesture-handler';
  import Swipeable from 'react-native-gesture-handler/Swipeable';
  import { StyleSheet, Text, View, Platform, Animated } from 'react-native';
  import { PALETTE } from './src/constants';
  import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
  import React from 'react';
  
  function App({ }): JSX.Element | null {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: '#222', flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Tests />
          </GestureHandlerRootView>
        </SafeAreaView>
      </View>
    );
  }
  
  function Tests() {
  
    return (
      <Tester style={{ flex: 1 }}>
        <ScrollView style={{ width: '100%', flex: 1 }}>
          <TestCase
            itShould="friction: 手势滑动的距离与交互效果延迟的比例"
            initialState={false}
            arrange={({ setState }) => {
              return (
                <Swipeable
                  friction={5}
                  onSwipeableOpen={() => {
                    setState(true);
                  }}
                  renderLeftActions={() => (
                    <View
                      style={{
                        backgroundColor: 'green',
                        width: 64,
                        height: 64,
                        justifyContent: 'center',
                      }}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>
                        HELLO THERE
                      </Text>
                    </View>
                  )}>
                  <View
                    style={{
                      backgroundColor: PALETTE.DARK_BLUE,
                      width: '100%',
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      向右滑动
                    </Text>
                  </View>
                </Swipeable>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="leftThreshold:64 蓝色面板从左边缘被拖动的距离，大于这个距离才能被打开"
            initialState={false}
            arrange={({ setState }) => {
              return (
                <Swipeable
                  leftThreshold={64}
                  onSwipeableOpen={() => {
                    setState(true);
                  }}
                  renderLeftActions={() => (
                    <View
                      style={{
                        backgroundColor: 'green',
                        width: 64,
                        height: 64,
                        justifyContent: 'center',
                      }}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>
                        HELLO THERE
                      </Text>
                    </View>
                  )}>
                  <View
                    style={{
                      backgroundColor: PALETTE.DARK_BLUE,
                      width: '100%',
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      向右滑动
                    </Text>
                  </View>
                </Swipeable>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="rightThreshold:10 蓝色面板从右边缘被拖动的距离，大于这个距离才能被打开"
            initialState={false}
            arrange={({ setState }) => {
              return (
                <Swipeable
                  rightThreshold={10}
                  onSwipeableOpen={() => {
                    setState(true);
                  }}
                  renderRightActions={() => (
                    <View
                      style={{
                        backgroundColor: 'green',
                        width: 64,
                        height: 64,
                        justifyContent: 'center',
                      }}>
                      <Text style={{ color: 'white', textAlign: 'center' }}>
                        HELLO THERE
                      </Text>
                    </View>
                  )}>
                  <View
                    style={{
                      backgroundColor: PALETTE.DARK_BLUE,
                      width: '100%',
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      向左滑动
                    </Text>
                  </View>
                </Swipeable>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
          <TestCase
            itShould="dragOffsetFromLeftEdge: : 100, 手指向右滑动至少100像素以上才会拖动蓝色面板,与其他用例可做对比。"
            initialState={false}
            arrange={({ setState }) => {
              return (
                <Swipeable
                dragOffsetFromLeftEdge={100}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="dragOffsetFromRightEdge: 100, 手指向左滑动至少100像素以上才会拖动蓝色面板,与其他用例可做对比。"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                dragOffsetFromRightEdge={100}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderRightActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向左滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="overshootLeft: false  允许蓝色面板滑动距离超出底下绿色宽度，与下一条做对比效果"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                overshootLeft={false}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="overshootRight:true 允许蓝色面板滑动距离超出底下绿色宽度"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                overshootRight={true}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderRightActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向左滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          itShould="overshootFriction: 10  用于指定与超调时的手势距离相比，视觉交互将延迟多少。"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                overshootFriction={10}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                    </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase
          itShould="onSwipeableClose: 先由左向右滑动开，之后再滑动关闭"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                onSwipeableClose={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase
          itShould="containerStyle: 整个布局的父容器"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                containerStyle={{ width: '100%', height: 80, backgroundColor: 'red' }}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
          }}
          assert={({ expect, state }) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase
          itShould="childrenContainerStyle: 蓝色面板的父容器"
          initialState={false}
          arrange={({ setState }) => {
            return (
              <Swipeable
                childrenContainerStyle={{ width: 200, height: 80, backgroundColor: 'yellow' }}
                onSwipeableOpen={() => {
                  setState(true);
                }}
                renderLeftActions={() => (
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      HELLO THERE
                    </Text>
                  </View>
                )}>
                <View
                  style={{
                    backgroundColor: PALETTE.DARK_BLUE,
                    width: '100%',
                    height: 64,
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    向右滑动
                  </Text>
                </View>
              </Swipeable>
            );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="onSwipeableWillClose,onSwipeableWillOpen"
        initialState={false}
        arrange={({ setState }) => {
          return (
            <Swipeable
              onSwipeableWillClose={(flexDirection) => {
                setState(true);
                console.log("GestureHandler Swipeable:  onSwipeableWillClose");
              }}
              onSwipeableWillOpen={(flexDirection) => {
                console.log("GestureHandler Swipeable:  onSwipeableWillOpen");
              }}

              renderLeftActions={() => (
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 64,
                    height: 64,
                    justifyContent: 'center',
                    alignSelf: 'flex-end'
                  }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    HELLO THERE
                  </Text>
                </View>
              )}>
              <View
                style={{
                  backgroundColor: PALETTE.DARK_BLUE,
                  width: '100%',
                  height: 64,
                  justifyContent: 'center',
                }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  向右滑动
                </Text>
              </View>
            </Swipeable>
          );
        }}
        assert={({ expect, state }) => {
          expect(state).to.be.true;
        }}
      />
    </ScrollView>
  </Tester>
);
}

export default App;