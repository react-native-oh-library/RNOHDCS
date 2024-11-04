import React from 'react';
import {CaseParams, genImage_fitProps} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {useImage} from '@shopify/react-native-skia';

export default function () {
  const image = useImage(require('../../assets/oslo.jpg'));

  const basicProps = {
    image: image,
    x: 0,
    y: 0,
    width: 256,
    height: 256,
    fit: 'contain',
  };
  const basicCases: CaseParams[] = [
    {
      type: 'mulKey',
      id: 'image',
      values: [
        {
          image: image,
          x: 0,
          y: 0,
          width: 256,
          height: 256,
          fit: 'contain',
        },
      ],
    },
  ];

  const allCases = [...basicCases, ...genImage_fitProps()];

  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="Image"></GenMain>
  );
}
