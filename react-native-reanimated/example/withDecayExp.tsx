import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withDecay
} from '@react-native-oh-tpl/react-native-reanimated';
import { View, Button, StyleSheet, LayoutChangeEvent, Text } from 'react-native';
import React from 'react';

const withDecayExp = () => {
  const offsetWith = useSharedValue<number>(20);
  const randomWidth = useSharedValue(120);
  const width = useSharedValue<number>(0);

  const config = {
    duration: 500,
    easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  };

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };

  const animatedStylesWidthDeley = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
    transform: [{ translateX: offsetWith.value }],
  }));

  const startAnimation = () => {
    offsetWith.value = withDecay({
      velocity: 0.2,
      rubberBandEffect: true,
      clamp: [-(width.value / 2) + 120 / 2, width.value / 2 - 120 / 2],
    });
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStylesWidthDeley]} />
      <Button title="Start animation" onPress={startAnimation} />
    </View>
  );
}
const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: '100%',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 50,
    marginRight: 80,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default withDecayExp;