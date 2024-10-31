import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Center, Box, Progress, VStack} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const ProgressTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="value">
            <TestCase itShould="value" tags={['dev']}>
              <View style={styles.section}>
                <Text>value</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <Progress value={45} mx="4" />
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>colorScheme</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <VStack space="md">
                        <VStack mx="4" space="md">
                          <Progress colorScheme="primary" value={35} />
                          <Progress colorScheme="secondary" value={45} />
                          <Progress colorScheme="emerald" value={55} />
                          <Progress colorScheme="warning" value={65} />
                          <Progress colorScheme="light" value={75} />
                        </VStack>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="size">
            <TestCase itShould="size" tags={['dev']}>
              <View style={styles.section}>
                <Text>size</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <VStack space="md">
                        <VStack mx="4" space="md">
                          <Progress size="xs" mb={4} value={25} />
                          <Progress size="sm" mb={4} value={35} />
                          <Progress size="md" mb={4} value={45} />
                          <Progress size="lg" mb={4} value={55} />
                          <Progress size="xl" mb={4} value={65} />
                          <Progress size="2xl" mb={4} value={75} />
                        </VStack>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="min">
            <TestCase itShould="min" tags={['dev']}>
              <View style={styles.section}>
                <Text>min</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <Progress
                        bg="coolGray.100"
                        _filledTrack={{
                          bg: 'lime.500',
                        }}
                        value={75}
                        min={30}
                      />
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_filledTrack">
            <TestCase itShould="_filledTrack" tags={['dev']}>
              <View style={styles.section}>
                <Text>_filledTrack</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <Progress
                        bg="coolGray.100"
                        _filledTrack={{
                          bg: 'lime.500',
                        }}
                        value={75}
                        mx="4"
                      />
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="max">
            <TestCase itShould="max" tags={['dev']}>
              <View style={styles.section}>
                <Text>max</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxW="400">
                      <Progress
                        bg="coolGray.100"
                        _filledTrack={{
                          bg: 'lime.500',
                        }}
                        value={75}
                        max={70}
                      />
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

export default ProgressTest;
