
import React, { useState } from 'react';
import { View } from 'react-native';
import { InputItem } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [labelnum1, setLabelnum1] = useState('');
  const [labelnum2, setLabelnum2] = useState('');
  const [bankcard, setBankcard] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [foucs, setFoucs] = useState('');
  const [blur, setBlur] = useState('');
  const [comfirm, setComfirm] = useState('');

  return (
    <TestSuite name="InputItemTest">
      <TestCase itShould="InputItem type='bankCard'" tags={['C_API']}>
        <View>
          <InputItem
            type="bankCard"
            value={bankcard}
            onChange={(value: any) => {
              setBankcard(value)
            }}
            placeholder="bankCard">
            银行卡
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem type='phone'" tags={['C_API']}>
        <View>
          <InputItem
            type="phone"
            value={phone}
            onChange={(value: any) => {
              setPhone(value)
            }}
            placeholder="phone">
            手机号
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem type='password'" tags={['C_API']}>
        <View>
          <InputItem
            type="password"
            value={password}
            onChange={(value: any) => {
              setPassword(value)
            }}
            placeholder="password">
            密码
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem value" tags={['C_API']}>
        <InputItem value={value2}
          onChange={(value: any) => {
            setValue2(value)
          }}
          placeholder="value">
        </InputItem>
      </TestCase>
      <TestCase itShould="InputItem defaultValue='我是默认值'" tags={['C_API']}>
        <InputItem defaultValue='我是默认值'></InputItem>
      </TestCase>
      <TestCase itShould="InputItem placeholder='请输入...'" tags={['C_API']}>
        <InputItem placeholder='请输入...'></InputItem>
      </TestCase>
      <TestCase itShould="InputItem editable={false}" tags={['C_API']}>
        <InputItem
          placeholder="不可编辑"
          editable={false}>
          输入框
        </InputItem>
      </TestCase>
      <TestCase itShould="InputItem disabled={true}" tags={['C_API']}>
        <View>
          <InputItem
            placeholder="disabled"
            disabled>
            输入框
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem clear={true}" tags={['C_API']}>
        <View>
          <InputItem
            clear={true}
            placeholder="clear"
          >
            输入框
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem maxLength={10}" tags={['C_API']}>
        <View>
          <InputItem
            clear={true}
            maxLength={10}
            placeholder="maxLength"
          >
            输入框
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <InputItem value={value3}
            onChange={(value: any) => {
              setValue3(value);
              setState(true);
            }}
            placeholder="onChange()">
          </InputItem>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="InputItem onBlur()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <InputItem
            clear
            value={blur}
            onBlur={() => { setBlur('失焦'); setState(true); }}
            placeholder="">
            失焦
          </InputItem>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="InputItem onFocus()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <InputItem
            clear
            value={foucs}
            onFocus={() => { setFoucs('聚焦'); setState(true); }}
            placeholder="">
            聚焦
          </InputItem>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="InputItem error={true}" tags={['C_API']}>
        <View>
          <InputItem
            clear={true}
            error
            placeholder="error"
          >
            输入框
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem onErrorClick()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <InputItem
            clear
            error
            onErrorClick={() => { setState(true) }}
            placeholder="">
            报错样式
          </InputItem>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="InputItem extra='元'" tags={['C_API']}>
        <InputItem
          clear
          extra='元'
          placeholder="有标签"
        />
      </TestCase>
      <TestCase itShould="InputItem onExtraClick()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <InputItem
            clear
            extra='元'
            onExtraClick={() => { setState(true) }}
            placeholder="有标签"
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="InputItem labelNumber={2}" tags={['C_API']}>
        <View>
          <InputItem
            clear
            value={labelnum1}
            onChange={(value: any) => {
              setLabelnum1(value)
            }}
            labelNumber={2}
            placeholder="两个字标签">
            姓名
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem labelNumber={3}" tags={['C_API']}>
        <View>
          <InputItem
            clear
            value={labelnum2}
            onChange={(value: any) => {
              setLabelnum2(value)
            }}
            labelNumber={3}
            placeholder="三个字标签">
            校验码
          </InputItem>
        </View>
      </TestCase>
      <TestCase itShould="InputItem onVirtualKeyboardConfirm()" tags={['C_API']}>
        <InputItem
          clear
          value={comfirm}
          onVirtualKeyboardConfirm={(val: any) => { setComfirm(val) }}
          placeholder="onVirtualKeyboardConfirm">
          onVirtualKeyboardConfirm
        </InputItem>
      </TestCase>
      <TestCase itShould="InputItem locale={{ confirmLabel: '确认' }}" tags={['C_API']}>
        <InputItem
          clear
          locale={{ confirmLabel: '确认' }}
          placeholder="locale">
          last
        </InputItem>
      </TestCase>
      <TestCase itShould="InputItem last={true}" tags={['C_API']}>
        <InputItem
          clear
          last={true}
          placeholder="last">
          last
        </InputItem>
      </TestCase>
    </TestSuite>
  );
};


