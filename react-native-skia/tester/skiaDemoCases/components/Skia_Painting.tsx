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
} from '@shopify/react-native-skia';

import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const width = 256;
const height = 256;

export const FillsAndStrokesDemo = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle c={c} r={r} color="red">
          <Paint color="lightblue" />
          <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Canvas>
    </View>
  );
};

export const InheritanceDemo = () => {
  const r = width / 6;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group color="lightblue">
          <Circle cx={r} cy={r} r={r} />
          <Group style="stroke" strokeWidth={10}>
            <Circle cx={3 * r} cy={3 * r} r={r} />
          </Group>
        </Group>
      </Canvas>
    </View>
  );
};

export const PaintDemo = () => {
  const r = width / 6;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle cx={r} cy={r} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={['#00ff87', '#60efff']}
          />
        </Circle>
        <Group>
          <LinearGradient
            start={vec(2 * r, 2 * r)}
            end={vec(4 * r, 4 * r)}
            colors={['#0061ff', '#60efff']}
          />
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Canvas>
    </View>
  );
};

export const ManualPaintDemo = () => {
  const r = width / 2;
  const paint = Skia.Paint();
  paint.setColor(Skia.Color('lightblue'));
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle paint={paint} cx={r} cy={r} r={r} />
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Canvas、Circle、Paint: color='#adbce6' style='stroke' strokeWidth={strokeWidth} ">
          <FillsAndStrokesDemo />
        </TestCase>
        <TestCase itShould="Canvas、Group、Circle: style='stroke' strokeWidth={10}">
          <InheritanceDemo />
        </TestCase>
        <TestCase itShould="Canvas、Group、Circle、LinearGradient: Complex painting attributes like a shader or an image filter can be passed as children to a group or a drawing.">
          <PaintDemo />
        </TestCase>
        <TestCase itShould="Canvas、Circle: paint={paint}">
          <ManualPaintDemo />
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
