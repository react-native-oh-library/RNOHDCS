import {LogicalTestCase, TestCase as _TestCase} from '@rnoh/testerino';
import {SmartManualTestCaseProps} from '@rnoh/testerino/src/react-native/ManualTestCase';
import React from 'react';
import {Platform} from 'react-native';

export const TestCase = {
  Example: Example,
  Manual: Manual,
  Logical: Logical,
};

type TesterTag = 'dev' | 'C_API';

type TesterHarmonySkipProp =
  | boolean
  | string
  | {
      arkTS: string | boolean;
      cAPI: string | boolean;
    };

type TesterSkipProp =
  | {
      android: string | boolean;
      harmony: TesterHarmonySkipProp;
    }
  | string;

function prepareSkipProp(
  skipProp: TesterSkipProp | undefined,
  tags: TesterTag[] | undefined,
) {
  const isCAPI =
    'rnohArchitecture' in Platform.constants &&
    Platform.constants.rnohArchitecture === 'C_API';
  if (isCAPI && !tags?.includes('C_API')) {
    return 'Not supported in C-Api architecture';
  }

  return skipProp
    ? typeof skipProp === 'string'
      ? skipProp
      : Platform.select({
          android: skipProp?.android,
          harmony: prepareHarmonySkipProp(skipProp?.harmony),
        })
    : undefined;
}

function prepareHarmonySkipProp(
  skipProp: TesterHarmonySkipProp,
): string | boolean {
  if (typeof skipProp === 'string' || typeof skipProp === 'boolean') {
    return skipProp;
  } else {
    return 'rnohArchitecture' in Platform.constants &&
      Platform.constants.rnohArchitecture === 'C_API'
      ? skipProp?.cAPI
      : skipProp?.arkTS;
  }
}

export function Example({
  itShould,
  children,
  skip,
  tags,
  modal,
}: {
  itShould: string;
  children: any;
  modal?: boolean;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip, tags)}>
      {children}
    </_TestCase>
  );
}

export function Manual<TState = undefined>({
  itShould,
  skip,
  tags,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>['arrange'];
  assert: SmartManualTestCaseProps<TState>['assert'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip, tags)}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}

export function Logical({
  itShould,
  skip,
  tags,
  fn,
}: {
  itShould: string;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
  fn: React.ComponentProps<typeof LogicalTestCase>['fn'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      skip={prepareSkipProp(skip, tags)}
      tags={tags}
      fn={fn}
    />
  );
}