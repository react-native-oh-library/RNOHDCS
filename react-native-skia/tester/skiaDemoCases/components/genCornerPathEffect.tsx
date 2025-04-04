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
  r: [5],
};

const basicCases: CaseParams[] = [
  {
    key: 'r',
    values: [10, 20, 40],
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
      childComName="CornerPathEffect"
      childBasicProps={childBasicProps}></GenMain>
  );
}
