import React from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {AddIcon, DeleteIcon, HStack, Radio} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const RadioTest = () => {
  const [value, setValue] = React.useState('one');
  const myRef = React.useRef({});
  const mywrapperRef = React.useRef({});
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="value">
            <TestCase itShould="value" tags={['dev']}>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
                }}>
                <Radio value="one" my={1}>
                  One
                </Radio>
                <Radio value="two" my={1}>
                  Two
                </Radio>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="colorScheme">
                <HStack space={4}>
                  <Radio colorScheme="emerald" value="1" my={1}>
                    One
                  </Radio>
                  <Radio colorScheme="indigo" value="2" my={1}>
                    Two
                  </Radio>
                  <Radio colorScheme="purple" value="3" my={1}>
                    three
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="isDisabled">
                <HStack space={4}>
                  <Radio value="1" my={1} isDisabled>
                    First
                  </Radio>
                  <Radio value="2" my={1}>
                    Second
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isPressed">
            <TestCase itShould="isPressed" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="isPressed">
                <HStack space={4}>
                  <Radio
                    isPressed
                    value="1"
                    my={1}
                    _pressed={{backgroundColor: 'amber.700'}}>
                    isPressed true
                  </Radio>
                  <Radio isPressed={false} value="2" my={1}>
                    isPressed false
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isFocused">
            <TestCase itShould="isFocused" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="isFocused">
                <HStack space={4}>
                  <Radio
                    isFocused
                    _focus={{
                      backgroundColor: 'amber.500',
                      size: 10,
                    }}
                    value="1"
                    my={1}>
                    isFocused true
                  </Radio>
                  <Radio isFocused={false} value="2" my={1}>
                    isFocused false
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isFocusVisible">
            <TestCase itShould="isFocusVisible" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="isFocusVisible">
                <HStack space={4}>
                  <Radio isFocusVisible isFocused value="1" my={1}>
                    isFocusVisible true
                  </Radio>
                  <Radio isFocusVisible={false} value="2" my={1}>
                    isFocusVisible false
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="isInvalid">
            <TestCase itShould="isInvalid" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="isInvalid">
                <HStack space={4}>
                  <Radio isInvalid value="1" my={1}>
                    isInvalid true
                  </Radio>
                  <Radio isInvalid={false} value="2" my={1}>
                    isInvalid false
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="pick a size">
                <HStack space={4} w="75%" maxW="300px">
                  <Radio value="1" colorScheme="red" size="sm" my={1}>
                    Small
                  </Radio>
                  <Radio value="2" colorScheme="green" size="md" my={1}>
                    Medium
                  </Radio>
                  <Radio value="3" colorScheme="yellow" size="lg" my={1}>
                    Large
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="icon">
            <TestCase itShould="icon" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="pick a icon">
                <HStack space={4} w="75%" maxW="300px">
                  <Radio
                    _text={{
                      mx: 2,
                    }}
                    colorScheme="green"
                    value="1"
                    icon={<AddIcon />}
                    my={1}>
                    AddIcon
                  </Radio>
                  <Radio
                    _text={{
                      mx: 2,
                    }}
                    colorScheme="red"
                    value="2"
                    icon={<DeleteIcon />}
                    my={1}>
                    DeleteIcon
                  </Radio>
                </HStack>
              </Radio.Group>
            </TestCase>
          </TestSuite>
          <TestSuite name="wrapperRef">
            <TestCase itShould="wrapperRef" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  colorScheme="success"
                  accessibilityLabel="pick an option"
                  onChange={value => {
                    if (value === '2') {
                      // @ts-ignore
                      mywrapperRef.current.setNativeProps({
                        backgroundColor: '#00de0050',
                      });
                    } else {
                      // @ts-ignore
                      mywrapperRef.current.setNativeProps({
                        backgroundColor: '#fa000050',
                      });
                    }
                  }}>
                  <Radio colorScheme="success" value="1" my={1}>
                    Wrong
                  </Radio>
                  <Radio
                    colorScheme="success"
                    wrapperRef={mywrapperRef}
                    value="2"
                    my={1}>
                    Right-通过wrapperRef设置底色backgroundColor: '#fa000050'
                  </Radio>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_stack">
            <TestCase
              itShould="_stack-值是{bgColor: 'amber.800'}"
              tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      value="1"
                      _stack={{
                        bgColor: 'amber.800',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _stack-bgColor: 'amber.800'
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_disabled">
            <TestCase
              itShould="_disabled-backgroundColor: 'amber.500'"
              tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      value="1"
                      isDisabled
                      _disabled={{
                        bgColor: 'amber.800',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _disabled-md
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_checked">
            <TestCase itShould="_checked" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _checked={{
                        bgColor: 'amber.800',
                      }}
                      value="1"
                      my={1}>
                      设置_checked
                    </Radio>
                    <Radio value="2" my={1}>
                      未设置_checked
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_focus">
            <TestCase itShould="_focus" tags={['dev']}>
              <View style={styles.section}>
                {' '}
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      colorScheme="green"
                      value="1"
                      isFocused
                      _focus={{
                        backgroundColor: 'amber.500',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _readOnly
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_invalid">
            <TestCase
              itShould="_invalid-值backgroundColor: 'amber.500'"
              tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      colorScheme="green"
                      value="1"
                      isInvalid
                      _invalid={{
                        backgroundColor: 'amber.500',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _readOnly
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_readOnly">
            <TestCase itShould="_readOnly" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      colorScheme="green"
                      value="1"
                      _readOnly={{
                        size: 'md',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _readOnly
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_pressed">
            <TestCase itShould="_pressed" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="_pressed">
                  <HStack space={4}>
                    <Radio.Group
                      name="exampleGroup"
                      defaultValue="1"
                      accessibilityLabel="isPressed">
                      <HStack space={4}>
                        <Radio
                          isPressed
                          value="1"
                          my={1}
                          _pressed={{backgroundColor: 'amber.700'}}>
                          isPressed true
                        </Radio>
                        <Radio isPressed={false} value="2" my={1}>
                          isPressed false
                        </Radio>
                      </HStack>
                    </Radio.Group>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_icon">
            <TestCase itShould="_icon" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  defaultValue="1"
                  accessibilityLabel="pick a icon">
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      colorScheme="green"
                      value="1"
                      _icon={{
                        backgroundColor: 'amber.400',
                      }}
                      icon={<AddIcon />}
                      my={1}>
                      _icon-backgroundColor:'amber.400'
                    </Radio>
                  </HStack>
                  <HStack space={4} w="75%" maxW="300px">
                    <Radio
                      _text={{
                        mx: 2,
                      }}
                      _icon={{
                        backgroundColor: 'amber.500',
                      }}
                      colorScheme="red"
                      value="2"
                      icon={<DeleteIcon />}
                      my={1}>
                      _icon-backgroundColor:'amber.500'
                    </Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="_interactionBox">
            <TestCase itShould="_interactionBox" tags={['dev']}>
              <View style={styles.section}>
                <Radio.Group
                  name="exampleGroup"
                  colorScheme="success"
                  accessibilityLabel="pick an option">
                  <Radio
                    _interactionBox={{
                      bg: 'amber.600',
                      colorScheme: 'default',
                      width: 20,
                      height: 20,
                    }}
                    colorScheme="success"
                    value="2"
                    my={1}>
                    Wrong
                  </Radio>
                </Radio.Group>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="ref">
            <TestCase itShould="ref" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                colorScheme="success"
                accessibilityLabel="pick an option"
                onChange={value => {
                  if (value === '2') {
                    // @ts-ignore
                    myRef.current.setNativeProps({
                      backgroundColor: '#00de0050',
                    });
                  } else {
                    // @ts-ignore
                    myRef.current.setNativeProps({
                      backgroundColor: '#fa000050',
                    });
                  }
                }}>
                <Radio colorScheme="success" value="1" my={1}>
                  Wrong
                </Radio>
                <Radio colorScheme="success" ref={myRef} value="2" my={1}>
                  Right-通过ref设置底色backgroundColor: '#fa000050'
                </Radio>
              </Radio.Group>
            </TestCase>
          </TestSuite>

          <TestSuite name="onChange">
            <TestCase itShould="onChange" tags={['dev']}>
              <Radio.Group
                name="exampleGroup"
                colorScheme="success"
                accessibilityLabel="pick an option"
                onChange={value => {
                  Alert.alert('执行onchange');
                }}>
                <Radio colorScheme="success" value="1" my={1}>
                  Wrong
                </Radio>
                <Radio colorScheme="success" value="2" my={1}>
                  Right
                </Radio>
              </Radio.Group>
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

export default RadioTest;
