
import React from 'react';
import { View } from 'react-native';
import { Pagination } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const locale = {
    prevText: '上一步',
    nextText: '下一步',
  }
  return (
    <TestSuite name="PaginationTest">
      <TestCase itShould="render a Pagination mode=number" tags={['C_API']}>
        <View>
          <Pagination mode="number" total={5} current={3} />
        </View>
      </TestCase>
      <TestCase itShould="render a Pagination  mode=pointer" tags={['C_API']}>
        <View>
          <Pagination mode="pointer" total={5} current={2} />
        </View>
      </TestCase>
      <TestCase itShould="render a Pagination current={1}" tags={['C_API']}>
        <Pagination total={5} current={1} />
      </TestCase>
      <TestCase itShould="render a Pagination total={10}" tags={['C_API']}>
        <View>
          <Pagination total={10} current={2} />
        </View>
      </TestCase>
      <TestCase itShould="render a Pagination simple={true}" tags={['C_API']}>
        <Pagination simple total={5} current={1} />
      </TestCase>
      <TestCase itShould="render a Pagination locale='上一步'" tags={['C_API']}>
        <Pagination total={5} current={1} locale={locale} />
      </TestCase>
      <TestCase itShould="render a Pagination onChange()" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <Pagination total={5} current={1} onChange={((e) => { setState(100) })} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(100);
        }}>
      </TestCase>
    </TestSuite>
  );
};
