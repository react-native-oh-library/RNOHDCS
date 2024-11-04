import React from 'react';
import {View, Text as QText, ScrollView} from 'react-native';
import {Tester, Filter, TestCase, TestSuite} from '@rnoh/testerino';
import {CaseParams} from './genUtil';

import * as ASKIA from '@shopify/react-native-skia';
import {Canvas, Group} from '@shopify/react-native-skia';

export interface RenderCaseProps {
  _case: CaseParams;
  basicProps: Object;
  comName: string;
  children?: React.ReactNode;
  bindFunc?: Object;
  renderComChildren?: React.ReactNode | string;
  noGroup?: boolean;

  //组合组件使用
  isShowChild?: boolean;
  childComName?: string;
  childBasicProps?: Object;
}

function deepMerge<T extends object, U extends object>(
  obj1: T,
  obj2: U,
  mergeValues: boolean = true,
): T & U {
  const result: any = {...obj1};

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      //@ts-ignore
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (!mergeValues) {
        continue;
      }

      if (
        val1 &&
        typeof val1 === 'object' &&
        val2 &&
        typeof val2 === 'object'
      ) {
        result[key] = deepMerge(val1, val2, mergeValues);
      } else {
        result[key] = val2;
      }
    }
  }

  return result as T & U;
}

function RenderCase({
  _case,
  basicProps,
  comName,
  renderComChildren,
  bindFunc,
  noGroup,

  isShowChild,
  childComName,
  childBasicProps,

  ...props
}: RenderCaseProps) {
  const type = _case.type || 'key-value';
  return (
    <View
      style={{
        backgroundColor: '#000',
      }}
      key={_case.id || _case.key || JSON.stringify(_case.values)}>
      {(_case.values || []).map((v, i) => {
        //@ts-ignore
        const Com = ASKIA[comName];
        const caseProps = type === 'key-value' ? {[_case.key as string]: v} : v;
        let showProps = deepMerge(
          caseProps,
          _case.othersProps || {},
          _case.showOtherProps,
        );
        const word =
          type === 'key-value'
            ? `${_case.key}=${JSON.stringify(v)}`
            : `${JSON.stringify(showProps)}`;

        //@ts-ignore
        const ChildCom = ASKIA[childComName];

        return (
          <TestCase itShould={`${_case.desc || word}`} key={word}>
            <View style={{padding: 10, alignItems: 'center'}}>
              <Canvas style={{flex: 1, width: 256, height: 256}}>
                {isShowChild ? (
                  <Com {...basicProps}>
                    <ChildCom
                      {...childBasicProps}
                      {..._case.othersProps}
                      {...caseProps}
                      {...bindFunc}>
                      {renderComChildren}
                    </ChildCom>
                  </Com>
                ) : noGroup ? (
                  <Com
                    {...basicProps}
                    {..._case.othersProps}
                    {...caseProps}
                    {...bindFunc}>
                    {renderComChildren}
                  </Com>
                ) : (
                  <Group>
                    <Com
                      {...basicProps}
                      {..._case.othersProps}
                      {...caseProps}
                      {...bindFunc}>
                      {renderComChildren}
                    </Com>
                  </Group>
                )}
              </Canvas>
            </View>
          </TestCase>
        );
      })}
    </View>
  );
}
export interface GenMainProps {
  cases: CaseParams[];
  basicProps: Object;
  comName: string;
  children?: React.ReactNode;
  bindFunc?: Object;
  renderComChildren?: React.ReactNode | string;
  noGroup?: boolean;

  //组合组件使用
  isShowChild?: boolean;
  childComName?: string;
  childBasicProps?: Object;
}
export function GenMain({
  cases,
  basicProps,
  comName,
  children,
  bindFunc,
  renderComChildren,
  noGroup,

  isShowChild,
  childComName,
  childBasicProps,
}: GenMainProps) {
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        {cases.map(_case => {
          return (
            <RenderCase
              _case={_case}
              basicProps={basicProps}
              comName={comName}
              key={_case.key || _case.id}
              renderComChildren={renderComChildren}
              bindFunc={bindFunc}
              noGroup={noGroup}
              isShowChild={isShowChild}
              childComName={childComName}
              childBasicProps={childBasicProps}
            />
          );
        })}
        {children}
      </ScrollView>
    </Tester>
  );
}
