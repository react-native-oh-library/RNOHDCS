import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {Skia} from '@shopify/react-native-skia';

const path = Skia.Path.Make();
path.moveTo(128, 0);
path.lineTo(168, 80);
path.lineTo(256, 93);
path.lineTo(192, 155);
path.lineTo(207, 244);
path.lineTo(128, 202);
path.lineTo(49, 244);
path.lineTo(64, 155);
path.lineTo(0, 93);
path.lineTo(88, 80);
path.lineTo(128, 0);
path.close();

const basicProps = {
  path: 'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  color: 'lightblue',
};
const basicCases: CaseParams[] = [
  {
    key: 'path',
    values: [
      'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
      path,
    ],
  },
  {
    key: 'color',
    values: ['red', '#ff00ee', 'green'],
  },
  {
    key: 'style',
    values: ['stroke', 'fill'],
  },
  {
    key: 'strokeWidth',
    values: [1, 5, 8],
    othersProps: {
      style: 'stroke',
    },
  },
  {
    key: 'start',
    values: [0.15, 0.25, 0.35],
    othersProps: {
      style: 'stroke',
      strokeWidth: 5,
    },
  },
  {
    key: 'end',
    values: [0.75, 0.55, 0.35],
    othersProps: {
      style: 'stroke',
      strokeWidth: 2,
    },
  },
];

const allCases = [...basicCases];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Path"></GenMain>
  );
}
