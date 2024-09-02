
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        <Text>value:{value}</Text>
      </TestCase>
      <TestCase itShould="TextareaItem defaultValue='wwww'" tags={['C_API']}>
        <TextareaItem onChange={(value: any) => { setValue1(value) }} defaultValue='wwww' placeholder="请输入..." />
      </TestCase>
      <TestCase itShould="TextareaItem placeholder='please input...'" tags={['C_API']}>
        <TextareaItem value={value2} onChange={(value: any) => { setValue2(value) }} placeholder="please input..." />
      </TestCase>
      <TestCase itShould="TextareaItem editable=false, editable={true}" tags={['C_API']}>
        <TextareaItem value="不可编辑 editable = {false}" editable={false} />
        <TextareaItem value="可编辑 editable = {true}" editable={true} />
      </TestCase>
      <TestCase itShould="TextareaItem disabled=true, disabled={false}" tags={['C_API']}>
        <TextareaItem value={value3} placeholder='禁用' onChange={(value: any) => { setValue3(value) }} disabled={true} />
        <TextareaItem value={value3} placeholder='可用' onChange={(value: any) => { setValue3(value) }} disabled={false} />
      </TestCase>
      <TestCase itShould="TextareaItem clear=false, clear={true}" tags={['C_API']}>
        <TextareaItem value={value4} placeholder='不显示清除按钮' onChange={(value: any) => { setValue4(value) }} clear={false} />
        <TextareaItem value={value4} placeholder='显示清除按钮' onChange={(value: any) => { setValue4(value) }} clear={true} />
      </TestCase>
      <TestCase itShould="TextareaItem rows={4}, rows={2}" tags={['C_API']}>
        <TextareaItem rows={4} value={value5} onChange={(value: any) => { setValue5(value) }} placeholder="固定行数" />
        <TextareaItem rows={2} value={value5} onChange={(value: any) => { setValue5(value) }} placeholder="固定行数" />
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
      <TestCase itShould="TextareaItem autoHeight, rows={6}" tags={['C_API']}>
        <TextareaItem placeholder="高度自适应" autoHeight />
        <TextareaItem placeholder="rows={6}" rows={6} />
      </TestCase>
      <TestCase itShould="TextareaItem labelNumber={2},labelNumber={6}" tags={['C_API']}>
        <View style={{ width: 300 }}>
          <TextareaItem labelNumber={2} placeholder="定宽枚举值3">简短标签简短标签简短标签</TextareaItem>
          <TextareaItem labelNumber={6} placeholder="定宽枚举值6">较长标签较长标签较长标签</TextareaItem>
        </View>
      </TestCase>
      <TestCase itShould="render a TextareaItem support last" tags={['C_API']}>
        <TextareaItem last={true} placeholder="如果是最后一项，则将移除borderBottom" style={styles.input} />
      </TestCase>
    </TestSuite>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 4,
    borderBottomWidth: 0
  },
});
