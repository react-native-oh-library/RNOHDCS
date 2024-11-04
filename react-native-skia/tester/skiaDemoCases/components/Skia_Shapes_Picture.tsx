import React, {Component, useMemo} from 'react';
import {Text, View} from 'react-native';

import {
  Canvas,
  vec,
  Patch,
  Picture,
  Skia,
  createPicture,
  BlendMode,
  Group,
  Paint,
  Blur,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const PictureDemo = () => {
  // Create a picture
  const picture = useMemo(
    () =>
      createPicture(canvas => {
        const size = 256;
        const r = 0.33 * size;
        const paint = Skia.Paint();
        paint.setBlendMode(BlendMode.Multiply);

        paint.setColor(Skia.Color('cyan'));
        canvas.drawCircle(r, r, r, paint);

        paint.setColor(Skia.Color('magenta'));
        canvas.drawCircle(size - r, r, r, paint);

        paint.setColor(Skia.Color('yellow'));
        canvas.drawCircle(size / 2, size - r, r, paint);
      }),
    [],
  );
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Picture picture={picture} />
      </Canvas>
    </View>
  );
};

export const ApplyingEffectsPictureDemo = () => {
  const picture = createPicture(canvas => {
    const size = 256;
    const r = 0.33 * size;
    const paint = Skia.Paint();
    paint.setBlendMode(BlendMode.Multiply);

    paint.setColor(Skia.Color('cyan'));
    canvas.drawCircle(r, r, r, paint);

    paint.setColor(Skia.Color('magenta'));
    canvas.drawCircle(size - r, r, r, paint);

    paint.setColor(Skia.Color('yellow'));
    canvas.drawCircle(size / 2, size - r, r, paint);
  });
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Group
          layer={
            <Paint>
              <Blur blur={10} />
            </Paint>
          }>
          <Picture picture={picture} />
        </Group>
      </Canvas>
    </View>
  );
};

export const SerializationPictureExample = () => {
  // Create picture
  const picture = useMemo(
    () =>
      createPicture(
        canvas => {
          const paint = Skia.Paint();
          paint.setColor(Skia.Color('pink'));
          canvas.drawRect({x: 0, y: 0, width: 100, height: 100}, paint);

          const circlePaint = Skia.Paint();
          circlePaint.setColor(Skia.Color('orange'));
          canvas.drawCircle(50, 50, 50, circlePaint);
        },
        {width: 100, height: 100},
      ),
    [],
  );

  // Serialize the picture
  const serialized = useMemo(() => picture.serialize(), [picture]);

  // Create a copy from serialized data
  const copyOfPicture = useMemo(
    () => (serialized ? Skia.Picture.MakePicture(serialized) : null),
    [serialized],
  );

  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Picture picture={picture} />
        <Group transform={[{translateX: 150}]}>
          {copyOfPicture && <Picture picture={copyOfPicture} />}
        </Group>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Picture: picture={picture}">
          <PictureDemo />
        </TestCase>

        <TestCase
          itShould="Picture and group layer: picture={picture} layer={
            <Paint>
              <Blur blur={10} />
            </Paint>
          }">
          <ApplyingEffectsPictureDemo />
        </TestCase>

        <TestCase itShould="Picture and group transform: picture={picture} transform={[{translateX: 150}]}">
          <SerializationPictureExample />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
