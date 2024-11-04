import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Canvas, vec, Patch} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const PatchDemo = () => {
  const colors = ['#61dafb', '#fb61da', '#61fbcf', '#dafb61'];
  const C = 64;
  const width = 256;
  const topLeft = {pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0)};
  const topRight = {
    pos: vec(width, 0),
    c1: vec(width, C),
    c2: vec(width + C, 0),
  };
  const bottomRight = {
    pos: vec(width, width),
    c1: vec(width, width - 2 * C),
    c2: vec(width - 2 * C, width),
  };
  const bottomLeft = {
    pos: vec(0, width),
    c1: vec(0, width - 2 * C),
    c2: vec(-2 * C, width),
  };
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{width: 256, height: 256}}>
        <Patch
          colors={colors}
          patch={[topLeft, topRight, bottomRight, bottomLeft]}
        />
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Patch: colors={colors}
          patch={[topLeft, topRight, bottomRight, bottomLeft]}">
          <PatchDemo />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
