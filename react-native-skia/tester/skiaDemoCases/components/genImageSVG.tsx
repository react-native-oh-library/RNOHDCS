import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {rect, Skia} from '@shopify/react-native-skia';

export default function () {
  const svg = Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='100' cy='100' r='120' fill='#c02aaa'/>
    </svg>`,
  )!;

  const width = 256;
  const height = 256;
  const src = rect(0, 0, svg.width(), svg.height());
  const dst = rect(0, 0, width, height);

  const basicProps = {
    svg: svg,
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  };
  const basicCases: CaseParams[] = [
    {
      type: 'key-value',
      id: 'imageSVG',
      key: 'svg',
      values: [svg],
    },
    {
      key: 'x',
      values: [60, 40, 20],
    },
    {
      key: 'y',
      values: [60, 40, 20],
    },
    {
      key: 'width',
      values: [64, 120, 180],
    },
    {
      key: 'height',
      values: [60, 120, 180],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="ImageSVG"></GenMain>
  );
}
