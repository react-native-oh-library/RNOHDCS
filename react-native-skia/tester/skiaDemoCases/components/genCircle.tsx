import React from 'react';
import {CaseParams, genStrokeWidthColorCommonProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const basicProps = {
  cx: 100,
  cy: 100,
  r: 50,
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'circle',
    values: [
      {
        cx: 100,
        cy: 100,
        r: 60,
        color: 'red',
      },
      {
        cx: 120,
        cy: 120,
        r: 50,
      },
      {
        cx: 140,
        cy: 140,
        r: 40,
        color: 'skyblue',
      },
      {
        cx: 100,
        cy: 100,
        r: 80,
        color: '#ff00ee',
        style: 'fill',
      },
      {
        cx: 100,
        cy: 100,
        r: 80,
        color: '#ff00ee',
        style: 'stroke',
        strokeWidth: 5,
      },
    ],
  },
];

const allCases = [...basicCases, ...genStrokeWidthColorCommonProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Circle"></GenMain>
  );
}
