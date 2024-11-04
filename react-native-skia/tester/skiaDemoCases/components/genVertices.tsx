import React from 'react';
import {CaseParams, genPaint_BlendModeProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {vec} from '@shopify/react-native-skia';

const vertices = [vec(0, 0), vec(256, 0), vec(256, 256), vec(0, 256)];
const colors = ['#61DAFB', '#fb61da', '#dafb61', '#61fbcf'];
const triangle1 = [0, 1, 2];
const triangle2 = [0, 2, 3];
const indices = [...triangle1, ...triangle2];

const basicProps = {
  vertices: vertices,
  colors: colors,
  indices: indices,
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'vertices',
    values: [
      {
        vertices: vertices,
        colors: colors,
        indices: indices,
      },
    ],
  },
];

const allCases = [...basicCases, ...genPaint_BlendModeProps()];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Vertices"></GenMain>
  );
}
