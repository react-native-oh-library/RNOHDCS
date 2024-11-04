import React from 'react';
import {CaseParams} from '../gen/genUtil';
import {GenMain} from '../gen/gen';
import {rrect, rect} from '@shopify/react-native-skia';

const outer = rrect(rect(0, 0, 256, 256), 25, 25);
const outer1 = rrect(rect(0, 0, 256, 256), 20, 20);
const outer2 = rrect(rect(0, 0, 256, 256), 15, 15);

const inner = rrect(rect(50, 50, 256 - 100, 256 - 100), 50, 50);
const inner1 = rrect(rect(30, 30, 256 - 60, 256 - 60), 30, 30);
const inner2 = rrect(rect(20, 30, 256 - 40, 256 - 40), 20, 20);

const basicProps = {
  inner: inner,
  outer: outer,
  color: 'lightblue',
};
const basicCases: CaseParams[] = [
  {
    key: 'inner',
    values: [inner, inner1, inner2],
  },
  {
    key: 'outer',
    values: [outer, outer1, outer2],
  },
  {
    key: 'color',
    values: ['red', '#ff00ee', 'green'],
  },
];

const allCases = [...basicCases];

export default function () {
  return (
    <GenMain
      cases={allCases}
      basicProps={basicProps}
      noGroup={true}
      comName="DiffRect"></GenMain>
  );
}
