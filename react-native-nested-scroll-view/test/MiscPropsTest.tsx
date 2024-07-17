import {TestSuite} from '@rnoh/testerino';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  COMMON_PROPS,
  getScrollViewContent,
  getScrollViewContentHorizontal,
} from './fixtures';
import {useEffect, useRef, useState} from 'react';
import {Button, ObjectDisplayer, TestCase} from '../../components';

export function MiscPropsTest() {
  return (
    <TestSuite name="misc props">
      <TestCase.Example
        itShould="scroll should be disabled"
        tags={['C_API']}
        modal>
        <View style={styles.wrapperView}>
          <ScrollView {...COMMON_PROPS} scrollEnabled={false} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        itShould="display horizontal scroll view"
        modal
        tags={['C_API']}>
        <View
          style={{
            width: '100%',
            height: 150,
          }}>
          <ScrollView horizontal={true}>
            {getScrollViewContentHorizontal({})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="display ScrollView with the third view at the top (contentOffset)">
        <ContentOffsetTestCase />
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="scroll when contentOffset property is changed (contentOffset)">
        <ToggleContentOffsetTestCase />
      </TestCase.Example>
      <TestCase.Example
        modal
        itShould="toggle backface visibility on button press (the component should become invisible)">
        <BackfaceVisibilityTestCase />
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={Platform.select({android: 'fails', harmony: 'fails on Android'})}
        itShould="display ScrollView with different contentInsets (contentInset)"
        //https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/304
      >
        <View style={styles.wrapperView}>
          <ScrollView
            {...COMMON_PROPS}
            contentInset={{top: 10, right: 20, bottom: 30, left: 40}}
          />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="display current contentHeight (onContentSizeChange)">
        <View style={{height: 500}}>
          <OnContentSizeChangeTestCase />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="display onScroll native event throttled every second">
        <View style={{height: 500}}>
          <ObjectDisplayer
            renderContent={setObject => {
              return (
                <ScrollView
                  {...COMMON_PROPS}
                  style={{height: 300}}
                  scrollEventThrottle={1000}
                  onScroll={(e: {nativeEvent: Object}) => {
                    setObject(e.nativeEvent);
                  }}
                />
              );
            }}
          />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="the left scrollview should decelerate faster (stops earlier) than the right one (decelarationRate)">
        <View style={[styles.wrapperView, {flexDirection: 'row'}]}>
          <ScrollView {...COMMON_PROPS} decelerationRate={0.8} />
          <ScrollView {...COMMON_PROPS} decelerationRate={0.999} />
        </View>
      </TestCase.Example>

      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="the left scrollview should bounce (briefly scroll beyond the content to show the view below and then come back to top/bottom accordingly)">
        <View style={[styles.wrapperView, {flexDirection: 'row'}]}>
          <ScrollView {...COMMON_PROPS} />
          <ScrollView {...COMMON_PROPS} bounces={false} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="the left scrollview should bounce (briefly scroll beyond the content to show the view below and then come back to top/bottom accordingly) (alwaysBounceVertical)">
        <View style={[styles.wrapperView, {flexDirection: 'row'}]}>
          <ScrollView
            bounces
            alwaysBounceVertical={true}
            style={COMMON_PROPS.style}
            contentContainerStyle={COMMON_PROPS.contentContainerStyle}>
            {getScrollViewContent({amountOfChildren: 2})}
          </ScrollView>
          <ScrollView
            bounces
            alwaysBounceVertical={false}
            style={COMMON_PROPS.style}
            contentContainerStyle={COMMON_PROPS.contentContainerStyle}>
            {getScrollViewContent({amountOfChildren: 2})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="the top scrollview should bounce (briefly scroll beyond the content to show the view below and then come back to left/right accordingly) (alwaysBounceHorizontal)">
        <View style={[styles.wrapperView]}>
          <ScrollView
            horizontal
            bounces
            alwaysBounceHorizontal={true}
            style={COMMON_PROPS.style}
            contentContainerStyle={COMMON_PROPS.contentContainerStyle}>
            {getScrollViewContentHorizontal({amountOfChildren: 2})}
          </ScrollView>
          <ScrollView
            horizontal
            bounces
            alwaysBounceHorizontal={false}
            style={COMMON_PROPS.style}
            contentContainerStyle={COMMON_PROPS.contentContainerStyle}>
            {getScrollViewContentHorizontal({amountOfChildren: 2})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={Platform.select({android: 'fails', harmony: 'fails on Android'})}
        itShould="scroll outside of the content when pressing the button (scrollToOverflowEnabled)"
        //https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/315
      >
        <ScrollToOverflowEnabledTestCase />
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={'https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/312'}
        itShould="the left scrollview should allow for nested scroll while the right one shouldn't (nestedScrollEnabled)">
        <View
          style={[
            styles.wrapperView,
            {flexDirection: 'row', alignContent: 'space-between'},
          ]}>
          <ScrollView {...COMMON_PROPS}>
            <ScrollView
              nestedScrollEnabled
              style={{
                width: '70%',
                height: 200,
                borderColor: 'firebrick',
                borderWidth: 2,
              }}>
              {getScrollViewContent({
                style: {backgroundColor: 'green'},
                amountOfChildren: 5,
              })}
            </ScrollView>
            {getScrollViewContent({})}
          </ScrollView>
          <ScrollView {...COMMON_PROPS}>
            <ScrollView
              nestedScrollEnabled={false}
              style={{
                width: '70%',
                height: 200,
                borderColor: 'firebrick',
                borderWidth: 2,
              }}>
              {getScrollViewContent({
                style: {backgroundColor: 'green'},
                amountOfChildren: 5,
              })}
            </ScrollView>
            {getScrollViewContent({})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        modal
        itShould="scroll down on the btn press, but prevent scrolling by dragging (scrollEnabled)">
        <ScrollEnabledTestCase />
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={'https://gl.swmansion.com/rnoh/react-native-harmony/-/issues/499'}
        itShould="render scroll view with different fading edge length (fadingEdgeLength)">
        <ScrollViewFadingEdgeLengthTest />
      </TestCase.Example>
    </TestSuite>
  );
}

function ScrollEnabledTestCase() {
  const scrollRef = React.useRef<ScrollView>(null);
  return (
    <View style={styles.wrapperView}>
      <Button
        label={'Scroll To offset y 150'}
        onPress={() => {
          scrollRef.current?.scrollTo({x: 0, y: 150, animated: false});
        }}
      />
      <ScrollView style={{flex: 1}} scrollEnabled={false} ref={scrollRef}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function ScrollToOverflowEnabledTestCase() {
  const ref = useRef<ScrollView>(null);
  return (
    <View style={styles.wrapperView}>
      <Button
        label={'Scroll outside of the content'}
        onPress={() => {
          ref.current?.scrollTo({x: 0, y: -60, animated: true});
        }}
      />
      <ScrollView scrollToOverflowEnabled={true} ref={ref}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}
function OnContentSizeChangeTestCase() {
  const [amountOfChildren, setAmountOfChildren] = useState(3);
  return (
    <ObjectDisplayer
      renderContent={setObject => {
        return (
          <View style={{width: '100%', height: '70%'}}>
            <Button
              label={'Add one more item'}
              onPress={() => {
                setAmountOfChildren(amountOfChildren + 1);
              }}
            />
            <ScrollView
              onContentSizeChange={(_, contentHeight) => {
                setObject({contentHeight});
              }}>
              {getScrollViewContent({amountOfChildren: amountOfChildren})}
            </ScrollView>
          </View>
        );
      }}
    />
  );
}

function ContentOffsetTestCase() {
  return (
    <View style={styles.wrapperView}>
      <ScrollView
        style={{
          ...styles.wrapperView,
        }}
        contentOffset={{x: 0, y: 100}}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function ToggleContentOffsetTestCase() {
  const [contentOffset, setContentOffset] = useState(100);
  useEffect(() => {
    const id = setInterval(() => {
      setContentOffset(prev => (prev + 50) % 200);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <View style={styles.wrapperView}>
      <ScrollView
        style={{
          ...styles.wrapperView,
        }}
        contentOffset={{x: 0, y: contentOffset}}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function BackfaceVisibilityTestCase() {
  const [backfaceVisibility, setBackfaceVisibility] = useState(true);

  return (
    <View style={styles.wrapperView}>
      <Button
        label={`Make backface ${backfaceVisibility ? 'invisible' : 'visible'}`}
        onPress={() => {
          setBackfaceVisibility(!backfaceVisibility);
        }}
      />
      <ScrollView
        style={{
          ...styles.wrapperView,
          backfaceVisibility: backfaceVisibility ? 'visible' : 'hidden',
          transform: [{rotateX: '180deg'}],
        }}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function ScrollViewFadingEdgeLengthTest() {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <View
        style={{
          height: 400,
          marginTop: 50,
          marginBottom: 50,
        }}>
        <ScrollView fadingEdgeLength={100}>
          {getScrollViewContent({})}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    height: 300,
    width: '60%',
  },
});
