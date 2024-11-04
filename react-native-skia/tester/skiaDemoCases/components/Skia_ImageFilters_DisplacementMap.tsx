import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Canvas,
  useImage,
  Image,
  Turbulence,
  DisplacementMap,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, Filter, TestCase, TestSuite} from '@rnoh/testerino';

const DisplacementMapDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <DisplacementMap channelX="g" channelY="a" scale={20}>
            <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
          </DisplacementMap>
        </Image>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="DisplacementMap: channelX='g' channelY='a' scale={20}">
          <DisplacementMapDemo />
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
