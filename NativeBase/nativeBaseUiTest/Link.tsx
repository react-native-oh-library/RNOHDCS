import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Box, Link, VStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
export function LinkTest() {
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
                <Link href="https://nativebase.io">
                  Click here to open documentation.
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <VStack space={1} alignItems="center">
                <Link size="xsm" href="https://nativebase.io">
                  xsm
                </Link>
                <Link size="sm" href="https://nativebase.io">
                  sm
                </Link>
                <Link size="md" href="https://nativebase.io">
                  md
                </Link>
                <Link size="lg" href="https://nativebase.io">
                  lg
                </Link>
                <Link size="xl" href="https://nativebase.io">
                  xl
                </Link>
                <Link size="2xl" href="https://nativebase.io">
                  2xl
                </Link>
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="isUnderlined">
            <TestCase itShould="isUnderlined" tags={['dev']}>
              <Box alignItems="center">
                <Link isUnderlined href="https://nativebase.io">
                  Click isUnderlined true
                </Link>

                <Link isUnderlined={false} href="https://nativebase.io">
                  Click isUnderlined false
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="isUnderlined">
            <TestCase itShould="isUnderlined" tags={['dev']}>
              <Box alignItems="center">
                <Link isHovered href="https://nativebase.io">
                  Click isHovered true.
                </Link>
                <Link isHovered={false} href="https://nativebase.io">
                  Click isHovered false.
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="isExternal">
            <TestCase itShould="isExternal" tags={['dev']}>
              <Box alignItems="center">
                <Link isExternal href="https://nativebase.io">
                  Click isExternal true.
                </Link>
                <Link isExternal={false} href="https://nativebase.io">
                  Click isExternal false.
                </Link>
              </Box>
            </TestCase>
          </TestSuite>
          <TestSuite name="_hover">
            <TestCase itShould="_hover" tags={['dev']}>
              <Box alignItems="center">
                <Link
                  isHovered
                  _hover={{size: 'lg', color: 'amber.600', fontSize: 'lg'}}
                  href="https://nativebase.io">
                  Click isHovered true.
                </Link>
                <Link isHovered={false} href="https://nativebase.io">
                  Click isHovered false.
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
                    // wrapperRef={wrapperRef}
                    ref={wrapperRef}
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
                    href="https://nativebase.io"
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
