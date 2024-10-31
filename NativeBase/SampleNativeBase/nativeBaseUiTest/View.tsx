import {useState, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  Select,
  Center,
  Box,
  Button,
  View,
  useTheme,
  Heading,
  VStack,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const Viewt = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tester>
        <TestSuite name="children">
          <TestCase itShould="children" tags={['dev']}>
            <View style={styles.section}>
              <View
                children={
                  <Heading>
                    A component library for the
                    <Heading color="emerald.400">这是children内容</Heading>
                  </Heading>
                }></View>
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});

export default Viewt;
