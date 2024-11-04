import React, {Component} from 'react';

import {Canvas, vec, Circle, BlurMask} from '@shopify/react-native-skia';

import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const BlurMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle c={vec(128)} r={128} color="lightblue">
          <BlurMask blur={20} style="normal" />
        </Circle>
      </Canvas>
    </View>
  );
};

export const BlurSolidMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle c={vec(128)} r={128} color="lightblue">
          <BlurMask blur={22} style="solid" />
        </Circle>
      </Canvas>
    </View>
  );
};

export const BlurInnerMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle c={vec(128)} r={128} color="lightblue">
          <BlurMask blur={24} style="inner" />
        </Circle>
      </Canvas>
    </View>
  );
};

export const BlurOuterMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle c={vec(128)} r={128} color="lightblue">
          <BlurMask blur={26} style="outer" />
        </Circle>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="BlurMask1: blur={20} style='normal'">
          <BlurMaskDemo />
        </TestCase>
        <TestCase itShould="BlurMask2: blur={22} style='solid'">
          <BlurSolidMaskDemo />
        </TestCase>
        <TestCase itShould="BlurMask3: blur={24} style='inner'">
          <BlurInnerMaskDemo />
        </TestCase>
        <TestCase itShould="BlurMask4: blur={26} style='outer'">
          <BlurOuterMaskDemo />
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
