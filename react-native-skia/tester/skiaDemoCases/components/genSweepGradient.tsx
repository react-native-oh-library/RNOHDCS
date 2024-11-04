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
  c: vec(128, 128),
  start: 10,
  end: 350,
  colors: ['cyan', 'magenta', 'yellow', 'cyan'],
};

const basicCases: CaseParams[] = [
  {
    key: 'c',
    values: [vec(50, 50), vec(80, 80), vec(160, 160)],
  },
  {
    key: 'start',
    values: [10, 80, 160],
  },
  {
    key: 'end',
    values: [300, 200, 100],
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
      childComName="SweepGradient"
      childBasicProps={childBasicProps}></GenMain>
  );
}
