import React from 'react';
import {CaseParams, genImage_fitProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {rect, useImage} from '@shopify/react-native-skia';

export default function () {
  const image = useImage(require('../../assets/oslo.jpg'));

  const basicProps = {
    cx: 128,
    cy: 128,
    r: 128,
  };

  const childBasicProps = {
    image: image,
    fit: 'cover',
    rect: {x: 0, y: 0, width: 256, height: 256},
  };

  const basicCases: CaseParams[] = [
    {
      key: 'tx',
      values: ['clamp', 'repeat', 'mirror', 'decal'],
    },
    {
      key: 'ty',
      values: ['clamp', 'repeat', 'mirror', 'decal'],
    },
    {
      key: 'fm',
      values: ['linear', 'nearest'],
    },
    {
      key: 'mm',
      values: ['none', 'last'],
    },
    {
      key: 'rect',
      values: [
        rect(0, 0, 256, 256),
        rect(0, 0, 200, 200),
        rect(0, 0, 180, 180),
      ],
    },
    {
      key: 'transform',
      values: [
        [{skewX: Math.PI / 6}],
        [{scale: Math.PI / 6}],
        [{translate: [10, 20, 30]}],
      ],
    },
  ];

  const allCases = [...basicCases, ...genImage_fitProps()];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Circle"
      isShowChild={true}
      childComName="ImageShader"
      childBasicProps={childBasicProps}></GenMain>
  );
}
