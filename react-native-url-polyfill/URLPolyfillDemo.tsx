import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Button
} from 'react-native';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

import { URL, URLSearchParams } from 'react-native-url-polyfill';

export const URLPolyfillDemo = () => {
  const [sortResult, setSortResult] = useState('');

  const [appendResult, setAppendResult] = useState('');

  const [setResult, setSetResult] = useState('');

  const [deleteResult, setDeleteResult] = useState('');

  //创建一个URL对象
  const url = new URL('https://abc:xyz@example.org/abc?foo=~bar#bar?rn=ReactNative');
  const urlProperty = 'url.hash: ' + url.hash +
    '\nurl.host: ' + url.host +
    '\nurl.hostname: ' + url.hostname +
    '\nurl.href: ' + url.href +
    '\nurl.origin: ' + url.origin +
    '\nurl.password: ' + url.password +
    '\nurl.pathname: ' + url.pathname +
    '\nurl.port: ' + url.port +
    '\nurl.protocol: ' + url.protocol +
    '\nurl.search: ' + url.search +
    '\nurl.searchParams: ' + url.searchParams +
    '\nurl.username: ' + url.username +
    '\nurl.toJSON: ' + url.toJSON() +
    '\nurl.toString: ' + url.toString()

  // 创建一个 URLSearchParams 对象
  const searchParams = new URLSearchParams('abc=456&rn=ReactNative&def=javascript');

  // searchParams.forEach()
  let forEachResult = '';
  searchParams.forEach((key, value) => {
    forEachResult += value + ': ';
    forEachResult += key + ', ';
  })
  forEachResult = forEachResult.substring(0, forEachResult.lastIndexOf(','));

  // searchParams.entries()
  let entriesResult = '';
  for (let pair of searchParams.entries()) {
    entriesResult += pair + ', ';
  }
  entriesResult = entriesResult.substring(0, entriesResult.lastIndexOf(','));

  // searchParams.keys()
  let keysResult = '';
  for (let key of searchParams.keys()) {
    keysResult += key + ', ';
  }
  keysResult = keysResult.substring(0, keysResult.lastIndexOf(','));

  // searchParams.keys()
  let valuesResult = ''
  for (let value of searchParams.values()) {
    console.log(value);
    valuesResult += value + ', ';
  }
  valuesResult = valuesResult.substring(0, valuesResult.lastIndexOf(','));

  // searchParams.sort()
  const sortExample = () => {
    searchParams.sort();
    let result = searchParams.toString();
    setSortResult(result);
  }

  // searchParams.append()
  const appendExample = () => {
    searchParams.append('q', 'CodeHub');
    let result = searchParams.toString();
    setAppendResult(result);
  }

  // searchParams.set()
  const setExample = () => {
    searchParams.set('abc', 'Gitee');
    let result = searchParams.toString();
    setSetResult(result);
  }

  // searchParams.delete()
  const deleteExample = () => {
    searchParams.delete('abc', 'javascript）');
    let result = searchParams.toString();
    setDeleteResult(result);
  }

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='URLExample'>
          <TestCase itShould={'url: ' + url}>
            <Text allowFontScaling>{urlProperty}</Text>
          </TestCase>
        </TestSuite>

        <TestSuite name='searchParamsExample'>

          <TestCase itShould='searchParams'>
            <Text allowFontScaling>{searchParams}</Text>
          </TestCase>

          <TestCase itShould='属性： size'>
            <Text allowFontScaling>{searchParams.size}</Text>
          </TestCase>

          <TestCase itShould='Method：toString（）'>
            <Text allowFontScaling>{searchParams.toString()}</Text>
          </TestCase>

          <TestCase itShould='Method：forEach（）'>
            <Text allowFontScaling>{forEachResult}</Text>
          </TestCase>

          <TestCase itShould='Method：entries（）'>
            <Text allowFontScaling>{entriesResult}</Text>
          </TestCase>

          <TestCase itShould='Method：keys（）'>
            <Text allowFontScaling>{keysResult}</Text>
          </TestCase>

          <TestCase itShould='Method：values（）'>
            <Text allowFontScaling>{valuesResult}</Text>
          </TestCase>

          <TestCase itShould='Method：has（rn,ReactNative）'>
            <Text allowFontScaling>{searchParams.has('rn', 'ReactNative') + ''}</Text>
          </TestCase>

          <TestCase itShould='Method：has（cs,gitee）'>
            <Text allowFontScaling>{searchParams.has('cs', 'gitee') + ''}</Text>
          </TestCase>

          <TestCase itShould='Method：getAll（def）'>
            <Text allowFontScaling>{searchParams.getAll('def')}</Text>
          </TestCase>

          <TestCase itShould='Method：getAll（abc）'>
            <Text allowFontScaling>{searchParams.getAll('abc')}</Text>
          </TestCase>

          <TestCase itShould='Method：get（def）'>
            <Text allowFontScaling>{searchParams.get('def')}</Text>
          </TestCase>

          <TestCase itShould='Method：get（abc）'>
            <Text allowFontScaling>{searchParams.get('abc')}</Text>
          </TestCase>

          <TestCase itShould='Method：append（q,CodeHub）'>
            <Button
              title="append"
              color="#9a73ef"
              onPress={appendExample}
            />
            <Text allowFontScaling>{appendResult}</Text>
          </TestCase>

          <TestCase itShould='Method：set（abc,Gitee）'>
            <Button
              title="set"
              color="#9a73ef"
              onPress={setExample}
            />
            <Text allowFontScaling>{setResult}</Text>
          </TestCase>

          <TestCase itShould='Method：delete（abc,javascript）'>
            <Button
              title="delete"
              color="#9a73ef"
              onPress={deleteExample}
            />
            <Text allowFontScaling>{deleteResult}</Text>
          </TestCase>

          <TestCase itShould='Method：sort（）'>
            <Button
              title="sort"
              color="#9a73ef"
              onPress={sortExample}
            />
            <Text allowFontScaling>{sortResult}</Text>
          </TestCase>

        </TestSuite>
      </Tester>
    </ScrollView>

  )
}