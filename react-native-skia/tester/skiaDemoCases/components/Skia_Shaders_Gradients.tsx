import React, {useEffect} from 'react';

import {
  Canvas,
  Circle,
  LinearGradient,
  RadialGradient,
  Rect,
  SweepGradient,
  TwoPointConicalGradient,
  useCanvasRef,
  vec,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const LinearGradientDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Rect x={0} y={0} width={256} height={256}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(256, 256)}
            colors={['blue', 'yellow']}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export const RadialGradientDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Rect x={0} y={0} width={256} height={256}>
          <RadialGradient
            c={vec(128, 128)}
            r={128}
            colors={['blue', 'yellow']}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export const TwoPointConicalGradientDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Rect x={0} y={0} width={256} height={256}>
          <TwoPointConicalGradient
            start={vec(128, 128)}
            startR={128}
            end={vec(128, 16)}
            endR={16}
            colors={['blue', 'yellow']}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export const SweepGradientDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Rect x={0} y={0} width={256} height={256}>
          <SweepGradient
            c={vec(128, 128)}
            start={40}
            end={300}
            colors={['cyan', 'magenta', 'yellow', 'cyan']}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="LinearGradient: start={vec(0, 0)} end={vec(256, 256)} colors={['blue', 'yellow']}">
          <LinearGradientDemo />
        </TestCase>
        <TestCase itShould="RadialGradient: c={vec(128, 128)} r={128} colors={['blue', 'yellow']}">
          <RadialGradientDemo />
        </TestCase>
        <TestCase itShould="TwoPointConicalGradient: start={vec(128, 128)} startR={128} end={vec(128, 16)} endR={16} colors={['blue', 'yellow']}">
          <TwoPointConicalGradientDemo />
        </TestCase>
        <TestCase itShould="SweepGradient: c={vec(128, 128)} start={40} end={300} colors={['cyan', 'magenta', 'yellow', 'cyan']}">
          <SweepGradientDemo />
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
