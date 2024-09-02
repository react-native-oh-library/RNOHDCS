import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import {GenMain} from './gen';
import {
  genTransformProps,
  genTouchableProps,
  genFillProps,
  CaseParams,
  genStrokeProps,
} from '../genUtil';
const basicProps = {
  width: 80,
  height: 80,
  fill: 'red',
};

const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'rect1',
    values: [
      {
        width: 30,
        height: 60,
      },
      {
        width: 90,
        height: 60,
        fill: 'green',
      },
      {
        width: 90,
        height: 60,
        fill: 'green',
        opacity:'0.5'
      },

      {
        width: 90,
        height: 60,
        fill: 'green',
        opacity:'0.1'
      },
      {
        width: 90,
        height: 60,
        fill: 'green',
        rx:10,
        ry:10
      },
      {
        width: 90,
        height: 60,
        fill: 'green',
        rx:30,
        ry:10
      },
    ],
  },
];

const allCases: CaseParams[] = [
  ...basicCases,
  ...genFillProps(),
  ...genStrokeProps(),
  ...genTransformProps(),
];

const bindFunc = {
  ...genTouchableProps('Rect'),
};

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      comName="Rect"
      bindFunc={bindFunc}
    />
  );
}
