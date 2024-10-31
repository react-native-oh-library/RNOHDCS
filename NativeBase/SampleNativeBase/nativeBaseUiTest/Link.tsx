import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Box, Link, VStack, Text, Divider} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const LinkTest = () => {
  const wrapperRef = useRef(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log(wrapperRef, 'myRefmyRef');
  }, []);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="href">
            <TestCase itShould="href" tags={['dev']}>
              <Box alignItems="center">
                <Link href="https://developer.huawei.com">
                  Click here to open documentation.
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="size-number20">
            <TestCase itShould="size-number20" tags={['dev']}>
              <Link
                backgroundColor={'amber.100'}
                size={20}
                href="https://developer.huawei.com">
                lg
              </Link>
            </TestCase>
            <TestCase itShould="size-number40" tags={['dev']}>
              <Link
                backgroundColor={'amber.100'}
                size={40}
                href="https://developer.huawei.com">
                lg
              </Link>
            </TestCase>
          </TestSuite>
          <TestSuite name="isUnderlined">
            <TestCase itShould="isUnderlined" tags={['dev']}>
              <Box alignItems="center">
                <Text>isUnderlined-true</Text>
                <Link isUnderlined href="https://developer.huawei.com">
                  Click isUnderlined true
                </Link>
              </Box>
              <Divider my="2" bg="emerald.500" />
              <Box alignItems="center">
                <Text>isUnderlined-false</Text>
                <Link isUnderlined={false} href="https://developer.huawei.com">
                  Click isUnderlined false
                </Link>
              </Box>
            </TestCase>
          </TestSuite>

          <TestSuite name="isExternal">
            <TestCase itShould="isExternal" tags={['dev']}>
              <Box alignItems="center">
                <Link isExternal href="https://developer.huawei.com">
                  Click isExternal true.
                </Link>
                <Link isExternal={false} href="https://developer.huawei.com">
                  Click isExternal false.
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="wrapperRef">
            <TestCase
              itShould="true"
              initialState={true}
              tags={['dev']}
              arrange={({setState}) => {
                return (
                  <Link
                    wrapperRef={wrapperRef}
                    // ref={wrapperRef}
                    onPress={() => {
                      setFlag(!flag);
                      setState(!flag);
                    }}>
                    Click here to open documentation.
                  </Link>
                );
              }}
              assert={({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
          <TestSuite name="onPress">
            <TestCase
              itShould="onPress"
              initialState={false}
              tags={['dev']}
              arrange={({setState}) => {
                return (
                  <Link
                    href="https://developer.huawei.com"
                    onPress={event => {
                      setState(true);
                    }}>
                    Click here to open documentation.
                  </Link>
                );
              }}
              assert={({expect, state}) => {
                expect(state).to.be.true;
              }}
            />
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

export default LinkTest;
