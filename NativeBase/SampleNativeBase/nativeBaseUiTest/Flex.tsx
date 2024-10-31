import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {Flex, Center, Heading, VStack, Divider} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
const FlexTest = () => {
  const getExampleFlex = (examplePara: Object) => {
    return (
      <Flex {...examplePara} mb="2.5" mt="1.5">
        <Center
          size="16"
          bg="primary.100"
          _text={{
            color: 'coolGray.800',
          }}>
          100
        </Center>
        <Center
          size="16"
          bg="primary.200"
          _text={{
            color: 'coolGray.800',
          }}>
          200
        </Center>
        <Center
          bg="primary.300"
          size="16"
          _text={{
            color: 'coolGray.800',
          }}>
          300
        </Center>
      </Flex>
    );
  };
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="direction">
            <TestCase itShould="direction" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                <Heading size="md">row</Heading>
                {getExampleFlex({direction: 'row'})}
                <Divider />
                <Heading size="md">column</Heading>
                {getExampleFlex({direction: 'column'})}
                <Divider />
                <Heading size="md">row-reverse</Heading>
                {getExampleFlex({direction: 'row-reverse'})}

                <Divider />
                <Heading size="md">column-reverse</Heading>
                {getExampleFlex({direction: 'column-reverse'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="align">
            <TestCase itShould="align" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                {/* stretch baseline  normal "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";*/}
                <Heading size="md">flex-start</Heading>
                {getExampleFlex({align: 'flex-start'})}
                <Divider />
                <Heading size="md">flex-end</Heading>
                {getExampleFlex({align: 'flex-end'})}
                <Divider />
                <Heading size="md">start</Heading>
                {getExampleFlex({align: 'start'})}
                <Divider />
                <Heading size="md">end</Heading>
                {getExampleFlex({align: 'end'})}
                <Divider />
                <Heading size="md">center</Heading>
                {getExampleFlex({align: 'center'})}
                <Divider />
                <Heading size="md">baseline</Heading>
                {getExampleFlex({align: 'baseline'})}
                <Divider />
                <Heading size="md">normal</Heading>
                {getExampleFlex({align: 'normal'})}
                <Divider />
                <Heading size="md">stretch</Heading>
                {getExampleFlex({align: 'stretch'})}
                <Divider />

                {/*  "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"; */}
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({align: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({align: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({align: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({align: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({align: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({align: 'unset'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="justify">
            <TestCase itShould="justify" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                {/* "space-around" | "space-between" | "space-evenly" | "stretch"; center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start"  "left" | "normal" | "right" */}
                <Heading size="md">space-around</Heading>
                {getExampleFlex({justify: 'space-around'})}
                <Divider />
                <Heading size="md">space-between</Heading>
                {getExampleFlex({justify: 'space-between'})}
                <Divider />
                <Heading size="md">space-evenly</Heading>
                {getExampleFlex({justify: 'space-evenly'})}
                <Divider />
                <Heading size="md">stretch</Heading>
                {getExampleFlex({justify: 'stretch'})}
                <Divider />
                <Heading size="md">space-around</Heading>
                {getExampleFlex({justify: 'flex-start'})}
                <Divider />
                <Heading size="md">flex-end</Heading>
                {getExampleFlex({justify: 'flex-end'})}
                <Divider />
                <Heading size="md">start</Heading>
                {getExampleFlex({justify: 'start'})}
                <Divider />
                <Heading size="md">end</Heading>
                {getExampleFlex({justify: 'end'})}
                <Divider />
                <Heading size="md">center</Heading>
                {getExampleFlex({justify: 'center'})}
                <Divider />
                <Heading size="md">right</Heading>
                {getExampleFlex({justify: 'right'})}
                <Divider />
                <Heading size="md">normal</Heading>
                {getExampleFlex({justify: 'normal'})}
                <Divider />
                <Heading size="md">left</Heading>
                {getExampleFlex({justify: 'left'})}
                <Divider />

                {/*  "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"; */}
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({justify: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({justify: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({justify: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({justify: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({justify: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({justify: 'unset'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="wrap">
            <TestCase itShould="wrap" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                {/* "nowrap" | "wrap" | "wrap-reverse"*/}
                <Heading size="md">wrap</Heading>
                {getExampleFlex({wrap: 'wrap'})}
                <Divider />
                <Heading size="md">wrap-reverse</Heading>
                {getExampleFlex({wrap: 'wrap-reverse'})}
                <Divider />
                <Heading size="md">nowrap</Heading>
                {getExampleFlex({wrap: 'nowrap'})}
                <Divider />
                {/*  "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"; */}
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({wrap: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({wrap: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({wrap: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({wrap: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({wrap: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({wrap: 'unset'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="basis">
            <TestCase itShould="basis" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                {/* | "-moz-fit-content"  | "-moz-max-content" | "-moz-min-content | "-webkit-auto"| "auto" | "content" | "fit-content" | "max-content" | "min-content" */}
                <Heading size="md">-moz-fit-content</Heading>
                {getExampleFlex({basis: '-moz-fit-content'})}
                <Divider />
                <Heading size="md">-moz-max-content</Heading>
                {getExampleFlex({basis: '-moz-max-content'})}
                <Divider />
                <Heading size="md">-moz-min-content</Heading>
                {getExampleFlex({basis: '-moz-min-content'})}
                <Divider />
                <Heading size="md">auto</Heading>
                {getExampleFlex({basis: 'auto'})}
                <Divider />
                <Heading size="md">content</Heading>
                {getExampleFlex({basis: 'content'})}
                <Divider />
                <Heading size="md">fit-content</Heading>
                {getExampleFlex({basis: 'fit-content'})}
                <Divider />
                <Heading size="md">max-content</Heading>
                {getExampleFlex({basis: 'max-content'})}
                <Divider />
                <Heading size="md">min-content</Heading>
                {getExampleFlex({basis: 'min-content'})}
                <Divider />
                <Heading size="md">0</Heading>
                {getExampleFlex({basis: 0})}
                <Divider />
                <Heading size="md">30</Heading>
                {getExampleFlex({basis: 30})}
                <Divider />
                <Heading size="md">100</Heading>
                {getExampleFlex({basis: 100})}
                <Divider />
                {/*  "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"; */}
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({basis: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({basis: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({basis: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({basis: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({basis: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({basis: 'unset'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="grow">
            <TestCase itShould="grow" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                <Heading size="md">0</Heading>
                {getExampleFlex({grow: 0})}
                <Divider />
                <Heading size="md">1</Heading>
                {getExampleFlex({grow: 1})}
                <Divider />
                <Heading size="md">2</Heading>
                {getExampleFlex({grow: 2})}
                <Divider />

                {/*  "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"; */}
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({grow: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({grow: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({grow: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({grow: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({grow: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({grow: 'unset'})}
                <Divider />
              </VStack>
            </TestCase>
          </TestSuite>
          <TestSuite name="shrink">
            <TestCase itShould="shrink" tags={['dev']}>
              <VStack alignItems="start" space={2.5} w="100%" px="3">
                <Heading size="md">0</Heading>
                {getExampleFlex({shrink: 0})}
                <Divider />
                <Heading size="md">1</Heading>
                {getExampleFlex({shrink: 1})}
                <Divider />
                <Heading size="md">2</Heading>
                {getExampleFlex({shrink: 2})}
                <Divider />
                <Heading size="md">-moz-initial</Heading>
                {getExampleFlex({shrink: '-moz-initial'})}
                <Divider />
                <Heading size="md">inherit</Heading>
                {getExampleFlex({shrink: 'inherit'})}
                <Divider />
                <Heading size="md">initial</Heading>
                {getExampleFlex({shrink: 'initial'})}
                <Divider />
                <Heading size="md">revert</Heading>
                {getExampleFlex({shrink: 'revert'})}
                <Divider />
                <Heading size="md">revert-layer</Heading>
                {getExampleFlex({shrink: 'revert-layer'})}
                <Divider />
                <Heading size="md">unset</Heading>
                {getExampleFlex({shrink: 'unset'})}
                <Divider />
              </VStack>
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

export default FlexTest;
