import {test} from '@jest/globals';
import {measureFunction, resetToDefaults} from 'reassure';

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

test('ResetToDefault runs 10', async () => {
  await measureFunction(() => fib(30), {runs: 10});
});

resetToDefaults();

test('ResetToDefault runs 20', async () => {
  await measureFunction(() => fib(30), {runs: 20});
});
