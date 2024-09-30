import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

import RTNTextSize, { TSFontSpecs, TSFontInfo } from 'react-native-text-size'

export default function TextSizeExample() {
  const [res, setRes] = useState<string[]>([])
  const [res2, setRes2] = useState<string[]>([])
  const fontFamily = 'HarmonyOS Sans SC'
  const [texts, setTexts] = useState<string>('I rnTextSize ❤️')
  const [texts3, setTexts3] = useState<string>('')
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const fontSpecs: TSFontSpecs = {
    fontFamily: undefined,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  }
  type State = { heights2: number[] }
  const [texts2, setTexts2] = useState(['I ❤️ rnTextSize', 'I ❤️ rnTextSize using flatHeights', 'Thx for flatHeights', 'test123',])
  const [heights2, setHeights2] = useState<number[]>([]);
  const fontSpecs2: TSFontSpecs = {
    fontFamily: undefined,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
  const [key, setKey] = useState({})
  const [info, setInfo] = useState<TSFontInfo>()
  const fontSpecs3: TSFontSpecs = {
    fontFamily: 'harmony',
    textBreakStrategy: 'balanced',
  }

  useEffect(() => {
    const myFun = async () => {
      const resp = await RTNTextSize.fontFamilyNames();
      setRes(resp)

      const resp2 = await RTNTextSize.fontNamesForFamilyName(fontFamily);
      setRes2(resp2)

      setTexts(texts)
      const width = Dimensions.get('window').width * 0.8
      const newHeights = await RTNTextSize.measure({
        text: texts,      // array of texts to measure, can include symbols
        width: width,            // max-width of the "virtual" container
        ...fontSpecs,     // RN font specification
      })
      setHeight(newHeights.height);
      setWidth(newHeights.width)

      setTexts2(texts2)
      const width2 = Dimensions.get('window').width * 0.8
      const newHeights2 = await RTNTextSize.flatHeights({
        text: texts2,      // array of texts to measure, can include symbols
        width: width2,            // max-width of the "virtual" container
        ...fontSpecs2,     // RN font specification
      })
      setHeights2(newHeights2);

      const keyp = await RTNTextSize.specsForTextStyles();
      setKey(keyp)

      const infos = await RTNTextSize.fontFromSpecs(fontSpecs3);
      setInfo(infos)
    }
    myFun()
  }, [])

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={{ paddingLeft: 12, paddingRight: 12 }}>
        <Text>
          measure:[fontFamily: undefined,fontSize: 20,fontStyle: 'normal', 正斜fontWeight: '700']
        </Text>
        <Text style={{
          width: width,
          height: height,
          ...fontSpecs
        }}>
          {texts}
        </Text>
        <TextInput
          value={texts}
          onChangeText={value => { setTexts(value) }}
          style={{ width: '100%', height: 28, borderWidth: 2, borderColor: 'black' }}
        />

        <Text>
          flatHeights:[fontFamily: undefined,fontSize: 20,fontStyle: 'italic', fontWeight: 'bold']
        </Text>
        {texts2.map(
          (texts2, index) => (
            <Text key={index} style={{ height: heights2[index], ...fontSpecs2 }}>
              {texts2}
            </Text>
          )
        )}
        <TextInput
          value={texts3}
          onChangeText={value => {
            let value2 = value.split(",");
            setTexts3(value)
            setTexts2(value2)
          }}
          style={{ width: '100%', height: 28, borderWidth: 2, borderColor: 'black' }}
        />
        <Text>
          specsForTextStyles:获取系统默认配置的字体的具体信息
        </Text>
        <Text>
          {JSON.stringify(key)}
        </Text>
        <Text>
          fontFamilyNames:获取系统默认配置的字体
        </Text>
        <Text>
          {res}
        </Text>
        <Text>
          fontNamesForFamilyName:获取系统字体的属性
        </Text>
        <Text>
          {res2}
        </Text>
        <Text>
          fontFromSpecs:返回从给定规范中获得的字体特征
        </Text>
        <Text>
          {JSON.stringify(info)}
        </Text>
      </View>
    </ScrollView>
  )
}