import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  SharedValue,
  useDerivedValue,
  useSharedValue,
} from '@react-native-oh-tpl/react-native-reanimated';
import PagerView from '@react-native-oh-tpl/react-native-pager-view';

import { AnimatedText } from './AnimatedText';
import {
  useAnimatedPagerSelectedPageHandler,
} from './UseAnimatedPagerScrollHandler';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const SLIDES = [
  { color: 'red', key: 1 },
  { color: 'blue', key: 2 },
  { color: 'yellow', key: 3 },
  { color: 'green', key: 4 },
  { color: 'pink', key: 5 },
];

export default function PagerExample() {
  const scrollState = useSharedValue<string>('idle');
  const currentPage = useSharedValue(0);
  const stringifiedCurrentPage = useDerivedValue(() => {
    return `${currentPage.value + 1}`;
  });
  const selectedPageHandler = useAnimatedPagerSelectedPageHandler({
    onPageSelected: (e) => {
      'worklet';
      currentPage.value = e.position;
    },
  });
  return (
    <View style={styles.container}>
      {/* <View style={styles.pagerDetails}>
        <AnimatedText
          style={styles.pagerDetailsText}
          text={stringifiedCurrentPage}
        />
        <AnimatedText
          style={styles.pagerDetailsText}
          text={scrollState as SharedValue<string>}
        />
      </View> */}
      <PagerView
        initialPage={0}
        onPageSelected={selectedPageHandler}
        layoutDirection={'rtl'}
        style={styles.pager}>
        {SLIDES.map((slide) => (
          <View
            key={slide.key}
            collapsable={false}
            style={[styles.slide, { backgroundColor: slide.color }]}>
            <Text style={styles.slideText}>{slide.key}</Text>
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "red"
  },
  pager: {
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    height: 200,
    backgroundColor: '#6D8585',
  },
  pagerDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  pagerDetailsText: {
    color: 'black',
    fontSize: 20,
  },
  slide: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  slideText: {
    color: 'white',
    fontSize: 24,
  },
});