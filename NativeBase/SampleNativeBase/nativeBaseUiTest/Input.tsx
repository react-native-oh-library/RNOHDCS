import React, {useEffect, useState, useRef} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {Box, Stack, Input} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const InputTest = () => {
  const ref = React.useRef({});
  const mywrapperRef = React.useRef({});
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input size="xs" placeholder="xs Input" />
                <Input size="sm" placeholder="sm Input" />
                <Input size="md" placeholder="md Input" />
                <Input size="lg" placeholder="lg Input" />
                <Input size="xl" placeholder="xl Input" />
                <Input size="2xl" placeholder="2xl Input" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="variant">
            <TestCase itShould="variant" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input variant="outline" placeholder="Outline" />
                <Input variant="filled" placeholder="Filled" />
                <Input variant="underlined" placeholder="Underlined" />
                <Input variant="unstyled" placeholder="Unstyled" />
                <Input variant="rounded" placeholder="Round" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input isDisabled placeholder="isDisabled true" />
                <Input isDisabled={false} placeholder="isDisabled:false" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="isFocused">
            <TestCase itShould="isFocused" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input isFocused={false} placeholder="isFocused false" />
                <Input isFocused placeholder="isFocused true" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="isFullWidth">
            <TestCase itShould="isFullWidth" tags={['dev']}>
              <Input isFullWidth={false} placeholder="isFullWidth false" />
              <Input isFullWidth placeholder="isFullWidth true" />
            </TestCase>
          </TestSuite>
          <TestSuite name="isReadOnly">
            <TestCase itShould="isReadOnly" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input isReadOnly={false} placeholder="isReadOnly false" />
                <Input isReadOnly placeholder="isReadOnly true" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="InputLeftElement">
            <TestCase itShould="InputLeftElement" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  InputLeftElement={<Text>InputLeftElement</Text>}
                  placeholder="placeholder"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="leftElement">
            <TestCase itShould="leftElement" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  InputLeftElement={<Text>InputLeftElement</Text>}
                  leftElement={<Text>leftElement</Text>}
                  placeholder="placeholder"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="InputRightElement">
            <TestCase itShould="InputRightElement" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  InputRightElement={<Text>InputRightElement</Text>}
                  placeholder="placeholder"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="rightElement">
            <TestCase itShould="rightElement" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  rightElement={<Text>rightElement</Text>}
                  placeholder="placeholder"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="type">
            <TestCase itShould="type" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input type="text" placeholder="type:text" />
                <Input type="password" placeholder="type:password" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="ref">
            <TestCase
              itShould="ref1"
              initialState={true}
              tags={['dev']}
              arrange={({setState}) => {
                return (
                  <>
                    <Input defaultValue="" ref={ref}></Input>
                    <Button
                      onPress={() => {
                        // @ts-ignore
                        ref.current.setNativeProps({
                          backgroundColor: '#00de0050',
                        });
                      }}
                      title="通过ref改变背景色"
                    />
                  </>
                );
              }}
              assert={({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>

          <TestSuite name="wrapperRef">
            <TestCase
              itShould="wrapperRef-会报错wrapperRef-undefined"
              initialState={true}
              tags={['dev']}
              arrange={({setState}) => {
                return (
                  <>
                    <Input defaultValue="" wrapperRef={mywrapperRef}></Input>
                    <Button
                      onPress={() => {
                        console.log(mywrapperRef);
                        // @ts-ignore
                        mywrapperRef.current.setNativeProps({
                          backgroundColor: '#00de0050',
                        });
                      }}
                      title="通过wrapperRef改变背景色"
                    />
                  </>
                );
              }}
              assert={({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>

          <TestSuite name="_focus">
            <TestCase itShould="_focus" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _focus={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_focus"
                  value="_focus"
                />
                <Input
                  isFocused
                  _focus={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_focus"
                  value="_focus"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="_disabled">
            <TestCase itShould="_disabled" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _disabled={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_disabled"
                  value="_disabled"
                />
                <Input
                  isDisabled
                  _disabled={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_disabled"
                  value="_disabled"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="_readOnly">
            <TestCase itShould="_readOnly" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _readOnly={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_readOnly"
                  value="_readOnly"
                />
                <Input
                  isReadOnly
                  _readOnly={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_readOnly"
                  value="_readOnly"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="_invalid">
            <TestCase
              itShould="_invalid 传入样式fontSize: 20, color: 'amber.600'"
              tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _invalid={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_invalid"
                  value="_invalid"
                />
                <Input
                  isInvalid
                  _invalid={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_invalid"
                  value="_invalid"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="_input">
            <TestCase itShould="_input" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _input={{fontSize: 10, color: 'amber.600'}}
                  placeholder="_input"
                  value="_input"
                />
                <Input
                  _input={{fontSize: 20, color: 'amber.600'}}
                  placeholder="_input"
                  value="_input"
                />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="_stack">
            <TestCase
              itShould="_stack backgroundColor:yellow.200"
              tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  _stack={{backgroundColor: 'yellow.200'}}
                  placeholder="_stack"
                  value="_stack">
                  <Text>_stack001</Text>
                  <Text>_stack002</Text>
                </Input>
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="focusOutlineColor">
            <TestCase itShould="focusOutlineColor" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  isFocused
                  focusOutlineColor="red.500"
                  placeholder="focusOutlineColor true"
                />
                <Input placeholder="focusOutlineColor fasle" />
              </Stack>
            </TestCase>
          </TestSuite>
          <TestSuite name="invalidOutlineColor">
            <TestCase itShould="invalidOutlineColor" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input
                  isInvalid
                  invalidOutlineColor="red.500"
                  placeholder="invalidOutlineColor true"
                />
                <Input placeholder="invalidOutlineColor fasle" />
              </Stack>
            </TestCase>
          </TestSuite>

          <TestSuite name="isInvalid">
            <TestCase itShould="isInvalid" tags={['dev']}>
              <Stack space={4} w="75%" maxW="300px" mx="auto">
                <Input isInvalid value="isInvalid:true" />
                <Input isInvalid={false} value="isInvalid：:false" />
              </Stack>
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

export default InputTest;
