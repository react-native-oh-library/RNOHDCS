import React from 'react';

import {
  Canvas,
  Fill,
  FractalNoise,
  Rect,
  Turbulence,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const FractalNoiseDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="white" />
        <Rect x={0} y={0} width={256} height={256}>
          <FractalNoise
            seed={10}
            freqX={0.05}
            freqY={0.05}
            octaves={4}
            tileWidth={10}
            tileHeight={5}
          />
        </Rect>
      </Canvas>
    </View>
  );
};

export const TurbulenceNoiseDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="white" />
        <Rect x={0} y={0} width={256} height={256}>
          <Turbulence
            seed={1}
            freqX={0.05}
            freqY={0.05}
            octaves={4}
            tileWidth={50}
            tileHeight={1}
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
        <TestCase itShould="FractalNoise: seed={10} freqX={0.05} freqY={0.05} octaves={4} tileWidth={10} tileHeight={5}">
          <FractalNoiseDemo />
        </TestCase>
        <TestCase itShould="Turbulence: seed={1} freqX={0.05} freqY={0.05} octaves={4} tileWidth={50} tileHeight={1}">
          <TurbulenceNoiseDemo />
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
