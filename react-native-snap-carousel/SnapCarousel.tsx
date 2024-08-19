import React, { useState, PureComponent } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Switch, Dimensions, Platform } from "react-native";
import Carousel, { getInputRangeFromIndexes, ParallaxImage } from 'react-native-snap-carousel';
import { Tester, TestCase } from '@rnoh/testerino';

const { width: screenWidth } = Dimensions.get('window')

export function SnapCarousel(){
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
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const _renderItem = ({ item, index }: any) => {
    return (
      <View>
        <Image source={item.url} style={styles.image} />
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


  return (
    <View style={styles.bootstrop}>

      <Tester>
        <ScrollView>
          <TestCase itShould="基础属性 data renderItem sliderWidth sliderHeight itemWidth itemHeight">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
            />
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
          <TestCase itShould="autoplay autoplayDelay 自动播放">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              autoplay={true}
              autoplayDelay={1000}
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
          <TestCase itShould="layout 偏移量" arrange={
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
          <TestCase itShould="containerCustomStyle">
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
          <TestCase itShould="slideStyle">
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
          <TestCase itShould="scrollInterpolator slideInterpolatedStyle">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              scrollInterpolator={_scrollInterpolator}
              slideInterpolatedStyle={_animatedStyles}
              useScrollView={true}
            />
          </TestCase>
          <TestCase itShould="vertical useScrollView" arrange={
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
                    vertical={verticalType}  // vertical = true  要配合useScrollView一起使用
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
          <TestCase itShould="inactiveSlideOpacity 透明效果">
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
          <TestCase itShould="inactiveSlideScale 缩放效果">
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
          <TestCase itShould="layout 布局为default时候 轮播效果的偏移量">
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
          <TestCase itShould="activeSlideAlignment 轮播图对齐方式">
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
          <TestCase itShould="firstItem 默认要展示的轮播图的索引">
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
          <TestCase itShould="enableMomentum //手指滑动轮播的缓冲效果" arrange={
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
          <TestCase itShould="activeSlideOffset  从滑块中心滑动距离 才可以滚动">
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
          <TestCase itShould="swipeThreshold 滑动阈值 以自身为开始点">
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
          <TestCase itShould="lockScrollWhileSnapping lockScrollTimeoutDuration  快速滚动 边缘值 禁止滚动 禁止滚动时长取 lockScrollTimeoutDuration">
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
          {/* ios效果不明显 */}
          <TestCase itShould="activeAnimationType 自定义动画">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeAnimationType={'decay'}
              activeAnimationOptions={null}
            />
          </TestCase>
          {/* 没效果 */}
          <TestCase itShould="activeAnimationOptions 自定义动画">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              activeAnimationOptions={null}
            />
          </TestCase>
          <TestCase itShould="callbackOffsetMargin  events  onScroll">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              onScroll={() => { }}
            />
          </TestCase>
          <TestCase itShould="events onSnapToItem" arrange={
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
          <TestCase itShould="events onBeforeSnapToItem" arrange={
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
          <TestCase itShould="events onLayout">
            <Carousel
              data={ENTRIES1}
              renderItem={_renderItem}
              sliderWidth={300}
              itemWidth={100}
              sliderHeight={200}
              itemHeight={100}
              onLayout={() => { console.log('------onLayout-----') }}
            />
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
    // width: '100%',
    // marginBottom: 20,
    backgroundColor: '#ed6c00',
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 100,
    height: 100,
  },
  carouselContainerSlide: {
    backgroundColor: 'red',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  parallaxImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  }
});