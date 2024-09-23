import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, List } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
const TextArea = Input.TextArea
export default () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState<any>('我是value');
  return (
    <View style={{ marginBottom: 300 }}>
      <TestSuite name="InputTest">
        <TestCase itShould="Input allowClear={true}, allowClear={false}" tags={['C_API']}>
          <Input allowClear={true} placeholder="请输入内容" />
          <Input allowClear={false} placeholder="请输入内容" />
        </TestCase>
        <TestCase itShould="Input defaultValue='默认值'" tags={['C_API']}>
          <Input defaultValue='默认值' />
        </TestCase>
        <TestCase itShould="Input disabled={true}, disabled={false}" tags={['C_API']}>
          <Input disabled={true} placeholder='禁用' />
          <Input disabled={false} placeholder='可用' />
        </TestCase>
        <TestCase itShould="Input  maxLength={5}, maxLength={10}" tags={['C_API']}>
          <Input placeholder='可用' maxLength={5} />
          <Input placeholder='可用' maxLength={10} />
        </TestCase>
        <TestCase itShould="support prefix='前缀'" tags={['C_API']}>
          <Input prefix="前缀" placeholder="prefix" />
        </TestCase>
        <TestCase itShould="support suffix='后缀'" tags={['C_API']}>
          <Input suffix="后缀" placeholder="suffix" />
        </TestCase>
        <TestCase itShould="Input support showCount={true}, showCount={false}, showCount=formatter" tags={['C_API']}>
          <Input showCount placeholder="showCount" />
          <Input showCount={false} placeholder="showCount" />
          <Input
            maxLength={5}
            showCount={{
              formatter: (value: any) => {
                const { count, maxLength } = value
                return `${count}/${maxLength}`
              }
            }}
            placeholder="showCount.formatter"
          />
        </TestCase>
        <TestCase itShould="Input support status='warning', status='error'" tags={['C_API']}>
          <Input status='warning' placeholder="status='warning'" />
          <Input status='error' placeholder="status='error'" />
        </TestCase>
        <TestCase itShould="Input support inputStyle={{ fontSize: 30 }}" tags={['C_API']}>
          <Input placeholder="inputStyle" inputStyle={{ fontSize: 30 }} />
        </TestCase>
        <TestCase itShould="Input support style={{backgroundColor:'aqua'}}" tags={['C_API']}>
          <Input placeholder="Style" style={{ backgroundColor: 'aqua' }} />
        </TestCase>
        <TestCase itShould="Input support styles={{ clearIcon: {backgroundColor:'green' } }}" tags={['C_API']}>
          <Input placeholder="Styles" allowClear styles={{ clearIcon: { backgroundColor: 'green' } }} />
        </TestCase>
        <TestCase itShould="Input support type='text', type='number', placeholder='password'" tags={['C_API']}>
          <Input placeholder="text" type='text' />
          <Input placeholder="number" type='number' />
          <Input placeholder="password" type='password' />
        </TestCase>
        <TestCase itShould="Input support value" tags={['C_API']}>
          <Input
            placeholder="请输入内容"
            value={value1}
            onChange={(e: any) => { setValue1(e.target.value) }}
          />
          <Text>value:{value1}</Text>
        </TestCase>
        <TestCase itShould="Input support onChange()" tags={['C_API']} initialState={false}
          arrange={({ setState }: any) =>
            <Input
              placeholder="请输入内容"
              value={value}
              onChange={(val: any) => { setValue(val); setState(true); }}
            />
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}>
        </TestCase>
        <TestCase itShould="Input.TextArea row={6}, row={2}" tags={['C_API']}>
          <View>
            <TextArea
              rows={6}
              // autoSize={false}
              placeholder="固定行数 row={6}"
            />
          </View>
          <Input.TextArea
            rows={2}
            // autoSize={false}
            placeholder="固定行数 row={2}"
          />
        </TestCase>
        <TestCase itShould="Input.TextArea autoSize={true}, autoSize={{ minRows: 2, maxRows: 6 }}" tags={['C_API']}>
          <List renderHeader="根据内容自动调整高度">
            <List.Item>
              <Input.TextArea autoSize placeholder="autoSize={true}" />
            </List.Item>
            <List.Item>
              <Input.TextArea autoSize={false} placeholder="autoSize={false}" />
            </List.Item>
            <List.Item>
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                placeholder="autoSize={{ minRows: 2, maxRows: 6 }}"
              />
            </List.Item>
          </List>
        </TestCase>
        <TestCase itShould="Input.TextArea styles={{ input: { backgroundColor: 'pink' } }}" tags={['C_API']}>
          <Input.TextArea
            placeholder="styles"
            styles={{ input: { backgroundColor: 'pink' } }}
          />
        </TestCase>
      </TestSuite>
    </View>
  );
};