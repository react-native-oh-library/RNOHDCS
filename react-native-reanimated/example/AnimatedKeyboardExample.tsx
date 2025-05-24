import React from 'react';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  Easing,
  withRepeat
} from '@react-native-oh-tpl/react-native-reanimated';
import { StyleSheet, TextInput, View, useColorScheme } from 'react-native';

export default function AnimatedKeyboardExample() {
  const colorScheme = useColorScheme();
  const keyboard = useAnimatedKeyboard();
  const randomWidth = useSharedValue(50);
  const offset = useSharedValue<number>(100);
  const config = {
    duration: 500,
    easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));
  const animatedStylesOffset = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));
  const startAnimation = () => {
    offset.value = withRepeat(
      withTiming(offset.value > 0 ? 0 : 120, { duration: 1500 }),
      -1,
      true
    );
  };

  React.useEffect(() => {
    startAnimation();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        { backgroundColor: colorScheme === 'light' ? '#fff' : '#000' },
      ]}>
       <Animated.View style={[styles.box_a, animatedStylesOffset]} />
      <View style={styles.box}>
        <TextInput placeholder="Text Input" />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#782aeb',
    borderRadius: 2,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#b58df1',
    borderRadius: 5,
    margin: 20,
  },
  box_a: {
    height: 50,
    width: 50,
    backgroundColor: '#00ff00',
    borderRadius: 20,
  },
});