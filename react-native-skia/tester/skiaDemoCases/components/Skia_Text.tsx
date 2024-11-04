import React, {Component, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  Fill,
  useFonts,
  TextAlign,
  matchFont,
  Skia,
  Paragraph,
  TileMode,
  //@ts-ignore
  Slant,
  //@ts-ignore
  Weight,
  useFont,
  Glyphs,
  listFontFamilies,
  Text,
  FontStyle,
  vec,
  TextPath,
  Group,
  TextBlob,
  Rect,
  Paint,
  Blur,
} from '@shopify/react-native-skia';

import {ScrollView, Platform} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

// 自定义MyParagraph is ok
const MyParagraph = () => {
  const customFontMgr = useFonts({
    Roboto: [
      require('../../assets/fonts/Roboto-Regular.ttf'),
      require('../../assets/fonts/Roboto-Medium.ttf'),
    ],
  });
  const paragraph = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      fontFamilies: ['Roboto'],
      color: Skia.Color('black'),
      fontSize: 50,
    };
    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle(textStyle)
      .addText('Say Hello to ')
      .pushStyle({...textStyle, fontStyle: {weight: 500}})
      .addText('Skia 🎨')
      .pop()
      .build();
  }, [customFontMgr]);

  // Render the paragraph
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Paragraph paragraph={paragraph} x={0} y={0} width={250} />
      </Canvas>
    </View>
  );
};

const MyParagraphsys = () => {
  const paragraph = useMemo(() => {
    // Are the font loaded already?

    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      // fontFamilies: ["Roboto"],
      color: Skia.Color('black'),
      fontSize: 50,
    };
    return Skia.ParagraphBuilder.Make(paragraphStyle)
      .pushStyle(textStyle)
      .addText('Say Hello to ')
      .pushStyle({...textStyle, fontStyle: FontStyle.Bold})
      .addText('Skia 🎨')
      .pop()
      .build();
  }, []);

  // Render the paragraph
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Paragraph paragraph={paragraph} x={0} y={0} width={250} />
      </Canvas>
    </View>
  );
};

//demo is ok
export const MyblurDemo = () => {
  const paragraph = Skia.ParagraphBuilder.Make()
    .pushStyle({
      color: Skia.Color('black'),
      fontSize: 50,
    })
    .addText('Hello Skia')
    .build();
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group
          layer={
            <Paint>
              <Blur blur={4} />
            </Paint>
          }>
          <Paragraph paragraph={paragraph} x={0} y={80} width={500} />
        </Group>
      </Canvas>
    </View>
  );
};

//Rectdemo is ok
export const Rectdemo = () => {
  const paragraph = useMemo(() => {
    const para = Skia.ParagraphBuilder.Make()
      .pushStyle({
        color: Skia.Color('black'),
        fontSize: 35,
      })
      .addText('Say Hello to React Native Skia ')
      .build();
    para.layout(200);
    return para;
  }, []);

  const height = paragraph.getHeight();
  const width = paragraph.getLongestLine();
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        {/* Maximum paragraph width */}
        <Rect x={0} y={0} width={200} height={256} color="magenta" />
        {/* Paragraph bounding box */}
        <Rect x={0} y={0} width={width} height={height} color="cyan" />
        <Paragraph paragraph={paragraph} x={0} y={0} width={200} />
      </Canvas>
    </View>
  );
};

export const Myglyphdemo = () => {
  const fontSize = 21;
  const font = useFont(
    require('../../assets/fonts/Roboto-Regular.ttf'),
    fontSize,
  );
  if (font === null) {
    return null;
  }
  const glyphs = font
    .getGlyphIDs('Hello World!')
    .map((id, i) => ({id, pos: vec(0, (i + 1) * fontSize)}));
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Glyphs font={font} x={100} glyphs={glyphs} />
      </Canvas>
    </View>
  );
};

export const Hmfontmgrdemo = () => {
  const fontFamily = Platform.select({
    harmony: 'HarmonyOS Sans SC',
    default: 'serif',
  });
  const fontStyle = {
    fontFamily,
    fontSize: 35,
    fontStyle: 'italic' as Slant,
    fontWeight: 'bold' as Weight,
    color: Skia.Color('bule'),
  };

  const font = matchFont(fontStyle);
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Text x={20} y={100} text="Hello World" font={font} />
      </Canvas>
    </View>
  );
};

export const Circledemo = () => {
  const size = 128;
  const path = Skia.Path.Make();
  path.addCircle(size, size, size / 2);

  const font = useFont(require('../../assets/fonts/Roboto-Regular.ttf'), 35);
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Group transform={[{rotate: Math.PI}]} origin={vec(size, size)}>
          <TextPath font={font} path={path} text="Hello World!" />
        </Group>
      </Canvas>
    </View>
  );
};

export const Myblobdemo = () => {
  const font = useFont(require('../../assets/fonts/Roboto-Regular.ttf'), 24);
  if (font === null) {
    return null;
  }
  const blob = Skia.TextBlob.MakeFromText('Hello World!', font);
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <TextBlob x={10} y={20} blob={blob} color="blue" />
      </Canvas>
    </View>
  );
};

const MyParagraph1 = () => {
  const source = Skia.RuntimeEffect.Make(`
  uniform vec4 position;
  uniform vec4 colors[4];
  
  vec4 main(vec2 pos) {
    vec2 uv = (pos - vec2(position.x, position.y))/vec2(position.z, position.w);
    vec4 colorA = mix(colors[0], colors[1], uv.x);
    vec4 colorB = mix(colors[2], colors[3], uv.x);
    return mix(colorA, colorB, uv.y);
  }`)!;

  // Define an array of colors for the gradient to be used in shader uniform
  const colors = [
    // #dafb61
    0.85, 0.98, 0.38, 1.0,
    // #61dafb
    0.38, 0.85, 0.98, 1.0,
    // #fb61da
    0.98, 0.38, 0.85, 1.0,
    // #61fbcf
    0.38, 0.98, 0.81, 1.0,
  ];
  const paragraph = useMemo(() => {
    // Create a background paint.
    const backgroundPaint = Skia.Paint();
    backgroundPaint.setShader(source.makeShader([0, 0, 256, 256, ...colors]));

    // Create a foreground paint. We use a radial gradient.
    const foregroundPaint = Skia.Paint();
    foregroundPaint.setShader(
      Skia.Shader.MakeRadialGradient(
        {x: 0, y: 0},
        256,
        [Skia.Color('magenta'), Skia.Color('yellow')],
        null,
        TileMode.Clamp,
      ),
    );

    const para = Skia.ParagraphBuilder.Make()
      .pushStyle(
        {
          fontFamilies: ['Roboto'],
          fontSize: 70,
          fontStyle: {weight: 500},
          color: Skia.Color('black'),
        },
        foregroundPaint,
        backgroundPaint,
      )
      .addText('Say Hello to Skia')
      .pop()
      .build();
    return para;
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Paragraph paragraph={paragraph} x={0} y={0} width={256} />
      </Canvas>
    </View>
  );
};

const MyParagraph123 = () => {
  const paragraph = useMemo(() => {
    // Are the custom fonts loaded?

    const textStyle = {
      fontSize: 24,
      color: Skia.Color('#000'),
    };

    const paragraphBuilder = Skia.ParagraphBuilder.Make({});
    paragraphBuilder
      .pushStyle({...textStyle, fontStyle: FontStyle.Bold})
      .addText('This text is bold\n')
      .pop()
      .pushStyle({...textStyle, fontStyle: FontStyle.Normal})
      .addText('This text is regular\n')
      .pop()
      .pushStyle({...textStyle, fontStyle: FontStyle.Italic})
      .addText('This text is italic')
      .pop()
      .build();
    return paragraphBuilder.build();
  }, []);

  return (
    <View style={styles.viewStyle}>
      <Canvas style={styles.canvasStyle}>
        <Paragraph paragraph={paragraph} x={0} y={80} width={300} />
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Paragraph1: paragraph={paragraph} x={0} y={0} width={250}">
          <MyParagraphsys />
        </TestCase>

        <TestCase itShould="Paragraph2: simple paragraph based on custom fonts">
          <MyParagraph />
        </TestCase>

        <TestCase itShould="Paragraph3: Paragraph Bounding Box">
          <Rectdemo />
        </TestCase>

        <TestCase itShould="Paragraph4: Using Paints">
          <MyParagraph1 />
        </TestCase>

        <TestCase itShould="Paragraph5: Applying Effects, fopr we apply a blur image filter">
          <MyblurDemo />
        </TestCase>

        <TestCase itShould="Paragraph6: Text Style Properties">
          <MyParagraph123 />
        </TestCase>

        <TestCase itShould="Glyphs: font={font} x={100} glyphs={glyphs}">
          <Myglyphdemo />
        </TestCase>

        <TestCase itShould="TextPath: font={font} path={path} text='Hello World!'">
          <Circledemo />
        </TestCase>

        <TestCase itShould="TextBlob: x={10} y={20} blob={blob} color='blue'">
          <Myblobdemo />
        </TestCase>

        <TestCase itShould="Text: x={20} y={100} text='Hello World' font={font}">
          <Hmfontmgrdemo />
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
