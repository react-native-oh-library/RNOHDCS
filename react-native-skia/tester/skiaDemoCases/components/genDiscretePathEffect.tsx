import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const basicProps = {
  path: 'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  color: '#61DAFB',
};

const childBasicProps = {
  length: 2,
  deviation: 2,
};

const basicCases: CaseParams[] = [
  {
    key: 'length',
    values: [1, 5, 10],
  },
  {
    key: 'deviation',
    values: [1, 5, 10],
  },
  {
    key: 'seed',
    values: [1, 5, 10],
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
      childComName="DiscretePathEffect"
      childBasicProps={childBasicProps}></GenMain>
  );
}
