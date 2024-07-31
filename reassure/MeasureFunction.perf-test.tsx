import {measureFunction} from 'reassure';

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

test('MeasureFunction runs 10', async () => {
  await measureFunction(() => fib(30), {runs: 10});
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

test('MeasureFunction writeFile 20', async () => {
  await measureFunction(() => fib(30), {writeFile: false});
});

test('MeasureFunction writeFile 20', async () => {
  await measureFunction(() => fib(30), {writeFile: true});
});
