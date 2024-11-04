import React from 'react';
import {CaseParams, genStyleColorCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const size = 256;
const r = size * 0.2;
const rrct = {
  rect: {x: 0, y: 0, width: size, height: size},
  topLeft: {x: 0, y: 0},
  topRight: {x: r, y: r},
  bottomRight: {x: 0, y: 0},
  bottomLeft: {x: r, y: r},
};

const basicProps = {
  x: 0,
  y: 0,
  width: 256,
  height: 256,
  color: 'lightblue',
  r: 25,
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
  {
    key: 'r',
    values: [10, 20, 30],
  },
  {
    key: 'rect',
    values: [rrct],
  },
];

const allCases = [...basicCases, ...genStyleColorCommonProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="RoundedRect"></GenMain>
  );
}
