import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {
  Skia,
  drawAsImage,
  Group,
  Rect,
  Canvas,
  Atlas,
  rect,
} from '@shopify/react-native-skia';
import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const size = {width: 25, height: 11.25};
const strokeWidth = 2;
const imageSize = {
  width: size.width + strokeWidth,
  height: size.height + strokeWidth,
};
const image = drawAsImage(
  <Group>
    <Rect
      rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
      color="cyan"
    />
    <Rect
      rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
      color="blue"
      style="stroke"
      strokeWidth={strokeWidth}
    />
  </Group>,
  imageSize,
);

class AltasExample extends Component {
  render() {
    const numberOfBoxes = 150;
    const pos = {x: 128, y: 128};
    const width = 256;
    const sprites = new Array(numberOfBoxes)
      .fill(0)
      .map(() => rect(0, 0, imageSize.width, imageSize.height));
    const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
      const tx = 5 + ((i * size.width) % width);
      const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
      const r = Math.atan2(pos.y - ty, pos.x - tx);
      return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
    });

    return (
      <View style={{padding: 10, alignItems: 'center'}}>
        <Canvas style={{width: 256, height: 256}}>
          <Atlas
            image={image}
            sprites={sprites}
            transforms={transforms}
            colors={[
              Float32Array.of(0, 1, 0.498, 1),
              Float32Array.of(0.737, 0.561, 0.561, 1),
              Float32Array.of(0.859, 0.439, 0.576, 1),
            ]}
            blendMode="color"
          />
        </Canvas>
      </View>
    );
  }
}

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="Atlas: image={image} sprites={sprites} transforms={transforms}  colors={[
              Float32Array.of(0, 1, 0.498, 1),
              Float32Array.of(0.737, 0.561, 0.561, 1),
              Float32Array.of(0.859, 0.439, 0.576, 1),
            ]}
            blendMode='color'">
          <AltasExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
