import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withRepeat,
  useDerivedValue
} from '@react-native-oh-tpl/react-native-reanimated';
import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const useDerivedValueExp = () => {
  const offset = useSharedValue<number>(120);
  const randomWidth = useSharedValue(50);
  const scale = useSharedValue<number>(1);
  const width = useSharedValue<number>(0);

  const config = {
    duration: 500,
    easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  };



  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });

  const scaleStyles = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
    transform: [{ scale: scale.value }],
  }));

  const rotateStyles = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
    transform: [{ rotate: rotate.value }],
  }));

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, scaleStyles]} />
      <Animated.View style={[styles.box, rotateStyles]} />
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

export default useDerivedValueExp;