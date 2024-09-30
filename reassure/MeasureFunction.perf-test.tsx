import {measureFunction} from 'reassure';
import {test} from '@jest/globals';

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

test('MeasureFunction runs 10', async () => {
  await measureFunction(() => fib(20), {runs: 10});
});

test('MeasureFunction runs 20', async () => {
  await measureFunction(() => fib(30), {runs: 20});
});

test('MeasureFunction warmupRuns 10', async () => {
  await measureFunction(() => fib(30), {warmupRuns: 10});
});

test('MeasureFunction warmupRuns 20', async () => {
  await measureFunction(() => fib(30), {warmupRuns: 20});
});

test('MeasureFunction writeFile false', async () => {
  await measureFunction(() => fib(30), {writeFile: false});
});

test('MeasureFunction writeFile true', async () => {
  await measureFunction(() => fib(30), {writeFile: true});
});
