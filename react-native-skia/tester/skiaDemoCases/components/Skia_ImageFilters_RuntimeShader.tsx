import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Canvas,
  Text,
  useFont,
  RuntimeShader,
  Circle,
  Skia,
  Group,
} from '@shopify/react-native-skia';

import {ScrollView} from 'react-native';
import {Tester, Filter, TestCase, TestSuite} from '@rnoh/testerino';

const RuntimeShaderDemo = () => {
  const source = Skia.RuntimeEffect.Make(`
  uniform shader image;
  
  half4 main(float2 xy) {
    return image.eval(xy).rbga;
  }
  `)!;
  const r = 128;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <RuntimeShader source={source} />
        <Circle cx={r} cy={r} r={r} color="lightblue" />
      </Canvas>
    </View>
  );
};

const PixelDensityDemo = () => {
  const source = Skia.RuntimeEffect.Make(`
  uniform shader image;

  half4 main(float2 xy) {
    vec4 color =  image.eval(xy);
    if (xy.x < 128) {
      return color;
    }
    return color.rbga;
  }
  `)!;
  const r = 128;
  const font = useFont(require('../../assets/fonts/Pacifico-Regular.ttf'), 30);

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group>
          <RuntimeShader source={source} />
          <Circle cx={r} cy={r} r={r} color="lightblue" />
          <Text text="Hello World" x={32} y={128} color="#e38ede" font={font} />
        </Group>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="RuntimeShader1: Runtime Shader source={source}">
          <RuntimeShaderDemo />
        </TestCase>

        <TestCase itShould="RuntimeShader2: Pixel Density source={source}">
          <PixelDensityDemo />
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
