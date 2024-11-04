import React, {useState, useEffect} from 'react';
import {
  Canvas,
  ColorMatrix,
  Image,
  useImage,
  BlendColor,
  Group,
  Circle,
  Lerp,
  LinearToSRGBGamma,
  SRGBToLinearGamma,
} from '@shopify/react-native-skia';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const ColorMatrixDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <ColorMatrix
            matrix={[
              -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
            ]}></ColorMatrix>
        </Image>
      </Canvas>
    </View>
  );
};

export const ColorMatrixChildrenDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <ColorMatrix
            matrix={[
              -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
            ]}>
            <ColorMatrix
              matrix={[
                -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
                1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
              ]}
            />
          </ColorMatrix>
        </Image>
      </Canvas>
    </View>
  );
};

export const BlendColorDemo = () => {
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group>
          <BlendColor color="cyan" mode="multiply" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="magenta" />
        </Group>
      </Canvas>
    </View>
  );
};

export const BlendColorChildrenDemo = () => {
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group>
          <BlendColor color="cyan" mode="multiply">
            <ColorMatrix
              matrix={[
                -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
                1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
              ]}
            />
          </BlendColor>
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="magenta" />
        </Group>
      </Canvas>
    </View>
  );
};

export const LerpDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  const blackAndWhite = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
  ];
  const purple = [
    1, -0.2, 0, 0, 0, 0, 1, 0, -0.1, 0, 0, 1.2, 1, 0.1, 0, 0, 0, 1.7, 1, 0,
  ];

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <Lerp t={0.5}>
            <ColorMatrix matrix={purple} />
            <ColorMatrix matrix={blackAndWhite} />
          </Lerp>
        </Image>
      </Canvas>
    </View>
  );
};

export const LinearToSRGBGammaDemo = () => {
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group>
          <LinearToSRGBGamma>
            <BlendColor color="lightblue" mode="srcIn" />
          </LinearToSRGBGamma>
          <Circle cx={r} cy={r} r={r} />
        </Group>
      </Canvas>
    </View>
  );
};

export const SRGBToLinearGammaDemo = () => {
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group>
          <SRGBToLinearGamma>
            <BlendColor color="lightblue" mode="srcIn" />
          </SRGBToLinearGamma>
          <Circle cx={r} cy={r} r={r} />
        </Group>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="ColorMatrix: matrix={[
            -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
            1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
          ]}">
          <ColorMatrixDemo />
        </TestCase>
        <TestCase
          itShould="ColorMatrix: matrix={[
            -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
            1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
          ]} children">
          <ColorMatrixChildrenDemo />
        </TestCase>
        <TestCase itShould="BlendColor: color='cyan' mode='multiply'">
          <BlendColorDemo />
        </TestCase>
        <TestCase itShould="BlendColor: color='cyan' mode='multiply' children">
          <BlendColorChildrenDemo />
        </TestCase>
        <TestCase itShould="Lerp: t={0.5}">
          <LerpDemo />
        </TestCase>
        <TestCase itShould="LinearToSRGBGamma: children=<BlendColor color='lightblue' mode='srcIn' />">
          <LinearToSRGBGammaDemo />
        </TestCase>
        <TestCase itShould="SRGBToLinearGamma: children=<BlendColor color='lightblue' mode='srcIn' />">
          <SRGBToLinearGammaDemo />
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
