import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

import {useImage} from '@shopify/react-native-skia';

export default function () {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }

  const basicProps = {
    x: 0,
    y: 0,
    width: 256,
    height: 256,
    image: image,
    fit: 'cover',
  };

  const childBasicProps = {
    blur: 4,
  };

  const basicCases: CaseParams[] = [
    {
      key: 'blur',
      values: [1, 3, 5],
    },
    {
      key: 'mode',
      values: ['mirror', 'repeat', 'clamp', 'decal'],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Image"
      isShowChild={true}
      childComName="Blur"
      childBasicProps={childBasicProps}></GenMain>
  );
}
