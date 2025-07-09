import React, {PropsWithChildren} from 'react';
import {
  Animated,
  ImageBackground,
  ImageStyle,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import {NestedScrollViewHeader} from '@react-native-oh-tpl/react-native-nested-scroll';

const NestedScrollViewHeaderAnimated = Animated.createAnimatedComponent(NestedScrollViewHeader);
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

export type ParallaxHeaderProps = {
  imageHeight: number;
  topBarHeight: number;
  onScroll?: (event: any) => void;
  translateYUp: Animated.AnimatedInterpolation<number> | 0;
  translateYDown: Animated.AnimatedInterpolation<number> | 0;
  scale: Animated.AnimatedInterpolation<number> | 1;
  imageStyle?: StyleProp<ImageStyle>;
  imageSource: any;
};

export function ParallaxHeader(props: PropsWithChildren<ParallaxHeaderProps>) {
  const {
    imageHeight,
    topBarHeight,
    translateYUp,
    translateYDown,
    scale,
    imageStyle,
    imageSource,
    onScroll,
    children,
  } = props;

  const width = useWindowDimensions().width;

  return (
    <NestedScrollViewHeaderAnimated stickyHeight={topBarHeight} onScroll={onScroll}>
 
       
        <AnimatedImageBackground
          source={imageSource}
           resizeMode="cover"
          style={[styles.imgContainer2,
            {height: imageHeight, width: width * 1.2, justifyContent: 'center'},
            {
              transform: [{scale: scale}, {translateY: translateYUp}, {translateY: translateYDown}],
            },
          ]}>
              {children}
          
        </AnimatedImageBackground>
    </NestedScrollViewHeaderAnimated>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    // overflow: 'hidden',
  },
  imgContainer2: {
    alignItems: 'center',
    // overflow: 'hidden',
    zIndex: 0,
  },
 
});
