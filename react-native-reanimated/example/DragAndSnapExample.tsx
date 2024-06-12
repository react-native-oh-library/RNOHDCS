import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
  Extrapolation,
} from '@react-native-oh-tpl/react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView
} from '@react-native-oh-tpl/react-native-gesture-handler';

export default function DragAndSnapExample() {
  const translation = {
    x: useSharedValue(0),
    y: useSharedValue(0),
  };
  type AnimatedGHContext = {
    startX: number;
    startY: number;
  };
  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = translation.x.value;
      ctx.startY = translation.y.value;
    },
    onActive: (event, ctx) => {
      translation.x.value = ctx.startX + event.translationX;
      translation.y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      translation.x.value = withSpring(0);
      translation.y.value = withSpring(0);
    },
  });

  const stylez = useAnimatedStyle(() => {
    const H = Math.round(
      interpolate(translation.x.value, [0, 300], [0, 360], Extrapolation.CLAMP)
    );
    const S = Math.round(
      interpolate(translation.y.value, [0, 500], [100, 50], Extrapolation.CLAMP)
    );
    const backgroundColor = `hsl(${H},${S}%,50%)`;
    return {
      transform: [
        {
          translateX: translation.x.value,
        },
        {
          translateY: translation.y.value,
        },
      ],
      backgroundColor,
    };
  });

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={(e) => {
          const dx = e.nativeEvent.translationX;
          // setTranslateX(160 + dx);
          console.log("sss onGestureEvent:" + dx)
        }} >
          <Animated.View style={[styles.box, stylez]} />
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 50,
    backgroundColor: "white"
  },
  box: {
    width: 60,
    height: 60,
  },
});