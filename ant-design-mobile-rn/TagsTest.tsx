
import React, { useState } from 'react';
import { View } from 'react-native';
import { Tag, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  function onChange(selected: any) {
    Toast.info(`tag selected: ${selected}`, 1);
  }
  return (
    <TestSuite name="TagTest">
      <TestCase itShould="Tag small" tags={['C_API']}>
        <View style={{ backgroundColor: 'red' }}>
          <Tag small>{'small'}</Tag>
        </View>
      </TestCase>
      <TestCase itShould="Tag disabled" tags={['C_API']}>
        <View style={{ backgroundColor: 'red' }}>
          <Tag disabled>Disabled</Tag>
        </View>
      </TestCase>
      <TestCase itShould="Tag closable" tags={['C_API']}>
        <View style={{ backgroundColor: 'red' }}>
          <Tag closable>{'closable'}</Tag>
        </View>
      </TestCase>
      <TestCase itShould="Tag selected" tags={['C_API']}>
        <View style={{ backgroundColor: 'red' }}>
          <Tag selected>Selected</Tag>
        </View>
      </TestCase>
      <TestCase itShould="Tag onChange()" tags={['C_API']}>
        <View style={{ backgroundColor: 'red' }}>
          <Tag selected onChange={onChange}>{'onChange'}</Tag>
        </View>
      </TestCase>
      <TestCase itShould="Tag onClose()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={{ backgroundColor: 'red' }}>
            <Tag
              closable
              onClose={() => {
                Toast.info('onClose', 1);
                setState(true);
              }}
            >
              {'onClose'}
            </Tag>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="Tag afterClose()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={{ backgroundColor: 'red' }}>
            <Tag
              closable
              afterClose={() => {
                let timer: any = null;
                timer = setTimeout(() => {
                  Toast.info('afterClose');
                  setState(true);
                  clearTimeout(timer);
                }, 2000)
              }}>
              {'afterClose'}
            </Tag>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>

      </TestCase>
      <TestCase itShould="Tag onLongPress()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View style={{ backgroundColor: 'red' }}>
            <Tag
              onLongPress={() => {
                Toast.info('onLongPress');
                setState(true);
              }}>
              LongPress
            </Tag>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};