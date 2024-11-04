import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {vec} from '@shopify/react-native-skia';

const colors = ['#61dafb', '#fb61da', '#61fbcf', '#dafb61'];
const C = 64;
const width = 256;
const topLeft = {pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0)};
const topRight = {
  pos: vec(width, 0),
  c1: vec(width, C),
  c2: vec(width + C, 0),
};
const bottomRight = {
  pos: vec(width, width),
  c1: vec(width, width - 2 * C),
  c2: vec(width - 2 * C, width),
};
const bottomLeft = {
  pos: vec(0, width),
  c1: vec(0, width - 2 * C),
  c2: vec(-2 * C, width),
};

const point1 = vec(0, 0);
const point2 = vec(width, 0);
const point3 = vec(width, width);
const point4 = vec(0, width);

const basicProps = {
  colors: colors,
  patch: [topLeft, topRight, bottomRight, bottomLeft],
  texture: [point1, point2, point3, point4],
  blendMode: 'srcOver',
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'patch',
    values: [
      {
        colors: colors,
        patch: [topLeft, topRight, bottomRight, bottomLeft],
        texture: [point1, point2, point3, point4],
        blendMode: 'srcOver',
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
      comName="Patch"></GenMain>
  );
}
