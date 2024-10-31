import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {VStack, Center, Box, ZStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const VStackTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="reversed">
            <TestCase itShould="reversed-false" tags={['dev']}>
              <View style={styles.section}>
                <Text>reversed</Text>
                <View style={styles.subSection}>
                  <Center h="40">
                    <Box mt="-32" ml={20}>
                      <ZStack mt="3" ml={-50}>
                        <Box
                          bg="primary.700"
                          size="20"
                          rounded="lg"
                          shadow={3}
                        />
                        <Box
                          bg="primary.500"
                          mt="5"
                          ml="5"
                          size="20"
                          rounded="lg"
                          shadow={5}
                        />
                        <Box
                          bg="primary.300"
                          mt="10"
                          ml="10"
                          size="20"
                          rounded="lg"
                          shadow={7}
                        />
                      </ZStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
            <TestCase itShould="测试reversed" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试reversed</Text>
                <View style={styles.subSection}>
                  <Center h="40">
                    <Box mt="-32" ml={20}>
                      <ZStack mt="3" ml={-50} reversed>
                        <Box
                          bg="primary.700"
                          size="20"
                          rounded="lg"
                          shadow={3}
                        />
                        <Box
                          bg="primary.500"
                          mt="5"
                          ml="5"
                          size="20"
                          rounded="lg"
                          shadow={5}
                        />
                        <Box
                          bg="primary.300"
                          mt="10"
                          ml="10"
                          size="20"
                          rounded="lg"
                          shadow={7}
                        />
                      </ZStack>
                    </Box>
                  </Center>
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

export default VStackTest;
