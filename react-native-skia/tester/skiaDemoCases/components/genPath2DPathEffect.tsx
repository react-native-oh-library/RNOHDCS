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
  path: 'M -10 0 L 0 -10, 10 0, 0 10 Z',
  matrix: processTransform2d([{scale: 10}]),
};

const basicCases: CaseParams[] = [
  {
    key: 'path',
    values: ['M -10 0 L 0 -10, 10 0, 0 10 Z'],
  },
  {
    type: 'mulKey',
    key: 'Path2DPathEffect1',
    desc: 'matrix=processTransform2d([{scale: 20}])',
    values: [{matrix: processTransform2d([{scale: 20}])}],
  },
  {
    type: 'mulKey',
    key: 'Path2DPathEffect2',
    desc: 'matrix=processTransform2d([{scale: 30}])',
    values: [{matrix: processTransform2d([{scale: 30}])}],
  },
  {
    type: 'mulKey',
    key: 'Path2DPathEffect3',
    desc: 'matrix=processTransform2d([{scale: 40}])',
    values: [{matrix: processTransform2d([{scale: 40}])}],
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
      childComName="Path2DPathEffect"
      childBasicProps={childBasicProps}></GenMain>
  );
}
