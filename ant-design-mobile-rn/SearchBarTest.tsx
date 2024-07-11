
import React, { useState } from 'react';
import { SearchBar, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value, setValue] = useState('');

  return (
    <TestSuite name="SearchBarTest">
      <TestCase itShould="SearchBar defaultValue='初始值'" tags={['C_API']}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
      </TestCase>
      <TestCase itShould="SearchBar placeholder='请搜索...'" tags={['C_API']}>
        <SearchBar placeholder="请搜索..." />
      </TestCase>
      <TestCase itShould="SearchBar value" tags={['C_API']}>
        <SearchBar placeholder="请搜索..." value={value} onChange={(value: any) => { setValue(value) }} />
      </TestCase>
      <TestCase itShould="SearchBar onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SearchBar placeholder="请搜索..." onChange={() => { setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="SearchBar onCancel()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SearchBar placeholder="请搜索..." onCancel={() => { setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="SearchBar onSubmit()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SearchBar placeholder="请搜索..." onSubmit={() => { setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="SearchBar onFocus()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SearchBar placeholder="请搜索..." onFocus={() => { setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="SearchBar onBlur()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <SearchBar placeholder="请搜索..." onBlur={() => { setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="SearchBar showCancelButton=true" tags={['C_API']}>
        <SearchBar showCancelButton={true} />
      </TestCase>
      <TestCase itShould="SearchBar cancelText='清除'" tags={['C_API']}>
        <SearchBar showCancelButton={true} cancelText='清除' />
      </TestCase>
      <TestCase itShould="SearchBar disabled" tags={['C_API']}>
        <SearchBar disabled />
      </TestCase>
    </TestSuite>
  );
};
