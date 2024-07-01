
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextareaItem } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  return (
    <TestSuite name="TextareaItemTest">
      <TestCase itShould="TextareaItem value" tags={['C_API']}>
        <TextareaItem value={value} onChange={(value: any) => { setValue(value) }} placeholder="请输入..." />
      </TestCase>
      <TestCase itShould="TextareaItem defaultValue='默认值'" tags={['C_API']}>
        <TextareaItem value={value1} onChange={(value: any) => { setValue1(value) }} defaultValue='默认值' placeholder="请输入..." />
      </TestCase>
      <TestCase itShould="TextareaItem placeholder='please input...'" tags={['C_API']}>
        <TextareaItem value={value2} onChange={(value: any) => { setValue2(value) }} placeholder="please input..." />
      </TestCase>
      <TestCase itShould="TextareaItem editable=false" tags={['C_API']}>
        <TextareaItem value="不可编辑 editable = {false}" editable={false} />
      </TestCase>
      <TestCase itShould="TextareaItem disabled=true" tags={['C_API']}>
        <TextareaItem value={value3} placeholder='禁用' onChange={(value: any) => { setValue3(value) }} disabled={true} />
      </TestCase>
      <TestCase itShould="TextareaItem clear=false" tags={['C_API']}>
        <TextareaItem value={value4} placeholder='不显示清除按钮' onChange={(value: any) => { setValue4(value) }} clear={false} />
      </TestCase>
      <TestCase itShould="TextareaItem support rows={4}" tags={['C_API']}>
        <TextareaItem rows={4} value={value5} onChange={(value: any) => { setValue5(value) }} placeholder="固定行数" />
      </TestCase>
      <TestCase itShould="TextareaItem count={100}" tags={['C_API']}>
        <TextareaItem rows={4} placeholder="多行带计数" count={100} />
      </TestCase>
      <TestCase itShould="TextareaItem onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <View>
            <TextareaItem value={value6} defaultValue={value} onChange={(value: any) => {
              setValue6(value);
              setState(true);
            }} />
            <Text>值：{value6}</Text>
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="TextareaItem error={true}" tags={['C_API']}>
        <TextareaItem placeholder="error" error={true} />
      </TestCase>
      <TestCase itShould="TextareaItem onErrorClick()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => setState(true)}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="TextareaItem autoHeight" tags={['C_API']}>
        <TextareaItem placeholder="高度自适应" autoHeight />
      </TestCase>
      <TestCase itShould="TextareaItem labelNumber={3}" tags={['C_API']}>
        <TextareaItem labelNumber={3} placeholder="定宽枚举值" />
      </TestCase>
      <TestCase itShould="render a TextareaItem support last" tags={['C_API']}>
        <TextareaItem last={true} placeholder="如果是最后一项，则将移除borderBottom" />
      </TestCase>
    </TestSuite>
  );
};