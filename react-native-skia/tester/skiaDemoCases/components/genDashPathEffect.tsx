import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const basicProps = {
  path: 'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  color: '#61DAFB',
  style: 'stroke',
  strokeWidth: 4,
};

const childBasicProps = {
  intervals: [4, 4],
};

const basicCases: CaseParams[] = [
  {
    key: 'intervals',
    values: [
      [2, 2],
      [5, 5],
      [10, 10],
    ],
  },
  {
    key: 'phase',
    values: [0, 5, 10],
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
      childComName="DashPathEffect"
      childBasicProps={childBasicProps}></GenMain>
  );
}
