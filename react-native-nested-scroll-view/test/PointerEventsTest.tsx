import {TestCase, TestSuite} from '@rnoh/testerino';
import {Platform, ScrollView, View} from 'react-native';
import {getScrollViewContent} from './fixtures';
import {Button} from '../../components';

export function PointerEventsTest() {
  return (
    <TestSuite name="pointer events">
      <TestCase
        itShould="call inner and outer view when pressing inner"
        initialState={{inner: false, outer: false, outerContainer: false}}
        arrange={({setState, reset}) => {
          return (
            <PointerEventsView
              pointerEventsOuter="auto"
              setState={setState}
              reset={reset}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.deep.eq({
            inner: true,
            outer: true,
            outerContainer: true,
          });
        }}
      />
      <TestCase
        //it seems there's a bug on Android, which causes pointerEvents to not work correctly for ScrollViews
        skip={Platform.select({
          android: 'known bug',
          harmony: 'fails on Android',
        })} // https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/424
        itShould="call only outer when pressing inner view"
        initialState={{inner: false, outer: false, outerContainer: true}}
        arrange={({setState, reset}) => {
          return (
            <PointerEventsView
              pointerEventsOuter="box-only"
              setState={setState}
              reset={reset}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.deep.eq({
            inner: false,
            outer: true,
            outerContainer: true,
          });
        }}
      />
      <TestCase
        //it seems there's a bug on Android, which causes pointerEvents to not work correctly for ScrollViews
        skip={Platform.select({
          android: 'known bug',
        })}
        itShould="call inner and outer only when pressing inner view"
        initialState={{inner: false, outer: false, outerContainer: false}}
        arrange={({setState, reset}) => {
          return (
            <PointerEventsView
              disableOuterContainerTouch
              pointerEventsOuter="box-none"
              setState={setState}
              reset={reset}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state.inner).to.be.true;
          expect(state.outer).to.be.true;
        }}
      />
      <TestCase
        //it seems there's a bug on Android, which causes pointerEvents to not work correctly for ScrollViews
        skip={Platform.select({
          android: 'known bug',
        })}
        itShould="not call inner or outer when pressing inner or outer views"
        initialState={{inner: false, outer: false, outerContainer: false}}
        arrange={({setState, reset}) => {
          return (
            <PointerEventsView
              pointerEventsOuter="none"
              setState={setState}
              reset={reset}
            />
          );
        }}
        assert={({expect, state}) => {
          expect(state).to.be.deep.eq({
            inner: false,
            outer: false,
            outerContainer: true,
          });
        }}
      />
    </TestSuite>
  );
}

function PointerEventsView(props: {
  disableOuterContainerTouch?: boolean;
  pointerEventsOuter?: 'box-none' | 'none' | 'box-only' | 'auto';
  pointerEventsInner?: 'box-none' | 'none' | 'box-only' | 'auto';
  setState: React.Dispatch<
    React.SetStateAction<{
      inner: boolean;
      outer: boolean;
      outerContainer: boolean;
    }>
  >;
  reset: () => void;
}) {
  return (
    <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
      <View
        style={{backgroundColor: 'red'}}
        onTouchEnd={
          props.disableOuterContainerTouch
            ? undefined
            : () => {
                props.setState(prev => ({...prev, outerContainer: true}));
              }
        }>
        <ScrollView
          nestedScrollEnabled
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'green',
            padding: 20,
          }}
          pointerEvents={props.pointerEventsOuter}
          onTouchEnd={() => {
            props.setState(prev => ({...prev, outer: true}));
          }}>
          {getScrollViewContent({
            amountOfChildren: 3,
            onTouchEnd: () => {
              props.setState(prev => ({...prev, inner: true}));
            },
            pointerEvents: props.pointerEventsInner,
          })}
        </ScrollView>
      </View>
      <Button label="reset" onPress={props.reset} />
    </View>
  );
}
