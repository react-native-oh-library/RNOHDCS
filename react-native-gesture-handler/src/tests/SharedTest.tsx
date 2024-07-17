import {TestCase, TestSuite} from '@rnoh/testerino';
import {
  createNativeWrapper,
  TouchableHighlight,
  enableLegacyWebImplementation,
  enableExperimentalWebImplementation,
  TouchableNativeFeedback,
  Swipeable as MainSwipeable,
  DrawerLayout,
  PureNativeButton,
  RectButton,
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {PALETTE} from '../constants';

const RNGHView = createNativeWrapper(View, {
  disallowInterruption: true,
});

const WrappedPureNativeButton = createNativeWrapper(PureNativeButton, {
  shouldActivateOnStart: true,
});

export function SharedAPITest() {
  return (
    <TestSuite name="shared API">
      <TestCase
        itShould="do nothing when calling enableLegacyWebImplementation"
        fn={() => {
          enableLegacyWebImplementation();
        }}
      />
      <TestCase
        itShould="do nothing when calling enableExperimentalWebImplementation"
        fn={() => {
          enableExperimentalWebImplementation();
        }}
      />
      <TestCase
        itShould="pass on press (createNativeWrapper)"
        initialState={false}
        arrange={({setState}) => {
          return (
            <View style={styles.testCaseContainer}>
              <RNGHView
                style={{
                  height: 128,
                  width: 128,
                  backgroundColor: PALETTE.DARK_BLUE,
                  justifyContent: 'center',
                }}
                onBegan={() => {
                  setState(true);
                }}>
                <Text
                  style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                  PRESS ME
                </Text>
              </RNGHView>
            </View>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}
      />
      <TestCase
        itShould="change color to red when pressing the button (TouchableHighlight)"
        initialState={false}
        arrange={({setState}) => {
          return (
            <TouchableHighlight
              style={{backgroundColor: PALETTE.DARK_BLUE, paddingVertical: 16}}
              underlayColor={PALETTE.DARK_RED}
              onPress={() => {
                setState(true);
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                PRESS ME
              </Text>
            </TouchableHighlight>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="show ripple effect on press (Android)"
        skip={Platform.OS === 'android' ? false : 'android component'}
        initialState={false}
        arrange={({setState}) => {
          return (
            <>
              <TouchableNativeFeedback
                style={{
                  backgroundColor: PALETTE.DARK_BLUE,
                  paddingVertical: 16,
                }}
                onPress={() => {
                  setState(true);
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  PRESS ME
                </Text>
              </TouchableNativeFeedback>
            </>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="pass when green rectangle is visible after moving the blue rectangle to the right"
        initialState={false}
        arrange={({setState}) => {
          return (
            <Swipeable
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
                  <Text style={{color: 'white', textAlign: 'center'}}>
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
                <Text style={{color: 'white', textAlign: 'center'}}>
                  SWIPE ME RIGHT
                </Text>
              </View>
            </Swipeable>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="reexport Swipeable"
        fn={({expect}) => {
          expect(MainSwipeable).is.not.undefined;
        }}
      />
      <TestCase
        itShould="reexport DrawerLayout"
        fn={({expect}) => {
          expect(DrawerLayout).is.not.undefined;
        }}
      />
      <TestCase
        itShould="pass on press (PureNativeButton)"
        initialState={false}
        arrange={({setState}) => {
          return (
            <WrappedPureNativeButton
              onActivated={() => {
                setState(true);
              }}>
              <Text
                style={{
                  backgroundColor: PALETTE.DARK_BLUE,
                  color: 'white',
                  textAlign: 'center',
                  padding: 16,
                }}>
                PRESS ME
              </Text>
            </WrappedPureNativeButton>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="pass when pressed (RectButton) and change color to light red when touched"
        skip={Platform.OS === 'android' ? "doesn't work on Android" : false}
        initialState={false}
        arrange={({setState}) => {
          return (
            <RectButton
              rippleColor={'red'}
              underlayColor="red"
              onPress={() => {
                setState(true);
              }}>
              <View style={{padding: 16}}>
                <Text>List Item 1 - Press me</Text>
              </View>
            </RectButton>
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.true;
        }}
      />
    </TestSuite>
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
