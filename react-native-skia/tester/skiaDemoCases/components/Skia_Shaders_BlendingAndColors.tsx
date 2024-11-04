import React from 'react';

import {
  Blend,
  Canvas,
  ColorShader,
  Fill,
  RadialGradient,
  Rect,
  Turbulence,
  vec,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const BlendDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Rect x={0} y={0} width={256} height={256}>
          <Blend mode="difference">
            <RadialGradient
              r={128}
              c={vec(128, 128)}
              colors={['blue', 'yellow']}
            />
            <Turbulence freqX={0.05} freqY={0.05} octaves={4} />
          </Blend>
        </Rect>
      </Canvas>
    </View>
  );
};

export const BlendColorDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <ColorShader color="lightBlue" />
        </Fill>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Blend1: mode='difference'">
          <BlendDemo />
        </TestCase>
        <TestCase itShould="Blend2: color='lightBlue'">
          <BlendColorDemo />
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
