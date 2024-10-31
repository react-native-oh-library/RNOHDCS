import {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {Box, Center, Image, VStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';
const ImageTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="source">
            <TestCase itShould="source" tags={['dev']}>
              <Center>
                <Image
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
              </Center>
            </TestCase>
          </TestSuite>
          <TestSuite name="src">
            <TestCase itShould="src" tags={['dev']}>
              <Center>
                <Image
                  src="https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png"
                  alt="Alternate Text"
                  size="xl"
                />
              </Center>
              ;
            </TestCase>
          </TestSuite>

          <TestSuite name="alt">
            <TestCase itShould="alt-值Alternate alt Text" tags={['dev']}>
              <Center>
                <Image
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                  alt="Alternate alt Text"
                  size="xl"
                />
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="_alt">
            <TestCase itShould="_alt-值color:'amber.900'" tags={['dev']}>
              <Center>
                <Image
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                  alt="Alternate alt Text"
                  size="xl"
                  _alt={{
                    color:'amber.900'
                  }}
                />
              </Center>
            </TestCase>
          </TestSuite>
        
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <VStack
                space={2}
                justifyContent="center"
                alignItems="center"
                safeAreaTop // my={6}
                mb={6}>
                {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(size => (
                  <Image
                    key={size}
                    size={size}
                    resizeMode="cover"
                    source={{
                      uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                    }}
                    alt={'Alternate Text ' + size}
                  />
                ))}
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="fallbackSource">
            <TestCase itShould="fallbackSource-指定当主图像源无法加载时显示的备用图像源	" tags={['dev']}>
              <Center>
                <Image
                  size={150}
                  alt="fallback text"
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                  fallbackSource={{
                    uri: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/yuanfuwuicon.png',
                  }}
                />
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="ignoreFallback">
            <TestCase itShould="ignoreFallback-是否忽略备用图像源(也就是fallbackSource是否忽略)" tags={['dev']}>
              <Center>
                <Image
                  size={150}
                  ignoreFallback={true}
                  alt='alt'
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                  fallbackSource={{
                    uri: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/yuanfuwuicon.png',
                  }}
                />
                <Image
                  size={150}
                  ignoreFallback={false}
                  alt='alt'
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                  fallbackSource={{
                    uri: 'https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/yuanfuwuicon.png',
                  }}
                />
              </Center>
            </TestCase>
          </TestSuite>
          <TestSuite name="fallbackElement">
            <TestCase itShould="fallbackElement-指定当主图像源无法加载时显示的备用元素	" tags={['dev']}>
              <Center>
                <Image
                  size={150}
                  fallbackElement={<Text>fallbackElement</Text>}
                  alt="fallback text"
                  source={{
                    uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI1.png',
                  }}
                />
              </Center>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    aspectRatio: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  box: {
    height: 100,
    width: 200,
  },
  tipText: {
    fontSize: 12,
    color: '#999',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
  colText: {
    padding: 5,
  },
  col: {
    backgroundColor: '#FFB6C1',
  },
  row: {
    backgroundColor: '#00BFFF',
  },
});

export default ImageTest