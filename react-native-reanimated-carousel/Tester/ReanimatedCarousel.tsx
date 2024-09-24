import React, { useState, useRef, useCallback } from 'react';
import { View, Text, Button, Dimensions, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  useSharedValue,
  withTiming,
  WithSpringConfig,
  WithTimingConfig,
  interpolate,
  AnimatedStyleProp
} from "react-native-reanimated";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";

interface WithSpringAnimation {
  type: "spring"
  config: WithSpringConfig
}
interface WithTimingAnimation {
  type: "timing"
  config: WithTimingConfig
}

type WithAnimation = WithSpringAnimation | WithTimingAnimation;

type TAnimationStyle = (value: number) => AnimatedStyleProp<ViewStyle>;

const WINDOW_INFOR = Dimensions.get('window');
const PAGE_HEIGHT = WINDOW_INFOR.height;
const PAGE_WIDTH = WINDOW_INFOR.width;

export function ReanimatedCarouselExample() {
  const ref = useRef<ICarouselInstance>(null);
  const [datum, setData] = useState([...new Array(4).keys()]);
  const scrollOffsetValue = useSharedValue<number>(0);
  const [autoFillData, setAutoFillData] = useState(true);
  const [isVertical, setIsVertical] = useState(false);
  const [viewWidth, setViewWidth] = useState(PAGE_WIDTH);
  const [viewHeight, setViewHeight] = useState(PAGE_HEIGHT / 3);
  const [mode, setMode] = useState<"parallax" | "horizontal-stack" | "vertical-stack" | undefined>(undefined);
  const [modeConfig, setModeConfig] = useState<object | undefined>(undefined);
  const [styleOpcity, setStyleOpcity] = useState(1);
  const [defaultIndex, setDefaultIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = useState(false);
  const [autoPlayInt, setAutoPlayInt] = useState(1000);
  const [scrollAnimationDuration, setScrollAnimationDuration] = useState(500);
  const [isLoop, setIsLoop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollBegin, setScrollBegin] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(0);
  const [withAnimationObj, setWithAnimationObj] = useState<WithAnimation | undefined>(undefined);
  const [panGestureMinPointers, setPanGestureMinPointers] = useState(1);
  const [windowSize, setWindowSize] = useState(0);
  const [progressChange, setProgressChange] = useState(0);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const [overscrollEnabled, setOverscrollEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [customConfig, setCustomConfig] = useState({});
  const [maxScrollDistance, setMaxScrollDistance] = useState<number | undefined>(undefined);
  const [currentIndexData, setCurrentIndexData] = useState(0);
  const [scrollToStr, setScrollToStr] = useState('start scrollTo');

  const animationStyle: TAnimationStyle = useCallback((value: number) => {
    'worklet';
    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);
    return { transform: [{ scale }], zIndex, opacity };
  }, []);

  const animationStyle2: TAnimationStyle = React.useCallback((value: number) => {
    'worklet';
    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-PAGE_WIDTH * 0.5, 0, PAGE_WIDTH]
    );

    return {
      transform: [{ translateX }],
      zIndex,
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        data={datum}
        defaultScrollOffsetValue={scrollOffsetValue}
        autoFillData={autoFillData}
        vertical={isVertical}
        width={viewWidth}
        height={viewHeight}
        mode={mode}
        modeConfig={modeConfig}
        style={{ opacity: styleOpcity }}
        defaultIndex={defaultIndex}
        autoPlay={isAutoPlay}
        autoPlayReverse={autoPlayReverse}
        autoPlayInterval={autoPlayInt}
        scrollAnimationDuration={scrollAnimationDuration}
        loop={isLoop}
        testID={"xxx"}
        onSnapToItem={index => setActiveIndex(index)}
        onScrollBegin={() => { setScrollBegin(Math.random) }}
        onScrollEnd={() => { setScrollEnd(Math.random) }}
        withAnimation={withAnimationObj}
        panGestureHandlerProps={{ minPointers: panGestureMinPointers }}
        windowSize={windowSize}
        onProgressChange={(offsetProgress, absoluteProgress) => {
          !absoluteProgress.toString().includes('.') && setProgressChange(absoluteProgress)
        }}
        pagingEnabled={isPagingEnabled}
        overscrollEnabled={overscrollEnabled}
        snapEnabled={snapEnabled}
        enabled={enabled}
        customConfig={() => (customConfig)}
        maxScrollDistancePerSwipe={maxScrollDistance}
        renderItem={({ index }) => {
          const colorArr = ['white', 'yellow', 'red', 'orange', 'white', 'yellow', 'red', 'orange'];
          return (<View
            key={index}
            style={{
              ...styles.swiperView,
              width: PAGE_WIDTH,
              height: PAGE_HEIGHT / 3
            }}
          >
            <Text style={{ fontSize: 30, color: colorArr[index] }}>{`slide${index + 1}`}</Text>
          </View>)
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <Tester>
          <TestSuite name='reanimated-carousel'>
            <TestCase itShould="BasicProps-Data, Change the data length">
              <View style={styles.optView}>
                <Button
                  title="Add Data Length"
                  onPress={() => setData([...new Array(datum.length + 1).keys()])}
                />
                <Button
                  title="Subtract Data Length"
                  onPress={() => {
                    const len = datum.length > 0 ? datum.length - 1 : datum.length;
                    setData([...new Array(len).keys()]);
                  }}
                />
              </View>
              <View>
                <Text>current data length: {datum.length}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-defaultScrollOffsetValue">
              <View style={styles.optView}>
                <Button
                  title="offsetValue 0"
                  onPress={() => scrollOffsetValue.value = withTiming(0)}
                />
                <Button
                  title="offsetValue 300"
                  onPress={() => scrollOffsetValue.value = withTiming(300)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-autoFillData">
              <View style={styles.optView}>
                <Button
                  title={`toggle autoFillData: ${autoFillData}`}
                  onPress={() => setAutoFillData(!autoFillData)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-vertical">
              <View style={styles.optView}>
                <Button
                  title={isVertical ? "set to horizontal" : "set to Vertical"}
                  onPress={() => {
                    setIsVertical(!isVertical);
                    setAutoPlayInt
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-width">
              <View style={styles.optView}>
                <Button
                  title='full screen width'
                  onPress={() => setViewWidth(PAGE_WIDTH)}
                />
                <Button
                  title='half screen width'
                  onPress={() => setViewWidth(PAGE_WIDTH / 2)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-height">
              <View style={styles.optView}>
                <Button
                  title="PAGE_HEIGHT / 3"
                  onPress={() => setViewHeight(PAGE_HEIGHT / 3)}
                />
                <Button
                  title="PAGE_HEIGHT / 4"
                  onPress={() => setViewHeight(PAGE_HEIGHT / 4)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-style opacity">
              <View style={styles.optView}>
                <Button
                  title="opacity 1"
                  onPress={() => { setStyleOpcity(1) }}
                />
                <Button
                  title="opacity 0.7"
                  onPress={() => { setStyleOpcity(0.7) }}
                />
                <Button
                  title="opacity 0.4"
                  onPress={() => { setStyleOpcity(0.4) }}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-defaultIndex">
              <View style={styles.optView}>
                <Button
                  title="default 0"
                  onPress={() => { setDefaultIndex(0) }}
                />
                <Button
                  title="default 1"
                  onPress={() => { setDefaultIndex(1) }}
                />
                <Button
                  title="default 2"
                  onPress={() => { setDefaultIndex(2) }}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-autoplay">
              <View style={styles.optView}>
                <Button
                  title={`autoPlay: ${isAutoPlay}`}
                  onPress={() => setIsAutoPlay(!isAutoPlay)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-autoPlayReverse">
              <View style={styles.optView}>
                <Button
                  title={`autoPlayReverse: ${autoPlayReverse}`}
                  onPress={() => setAutoPlayReverse(!autoPlayReverse)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-autoplayinterval">
              <View style={styles.optView}>
                <Button
                  title="Add Interval"
                  onPress={() => setAutoPlayInt(autoPlayInt + 200)}
                />
                <Button
                  title="Subtract Interval"
                  onPress={() => {
                    const interval = autoPlayInt <= 200 ? autoPlayInt : autoPlayInt - 200;
                    setAutoPlayInt(interval);
                  }}
                />
              </View>
              <View>
                <Text>current autoplay interval: {autoPlayInt}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-scrollAnimationDuration">
              <View style={styles.optView}>
                <Button
                  title="Add duration"
                  onPress={() => setScrollAnimationDuration(scrollAnimationDuration + 200)}
                />
                <Button
                  title="Subtract duration"
                  onPress={() => {
                    const interval = scrollAnimationDuration <= 200 ? scrollAnimationDuration : scrollAnimationDuration - 200;
                    setScrollAnimationDuration(interval);
                  }}
                />
              </View>
              <View>
                <Text>current scrollAnimationDuration: {scrollAnimationDuration}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-loop">
              <View style={styles.optView}>
                <Button
                  title={`loop: ${isLoop}`}
                  onPress={() => setIsLoop(!isLoop)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-onSnapToItem">
              <View style={styles.optView}>
                <Text style={styles.fs16}>{`onSnapToItem activeIndex ${activeIndex}`}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-onScrollBegin">
              <View style={styles.optView}>
                <Text style={styles.fs16}>{`onScrollBegin ${scrollBegin}`}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-onScrollEnd">
              <View style={styles.optView}>
                <Text style={styles.fs16}>{`onScrollEnd ${scrollEnd}`}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-withAnimation">
              <View style={styles.optView}>
                <Button
                  title="default"
                  onPress={() => {
                    setWithAnimationObj(undefined)
                  }}
                />
                <Button
                  title="type spring"
                  onPress={() => {
                    setWithAnimationObj({
                      type: 'spring',
                      config: { duration: 200 }
                    })
                  }}
                />
                <Button
                  title="type timing"
                  onPress={() => {
                    setWithAnimationObj({
                      type: 'timing',
                      config: { duration: 200 }
                    })
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-panGestureHandlerProps">
              <View style={styles.optView}>
                <Button
                  title='minPointers 1'
                  onPress={() => setPanGestureMinPointers(1)}
                />
                <Button
                  title='minPointers 2'
                  onPress={() => setPanGestureMinPointers(2)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-windowSize">
              <View style={styles.optView}>
                <Button
                  title='windowSize0'
                  onPress={() => setWindowSize(0)}
                />
                <Button
                  title='windowSize1'
                  onPress={() => setWindowSize(1)}
                />
                <Button
                  title='windowSize2'
                  onPress={() => setWindowSize(2)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-progressChange">
              <View style={styles.optView}>
                <Text style={styles.fs16}>{`progressChange ${progressChange}`}</Text>
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-pagingEnabled">
              <View style={styles.optView}>
                <Button
                  title={`pagingEnabled: ${isPagingEnabled}`}
                  onPress={() => setIsPagingEnabled(!isPagingEnabled)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-overscrollEnabled">
              <View style={styles.optView}>
                <Button
                  title={`overscrollEnabled: ${overscrollEnabled}`}
                  onPress={() => setOverscrollEnabled(!overscrollEnabled)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-snapEnabled">
              <View style={styles.optView}>
                <Button
                  title={`snapEnabled: ${snapEnabled}`}
                  onPress={() => setSnapEnabled(!snapEnabled)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-enabled">
              <View style={styles.optView}>
                <Button
                  title={`enabled: ${enabled}`}
                  onPress={() => setEnabled(!enabled)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-customConfig">
              <View style={styles.optView}>
                <Button
                  title={`def`}
                  onPress={() => setCustomConfig({})}
                />
                <Button
                  title="negative"
                  onPress={() => setCustomConfig({
                    type: "negative",
                    viewCount: 1
                  })}
                />
                <Button
                  title="positive"
                  onPress={() => setCustomConfig({
                    type: "positive",
                    viewCount: 1
                  })}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-customAnimation">
              <View style={styles.optView}>
                <Carousel
                  data={datum}
                  width={300}
                  height={200}
                  style={{
                    width: 340,
                    height: 240,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  loop
                  customAnimation={animationStyle}
                  renderItem={({ index }) => {
                    const colorArr = ['white', 'yellow', 'red', 'orange', 'white', 'yellow', 'red', 'orange'];
                    return (<View
                      key={index}
                      style={{ ...styles.swiperView, width: 300, height: 200 }}
                    >
                      <Text style={{ fontSize: 30, color: colorArr[index] }}>{`slide${index + 1}`}</Text>
                    </View>)
                  }}
                />

              </View>
              <View>
                <Carousel
                  data={datum}
                  width={300}
                  height={200}
                  style={{
                    width: 340,
                    height: 240,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  customAnimation={animationStyle2}
                  renderItem={({ index }) => {
                    const colorArr = ['white', 'yellow', 'red', 'orange', 'white', 'yellow', 'red', 'orange'];
                    return (<View
                      key={index}
                      style={{ ...styles.swiperView, width: 300, height: 200 }}
                    >
                      <Text style={{ fontSize: 30, color: colorArr[index] }}>{`slide${index + 1}`}</Text>
                    </View>)
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-maxScrollDistancePerSwipe">
              <View style={styles.optView}>
                <Button
                  title="default"
                  onPress={() => setMaxScrollDistance(undefined)}
                />
                <Button
                  title="max 1"
                  onPress={() => setMaxScrollDistance(PAGE_WIDTH)}
                />
                <Button
                  title="max 2"
                  onPress={() => setMaxScrollDistance(PAGE_WIDTH * 2)}
                />
              </View>
            </TestCase>
            <TestCase itShould="BasicProps-mode">
              <View style={styles.optView}>
                <Button
                  title="def"
                  onPress={() => {
                    setMode(undefined);
                  }}
                />
                <Button
                  title="parallax"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({
                      parallaxScrollingScale: 0.8,
                      parallaxScrollingOffset: 50,
                      parallaxAdjacentItemScale: 0.8
                    });
                  }}
                />
                <Button
                  title="horizontal-stack"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({
                      moveSize: 200,
                      stackInterval: 30,
                      scaleInterval: 0.08,
                      rotateZDeg: 135,
                      snapDirection: 'left'
                    });
                  }}
                />
                <Button
                  title="vertical-stack"
                  onPress={() => {
                    setMode('vertical-stack');
                    setModeConfig({
                      moveSize: 200,
                      stackInterval: 30,
                      scaleInterval: 0.08,
                      rotateZDeg: 135,
                      snapDirection: 'left'
                    });
                  }}
                />
              </View>
            </TestCase>
            {/* modeconfig */}
            <TestCase itShould="Parallax Mode-parallaxScrollingOffset">
              <View style={styles.optView}>
                <Button
                  title="100"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingOffset: 100 });
                  }}
                />
                <Button
                  title="150"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingOffset: 150 });
                  }}
                />
                <Button
                  title="200"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingOffset: 200 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Parallax Mode-parallaxScrollingScale">
              <View style={styles.optView}>
                <Button
                  title="0.5"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingScale: 0.5 });
                  }}
                />
                <Button
                  title="1"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingScale: 1 });
                  }}
                />
                <Button
                  title="3"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxScrollingScale: 3 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Parallax Mode-parallaxAdjacentItemScale">
              <View style={styles.optView}>
                <Button
                  title="1"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxAdjacentItemScale: 1 });
                  }}
                />
                <Button
                  title="2"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxAdjacentItemScale: 2 });
                  }}
                />
                <Button
                  title="3"
                  onPress={() => {
                    setMode('parallax');
                    setModeConfig({ parallaxAdjacentItemScale: 3 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-showLength">
              <View style={styles.optView}>
                <Button
                  title="2"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ showLength: 2 });
                  }}
                />
                <Button
                  title="3"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ showLength: 3 });
                  }}
                />
                <Button
                  title='4'
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ showLength: 4 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-moveSize">
              <View style={styles.optView}>
                <Button
                  title="100"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ moveSize: 100 });
                  }}
                />
                <Button
                  title="200"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ moveSize: 200 });
                  }}
                />
                <Button
                  title={`${PAGE_WIDTH}`}
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ moveSize: PAGE_WIDTH });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-stackInterval">
              <View style={styles.optView}>
                <Button
                  title="18"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ stackInterval: 18 });
                  }}
                />
                <Button
                  title="36"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ stackInterval: 36 });
                  }}
                />
                <Button
                  title="72"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ stackInterval: 72 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-scaleInterval">
              <View style={styles.optView}>
                <Button
                  title="0.08"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ scaleInterval: 0.08 });
                  }}
                />
                <Button
                  title="0.8"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ scaleInterval: 0.8 });
                  }}
                />
                <Button
                  title="1"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ scaleInterval: 1 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-opacityInterval">
              <View style={styles.optView}>
                <Button
                  title="0.1"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ opacityInterval: 0.1 });
                  }}
                />
                <Button
                  title="0.3"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ opacityInterval: 0.3 });
                  }}
                />
                <Button
                  title="0.7"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ opacityInterval: 0.7 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-rotateZDeg">
              <View style={styles.optView}>
                <Button
                  title="30"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ rotateZDeg: 30 });
                  }}
                />
                <Button
                  title="90"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ rotateZDeg: 90 });
                  }}
                />
                <Button
                  title="150"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ rotateZDeg: 150 });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="Stack Mode-snapDirection">
              <View style={styles.optView}>
                <Button
                  title="left"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ snapDirection: 'left' });
                  }}
                />
                <Button
                  title="right"
                  onPress={() => {
                    setMode('horizontal-stack');
                    setModeConfig({ snapDirection: 'right' });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="ref prev()">
              <View style={styles.optView}>
                <Button
                  title="prev1"
                  onPress={() => {
                    ref.current?.prev({ count: 1, animated: true });
                  }}
                />
                <Button
                  title="prev2"
                  onPress={() => {
                    ref.current?.prev({ count: 2, animated: true });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="ref next()">
              <View style={styles.optView}>
                <Button
                  title="next1"
                  onPress={() => {
                    ref.current?.next({ count: 1, animated: true });
                  }}
                />
                <Button
                  title="next2"
                  onPress={() => {
                    ref.current?.next({ count: 2, animated: true });
                  }}
                />
              </View>
            </TestCase>
            <TestCase itShould="ref scrollTo()">
              <View style={styles.optView}>
                <Button
                  title="prev"
                  onPress={() => {
                    ref.current?.scrollTo({
                      count: -1, animated: true, onFinished: () => setScrollToStr('scrollTo prev finished')
                    });
                  }}
                />
                <Button
                  title="next"
                  onPress={() => {
                    ref.current?.scrollTo({
                      count: 1, animated: true, onFinished: () => setScrollToStr('scrollTo next finished')
                    });
                  }}
                />
                <Button
                  title="next2"
                  onPress={() => {
                    ref.current?.scrollTo({ count: 2, animated: true });
                  }}
                />
                <Button
                  title="next2 animated=false"
                  onPress={() => {
                    ref.current?.scrollTo({ count: 2, animated: false });
                  }}
                />
              </View>
              <View>
                <Text>{scrollToStr}</Text>
              </View>
            </TestCase>
            <TestCase itShould="ref getCurrentIndex()">
              <View style={styles.optView}>
                <Button
                  title="getCurrentIndex()"
                  onPress={() => {
                    setCurrentIndexData(ref.current?.getCurrentIndex() || 0)
                  }}
                />
                <Text>current index: {currentIndexData}</Text>
              </View>
            </TestCase>
            <Text>Empty</Text>
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperView: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center"
  },
  optView: {
    flexDirection: 'row',
    gap: 10,
    padding: 5
  },
  fs16: {
    fontSize: 16
  }

})
