import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, TextInput} from 'react-native';
import {Hidden, Box, useColorMode, Button, Center, Image} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
export function HiddenTest() {
  const {toggleColorMode} = useColorMode();
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Hidden according to breakpoints">
            <TestCase itShould="Hidden according to breakpoints" tags={['dev']}>
              <Center>
                <Button
                  colorScheme="coolGray"
                  _light={{
                    _text: {
                      color: 'white',
                    },
                  }}
                  onPress={() => {
                    toggleColorMode();
                  }}>
                  Change mode
                </Button>
                <Hidden colorMode="dark">
                  <Center mt="5">
                    <Image
                      w="150"
                      h="150"
                      source={{
                        uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                      }}
                      alt="image"
                    />
                  </Center>
                </Hidden>
                <Hidden colorMode="light">
                  <Center mt="5">
                    <Image
                      w="150"
                      h="150"
                      source={{
                        uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                      }}
                      alt="image"
                    />
                  </Center>
                </Hidden>
              </Center>
            </TestCase>
          </TestSuite>

          <TestSuite name="from till">
            <TestCase itShould="from till" tags={['dev']}>
              <Hidden from="sm" till="lg">
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden from sm to lg screens.</Text>
                </Box>
              </Hidden>
              <Hidden from="base" till="x1">
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden from base to x1 screens.</Text>
                </Box>
              </Hidden>
              <Hidden from="sm" till="md">
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden from sm to md screens.</Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>
          <TestSuite name="only">
            <TestCase itShould="only" tags={['dev']}>
              <Hidden from="sm" till="lg">
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden from sm to lg screens only.
                  </Text>
                </Box>
              </Hidden>
              <Hidden from="base" till="x1">
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden from base to x1 screens only.
                  </Text>
                </Box>
              </Hidden>
              <Hidden only={['sm', 'md']}>
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden on sm and lg screens only.
                  </Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>
          <TestSuite name="colorMode">
            <TestCase itShould="colorMode" tags={['dev']}>
              <Hidden colorMode="dark">
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden on colorMode dark .</Text>
                </Box>
              </Hidden>
              <Hidden colorMode="light">
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden on colorMode light.</Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>
          <TestSuite name="platform">
            <TestCase itShould="platform" tags={['dev']}>
              <Hidden platform={['android', 'ios']}>
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden on android and ios screens.
                  </Text>
                </Box>
              </Hidden>
              <Hidden platform={['harmony', 'web']}>
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden on harmony and web screens.
                  </Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>
          <TestSuite name="isSSR">
            <TestCase itShould="isSSR" tags={['dev']}>
              <Hidden isSSR={true}>
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden on isSSR true screens.</Text>
                </Box>
              </Hidden>
              <Hidden isSSR={false}>
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden on isSSR false screens.</Text>
                </Box>
              </Hidden>
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
