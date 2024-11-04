import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {rect, Skia, useFonts, matchFont} from '@shopify/react-native-skia';

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
  const size = 64;

  const path = Skia.Path.Make();
  path.addCircle(size, size, size / 4);

  const path1 = Skia.Path.Make();
  path1.addCircle(size, size, size / 2);
  const path2 = Skia.Path.Make();
  path2.addRect(rect(size, size, size, size));
  const path3 = Skia.Path.Make();
  path3.addArc(rect(size, size, size, size), 90, 60);

  const basicProps = {
    text: 'Hello World',
    path: path,
    font: font,
  };
  const basicCases: CaseParams[] = [
    {
      type: 'mulKey',
      id: 'text1',
      desc: 'path=circle',
      values: [
        {
          text: 'Hello World',
          path: path1,
          font: font,
        },
      ],
    },
    {
      type: 'mulKey',
      id: 'text2',
      desc: 'path=rect',
      values: [
        {
          text: 'Hello World',
          path: path2,
          font: font,
        },
      ],
    },
    {
      type: 'mulKey',
      id: 'text3',
      desc: 'path=arc',
      values: [
        {
          text: 'Hello World',
          path: path3,
          font: font,
        },
      ],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="TextPath"></GenMain>
  );
}
