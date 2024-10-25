/*
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {useState} from 'react';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  byteLength,
  btoa,
  atob,
  toByteArray,
  fromByteArray,
  getNative,
  trimBase64Padding,
  shim,
} from '@react-native-oh-tpl/react-native-quick-base64';

type FuncBase64ToArrayBuffer = (
  data: string,
  removeLinebreaks?: boolean,
) => ArrayBuffer;
type FuncBase64FromArrayBuffer = (
  data: string | ArrayBuffer,
  urlSafe?: boolean,
) => string;

interface NativeModule {
  base64FromArrayBuffer: FuncBase64FromArrayBuffer | undefined;
  base64ToArrayBuffer: FuncBase64ToArrayBuffer | undefined;
}

const PALETTE = {
  REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
  REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

function Button({label, onPress}: {onPress: () => void; label: string}) {
  return (
    <TouchableHighlight
      underlayColor={PALETTE.REACT_CYAN_DARK}
      style={{
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: PALETTE.REACT_CYAN_LIGHT,
        borderWidth: 2,
        borderColor: PALETTE.REACT_CYAN_DARK,
      }}
      onPress={onPress}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}

export function QuickBase64Test() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');

  // 测试字符串转base64
  const [textTobase64, onChangeTextToBase64] = React.useState('');
  const [textTobase0, onChangeTextToBase0] = React.useState('');
  const [textTobase1, onChangeTextToBase1] = React.useState('');
  const [textTobase2, onChangeTextToBase2] = React.useState('');
  const [textTobase3, onChangeTextToBase3] = React.useState('');
  const [textTobase4, onChangeTextToBase4] = React.useState('');
  const [textTobase5, onChangeTextToBase5] = React.useState('');
  const [textTobase6, onChangeTextToBase6] = React.useState('');
  const [textTobase7, onChangeTextToBase7] = React.useState(new Uint8Array(0));
  const [textTobase8, onChangeTextToBase8] = React.useState('');
  const [textTobase9, onChangeTextToBase9] = React.useState('');


  const [nativeModule, onChangeNativeModule] = React.useState<NativeModule>({
    base64FromArrayBuffer: undefined,
    base64ToArrayBuffer: undefined,
  });

  const onPressGetNative = () => {
    const native = getNative() as NativeModule;
    onChangeNativeModule(native);
  };

  return (
    <ScrollView>
      <View>
        <Tester style={{height: 1500}}>
          <TestSuite name="btoa and atoa">
            <TestCase
              tags={['C_API']}
              itShould="BtoA"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText1(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text1}
                    />
                    <Text>
                      test string transform base64, testing the text: {text1}
                    </Text>
                    <Button
                      label="BtoA"
                      onPress={() => {
                        onChangeTextToBase64(btoa(text1));
                        if (atob(btoa(text1)) == text1) {
                          setState(true);
                        }
                      }}
                    />
                    <Text style={{color: 'green'}}>{btoa(text1)}</Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              tags={['C_API']}
              itShould="AtoB"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text>
                      test base64 transform string, testing the text:{' '}
                      {textTobase64}
                    </Text>
                    <Button
                      label="AtoB"
                      onPress={() => {
                        onChangeTextToBase0(atob(textTobase64))
                        if (atob(textTobase64) == text1) {
                          setState(true);
                        }
                      }}
                    />
                    <Text style={{color: 'green'}}>{textTobase0}</Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>

          <TestSuite name="QuickBase64">
            <TestCase
              tags={['C_API']}
              itShould="toByteArray"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText2(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text2}
                    />
                    <Button
                      label="toByteArray"
                      onPress={() => {
                        onChangeTextToBase1(btoa(text2));
                        setState(true);
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      {toByteArray(textTobase1)}
                    </Text>

                    <Button
                      label="removeLinebreaks:true"
                      onPress={() => {
                        onChangeTextToBase9(btoa(text2));
                        setState(true);
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      {toByteArray(textTobase9,true)}
                    </Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              tags={['C_API']}
              itShould="byteLength"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText3(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text3}
                    />
                    <Button
                      label="byteLength"
                      onPress={() => {
                        onChangeTextToBase2(btoa(text3));
                        setState(true);
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      base64 length:{byteLength(textTobase2)}
                    </Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              tags={['C_API']}
              itShould="fromByteArray"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText4(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text4}
                    />
                    <Button
                      label="fromByteArray"
                      onPress={() => {
                        onChangeTextToBase3(
                          fromByteArray(toByteArray(btoa(text4))),
                        );
                        setState(true);
                      }}
                    />
                    <Text>uint8:{toByteArray(btoa(text4))}</Text>
                    <Text style={{color: 'green'}}>string:{textTobase3}</Text>

                    <Button
                      label="urlSafe:true"
                      onPress={() => {
                        onChangeTextToBase8(
                          fromByteArray(toByteArray(btoa(text4),true)),
                        );
                        setState(true);
                      }}
                    />
                    <Text style={{color: 'green'}}>string:{textTobase8}</Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />

            <TestCase
              tags={['C_API']}
              itShould="trimBase64Padding"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText5(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text5}
                    />
                    <Button
                      label="trimBase64Padding"
                      onPress={() => {
                        trimBase64Padding(btoa(text5));
                        setState(true);
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      base64 string:{trimBase64Padding(btoa(text5))}
                    </Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>

          <TestSuite name="shim">
            <TestCase
              tags={['C_API']}
              itShould="shim"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Button
                      label="shim"
                      onPress={() => {
                        shim();
                        setState(true);
                      }}
                    />

                    <Text style={{color: 'green'}}>
                      base64 string:{typeof global.btoa}
                    </Text>
                    <Text style={{color: 'green'}}>
                      base64 string:{typeof global.atob}
                    </Text>

                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText6(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text6}
                    />
                    <Text>
                      test string transform base64, testing the text: {text1}
                    </Text>
                    <Button
                      label="shim BtoA"
                      onPress={() => {
                        onChangeTextToBase4(global.btoa(text6));
                      }}
                    />
                    <Text style={{color: 'green'}}>{textTobase4}</Text>
                    <Button
                      label="shim AtoB"
                      onPress={() => {
                        onChangeTextToBase5(global.atob(textTobase4));
                      }}
                    />
                    <Text style={{color: 'green'}}>{textTobase5}</Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>

          <TestSuite name="getNative">
            <TestCase
              tags={['C_API']}
              itShould="getNative"
              initialState={undefined as any}
              arrange={({setState}) => {
                return (
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Button
                      label="getNative"
                      onPress={() => {
                        onPressGetNative();
                        setState(true);
                      }}
                    />
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        width: '100%',
                        backgroundColor: '#f5f5f5',
                      }}
                      onChangeText={text => setText7(text)}
                      placeholder="please input test text"
                      placeholderTextColor={'#674651'}
                      value={text7}
                    />
                    <Button
                      label="base64FromArrayBuffer"
                      onPress={() => {
                        if (nativeModule?.base64FromArrayBuffer) {
                          let base64FromArrayBuffer =
                            nativeModule.base64FromArrayBuffer(text7);
                          onChangeTextToBase6(base64FromArrayBuffer);
                        }
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      base64FromArrayBuffer string:{textTobase6}
                    </Text>

                    <Button
                      label="base64ToArrayBuffer"
                      onPress={() => {
                        if (nativeModule?.base64ToArrayBuffer) {
                          let base64FromArrayBuffer1 = new Uint8Array(
                            nativeModule.base64ToArrayBuffer(textTobase6),
                          );
                          onChangeTextToBase7(base64FromArrayBuffer1);
                        }
                      }}
                    />
                    <Text style={{color: 'green'}}>
                      base64ToArrayBuffer string:{textTobase7}
                    </Text>
                  </View>
                );
              }}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
  );
}
