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
    text: 'Hello World',
    x: 20,
    y: 20,
    font: font,
  };
  const basicCases: CaseParams[] = [
    {
      key: 'text',
      values: ['Hello World', 'Hello OH'],
    },
    {
      key: 'x',
      values: [0, 20, 40],
    },
    {
      key: 'y',
      values: [20, 40, 60],
    },
    {
      key: 'font',
      values: [font],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Text"></GenMain>
  );
}
