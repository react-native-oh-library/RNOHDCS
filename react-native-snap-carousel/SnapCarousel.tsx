import React, { useState, PureComponent } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Switch, Dimensions, Platform } from "react-native";
import Carousel, { getInputRangeFromIndexes, ParallaxImage } from 'react-native-snap-carousel';
import { Tester, TestCase } from '@rnoh/testerino';

const { width: screenWidth } = Dimensions.get('window')

export default function SnapCarousel(): JSX.Element {
  const ENTRIES1 = [
    {
      title: "Beautiful and dramatic Antelope Canyon",
      url: require("./img/2nCt3Sbl.jpg"),
    },
    {
      title: "Earlier this morning, NYC",
      url: require("./img/cA8zoGel.jpg"),
    },
    {
      title: "White Pocket Sunset",
      url: require("./img/KZsmUi2l.jpg"),
    },
    {
      title: "Acrocorinth, Greece",
      url: require("./img/lceHsT6l.jpg"),
    },
    {
      title: "The lone tree, majestic landscape of New Zealand",
      url: require("./img/pewusMzl.jpg"),
    },
    {
      title: "Middle Earth, Germany",
      url: require("./img/UPrs1EWl.jpg"),
    },
  ];

  const ENTRIES2 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://res.vmallres.com/uomcdn/CN/cms/202408/74b9fdbc2f6940cca4494f064d4ab278.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://res.vmallres.com/uomcdn/CN/cms/202408/74b9fdbc2f6940cca4494f064d4ab278.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://res.vmallres.com/uomcdn/CN/cms/202408/74b9fdbc2f6940cca4494f064d4ab278.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://res.vmallres.com/uomcdn/CN/cms/202408/74b9fdbc2f6940cca4494f064d4ab278.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://res.vmallres.com/uomcdn/CN/cms/202408/74b9fdbc2f6940cca4494f064d4ab278.jpg',
    },
  ];

  const _renderItem = ({ item, index }: any) => {
    return (
      <View>
        <Image source={item.url} style={styles.image} />
      </View>
    );
  };
  const _renderItemOther = ({ item, index }: any) => {
    return (
      <View>
        <Image source={item.url} style={styles.imageOther} />
      </View>
    );
  };

  const ParallaxImagerenderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.parallaxImage}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };
  const _scrollInterpolator = (index, carouselProps) => {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const _animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0]
      }),
      transform: [{
        rotate: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
          extrapolate: 'clamp'
        })
      }, {
        [translateProp]: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: [
            -sizeRef * 0.5,
            0,
            -sizeRef, // centered
            -sizeRef * 2, // centered
            -sizeRef * 3 // centered
          ],
          extrapolate: 'clamp'
        })
      }]
    };
  };

  const [colorFalseSwitchIsOn, setColorFalseSwitchIsOn] = useState<boolean>(true);
  const [layoutType, setLayoutType] = useState<boolean>(true);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [enableSnapType, setEnableSnapType] = useState<boolean>(true);
  const [verticalType, setVerticalType] = useState<boolean>(true);
  const [layoutCardOffsetType, setLayoutCardOffsetType] = useState<boolean>(false);
  const [enableMomentumType, setEnableMomentumType] = useState<boolean>(true);
  const [apparitionDelayTime, setApparitionDelayTime] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [beforeIndex, setBeforeIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);

  const showScroll = (e) => {
    setScrollValue(e.timeStamp);

  }
  return (
    <View style={styles.bootstrop}>

      <Tester>
        <ScrollView>
          <TestCase itShould="基础属性 data renderItem sliderWidth：300 sliderHeight：200 itemWidth：100 itemHeight：100">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
            />
          </TestCase>
          <TestCase itShould="基础属性 data renderItem sliderWidth：400 sliderHeight：300 itemWidth：150 itemHeight：150">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItemOther}
              sliderWidth={400}
              itemWidth={150}
              sliderHeight={300}
              itemHeight={150}
            />
          </TestCase>
          <TestCase itShould="onLayout" arrange={({ setState, reset }) => (
            <View>
              <Carousel
                data={ENTRIES1}
                renderItem={_renderItem}
                sliderWidth={300}
                itemWidth={100}
                sliderHeight={200}
                itemHeight={100}
                onLayout={() => { setTimeout(() => { setState(true) }, 3000) }}

              />
            </View>
          )}
            assert={({ state, expect }) => {
              expect(state).to.be.true;
            }}>

          </TestCase>
          <TestCase itShould="loop loopClonesPerSide 无限循环" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    loop={colorFalseSwitchIsOn}
                    loopClonesPerSide={3}

                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setColorFalseSwitchIsOn(value)}
                      value={colorFalseSwitchIsOn} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {`${colorFalseSwitchIsOn}`}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="autoplay自动播放 autoplayDelay启动时启用自动播放之前和释放触摸之后的延迟 2s">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              autoplay={true}
              autoplayDelay={2000}
            />
          </TestCase>
          <TestCase itShould="autoplayInterval 导航至下一个项目所需的延迟 4s">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              autoplay={true}
              autoplayInterval={4000}
            />
          </TestCase>
          <TestCase itShould="layout --- stack tinder" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    layout={layoutType ? 'stack' : 'tinder'}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setLayoutType(value)}
                      value={layoutType} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {layoutType ? 'stack' : 'tinder'}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="layoutCardOffset 用于增加或减少“stack”和“tinder”布局中的默认卡片偏移量" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    layout={'tinder'}
                    layoutCardOffset={layoutCardOffsetType ? 100 : 10}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setLayoutCardOffsetType(value)}
                      value={layoutCardOffsetType} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {layoutCardOffsetType ? '100' : '10'}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="scrollEnabled 禁止轮播" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    scrollEnabled={enabled}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setEnabled(value)}
                      value={enabled} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {`${enabled}`}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="enableSnap 轮播位置" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    enableSnap={enableSnapType}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setEnableSnapType(value)}
                      value={enableSnapType} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {enableSnapType ? '中间' : '非中间'}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="containerCustomStyle 全局包装器的可选样式 背景色#d6c00">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              containerCustomStyle={styles.carouselContainer}
            />
          </TestCase>
          <TestCase itShould="containerCustomStyle 全局包装器的可选样式 背景色#000">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              containerCustomStyle={styles.carouselContainers}
            />
          </TestCase>
          <TestCase itShould="contentContainerCustomStyle 项目容器的可选样式">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              contentContainerCustomStyle={styles.sliderContentContainer}
            />
          </TestCase>
          <TestCase itShould="slideStyle 每个项目容器的可选样式 背景色red">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              slideStyle={styles.carouselContainerSlide}
            />
          </TestCase>
          <TestCase itShould="slideStyle 每个项目容器的可选样式 背景色blue">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              slideStyle={styles.carouselContainerSlides}
            />
          </TestCase>
          <TestCase itShould="scrollInterpolator用于定义自定义插值 slideInterpolatedStyle用于定义自定义插值">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              scrollInterpolator={_scrollInterpolator}
              slideInterpolatedStyle={_animatedStyles}
            />
          </TestCase>
          <TestCase itShould="vertical 轮播图滚动方向" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    vertical={verticalType}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setVerticalType(value)}
                      value={verticalType} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {`${verticalType}`}</Text>
                  </View>
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="useScrollView 是否使用ScrollView组件代替默认FlatList组件 无明显效果" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    useScrollView={true}
                  />
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="inactiveSlideOpacity 透明效果0.2">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              inactiveSlideOpacity={0.2}
            />
          </TestCase>
          <TestCase itShould="inactiveSlideOpacity 透明效果0.5">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              inactiveSlideOpacity={0.5}
            />
          </TestCase>
          <TestCase itShould="inactiveSlideScale 缩放效果0.5">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              inactiveSlideScale={0.5}
            />
          </TestCase>
          <TestCase itShould="inactiveSlideScale 缩放效果0.7">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              inactiveSlideScale={0.7}
            />
          </TestCase>
          <TestCase itShould="inactiveSlideShift轮播效果的偏移量 layout布局为default生效">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              layout={'default'}
              inactiveSlideShift={40}
            />
          </TestCase>
          <TestCase itShould="activeSlideAlignment 轮播图对齐方式 start">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeSlideAlignment={'start'}
            />
          </TestCase>
          <TestCase itShould="activeSlideAlignment 轮播图对齐方式 center">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeSlideAlignment={'center'}
            />
          </TestCase>
          <TestCase itShould="activeSlideAlignment 轮播图对齐方式 end">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeSlideAlignment={'end'}
            />
          </TestCase>
          <TestCase itShould="firstItem 默认要展示的轮播图的索引 2">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              firstItem={2}
            />
          </TestCase>
          {/* ios效果不明显 */}
          <TestCase itShould="enableMomentum 手指滑动轮播的缓冲效果" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    enableMomentum={enableMomentumType}
                  />
                  {/* 只有初始化的值生效 修改的不生效 */}
                  {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                      onValueChange={(value) => setEnableMomentumType(value)}
                      value={enableMomentumType} />
                    <Text style={{ fontSize: 18, color: '#ed6c00' }} > {`${enableMomentumType}`}</Text>
                  </View> */}
                </View>
              )
            }
          }>
          </TestCase>
          <TestCase itShould="activeSlideOffset  从滑块中心滑动距离才可以滚动 ----  50">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeSlideOffset={50}
            />
          </TestCase>
          <TestCase itShould="activeSlideOffset  从滑块中心滑动距离才可以滚动 ----  100">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeSlideOffset={100}
            />
          </TestCase>
          {/* 固定值 只接受初始化值   不建议在Android上使用'apparitionDelay'，因为它可能导致渲染问题*/}
          <TestCase itShould="apparitionDelay   首次加载轮播图的延迟时间">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              apparitionDelay={5000}
            />
          </TestCase>
          <TestCase itShould="shouldOptimizeUpdates：false 是否实施shouldComponentUpdate最小化更新策略 无明显效果">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={300}
              itemHeight={100}
              shouldOptimizeUpdates={false}
            />
          </TestCase>
          <TestCase itShould="shouldOptimizeUpdates：true 是否实施shouldComponentUpdate最小化更新策略 无明显效果">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={300}
              itemHeight={100}
              shouldOptimizeUpdates={true}
            />
          </TestCase>
          <TestCase itShould="swipeThreshold 滑动阈值 以自身为开始点 50">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={300}
              itemHeight={100}
              swipeThreshold={50}
            />
          </TestCase>
          <TestCase itShould="swipeThreshold 滑动阈值 以自身为开始点 100">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={300}
              itemHeight={100}
              swipeThreshold={100}
            />
          </TestCase>
          <TestCase itShould="hasParallaxImages  轮播是否包含<ParallaxImage />组件">
            <Carousel
              data={ENTRIES2}
              renderItem={ParallaxImagerenderItem}
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              hasParallaxImages={true}
            />
          </TestCase>
          <TestCase itShould="lockScrollWhileSnapping lockScrollTimeoutDuration  防止用户在轮播捕捉到某个位置时再次滑动">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              lockScrollWhileSnapping={true}
              lockScrollTimeoutDuration={5000}
            />
          </TestCase>
          <TestCase itShould="activeAnimationType自定义动画类型spring activeAnimationOptions自定义动画">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeAnimationType={'spring'}
              activeAnimationOptions={{
                friction: 4,
                tension: 40
              }}
            />
          </TestCase>
          <TestCase itShould="activeAnimationType自定义动画类型decay activeAnimationOptions自定义动画">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeAnimationType={'decay'}
              activeAnimationOptions={{
                velocity: 0.2,
                deceleration: 0.2,
                isInteraction: false,
                useNativeDriver: true
              }}
            />
          </TestCase>
          <TestCase itShould="activeAnimationType自定义动画类型timing activeAnimationOptions自定义动画">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeAnimationType={'timing'}
              activeAnimationOptions={{
                duration: 2000,
                delay: 1,
                isInteraction: false,
                useNativeDriver: true
              }}
            />
          </TestCase>
          <TestCase itShould="callbackOffsetMargin 增加的小边距 处理滚动不精确的问题 无明显效果">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              callbackOffsetMargin={10}
            />
          </TestCase>
          <TestCase itShould="onScroll">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              onScroll={(e) => { showScroll(e) }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
              <Text> {`正在滚动${scrollValue}`}</Text>
            </View>
1
          </TestCase>
          <TestCase itShould="onSnapToItem" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    onSnapToItem={(index) => { setCurrentIndex(index + 1) }}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
                    <Text> {`当前是第${currentIndex}个`}</Text>
                  </View>
                </View>
              )
            }
          }>

          </TestCase>
          <TestCase itShould="onBeforeSnapToItem" arrange={
            ({ setState }) => {
              return (
                <View>
                  <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={100}
                    sliderHeight={200}
                    itemHeight={100}
                    onSnapToItem={(index) => { setBeforeIndex(index) }}
                  />
                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
                    <Text> {`从第${beforeIndex}个滚动过来的`}</Text>
                  </View>
                </View>
              )
            }
          }>

          </TestCase>
        </ScrollView>
      </Tester >
      {/* <Carousel
        data={ENTRIES1}
        renderItem={_renderItem}
        sliderWidth={300}  //轮播容器宽度
        itemWidth={200}  //轮播项目宽度
        sliderHeight={400} //轮播容器高度
        itemHeight={400}  //轮播项目高度
        loop={false}  // 是否无限循环
        // loopClonesPerSide={3}  //无线循环附加在两侧的克隆
        autoplay={false}  //是否自动播放
        autoplayDelay={1000}  //启动前和结束自动播放的延迟时间
        autoplayInterval={2000}  //自动播放切换轮播的间隔时间
        layout={'tinder'}   //轮播的渲染方式  default  stack  tinder
        scrollEnabled={true}  //禁止轮播 false 禁止轮播
        enableSnap={true}   //每次轮播切换 轮播图的位置是否在中间
        containerCustomStyle={styles.carouselContainer}  //全局包装器的样式
        slideStyle={styles.carouselContainerSlide}  //轮播项目的样式
        // scrollInterpolator={_scrollInterpolator}   //自定义轮播图的播放风格
        // slideInterpolatedStyle={_animatedStyles}   //自定义轮播图的播放风格的样式
        useScrollView={false}   //是否使用ScrollView组件代替默认FlatList组件
        // vertical={true}   // 轮播方式 左右还是上下
        // layoutCardOffset={300}   //用于增加或减少“stack”和“tinder”布局中的默认卡片偏移量
        // inactiveSlideOpacity={0.2}  //轮播图的透明效果
        // inactiveSlideScale={0.5}    //轮播图的缩放效果
        // inactiveSlideShift={40}      // layout 布局为default时候 轮播效果的偏移量
        // activeAnimationType={'spring'}     // 自定义动画类型 decay  spring  timing
        // activeSlideAlignment={'center'}  //确定活动幻灯片相对于旋转木马的对齐方式 
        // firstItem={2}    //要显示的第一个轮播图的索引
        enableMomentum={false} //手指滑动轮播的缓冲效果
        // activeSlideOffset={150} //手指滑动距离 才可以滚动
        // apparitionDelay={1000}   //首次加载轮播图的延迟时间
        hasParallaxImages={false}   //轮播是否包含<ParallaxImage />组件
      // lockScrollWhileSnapping={false}  //轮播滚动时 点击轮播图 动画效果停止
      // lockScrollTimeoutDuration={1000}   //配合lockScrollWhileSnapping  停止滚动时触发一个计时器
      // swipeThreshold={50}    //滑动触发快照时的 Delta x
      // callbackOffsetMargin={100}  
      // onScroll={(res)=>{console.log(res)}}
      // onSnapToItem ={(index)=>{
      //   console.log(index);
      // }}

      /> */}
    </View >
  );
}

const styles = StyleSheet.create({
  bootstrop: {
    flex: 1,
  },
  carouselContainer: {
    backgroundColor: '#ed6c00',
    flex: 1,
  },
  carouselContainers: {
    backgroundColor: '#000',
    flex: 1,
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 100,
    height: 100,
  },
  imageOther: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 150,
    height: 150,
  },
  carouselContainerSlide: {
    backgroundColor: 'red',
  },
  carouselContainerSlides: {
    backgroundColor: 'blue',
  },
  item: {
    width: screenWidth - 100,
    height: screenWidth - 100,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    height: screenWidth - 100,
  },
  parallaxImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: 200,
    height: 200,
  }
});