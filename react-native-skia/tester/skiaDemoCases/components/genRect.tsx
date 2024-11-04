import React from 'react';
import {CaseParams, genStyleColorCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const basicProps = {
  x: 0,
  y: 0,
  width: 256,
  height: 256,
  color: 'lightblue',
};
const basicCases: CaseParams[] = [
  {
    key: 'x',
    values: [0, 20, 40],
  },
  {
    key: 'y',
    values: [0, 20, 40],
  },
  {
    key: 'width',
    values: [64, 128, 256],
  },
  {
    key: 'height',
    values: [64, 128, 256],
  },
];

const allCases = [...basicCases, ...genStyleColorCommonProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Rect"></GenMain>
  );
}
