import React from 'react';
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {Hidden, Box, useColorMode, Button, Center, Image} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const HiddenTest = () => {
  const {toggleColorMode} = useColorMode();
  const [value, setValue] = React.useState('sm');
  const [value1, setValue1] = React.useState('sm');
  const [value2, setValue2] = React.useState('base');
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
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
              <Center>
                <Hidden
                  colorMode="dark"
                  children={
                    <Center mt="5">
                      <Image
                        w="150"
                        h="150"
                        source={{
                          uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                        }}
                        alt="image"
                      />
                      <Text>children</Text>
                    </Center>
                  }></Hidden>
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

          <TestSuite name="from">
            <TestCase itShould="from-值是sm和base" tags={['dev']}>
              <Button
                colorScheme="coolGray"
                _light={{
                  _text: {
                    color: 'white',
                  },
                }}
                onPress={() => {
                  setValue(value === 'base' ? 'sm' : 'base');
                  Alert.alert('from' + '值' + value);
                }}>
                改变from的值
              </Button>
              <Hidden from={value}>
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden from sm to lg screens.</Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>

          <TestSuite name="till">
            <TestCase itShould="till" tags={['dev']}>
            <Button
                colorScheme="coolGray"
                _light={{
                  _text: {
                    color: 'white',
                  },
                }}
                onPress={() => {
                  setValue2(value2 === 'base' ? 'sm' : 'base');
                  Alert.alert('Hidden' + '值' + value);
                }}>
                改变till的值
              </Button>
              <Hidden  till={value2}>
                <Box bg="red.400" p="2">
                  <Text>This text will be hidden from sm to lg screens.</Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>

          <TestSuite name="only">
            <TestCase itShould="only" tags={['dev']}>
              <Button
                colorScheme="coolGray"
                _light={{
                  _text: {
                    color: 'white',
                  },
                }}
                onPress={() => {
                  setValue1(value1 === 'base' ? 'sm' : 'base');
                  Alert.alert('only' + '值' + value1);
                }}>
                改变only的值
              </Button>
              <Hidden only={[value1]}>
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
                  <Text>'android', 'ios'</Text>
                </Box>
              </Hidden>
              <Hidden platform={['harmony', 'web']}>
                <Box bg="red.400" p="2">
                  <Text>'harmony', 'web'</Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>

          <TestSuite name="isSSR">
            <TestCase itShould="isSSR" tags={['dev']}>
              <Hidden platform={['android', 'ios']} isSSR={true}>
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden on android and ios screens.
                  </Text>
                </Box>
              </Hidden>
              <Hidden platform={['harmony', 'web']} isSSR={false}>
                <Box bg="red.400" p="2">
                  <Text>
                    This text will be hidden on harmony and web screens.
                  </Text>
                </Box>
              </Hidden>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};
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

export default HiddenTest;
