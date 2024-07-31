import React from 'react';
import {View} from 'react-native';
import {jest, test} from '@jest/globals';
import {fireEvent, screen} from '@testing-library/react-native';
import {measureRenders} from 'reassure';
import {AsyncComponent} from './AsyncComponent';

jest.setTimeout(600_000);

test('MeasureRenders scenario', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.press(button);
    fireEvent.press(button);
    await screen.findByText('Count: 2');
  };

  await measureRenders(<AsyncComponent />, {scenario});
});

test('MeasureRenders 5 runs', async () => {
  await measureRenders(<AsyncComponent />, {runs: 5});
});

test('MeasureRenders 15 runs', async () => {
  await measureRenders(<AsyncComponent />, {runs: 15});
});

test('MeasureRenders 10 warmupRuns', async () => {
  await measureRenders(<AsyncComponent />, {warmupRuns: 10});
});

test('MeasureRenders 5 warmupRuns', async () => {
  await measureRenders(<AsyncComponent />, {warmupRuns: 5});
});

test('MeasureRenders wrapper', async () => {
  await measureRenders(<AsyncComponent />, {
    wrapper: ({children}) => <View>{children}</View>,
  });
});

test('MeasureRenders writeFile false', async () => {
  await measureRenders(<AsyncComponent />, {writeFile: false});
});

test('MeasureRenders writeFile true', async () => {
  await measureRenders(<AsyncComponent />, {writeFile: true});
});
