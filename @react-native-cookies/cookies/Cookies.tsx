/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState, useRef } from 'react';
import {ScrollView, StyleSheet, Text ,View, TouchableOpacity} from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import { WebView } from 'react-native-webview';

export interface Cookie {
  name: string;
  value: string;
  path?: string;
  domain?: string;
  version?: string;
  expires?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export interface Cookies {
  [key: string]: Cookie;
}

export function CookiesPage() {
  const httpUrl = 'https://www.baidu.com';
  const [result, setResult] = useState('请点击按钮，进行操作');
  const webViewRef = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.pageArea}>
        <WebView source={{uri: httpUrl }}  ref={webViewRef} />;
      </View>
      
      <ScrollView style={styles.resultArea}>
        <Text>{result}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={async() => {
        let cookieResult = await CookieManager.clearAll(true);
        let result = cookieResult ? '清除所有cookie成功' : '清除所有cookie失败';
        setResult(result + '');
      }} >
        <Text>clearAll()【清除所有cookie】</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={async() => {
        let cookieResult = await CookieManager.get(httpUrl, true);
        setResult(JSON.stringify(cookieResult));
      }} >
        <Text>get()【根据url获取cookie】</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={async() => {
        let curCookie: Cookie = {name: 'myAddCookie', value: 'myNewCookie'};
        let cookieResult = await CookieManager.set(httpUrl, curCookie, true);
        let result = cookieResult ? '根据url设置cookie成功' : '根据url设置cookie失败';
        setResult(result);
      }} >
        <Text>set()【根据url设置cookie】</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={async() => {
         let cookieResult = await CookieManager.clearByName(httpUrl, 'myAddCookie', true);
         let result = cookieResult ? '根据名称删除cookie成功' : '根据名称删除cookie失败';
         setResult(result);
      }} >
        <Text>clearByName()【根据名称删除cookie】</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        CookieManager.flushForHarmony(() => {
          if (webViewRef.current) {
            webViewRef.current.reload();
          }
        });
        setResult('刷新cookie成功');
      }} >
        <Text>flush()【刷新cookie】</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={async() => {
        let cookieResult = await CookieManager.removeSessionCookies();
        let result = cookieResult ? '清除会话cookie成功' : '清除会话cookie失败';
        setResult(result);
      }} >
        <Text>removeSessionCookies()【清除会话cookie】</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  pageArea: {
    width: '95%',
    height: 80
  },
  resultArea: {
    width: '95%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 5
  },
  button: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    width: '80%',
    marginTop: 5
  },
});
