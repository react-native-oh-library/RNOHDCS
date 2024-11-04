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
  start: vec(0, 0),
  end: vec(256, 256),
  colors: ['blue', 'yellow'],
};

const basicCases: CaseParams[] = [
  {
    key: 'start',
    values: [vec(0, 0), vec(50, 50), vec(80, 80)],
  },
  {
    key: 'end',
    values: [vec(256, 256), vec(210, 210), vec(180, 180)],
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
      childComName="LinearGradient"
      childBasicProps={childBasicProps}></GenMain>
  );
}
