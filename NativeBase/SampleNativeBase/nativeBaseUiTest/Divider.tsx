import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Divider, Box, Heading, Flex} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const DividerTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="Orientation">
            <TestCase itShould="Orientation" tags={['dev']}>
              <View style={styles.section}>
                <Text>Orientation</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Box w="160">
                      <Heading mx="auto">Shoes</Heading>
                      <Divider
                        my="2"
                        _light={{
                          bg: 'muted.800',
                        }}
                        _dark={{
                          bg: 'muted.50',
                        }}
                      />
                      <Flex
                        mx="3"
                        direction="row"
                        justify="space-evenly"
                        h="60">
                        <Heading py="2">Girls</Heading>
                        <Divider
                          orientation="vertical"
                          mx="3"
                          _light={{
                            bg: 'muted.800',
                          }}
                          _dark={{
                            bg: 'muted.50',
                          }}
                        />
                        <Heading py="2">Boys</Heading>
                      </Flex>
                    </Box>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="thickness">
            <TestCase itShould="thickness" tags={['dev']}>
              <View style={styles.section}>
                <Text>thickness</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Flex direction="row" h="58" p="4">
                      <Text>Simple</Text>
                      <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                      />
                      <Text>Easy</Text>
                      <Divider
                        bg="indigo.500"
                        thickness="5"
                        mx="2"
                        orientation="vertical"
                      />
                      <Text>Beautiful</Text>
                    </Flex>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
}

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

export default DividerTest