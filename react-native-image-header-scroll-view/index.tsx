import {TestSuite, Tester} from '@rnoh/testerino';
import React, { Fragment } from 'react';
import {ImageHeaderPropertyTest} from './propertyTest';
import {ImageHeaderDemoTest} from './demoTest';

export default function ImageHeaderScrollViewTest() {
  return (
      <Tester style={{paddingTop: 50}}>
        <TestSuite name="ImageHeaderScrollView">
          <ImageHeaderPropertyTest />
          <ImageHeaderDemoTest />
        </TestSuite>
      </Tester>
  );
}
