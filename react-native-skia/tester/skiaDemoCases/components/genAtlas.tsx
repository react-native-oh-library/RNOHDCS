import React from 'react';
import {CaseParams, genPaint_BlendModeProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {Skia, drawAsImage, Group, Rect, rect} from '@shopify/react-native-skia';

const size = {width: 25, height: 11.25};
const strokeWidth = 2;
const imageSize = {
  width: size.width + strokeWidth,
  height: size.height + strokeWidth,
};
const image = drawAsImage(
  <Group>
    <Rect
      rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
      color="cyan"
    />
    <Rect
      rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
      color="blue"
      style="stroke"
      strokeWidth={strokeWidth}
    />
  </Group>,
  imageSize,
);

const numberOfBoxes = 150;
const pos = {x: 128, y: 128};
const width = 256;
const sprites = new Array(numberOfBoxes)
  .fill(0)
  .map(() => rect(0, 0, imageSize.width, imageSize.height));
const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
  const tx = 5 + ((i * size.width) % width);
  const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
  const r = Math.atan2(pos.y - ty, pos.x - tx);
  return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
});

const basicProps = {
  image: image,
  sprites: sprites,
  transforms: transforms,
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'atlas',
    desc: 'image={image} sprites={sprites} transforms={transforms}',
    values: [
      {
        image: image,
        sprites: sprites,
        transforms: transforms,
      },
    ],
  },
  {
    type: 'mulKey',
    id: 'atlas use blendMode with colors and sprites',
    desc: 'colors=[Float32Array.of(0, 0, 1, 1),Float32Array.of(0, 0, 0, 1),Float32Array.of(1, 0, 0, 1),]',
    values: [
      {
        image: image,
        sprites: sprites,
        transforms: transforms,
        colors: [
          Float32Array.of(0, 0, 1, 1),
          Float32Array.of(0, 0, 0, 1),
          Float32Array.of(1, 0, 0, 1),
        ],
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
      comName="Atlas"></GenMain>
  );
}
