import React, {Component} from 'react';

import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  Fill,
  useImage,
  Image,
  ImageSVG,
  useSVG,
  useFont,
  useFonts,
  Skia,
  vec,
  Circle,
  Paint,
  Group,
  LinearGradient,
  Mask,
  Rect,
} from '@shopify/react-native-skia';

import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const AlphaMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Mask
          clip={false}
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} />
            </Group>
          }>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Mask>
      </Canvas>
    </View>
  );
};

export const AlphaMaskDemoWithClip = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Mask
          clip={true}
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} />
            </Group>
          }>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Mask>
      </Canvas>
    </View>
  );
};

export const LuminanceMaskDemo = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} color="white" />
              <Circle cx={128} cy={128} r={64} color="black" />
            </Group>
          }>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Mask>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Mask1: clip={false}
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} />
            </Group>
          } children">
          <AlphaMaskDemo />
        </TestCase>
        <TestCase
          itShould="Mask2: clip={true}
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} />
            </Group>
          } children">
          <AlphaMaskDemoWithClip />
        </TestCase>
        <TestCase
          itShould="Mask3: mode='luminance'
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} color='white' />
              <Circle cx={128} cy={128} r={64} color='black' />
            </Group>
          } children">
          <LuminanceMaskDemo />
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
