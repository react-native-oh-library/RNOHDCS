import React from 'react';
import {CaseParams, genStrokeWidthColorCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {vec} from '@shopify/react-native-skia';

const start = vec(50, 50);
const start1 = vec(20, 20);
const start2 = vec(0, 0);

const end = vec(256, 256);
const end1 = vec(128, 128);
const end2 = vec(64, 64);

const basicProps = {
  p1: start,
  p2: end,
};
const basicCases: CaseParams[] = [
  {
    key: 'p1',
    values: [start, start1, start2],
    othersProps: {
      strokeWidth: 8,
    },
  },
  {
    key: 'p2',
    values: [end, end1, end2],
    othersProps: {
      strokeWidth: 4,
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
      comName="Line"></GenMain>
  );
}
