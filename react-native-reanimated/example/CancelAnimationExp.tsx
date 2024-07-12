import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withRepeat,
  cancelAnimation,
} from '@react-native-oh-tpl/react-native-reanimated';
import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const CancelAnimationExp = () => {
  const offset = useSharedValue<number>(120);
  const randomWidth = useSharedValue(50);
  const width = useSharedValue<number>(0);

  const config = {
    duration: 500,
    easing: Easing.bezierFn(0.5, 0.01, 0, 1),
  };


  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(randomWidth.value, config),
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

  const handleCancelAnimation = () => {
    cancelAnimation(offset);
  };



  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.row}>
        <Button title="Cancel animation" onPress={handleCancelAnimation} />
        <Button title="Start animation" onPress={startAnimation} />
      </View>
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
    width: '100%',
    flexDirection: "column",
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

export default CancelAnimationExp;