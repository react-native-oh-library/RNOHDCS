import React, { useEffect, useState } from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import { HStack, Checkbox, Box, Stack } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
const CheckBoxTest = () => {
  const myRef = React.useRef();
  const [bg, setBg] = React.useState('#fa000050');
  const [groupValue, setGroupValue] = React.useState([]);
  useEffect(() => {
    const styleObj = {
      backgroundColor: bg,
    };
    // @ts-ignore
    // myRef.current.setNativeProps({
    //   style: styleObj,
    // });
  }, [myRef, bg]);
  const [defaultValue, setDefaultValue] = useState(["001"]);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="id">
            <TestCase itShould="id" tags={['dev']}>
              <HStack space={6}>
              <Checkbox.Group id="a">
                  <Checkbox id="1" value="001" ></Checkbox>
                  <Checkbox id="2" value="002" ></Checkbox>
                  <Checkbox id="3" value="003" ></Checkbox>
                </Checkbox.Group>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="value">
            <TestCase itShould="value" tags={['dev']}>
              <HStack space={6}>
                <Text>value为: {groupValue}</Text>
                <Checkbox.Group onChange={value => { setGroupValue(value) }}>
                  <Checkbox value="Photography" my="1"></Checkbox>
                  <Checkbox value="Writing" my="1"></Checkbox>
                </Checkbox.Group>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="defaultValue">
            <TestCase itShould="defaultValue" tags={['dev']}>
              <HStack space={6}>
                <Text>defaultValuee为: {defaultValue}</Text>
                <Checkbox.Group defaultValue={defaultValue} onChange={value => { setDefaultValue(value) }}>
                  <Checkbox value="002" my="1"></Checkbox>
                  <Checkbox value="003" my="1"></Checkbox>
                </Checkbox.Group>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <Box alignItems="center">
                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  space={3}
                  alignItems="flex-start">
                  <Checkbox
                    value="danger"
                    colorScheme="danger"
                    defaultIsChecked>
                    Danger
                  </Checkbox>
                  <Checkbox value="info" colorScheme="info" defaultIsChecked>
                    Info
                  </Checkbox>
                  <Checkbox
                    value="orange"
                    colorScheme="orange"
                    defaultIsChecked>
                    Orange
                  </Checkbox>
                  <Checkbox
                    value="purple"
                    colorScheme="purple"
                    defaultIsChecked>
                    Purple
                  </Checkbox>
                </Stack>
              </Box>
              ;
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="size 以此为lg,md,sm" tags={['dev']}>
              <HStack space={6}>
                <Checkbox.Group>
                  <Checkbox size="lg" value="002" my="1"></Checkbox>
                  <Checkbox size="md" value="002" my="1"></Checkbox>
                  <Checkbox size="sm" value="002" my="1"></Checkbox>
                </Checkbox.Group>
              </HStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="onChange">
            <TestCase
              itShould="true"
              initialState={false}
              tags={['dev']}
              arrange={({ setState }) => {
                return (
                  <Checkbox
                    _stack={{ fontSize: 20, color: 'red' }}
                    value="test2"
                    accessibilityLabel="onChange"
                    onChange={isSelected => {
                      setState(isSelected);
                    }}
                  />
                );
              }}
              assert={({ expect, state }) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
          <TestSuite name="_checkbox">
            <TestCase itShould="_checkbox 添加背景色" tags={['dev']}>
              <HStack space={6}>
                <Checkbox.Group _checkbox={{backgroundColor: "yellow.100"}}>
                  <Checkbox size="lg" value="002" my="1"></Checkbox>
                  <Checkbox size="md" value="002" my="1"></Checkbox>
                  <Checkbox size="sm" value="002" my="1"></Checkbox>
                </Checkbox.Group>
              </HStack>
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

export default CheckBoxTest;
