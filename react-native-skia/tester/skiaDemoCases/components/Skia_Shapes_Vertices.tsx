import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  Fill,
  useImage,
  vec,
  Group,
  ImageShader,
  Vertices,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const VerticesDemo = () => {
  const image = useImage(require('../../assets/squares.png'));
  const vertices = [vec(64, 0), vec(128, 256), vec(0, 256)];
  const colors = ['#61dafb', '#fb61da', '#dafb61'];
  const textures = [vec(0, 0), vec(0, 128), vec(64, 256)];
  if (!image) {
    return null;
  }
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        {/* This is our texture */}
        <Group>
          <ImageShader image={image} tx="repeat" ty="repeat" />
          {/* Here we specified colors, the default blendMode is dstOver */}
          <Vertices vertices={vertices} colors={colors} />
          <Group transform={[{translateX: 128}]}>
            {/* Here we didn't specify colors, the default blendMode is srcOver */}
            <Vertices vertices={vertices} textures={textures} />
          </Group>
        </Group>
      </Canvas>
    </View>
  );
};

const IndicesDemo = () => {
  const vertices = [vec(0, 0), vec(256, 0), vec(256, 256), vec(0, 256)];
  const colors = ['#61DAFB', '#fb61da', '#dafb61', '#61fbcf'];
  const triangle1 = [0, 1, 2];
  const triangle2 = [0, 2, 3];
  const indices = [...triangle1, ...triangle2];
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Vertices vertices={vertices} colors={colors} indices={indices} />
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Vertices1: vertices={vertices} colors={colors}">
          <VerticesDemo />
        </TestCase>

        <TestCase itShould="Vertices2: vertices={vertices} colors={colors} indices={indices}">
          <IndicesDemo />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
