import {useState, useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {
  Select,
  Center,
  Box,
  Button,
  ScrollView,
  useTheme,
  Heading,
  VStack,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const Scrollview = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tester>
        <TestSuite name="children">
          <TestCase itShould="children" tags={['dev']}>
            <View style={styles.section}>
              <ScrollView
                w={['200', '300']}
                h="80"
                children={
                  <>
                    <Center mt="3" mb="4">
                      <Heading fontSize="xl">Cyan</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.cyan).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`cyan.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                    <Center mt="8" mb="4">
                      <Heading fontSize="xl">Yellow</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.cyan).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`yellow.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                    <Center mt="8" mb="4">
                      <Heading fontSize="xl"> Violet</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.violet).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`violet.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                  </>
                }></ScrollView>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="_contentContainerStyle">
          <TestCase itShould="_contentContainerStyle" tags={['dev']}>
            <View style={styles.section}>
              <ScrollView
                w={['200', '300']}
                h="80"
                _contentContainerStyle={{bg: 'amber.900'}}
                children={
                  <>
                    <Center mt="3" mb="4">
                      <Heading fontSize="xl">Cyan</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.cyan).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`cyan.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                    <Center mt="8" mb="4">
                      <Heading fontSize="xl">Yellow</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.cyan).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`yellow.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                    <Center mt="8" mb="4">
                      <Heading fontSize="xl"> Violet</Heading>
                    </Center>
                    <VStack flex="1">
                      {Object.keys(colors.violet).map((key, index) => {
                        if (index >= 1 && index <= 5)
                          return (
                            <Center py="4" bg={`violet.${key}`}>
                              {key}
                            </Center>
                          );
                      })}
                    </VStack>
                  </>
                }></ScrollView>
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

export default Scrollview;
