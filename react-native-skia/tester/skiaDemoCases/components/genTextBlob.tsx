import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {Skia, useFonts, matchFont} from '@shopify/react-native-skia';

export default function () {
  const fontMgr = useFonts({
    Roboto: [
      require('../../assets/fonts/Roboto-Regular.ttf'),
      require('../../assets/fonts/Roboto-Medium.ttf'),
    ],
  });
  if (!fontMgr) {
    return null;
  }
  const fontStyle = {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
  } as const;
  const font = matchFont(fontStyle, fontMgr);
  const blob = Skia.TextBlob.MakeFromText('Hello World!', font);

  const basicProps = {
    blob: blob,
    x: 20,
    y: 20,
  };
  const basicCases: CaseParams[] = [
    {
      key: 'blob',
      values: [blob],
    },
    {
      key: 'x',
      values: [0, 20, 40],
    },
    {
      key: 'y',
      values: [20, 40, 60],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="TextBlob"></GenMain>
  );
}
