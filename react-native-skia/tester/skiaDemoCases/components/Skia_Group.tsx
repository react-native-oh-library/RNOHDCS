import React from 'react';

import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Fill,
  Group,
  Image,
  Paint,
  RoundedRect,
  Skia,
  rect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const PaintProperties = () => {
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle cx={r} cy={r} r={r} color="#51AFED" />
        {/* The paint is inherited by the following sibling and descendants. */}
        <Group color="lightblue" style="stroke" strokeWidth={10}>
          <Circle cx={r} cy={r} r={r / 2} />
          <Circle cx={r} cy={r} r={r / 3} color="white" />
        </Group>
      </Canvas>
    </View>
  );
};

const SimpleTransform = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="#e8f4f8" />
        <Group color="lightblue" transform={[{skewX: Math.PI / 6}]}>
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
      </Canvas>
    </View>
  );
};

const SimpleTransformOrigin = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="#e8f4f8" />
        <Group
          color="lightblue"
          origin={{x: 128, y: 128}}
          transform={[{skewX: Math.PI / 6}]}>
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
      </Canvas>
    </View>
  );
};

const Clip = () => {
  const size = 256;
  const padding = 32;
  const image = useImage(require('../../assets/oslo.jpg'));
  const rct = rect(padding, padding, size - padding * 2, size - padding * 2);

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill color="lightblue" />
        <Group clip={rct}>
          <Image
            image={image}
            x={0}
            y={0}
            width={size}
            height={size}
            fit="cover"
          />
        </Group>
      </Canvas>
    </View>
  );
};

const ClipRound = () => {
  const size = 256;
  const padding = 32;
  const r = 8;
  const image = useImage(require('../../assets/oslo.jpg'));
  const roundedRect = rrect(
    rect(padding, padding, size - padding * 2, size - padding * 2),
    r,
    r,
  );

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group clip={roundedRect}>
          <Image
            image={image}
            x={0}
            y={0}
            width={size}
            height={size}
            fit="cover"
          />
        </Group>
      </Canvas>
    </View>
  );
};

const ClipPath = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  const star = Skia.Path.MakeFromSVGString(
    'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  )!;

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group clip={star}>
          <Image
            image={image}
            x={0}
            y={0}
            width={256}
            height={256}
            fit="cover"
          />
        </Group>
      </Canvas>
    </View>
  );
};

const InvertClip = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  const star = Skia.Path.MakeFromSVGString(
    'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  )!;

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group clip={star} invertClip>
          <Image
            image={image}
            x={0}
            y={0}
            width={256}
            height={256}
            fit="cover"
          />
        </Group>
      </Canvas>
    </View>
  );
};

const LayerEffectsClip = () => {
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group
          color="lightblue"
          layer={
            <Paint>
              <Blur blur={20} />
              <ColorMatrix
                matrix={[
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,
                ]}
              />
            </Paint>
          }>
          <Circle cx={0} cy={128} r={128 * 0.95} />
          <Circle cx={256} cy={128} r={128 * 0.95} />
        </Group>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Group1: color='lightblue' style='stroke' strokeWidth={10}">
          <PaintProperties />
        </TestCase>
        <TestCase itShould="Group2: color='lightblue' transform={[{skewX: Math.PI / 6}]}">
          <SimpleTransform />
        </TestCase>
        <TestCase itShould="Group3:  color='lightblue' transform={[{skewX: Math.PI / 6}]} origin={{x: 128, y: 128}}">
          <SimpleTransformOrigin />
        </TestCase>
        <TestCase itShould="Group4: clip={rct}">
          <Clip />
        </TestCase>
        <TestCase itShould="Group5: clip={roundedRect}">
          <ClipRound />
        </TestCase>
        <TestCase itShould="Group6: clip={star}">
          <ClipPath />
        </TestCase>
        <TestCase itShould="Group7: clip={star} invertClip">
          <InvertClip />
        </TestCase>
        <TestCase
          itShould="Group8: color='lightblue' 
          layer={<Paint><Blur blur={20} /><ColorMatrix matrix={[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,]}/></Paint>}">
          <LayerEffectsClip />
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
