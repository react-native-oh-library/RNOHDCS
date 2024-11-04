import React from 'react';

import {
  Canvas,
  Fill,
  ImageShader,
  Shader,
  Skia,
  useImage,
  vec,
  LinearGradient,
} from '@shopify/react-native-skia';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

export const SimpleShader = () => {
  const source = Skia.RuntimeEffect.Make(`
  vec4 main(vec2 pos) {
    // normalized x,y values go from 0 to 1, the canvas is 256x256
    vec2 normalized = pos/vec2(256);
    return vec4(normalized.x, normalized.y, 0.5, 1);
  }`)!;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <Shader source={source} />
        </Fill>
      </Canvas>
    </View>
  );
};

export const SimpleChildrenShader = () => {
  const source = Skia.RuntimeEffect.Make(`
  vec4 main(vec2 pos) {
    // normalized x,y values go from 0 to 1, the canvas is 256x256
    vec2 normalized = pos/vec2(256);
    return vec4(normalized.x, normalized.y, 0.5, 1);
  }`)!;
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <Shader source={source}></Shader>
        </Fill>
      </Canvas>
    </View>
  );
};

export const UsingUniforms = () => {
  const source = Skia.RuntimeEffect.Make(`
  uniform vec2 c;
  uniform float r;
  uniform float blue;
  
  vec4 main(vec2 pos) {
    vec2 normalized = pos/vec2(2 * r);
    return distance(pos, c) > r ? vec4(1) : vec4(normalized, blue, 1);
  }`)!;
  const r = 128;
  const c = vec(2 * r, r);
  const blue = 1.0;

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <Shader source={source} uniforms={{c, r, blue}} />
        </Fill>
      </Canvas>
    </View>
  );
};

export const NestedShaders = () => {
  const source = Skia.RuntimeEffect.Make(`
  uniform shader image;
  
  half4 main(float2 xy) {   
    xy.x += sin(xy.y / 3) * 4;
    return image.eval(xy).rbga;
  }`)!;
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Fill>
          <Shader source={source}>
            <ImageShader
              tx={'repeat'}
              ty={'repeat'}
              fm={'nearest'}
              //@ts-ignore
              mm={'last'} // 'none' 'last'
              image={image}
              fit="cover"
              rect={{x: 0, y: 0, width: 256, height: 256}}
            />
          </Shader>
        </Fill>
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Shader1: source={source}">
          <SimpleShader />
        </TestCase>
        <TestCase itShould="Shader2: source={source} uniforms={{c, r, blue}}">
          <UsingUniforms />
        </TestCase>
        <TestCase itShould="Shader3: source={source} children">
          <NestedShaders />
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
