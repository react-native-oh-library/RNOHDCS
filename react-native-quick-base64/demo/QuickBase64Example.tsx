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

import React, { useState } from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { Text, View, TouchableHighlight, TextInput, ScrollView, StyleSheet } from 'react-native';
import { byteLength, btoa, atob, toByteArray, fromByteArray, getNative, trimBase64Padding, shim } from '@react-native-oh-tpl/react-native-quick-base64';

type FuncBase64ToArrayBuffer = (
  data: string,
  removeLinebreaks?: boolean
) => ArrayBuffer
type FuncBase64FromArrayBuffer = (
  data: string | ArrayBuffer,
  urlSafe?: boolean
) => string


interface NativeModule {
  base64FromArrayBuffer: FuncBase64FromArrayBuffer | undefined;
  base64ToArrayBuffer: FuncBase64ToArrayBuffer | undefined;
}

const PALETTE = {
  REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
  REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

function Button({ label, onPress }: { onPress: () => void; label: string }) {
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
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}


export function QuickBase64Test() {
  // 测试字符串转base64
  const [textTobase64, onChangeTextToBase64] = React.useState('');

  const [base64ToTextLength, onChangeBase64TextLength] = React.useState(0);

  const [base64ToText, onChangeBase64Text] = React.useState('');

  const [byteArray, onChangeByteArray] = React.useState(new Uint8Array(0));

  const [byteArrayRemove, onChangeByteArrayRemove] = React.useState(new Uint8Array(0));

  const [fbArrayBase64Str, onChangeFbArrayBase64Str] = React.useState('');

  const [fbArrayBase64StrUrlSafe, onChangeFbArrayBase64StrUrlSafe] = React.useState('');

  const [testShimBtoA, onChangeTestShimBtoA] = React.useState(''); // 字符串转base64

  const [testShimAtoB, onChangeTestShimAtoB] = React.useState(''); // base64转字符串

  const [nativeModule, onChangeNativeModule] = React.useState<NativeModule>({
    base64FromArrayBuffer: undefined,
    base64ToArrayBuffer: undefined
  });

  const [nativeBFABText, onChangeNBFABText] = React.useState('');

  const [nativeBFABTextUrlSafe, onChangeNBFABTextUrlSafe] = React.useState('');

  const [nativeBTABText, onChangeNBTABText] = React.useState(new Uint8Array(0));

  const [nativeBTABTextRemoveLinebreaks, onChangeNBTABTextRemoveLinebreaks] = React.useState(new Uint8Array(0));

  const [trimBase64PaddingText, onChangeTrimBase64PaddingText] = React.useState('');

  const byArray = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);
  // 点击事件 字符串转base64
  const onPressBtoA = (text: string) => {
    let b64 = btoa(text);
    console.log(`字符串转base64 ${b64}`);
    onChangeTextToBase64(b64)
  }

  const [testText, onChangeTestText] = React.useState('');

  // 点击事件 base64转字符串
  const onPressAtoB = (text: string) => {
    let textA = atob(text);
    console.log(`base64转字符串 ${textA}`);
    onChangeBase64Text(textA)
  }

  // 打印base64转为Unit8Array字节数组的长度
  const onPressBase64Length = (text: string) => {
    console.log(`打印base64长度1 ${text}`);
    onChangeBase64TextLength(byteLength(text))
  }

  /* toByteArray 把base64字符串解码为Uint8Array */
  const onPressToByteArray = (text: string) => {
    let btArray = toByteArray(text);
    console.log(`toByteArray ${btArray}`);
    onChangeByteArray(btArray)
  }

  /* toByteArray 把base64字符串解码为Uint8Array  removeLinebreaks */
  const onPressToByteArrayRemove = (text: string, removeLinebreaks: boolean = false) => {
    let btArray = toByteArray(text, removeLinebreaks);
    console.log(`toByteArray ${btArray}`);
    onChangeByteArrayRemove(btArray)
  }

  /* fromByteArray 把Uint8Array编码为Base64字符串 */
  const onPressFromByteArray = (
    uint8: Uint8Array,
    urlSafe: boolean = false) => {
    let b64 = fromByteArray(uint8);
    console.log(`fromByteArray ${b64}`);
    onChangeFbArrayBase64Str(b64)
  }

  /* fromByteArray 把Uint8Array编码为Base64字符串  */
  const onPressFromByteArrayUrlSafe = (
    uint8: Uint8Array,
    urlSafe: boolean = false) => {
    let b64 = fromByteArray(uint8, urlSafe);
    console.log(`fromByteArray ${b64}`);
    onChangeFbArrayBase64StrUrlSafe(b64)
  }

  /* shim 给全局对象添加btoa和atob函数的shim实现 */
  const handleAddShimToGlobal = () => {
    shim();
    console.log(typeof global.btoa); // 应该输出 "function"
    console.log(typeof global.atob); // 同样应该输出 "function"
  }

  const onPressTestShimBtoA = (text: string) => {
    const encodeBase64 = global.btoa(text);
    console.log(`shim global btoa ${encodeBase64}`);
    onChangeTestShimBtoA(encodeBase64)
  }

  const onPressTestShimAtoB = (text: string) => {
    const decodeBase64 = global.atob(text);
    console.log(`shim global atob ${decodeBase64}`);
    onChangeTestShimAtoB(decodeBase64)
  }

  /* trimBase64Padding 清除Base64字符串的填充字符 */
  const onPressTrimBase64Padding = (text: string) => {
    let trimBase64 = trimBase64Padding(text);
    console.log(`shim global atob ${trimBase64}`);
    onChangeTrimBase64PaddingText(trimBase64)
  }

  /* getNative 返回包含base64FromArrayBuffer和base64ToArrayBuffer函数的对象 */
  const onPressGetNative = () => {
    const native = getNative() as NativeModule;
    onChangeNativeModule(native)
  }

  /**
   * @param text 
   * base64FromArrayBuffer方法接受一个Base64编码的字符串或ArrayBuffer，
   * 以及一个可选的布尔值参数，该参数决定是否生成的Base64字符串是URL安全的。
   * 这个方法将ArrayBuffer对象转换为Base64编码的字符串。
   * 这两个方法通常用于处理二进制数据，例如在网络传输或文件存储中，因为这些场景中的二进制数据需要被编码为文本格式以便于传输或存储。
   */
  const onPressNBFAB = (text: string | ArrayBuffer) => {
    if (nativeModule?.base64FromArrayBuffer) {
      let base64FromArrayBuffer = nativeModule.base64FromArrayBuffer(text);
      onChangeNBFABText(base64FromArrayBuffer)
    }
  }

  /** 
  * @description base64转换Unit8Array 去除换行符
  * @param text
  * @param removeLinebreaks true
  * 
  */
  const onPressNBFABUrlSafe = (text: string | ArrayBuffer, urlSafe: boolean = false) => {
    if (nativeModule?.base64FromArrayBuffer) {
      let base64FromArrayBuffer = nativeModule.base64FromArrayBuffer(text, urlSafe);
      onChangeNBFABTextUrlSafe(base64FromArrayBuffer)
    }
  }

  /** 
   * @description base64转换Unit8Array
   * 这两个方法是用于处理Base64编码和ArrayBuffer之间的转换。
   * base64ToArrayBuffer方法接受一个Base64编码的字符串和一个可选的布尔值参数，
   * 该参数决定是否在转换过程中删除换行符。这个方法将Base64编码的字符串转换为ArrayBuffer对象。
   * @param text
   * @param removeLinebreaks 默认值 false
   * 
   */
  const onPressNBTAB = (text: string) => {
    if (nativeModule?.base64ToArrayBuffer) {
      let base64ToArrayBuffer = new Uint8Array(nativeModule.base64ToArrayBuffer(text));
      onChangeNBTABText(base64ToArrayBuffer)
    }
  }

  /** 
   * @description base64转换Unit8Array 去除换行符
   * @param text
   * @param removeLinebreaks true
   * 
   */
  const onPressNBTABRemoveLinebreaks = (text: string, removeLinebreaks: boolean = false) => {
    if (nativeModule?.base64ToArrayBuffer) {
      let base64ToArrayBuffer = new Uint8Array(nativeModule.base64ToArrayBuffer(text, removeLinebreaks));
      onChangeNBTABTextRemoveLinebreaks(base64ToArrayBuffer)
    }
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <TextInput
            style={{ height: 40, borderColor: '#978081', borderWidth: 1, width: 300, marginBottom: 20, backgroundColor: '#f5f5f5' }}
            onChangeText={(text) => onChangeTestText(text)}
            placeholder="please input test text"
            placeholderTextColor={'#674651'}
            value={testText}
          />
        </View>

        <View>BtoA Encodes a character string into a Base64 character string.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test string transform base64, testing the text: {testText}</Text>
          <Button
            label="BtoA"
            onPress={() => { onPressBtoA(testText) }}
          />
          <Text style={{ color: 'green' }}>{(textTobase64)}</Text>
        </View>

        <View>AtoB Convert base64 to character string.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test base64 transform string, testing the text: {textTobase64}</Text>
          <Button
            label="AtoB"
            onPress={() => { onPressAtoB(textTobase64) }}
          />
          <Text style={{ color: 'green' }}>{(base64ToText)}</Text>
        </View>

        <View>Decodes a base64 string into a Uint8Array.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test base64 transform Unit8Array, testing the text: {textTobase64}</Text>
          <Button
            label="onPressToByteArray"
            onPress={() => { onPressToByteArray(textTobase64) }}
          />
          <Text style={{ color: 'green' }}>{(byteArray.toString())}</Text>
        </View>



        <View>Decodes a base64 string into a Uint8Array. Whether to cancel line breaks.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test base64 transform Unit8Array add removeLinebreaks is true, testing the text: {textTobase64}</Text>
          <Button
            label="onPressToByteArrayRemove"
            onPress={() => { onPressToByteArrayRemove(textTobase64, true) }}
          />
          <Text style={{ color: 'green' }}>{(byteArrayRemove.toString())}</Text>
        </View>



        <View>Takes a base64 string and returns the length of the byte array."</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>get Unit8Array length form base64 transform, testing the text: {textTobase64}</Text>
          <Button
            label="base64ToTextLength"
            onPress={() => { onPressBase64Length(textTobase64) }}
          />
          <Text style={{ color: 'green' }}>{(base64ToTextLength)}</Text>
        </View>



        <View>Encodes a Uint8Array into a Base64 character string.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test Uint8Array transform base64 string, testing the text: {byteArray.toString()}</Text>
          <Button
            label="onPressFromByteArray"
            onPress={() => { onPressFromByteArray(byteArray) }}
          />
          <Text style={{ color: 'green' }}>{(fbArrayBase64Str)}</Text>
        </View>

        <View>Encodes a Uint8Array into a Base64 character string. The urlSafe parameter determines whether Base64 encoding uses the URL-safe variant.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test Uint8Array transform base64 string add urlSafe params, testing the text: {byteArray.toString()}</Text>
          <Button
            label="onPressFromByteArrayUrlSafe"
            onPress={() => { onPressFromByteArrayUrlSafe(byteArray) }}
          />
          <Text style={{ color: 'green' }}>{(fbArrayBase64StrUrlSafe)}</Text>
        </View>

        <View
          style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
          <Text>Add btoa and atob functions for global objects</Text>
          <Button label="shim set global" onPress={() => handleAddShimToGlobal()} />
        </View>


        {/* 测试shim 设置 btoa和atob函数 成功与否 */}
        <View>Test whether the shim sets the btoa function successfully.</View>

        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test shim BtoA, testing the text: {testText}</Text>
          <Button label="test shim BtoA" onPress={() => { onPressTestShimBtoA(testText) }} />
          <Text style={{ color: 'green' }}>{testShimBtoA}</Text>
        </View>


        {/* 测试shim 设置 btoa和atob函数 成功与否 */}
        <View>Test whether the shim sets the atob function successfully.</View>

        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>test shim AtoB, testing the text: {textTobase64}</Text>
          <Button label="test shim AtoB" onPress={() => { onPressTestShimAtoB(textTobase64) }} />
          <Text style={{ color: 'green' }}>{testShimAtoB}</Text>
        </View>


        {/* trimBase64Padding 清除Base64字符串的填充字符 */}
        <View>trimBase64Padding.</View>

        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>trimBase64Padding clears the padding characters of a Base64 string, testing the text: {textTobase64}</Text>
          <Button label="test trimBase64Padding" onPress={() => { onPressTrimBase64Padding(textTobase64) }} />
          <Text style={{ color: 'green' }}>{trimBase64PaddingText}</Text>
        </View>

        <View style={{ backgroundColor: "#ffffff" }}>
          <Text>Click the button below to get native function for base64FromArrayBuffer and base64ToArrayBuffer</Text>
          <Button label="Get getNative function" onPress={() => { onPressGetNative() }} />
        </View>


        <View>Click the button below to get base64FromArrayBuffer transform text.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>base64 transform string text: {testText}</Text>
          <Button label="onPressNBFAB" onPress={() => { onPressNBFAB(testText) }} />
          <Text style={{ color: 'green' }}>{nativeBFABText}</Text>
        </View>

        <View>Click the button below to get base64FromArrayBuffer transform text, The urlSafe parameter determines whether Base64 encoding uses the URL-safe variant."</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>ArrayBuffer transform string text: {[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]}</Text>
          <Button label="onPressNBFABUrlSafe" onPress={() => { onPressNBFABUrlSafe(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]).buffer) }} />
          <Text style={{ color: 'green' }}>{nativeBFABTextUrlSafe}</Text>
        </View>

        <View>Click the button below to get base64ToArrayBuffer transform text.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>base64 transform ArrayBuffer text: {textTobase64}</Text>
          <Button label="onPressNBTAB" onPress={() => { onPressNBTAB(textTobase64) }} />
          <Text style={{ color: 'green' }}>{nativeBTABText.toString()}</Text>
        </View>

        <View>Click the button below to get base64ToArrayBuffer transform text, Remove Line Breaks.</View>
        <View style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
          <Text>base64 transform ArrayBuffer text: {textTobase64}</Text>
          <Button label="onPressNBTABRemoveLinebreaks" onPress={() => { onPressNBTABRemoveLinebreaks(textTobase64) }} />
          <Text style={{ color: 'green' }}>{nativeBTABTextRemoveLinebreaks}</Text>
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
    color: '#674651',
  },
});
