import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

import {useFonts, matchFont} from '@shopify/react-native-skia';

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

  const basicProps = {
    x: 32,
    y: 64,
    font: font,
    text: 'cover',
  };

  const childBasicProps = {
    radius: 0.5,
  };

  const basicCases: CaseParams[] = [
    {
      key: 'radius',
      values: [0.1, 0.4, 0.6],
    },
    {
      key: 'operator',
      values: ['erode', 'dilate'],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Text"
      isShowChild={true}
      childComName="Morphology"
      childBasicProps={childBasicProps}></GenMain>
  );
}
