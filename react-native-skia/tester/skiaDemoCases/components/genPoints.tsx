import React from 'react';
import {CaseParams, genStrokeWidthColorCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {vec} from '@shopify/react-native-skia';

const points = [
  vec(128, 0),
  vec(168, 80),
  vec(256, 93),
  vec(192, 155),
  vec(207, 244),
  vec(128, 202),
  vec(49, 244),
  vec(64, 155),
  vec(0, 93),
  vec(88, 80),
  vec(128, 0),
];

const points1 = [
  vec(128, 0),
  vec(168, 80),
  vec(256, 93),
  vec(192, 155),
  vec(207, 244),
  vec(128, 202),
  vec(49, 244),
];

const points2 = [
  vec(128, 0),
  vec(168, 80),
  vec(256, 93),
  vec(192, 155),
  vec(0, 93),
  vec(88, 80),
  vec(128, 0),
];

const basicProps = {
  points: points,
  mode: 'polygon',
};
const basicCases: CaseParams[] = [
  {
    key: 'points',
    values: [points, points1, points2],
  },
  {
    key: 'mode',
    values: ['points', 'lines', 'polygon'],
    othersProps: {
      strokeWidth: 5,
    },
  },
];

const allCases = [...basicCases, ...genStrokeWidthColorCommonProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Points"></GenMain>
  );
}
