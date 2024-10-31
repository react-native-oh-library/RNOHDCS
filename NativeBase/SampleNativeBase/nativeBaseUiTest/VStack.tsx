import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {VStack, Center} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const HStackTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Basic">
            <TestCase itShould="测试direction属性值column" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <VStack space={3} justifyContent="center" direction="column">
                    <Center
                      h="40"
                      w="20"
                      bg="primary.300"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.500"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.700"
                      rounded="md"
                      shadow={3}
                    />
                  </VStack>
                </View>
              </View>
            </TestCase>
            <TestCase itShould="测试direction属性值column-reverse" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试direction属性值column-reverse</Text>
                <View style={styles.subSection}>
                  <VStack space={3} justifyContent="center" direction='column-reverse'>
                    <Center
                      h="40"
                      w="20"
                      bg="primary.300"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.500"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.700"
                      rounded="md"
                      shadow={3}
                    />
                  </VStack>
                </View>
              </View>
            </TestCase>
            <TestCase itShould="测试direction属性值row" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试direction属性值row</Text>
                <View style={styles.subSection}>
                  <VStack space={3} justifyContent="center" direction="row">
                    <Center
                      h="40"
                      w="20"
                      bg="primary.300"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.500"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.700"
                      rounded="md"
                      shadow={3}
                    />
                  </VStack>
                </View>
              </View>
            </TestCase>
            <TestCase itShould="测试direction属性值row-reverse" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试direction属性值row-reverse</Text>
                <View style={styles.subSection}>
                  <VStack space={3} justifyContent="center" direction="row-reverse">
                    <Center
                      h="40"
                      w="20"
                      bg="primary.300"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.500"
                      rounded="md"
                      shadow={3}
                    />
                    <Center
                      h="40"
                      w="20"
                      bg="primary.700"
                      rounded="md"
                      shadow={3}
                    />
                  </VStack>
                </View>
              </View>
            </TestCase>

          </TestSuite>
        </ScrollView>
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

export default HStackTest;
