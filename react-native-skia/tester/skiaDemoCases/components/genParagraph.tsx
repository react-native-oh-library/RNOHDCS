import React, {useMemo} from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {Skia, useFonts, TextAlign} from '@shopify/react-native-skia';

export default function () {
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

  const basicProps = {
    paragraph: paragraph,
    x: 0,
    y: 0,
    width: 256,
  };
  const basicCases: CaseParams[] = [
    {
      key: 'paragraph',
      //@ts-ignore
      values: [paragraph],
    },
    {
      key: 'x',
      values: [0, 20, 40],
    },
    {
      key: 'y',
      values: [0, 20, 40],
    },
    {
      key: 'width',
      values: [64, 128, 256],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Paragraph"></GenMain>
  );
}
