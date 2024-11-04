import React from 'react';

import {
  Canvas,
  Circle,
  ImageShader,
  useImage,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';
import {transform} from 'typescript';

export const ImageShaderDemo = () => {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (image === null) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Circle cx={128} cy={128} r={128}>
          <ImageShader
            tx={'repeat'}
            ty={'repeat'}
            fm={'nearest'}
            //@ts-ignore
            mm={'last'} // 'none' 'last'
            image={image}
            fit="cover"
            rect={{x: 0, y: 0, width: 256, height: 256}}
            transform={[{skewX: Math.PI / 6}]}
          />
        </Circle>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase
          itShould="ImageShader: image={image}
            fit='cover'
            rect={{x: 0, y: 0, width: 256, height: 256}}">
          <ImageShaderDemo />
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
