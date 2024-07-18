import {TestSuite} from '@rnoh/testerino';
import {
  COMMON_PROPS,
  getScrollViewContent,
  getScrollViewContentHorizontal,
} from './fixtures';
import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, TestCase} from '../../components';

export function ScrollBarsTest() {
  return (
    <TestSuite name="scroll indicators / scrollbar">
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="have persistent scrollbar">
        <View style={styles.wrapperView}>
          <ScrollView persistentScrollbar={true} {...COMMON_PROPS} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="shows white vertical scroll indicator">
        <View style={styles.wrapperView}>
          <ScrollView {...COMMON_PROPS} indicatorStyle={'white'} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="show vertical scroll indicator">
        <View style={styles.wrapperView}>
          <ScrollView {...COMMON_PROPS} showsVerticalScrollIndicator={true} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="hide vertical scroll indicator">
        <View style={styles.wrapperView}>
          <ScrollView showsVerticalScrollIndicator={false} {...COMMON_PROPS} />
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="show horizontal scroll indicator">
        <View style={styles.wrapperView}>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal
            {...COMMON_PROPS}>
            {getScrollViewContentHorizontal({})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="hide horizontal scroll indicator">
        <View style={styles.wrapperView}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            {...COMMON_PROPS}>
            {getScrollViewContentHorizontal({})}
          </ScrollView>
        </View>
      </TestCase.Example>
      <TestCase.Example
        tags={['C_API']}
        modal
        itShould="flash scroll indicators">
        <FlashIndicatorsTest />
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={''}
        itShould="[FAILS on Harmony/Android] It should move the scroll bar by 50px from the right and by 200px from the top and bottom">
        <ScrollViewScrollIndicatorInsetsTest />
      </TestCase.Example>
      <TestCase.Example
        modal
        skip={''}
        itShould="[FAILS on Harmony/Android] It should move the scroll bar and the scroll content by 50px from the left and by 100px from the left and right">
        <ScrollViewContentInsetsTest />
      </TestCase.Example>
    </TestSuite>
  );
}

function FlashIndicatorsTest() {
  const scrollRef = React.useRef<ScrollView>(null);
  return (
    <View style={styles.wrapperView}>
      <Button
        label={'Flash Indicators'}
        onPress={() => {
          scrollRef.current?.flashScrollIndicators();
        }}
      />
      <ScrollView
        style={{flex: 1}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function ScrollViewScrollIndicatorInsetsTest() {
  return (
    <View style={styles.wrapperView}>
      <ScrollView
        style={{
          ...styles.wrapperView,
        }}
        scrollIndicatorInsets={{right: 50, bottom: 200, top: 200}}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

function ScrollViewContentInsetsTest() {
  return (
    <View style={styles.wrapperView}>
      <ScrollView
        style={{
          ...styles.wrapperView,
        }}
        contentInset={{left: 50, bottom: 100, top: 100}}
        scrollIndicatorInsets={{left: 50, bottom: 100, top: 100}}>
        {getScrollViewContent({})}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    height: 300,
    width: '60%',
  },
});
