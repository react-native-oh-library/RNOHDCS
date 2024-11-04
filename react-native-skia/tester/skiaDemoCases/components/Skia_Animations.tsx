import {useEffect} from 'react';
import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Fill,
  // Use this function instead of interpolateColor from Reanimated
  interpolateColors,
  vec,
} from '@shopify/react-native-skia';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {ScrollView, StyleSheet, View, useWindowDimensions} from 'react-native';
import {TestCase, Tester} from '@rnoh/testerino';

export const HelloWorld = () => {
  const size = 256;
  const r = useSharedValue(0);
  const c = useDerivedValue(() => size - r.value);
  useEffect(() => {
    r.value = withRepeat(withTiming(size * 0.33, {duration: 1000}), -1);
  }, [r, size]);
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={c} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={c} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
};

const startColors = [
  'rgba(34, 193, 195, 0.4)',
  'rgba(34,193,195,0.4)',
  'rgba(63,94,251,1)',
  'rgba(253,29,29,0.4)',
];
const endColors = [
  'rgba(0,212,255,0.4)',
  'rgba(253,187,45,0.4)',
  'rgba(252,70,107,1)',
  'rgba(252,176,69,0.4)',
];

export const AnimatedGradient = () => {
  const {width, height} = useWindowDimensions();
  const colorsIndex = useSharedValue(0);
  useEffect(() => {
    colorsIndex.value = withRepeat(
      withTiming(startColors.length - 1, {
        duration: 4000,
      }),
      -1,
      true,
    );
  }, []);
  const gradientColors = useDerivedValue(() => {
    return [
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], startColors),
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], endColors),
    ];
  });
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={gradientColors}
          />
        </Fill>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="case1: simply pass the Reanimated values directly as properties">
          <HelloWorld />
        </TestCase>
        <TestCase itShould="case2: Animated Gradient">
          <AnimatedGradient />
        </TestCase>
      </ScrollView>
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
