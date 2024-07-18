import React from 'react';
import {jest, test} from '@jest/globals';
import {measureRenders} from 'reassure';
import {Button, TextInput, SafeAreaView} from 'react-native';

jest.setTimeout(600_000);

test('RN Button', async () => {
  await measureRenders(<Button title="test" />);
});

test('RN Button', async () => {
  await measureRenders(<TextInput />, {runs: 5});
});

test('RN TextInput 10 runs', async () => {
  await measureRenders(<TextInput />, {runs: 10});
});

test('RN TextInput 10 warmupRuns', async () => {
  await measureRenders(<Button title="test" />, {warmupRuns: 10});
});

test('RN TextInput 5 warmupRuns', async () => {
  await measureRenders(<Button title="test" />, {warmupRuns: 5});
});

test('RN SafeAreaView writeFile false', async () => {
  await measureRenders(<SafeAreaView />, {writeFile: false});
});

test('RN SafeAreaView writeFile true', async () => {
  await measureRenders(<SafeAreaView />, {writeFile: true});
});
