import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';

import {useImage, vec} from '@shopify/react-native-skia';

export default function () {
  const image = useImage(require('../../assets/oslo.jpg'));
  if (!image) {
    return null;
  }

  const basicProps = {
    c: vec(128),
    r: 100,
    color: 'lightblue',
  };

  const childBasicProps = {
    blur: 20,
  };

  const basicCases: CaseParams[] = [
    {
      key: 'blur',
      values: [10, 20, 30],
    },
    {
      key: 'style',
      values: ['normal', 'solid', 'outer', 'inner'],
    },
    {
      key: 'respectCTM',
      values: [true, false],
    },
  ];

  const allCases = [...basicCases];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Circle"
      isShowChild={true}
      childComName="BlurMask"
      childBasicProps={childBasicProps}></GenMain>
  );
}
