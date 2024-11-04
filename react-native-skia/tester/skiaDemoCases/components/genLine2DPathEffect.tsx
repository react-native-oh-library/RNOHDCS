import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

import {processTransform2d} from '@shopify/react-native-skia';

const basicProps = {
  path: 'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  color: '#61DAFB',
  style: 'stroke',
  strokeWidth: 4,
};

const childBasicProps = {
  matrix: processTransform2d([{scale: 5}]),
  width: 0,
};

const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    key: 'Line2DPathEffect1',
    desc: 'matrix=processTransform2d([{scale: 20}]) width=30',
    values: [{matrix: processTransform2d([{scale: 20}]), width: 30}],
  },
  {
    type: 'mulKey',
    key: 'Line2DPathEffect2',
    desc: 'matrix=processTransform2d([{scale: 30}]) width=20',
    values: [{matrix: processTransform2d([{scale: 30}]), width: 20}],
  },
  {
    type: 'mulKey',
    key: 'Line2DPathEffect3',
    desc: 'matrix=processTransform2d([{scale: 40}]) width=10',
    values: [{matrix: processTransform2d([{scale: 40}]), width: 10}],
  },
];

const allCases = [...basicCases];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Path"
      isShowChild={true}
      childComName="Line2DPathEffect"
      childBasicProps={childBasicProps}></GenMain>
  );
}
