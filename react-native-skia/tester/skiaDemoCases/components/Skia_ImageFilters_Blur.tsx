import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Canvas,
  useImage,
  Image,
  Shadow,
  Blur,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, Filter, TestCase, TestSuite} from '@rnoh/testerino';

const SimpleBlurDefault = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <Blur blur={10} mode={'clamp'} />
        </Image>
      </Canvas>
    </View>
  );
};

const SimpleBlurClamp = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <Blur blur={10} mode={'clamp'}>
            <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" inner />
          </Blur>
        </Image>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Blur1: blur={10} mode={'clamp'}">
          <SimpleBlurDefault />
        </TestCase>
        <TestCase itShould="Blur: blur={10} mode={'clamp'} children">
          <SimpleBlurClamp />
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
