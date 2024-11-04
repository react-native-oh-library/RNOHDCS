import {
  Button,
  LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {Canvas, Circle, Fill} from '@shopify/react-native-skia';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withDecay,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Tester, TestCase} from '@rnoh/testerino';
import React from 'react';

export const AnimationWithTouchHandler = () => {
  const {width} = useWindowDimensions();
  const leftBoundary = 0;
  const rightBoundary = width;
  const translateX = useSharedValue(width / 2);

  const gesture = Gesture.Pan()
    .onChange(e => {
      translateX.value += e.changeX;
    })
    .onEnd(e => {
      translateX.value = withDecay({
        velocity: e.velocityX,
        clamp: [leftBoundary, rightBoundary],
      });
    });

  return (
    <View style={{flex: 1}}>
      <GestureDetector gesture={gesture}>
        <View style={styles.viewStyle}>
          <Canvas style={styles.canvasStyle}>
            <Fill color="white" />
            <Circle cx={translateX} cy={40} r={20} color="#3E3E" />
          </Canvas>
        </View>
      </GestureDetector>
    </View>
  );
};

export const ElementTracking = () => {
  const radius = 30;
  // The position of the ball
  const x = useSharedValue(100);
  const y = useSharedValue(100);
  // This style will be applied to the "invisible" animated view
  // that overlays the ball
  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    top: -radius,
    left: -radius,
    width: radius * 2,
    height: radius * 2,
    transform: [{translateX: x.value}, {translateY: y.value}],
  }));
  // The gesture handler for the ball
  const gesture = Gesture.Pan().onChange(e => {
    x.value += e.x;
    y.value += e.y;
  });
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="white" />
        <Circle cx={x} cy={y} r={radius} color="cyan" />
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={style} />
      </GestureDetector>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <GestureHandlerRootView>
        <TestCase itShould="case1: Gesture Detector demo">
          <AnimationWithTouchHandler />
        </TestCase>

        <TestCase itShould="case2: Element Tracking">
          <ElementTracking />
        </TestCase>
      </GestureHandlerRootView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    alignItems: 'center',
  },
  canvasStyle: {
    flex: 1,
    width: 256,
    height: 256,
  },
});
