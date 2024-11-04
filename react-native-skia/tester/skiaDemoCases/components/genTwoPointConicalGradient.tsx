import React from 'react';
import {CaseParams, genGradientsCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {vec} from '@shopify/react-native-skia';

const basicProps = {
  x: 0,
  y: 0,
  width: 256,
  height: 256,
};

const childBasicProps = {
  start: vec(128, 128),
  startR: 128,
  end: vec(128, 16),
  endR: 16,
  colors: ['blue', 'yellow'],
};

const basicCases: CaseParams[] = [
  {
    key: 'start',
    values: [vec(50, 50), vec(80, 80), vec(160, 160)],
  },
  {
    key: 'startR',
    values: [50, 80, 160],
  },
  {
    key: 'end',
    values: [vec(50, 10), vec(80, 15), vec(160, 20)],
  },
  {
    key: 'endR',
    values: [10, 15, 20],
  },
];

const allCases = [...basicCases, ...genGradientsCommonProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Rect"
      isShowChild={true}
      childComName="TwoPointConicalGradient"
      childBasicProps={childBasicProps}></GenMain>
  );
}
