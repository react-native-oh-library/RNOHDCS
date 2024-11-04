import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {Skia, createPicture, BlendMode, rect} from '@shopify/react-native-skia';

const picture = createPicture(canvas => {
  const size = 256;
  const r = 0.33 * size;
  const paint = Skia.Paint();
  paint.setBlendMode(BlendMode.Multiply);

  paint.setColor(Skia.Color('cyan'));
  canvas.drawCircle(r, r, r, paint);

  paint.setColor(Skia.Color('magenta'));
  canvas.drawCircle(size - r, r, r, paint);

  paint.setColor(Skia.Color('yellow'));
  canvas.drawCircle(size / 2, size - r, r, paint);
});

const picture1 = createPicture(canvas => {
  const size = 256;
  const r = 0.33 * size;
  const paint = Skia.Paint();
  paint.setBlendMode(BlendMode.Multiply);

  paint.setColor(Skia.Color('cyan'));
  canvas.drawOval(rect(r / 2, 0, r, r * 2), paint);

  paint.setColor(Skia.Color('magenta'));
  canvas.drawOval(rect(r, 0, r, r * 2), paint);

  paint.setColor(Skia.Color('yellow'));
  canvas.drawOval(rect(r - r / 4, r, r, r * 2), paint);
});

const basicProps = {
  picture: picture,
};
const basicCases: CaseParams[] = [
  {
    type: 'mulKey',
    id: 'picture1',
    desc: 'picture=drawCircle',
    values: [
      {
        picture: picture,
      },
    ],
  },
  {
    type: 'mulKey',
    id: 'picture2',
    desc: 'picture=drawOval',
    values: [
      {
        picture: picture1,
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
      comName="Picture"></GenMain>
  );
}
