import React from 'react';
import {jest, test} from '@jest/globals';
import {fireEvent, screen} from '@testing-library/react-native';
import {measurePerformance} from 'reassure';
import {AsyncComponent} from './AsyncComponent';

test('RN CLI - MeasureRenders 5 runs', async () => {
  await measurePerformance(<AsyncComponent />, {runs: 5});
});

test('RN CLI - MeasureRenders 10 runs', async () => {
  await measurePerformance(<AsyncComponent />, {runs: 10});
});

test('RN CLI - MeasureRenders 10 warmupRuns', async () => {
  await measurePerformance(<AsyncComponent />, {warmupRuns: 10});
});

test('RN CLI - MeasureRenders 5 warmupRuns', async () => {
  await measurePerformance(<AsyncComponent />, {warmupRuns: 5});
});

test('RN CLI - MeasureRenders writeFile', async () => {
  await measurePerformance(<AsyncComponent />, {writeFile: false});
});

test('RN CLI - MeasureRenders writeFile', async () => {
  await measurePerformance(<AsyncComponent />, {writeFile: true});
});
