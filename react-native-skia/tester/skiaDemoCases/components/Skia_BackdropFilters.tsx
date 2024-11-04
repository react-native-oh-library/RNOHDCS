import React from 'react';
import {
  Canvas,
  useImage,
  Image,
  ColorMatrix,
  BackdropFilter,
  BackdropBlur,
  Fill,
} from '@shopify/react-native-skia';

import {ScrollView, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const FilterDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  // https://kazzkiq.github.io/svg-color-filter/
  const BLACK_AND_WHITE = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
  ];
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropFilter
          clip={{x: 0, y: 128, width: 256, height: 128}}
          filter={<ColorMatrix matrix={BLACK_AND_WHITE} />}
        />
      </Canvas>
    </View>
  );
};

const FilterColorDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Canvas style={{flex: 1, width: 256, height: 256}}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropBlur blur={4} clip={{x: 0, y: 128, width: 256, height: 128}}>
          <Fill color="rgba(0, 0, 0, 0.2)" />
        </BackdropBlur>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="BackdropFilter: clip={{x: 0, y: 128, width: 256, height: 128}}
          filter={<ColorMatrix matrix={BLACK_AND_WHITE} />}">
          <FilterDemo />
        </TestCase>
        <TestCase itShould="BackdropBlur: blur={4} clip={{x: 0, y: 128, width: 256, height: 128}}">
          <FilterColorDemo />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
