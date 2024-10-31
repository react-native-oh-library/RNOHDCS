import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Flex, Icon, AddIcon, ArrowDownIcon, HStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const ButtonTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="isFocusVisible">
            <TestCase itShould="isFocusVisible" tags={['dev']}>
              <View style={styles.section}>
                <Text>isFocusVisible-true</Text>
                <View style={styles.BtnSection}>
                  <Button isFocusVisible isFocused>isFocusVisible-true</Button>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isFocusVisible-false</Text>
                <View style={styles.BtnSection}>
                  <Button isFocusVisible={false} isFocused={false}>isFocusVisible-false</Button>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="colorScheme：按钮颜色">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>颜色按钮</Text>
                <View style={styles.BtnSection}>
                  <Button colorScheme="blue">blue</Button>
                  <Button colorScheme="amber">amber</Button>
                  <Button colorScheme="red">red</Button>
                  <Button colorScheme="blueGray">blueGray</Button>
                  <Button colorScheme="coolGray">coolGray</Button>
                  <Button colorScheme="cyan">cyan</Button>
                  <Button colorScheme="dark">dark</Button>
                  <Button colorScheme="emerald">emerald</Button>
                  <Button colorScheme="fuchsia">fuchsia</Button>
                  <Button colorScheme="green">green</Button>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="variant：按钮类型">
            <TestCase itShould="variant" tags={['dev']}>
              <View style={styles.BtnSection}>
                <Button colorScheme="blue" variant="ghost">
                  ghost
                </Button>
                <Button colorScheme="blue" variant="link">
                  link
                </Button>
                <Button colorScheme="blue" variant="outline">
                  outline
                </Button>
                <Button colorScheme="blue" variant="solid">
                  solid
                </Button>
                <Button colorScheme="blue" variant="subtle">
                  subtle
                </Button>
                <Button colorScheme="blue" variant="unstyled">
                  unstyled
                </Button>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <Button isDisabled>isDisabled:true</Button>
              <Button isDisabled={false}>isDisabled:false</Button>
            </TestCase>
            <TestCase itShould="isPressed" tags={['dev']}>
              <Button isPressed>isPressed:true</Button>
              <Button isPressed={false}>isPressed:false</Button>
            </TestCase>
            <TestCase itShould="isFocused" tags={['dev']}>
              <Button isFocused>isFocused:true</Button>
              <Button isFocused={false}>isFocused:false</Button>
            </TestCase>
            <TestCase itShould="isLoading" tags={['dev']}>
              <Button isLoading></Button>
              <Button isLoading={false}>isLoading:false</Button>
            </TestCase>
            <TestCase itShould="spinner" tags={['dev']}>
              <Button isLoading spinner={<Text>spinner</Text>}>
                spinner
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="size：按钮大小">
            <TestCase itShould="size" tags={['dev']}>
              <View style={styles.BtnSection}>
                <Button size="lg">lg</Button>
                <Button size="md">md</Button>
                <Button size="sm">sm</Button>
                <Button size="xs">xs</Button>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="startIcon">
            <TestCase itShould="size" tags={['dev']}>
              <Flex
                direction="row"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  startIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  startIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>
          <TestSuite name="endIcon">
            <TestCase itShould="size" tags={['dev']}>
              <Flex
                direction="row"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  endIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  endIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>
          <TestSuite name="leftIcon">
            <TestCase itShould="size" tags={['dev']}>
              <Flex
                direction="row"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  leftIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  leftIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>
          <TestSuite name="rightIcon">
            <TestCase itShould="size" tags={['dev']}>
              <Flex
                direction="row"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  variant="subtle"
                  rightIcon={
                    <Icon
                      as={Ionicons}
                      name="cloud-download-outline"
                      size="sm"
                    />
                  }
                  _icon={{width: 20, height: 20}}>
                  rightIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>

          <TestSuite name="_text：内部文本style">
            <TestCase itShould="_text" tags={['dev']}>
              <View style={styles.BtnSection}>
                <Button
                  backgroundColor="orange.100"
                  _text={{
                    color: 'orange.800',
                    fontSize: '20',
                  }}>
                  button内部文本显示
                </Button>
                <Button
                  backgroundColor="blue.100"
                  _text={{
                    color: 'blue.500',
                    fontSize: '20',
                  }}>
                  button内部文本显示
                </Button>
                <Button
                  _text={{
                    color: 'gray.600',
                    fontSize: '20',
                    backgroundColor: 'gray.100',
                  }}>
                  button内部文本显示
                </Button>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="isLoadingText:loading显示文本">
            <TestCase itShould="isLoadingText" tags={['dev']}>
              <Button
                isLoading
                isLoadingText="Loading文本"
                _text={{
                  color: 'orange.800',
                  fontSize: '20',
                  backgroundColor: 'amber',
                }}>
                _text
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_stack">
            <TestCase itShould="_stack 添加背景色" tags={['dev']}>
              <Button>_stack</Button>
              <Button _stack={{backgroundColor: 'yellow.100'}}>_stack</Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_icon">
            <TestCase itShould="_icon 添加背景色" tags={['dev']}>
              <Button
                rightIcon={
                  <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
                }>
                默认_icon
              </Button>
              <Button
                rightIcon={
                  <Icon as={Ionicons} name="cloud-download-outline" size="sm" />
                }
                _icon={{color: '#000000', backgroundColor: 'red.100'}}>
                _icon背景色与字体颜色
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_loading">
            <TestCase itShould="_loading" tags={['dev']}>
              <Button isLoading>默认_isLoading</Button>
              <Button isLoading _loading={{borderRadius: 20}}>
                _loading添加圆角20
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_isDisabled">
            <TestCase itShould="_isDisabled 添加背景色" tags={['dev']}>
              <Button isDisabled _disabled={{backgroundColor: 'yellow.200'}}>
                _isDisabled
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_spinner">
            <TestCase itShould="_spinner 添加背景色" tags={['dev']}>
              <Button isLoading _spinner={{backgroundColor: 'yellow.200'}}>
                _spinner
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_pressed">
            <TestCase itShould="_pressed 按下时添加背景色" tags={['dev']}>
              <Button _pressed={{backgroundColor: 'yellow.200'}}>
                _pressed
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="_focus">
            <TestCase
              itShould="_focus 获取焦点时改变背景色,圆角20"
              tags={['dev']}>
              <Button isFocused>_focus</Button>
              <Button
                isFocused
                _focus={{backgroundColor: 'red.200', borderRadius: 20}}>
                _focus
              </Button>
            </TestCase>
          </TestSuite>
          <TestSuite name="spinnerPlacement">
            <TestCase itShould="spinnerPlacement" tags={['dev']}>
              <Button
                isLoading
                spinnerPlacement="end"
                isLoadingText="Submitting">
                Button end
              </Button>
              <Button
                isLoading
                spinnerPlacement="start"
                isLoadingText="Submitting">
                Button start
              </Button>{' '}
            </TestCase>
          </TestSuite>
          <TestSuite name="isAttached">
            <TestCase itShould="isAttached: true" tags={['dev']}>
              <Button.Group isAttached colorScheme="blue" size="sm">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </Button.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isAttached">
            <TestCase itShould="isAttached: false" tags={['dev']}>
              <Button.Group isAttached={false} colorScheme="blue" size="sm">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
              </Button.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="direction">
            <TestCase itShould="direction: column" tags={['dev']}>
              <Flex
                direction="column"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  startIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  startIcon
                </Button>
                <Button
                  endIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  endIcon
                </Button>
                <Button
                  variant="subtle"
                  rightIcon={
                    <Icon
                      as={Ionicons}
                      name="cloud-download-outline"
                      size="sm"
                    />
                  }
                  _icon={{width: 20, height: 20}}>
                  rightIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>
          <TestSuite name="direction">
            <TestCase itShould="direction: row" tags={['dev']}>
              <Flex
                direction="row"
                wrap="wrap"
                alignItems="center"
                justifyContent="flex-start">
                <Button
                  startIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  startIcon
                </Button>
                <Button
                  endIcon={
                    <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
                  }
                  _icon={{width: 20, height: 20}}>
                  endIcon
                </Button>
                <Button
                  variant="subtle"
                  rightIcon={
                    <Icon
                      as={Ionicons}
                      name="cloud-download-outline"
                      size="sm"
                    />
                  }
                  _icon={{width: 20, height: 20}}>
                  rightIcon
                </Button>
              </Flex>
            </TestCase>
          </TestSuite>
          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
              <Button children={<Text>children文本</Text>}></Button>
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
  BtnSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
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

export default ButtonTest;
