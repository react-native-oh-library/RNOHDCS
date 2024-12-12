import React, {useMemo} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {
  Canvas,
  useFonts,
  TextAlign,
  Skia,
  Paragraph,
  FontStyle,
  //@ts-ignore
  Slant,
  //@ts-ignore
  Weight,
  Text as SkText,
  matchFont,
  useFont,
  TextBlob,
} from '@shopify/react-native-skia';

import {ScrollView, Platform} from 'react-native';
import {Tester, TestCase} from '@rnoh/testerino';

const MyParagraphWithRGBA = () => {
  const viewWidth = 300;
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
      fontSize: 40,
    };
    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle({...textStyle, fontStyle: FontStyle.Bold})
      .addText('😂')
      .pop()
      .build();
  }, [customFontMgr]);

  const paragraphRGBAColorFilter = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      fontSize: 40,
    };
    const emojiPaint = Skia.Paint();
    // 设置修正颜色的过滤器
    const colorMatrix = [
      1,
      0,
      0,
      0,
      0, // Red <- Blue
      0,
      1,
      0,
      0,
      0, // Green 不变
      0,
      0,
      1,
      0,
      0, // Blue <- Red
      0,
      0,
      0,
      1,
      0, // Alpha 不变
    ];
    const colorFilter = Skia.ColorFilter.MakeMatrix(colorMatrix);
    emojiPaint.setColorFilter(colorFilter);

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle({...textStyle}, emojiPaint)
      .addText('😂')
      .pop()
      .build();
  }, [customFontMgr]);

  const paragraphBGRAColorFilter = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      fontSize: 40,
    };
    const emojiPaint = Skia.Paint();
    const colorMatrix = [
      0,
      0,
      1,
      0,
      0, // Red <- Blue
      0,
      1,
      0,
      0,
      0, // Green 不变
      1,
      0,
      0,
      0,
      0, // Blue <- Red
      0,
      0,
      0,
      1,
      0, // Alpha 不变
    ];
    const colorFilter = Skia.ColorFilter.MakeMatrix(colorMatrix);
    emojiPaint.setColorFilter(colorFilter);

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle({...textStyle}, emojiPaint)
      .addText('😂')
      .pop()
      .build();
  }, [customFontMgr]);

  /**
   * 前端使用限制，addText需要把文本和emoji分开添加，且需要为emoji添加默认textStyle来调用添加的这段代码
   */
  const paragraphAndTextRColorFilter = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      fontSize: 40,
      color: Skia.Color('red'),
    };
    const emojiPaint = Skia.Paint();
    const colorMatrix = [
      1,
      0,
      0,
      1,
      0, // Red 变

      0,
      1,
      0,
      0,
      0, // Green 不变

      0,
      0,
      1,
      0,
      0, // Blue 不变

      0,
      0,
      0,
      1,
      0, // Alpha 不变
    ];
    const colorFilter = Skia.ColorFilter.MakeMatrix(colorMatrix);
    emojiPaint.setColorFilter(colorFilter);

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle({...textStyle})
      .addText('前段😂')
      .pushStyle({...textStyle}, emojiPaint)
      .addText('后段😂')
      .pop()
      .build();
  }, [customFontMgr]);

  const paragraphAndTextBColorFilter = useMemo(() => {
    // Are the font loaded already?
    if (!customFontMgr) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center,
    };
    const textStyle = {
      fontSize: 40,
      color: Skia.Color('red'),
    };
    const textStyleEmoji = {
      fontSize: 40,
    };
    const emojiPaint = Skia.Paint();
    const colorMatrix = [
      1,
      0,
      0,
      0,
      0, // Red 不变

      0,
      1,
      0,
      0,
      0, // Green 不变

      0,
      0,
      1,
      1,
      0, // Blue 变

      0,
      0,
      0,
      1,
      0, // Alpha 不变
    ];
    const colorFilter = Skia.ColorFilter.MakeMatrix(colorMatrix);
    emojiPaint.setColorFilter(colorFilter);

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontMgr)
      .pushStyle({...textStyle})
      .addText('前段')
      .pushStyle({...textStyleEmoji})
      .addText('😂')
      .pushStyle({...textStyle}, emojiPaint)
      .addText('后段😂')
      .pop()
      .build();
  }, [customFontMgr]);

  return (
    <View style={styles.viewStyle}>
      <Text>1.不设置paint</Text>
      <Canvas style={{flex: 1, width: viewWidth, height: 50}}>
        <Paragraph paragraph={paragraph} x={0} y={0} width={viewWidth} />
      </Canvas>
      <Text>2.paint设置RGBA</Text>
      <Canvas style={{flex: 1, width: viewWidth, height: 50}}>
        <Paragraph
          paragraph={paragraphRGBAColorFilter}
          x={0}
          y={0}
          width={viewWidth}
        />
      </Canvas>
      <Text>3.paint设置BGRA</Text>
      <Canvas style={{flex: 1, width: viewWidth, height: 50}}>
        <Paragraph
          paragraph={paragraphBGRAColorFilter}
          x={0}
          y={0}
          width={viewWidth}
        />
      </Canvas>
      <Text>4.前段文本和emoji一起添加,后段有pain,改变R</Text>
      <Canvas style={{flex: 1, width: viewWidth, height: 50}}>
        <Paragraph
          paragraph={paragraphAndTextRColorFilter}
          x={0}
          y={0}
          width={viewWidth}
        />
      </Canvas>
      <Text>5.前段分开文本和emoji使用;后段有pain,改变B</Text>
      <Canvas style={{flex: 1, width: viewWidth, height: 50}}>
        <Paragraph
          paragraph={paragraphAndTextBColorFilter}
          x={0}
          y={0}
          width={viewWidth}
        />
      </Canvas>
    </View>
  );
};

export default function () {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestCase itShould="Paragraph: RGBA通道中R和B相反">
          <MyParagraphWithRGBA />
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
