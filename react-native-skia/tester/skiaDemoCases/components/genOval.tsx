import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

const basicProps = {
  x: 100,
  y: 10,
  width: 50,
  height: 100,
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'oval',
    values: [
      {
        x: 100,
        y: 10,
        width: 50,
        height: 100,
        color: 'red',
      },
      {
        x: 100,
        y: 30,
        width: 60,
        height: 120,
      },
      {
        x: 100,
        y: 40,
        width: 100,
        height: 50,
        color: 'skyblue',
      },
      {
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        color: '#ff00ee',
        style: 'fill',
      },
      {
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        color: '#ff00ee',
        style: 'stroke',
        strokeWidth: 5,
      },
    ],
  },
];

const allCases = [...basicCases];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Oval"></GenMain>
  );
}
