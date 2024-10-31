import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, extendTheme} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const theme = extendTheme({
  fonts: {
    heading: 'Helvetica',
    body: 'Georgia',
  },
});

const TextTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="fontSize">
            <TestCase itShould="fontSize" tags={['dev']}>
              <View style={styles.section}>
                <Text>fontSize</Text>
                <View style={styles.subSection}>
                  <Text fontSize="xs">xs</Text>
                  <Text fontSize="sm">sm</Text>
                  <Text fontSize="md">md</Text>
                  <Text fontSize="lg">lg</Text>
                  <Text fontSize="xl">xl</Text>
                  <Text fontSize="2xl">2xl</Text>
                  <Text fontSize="3xl">3xl</Text>
                  <Text fontSize="4xl">4xl</Text>
                  <Text fontSize="5xl">5xl</Text>
                  <Text fontSize="6xl">6xl</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="children">
            <TestCase itShould="属性children-标签套标签" tags={['dev']}>
              <View style={styles.section}>
                <Text>children</Text>
                <View style={styles.subSection}>
                  <Text isTruncated maxW="300" w="80%">
                    <Text>
                      H<Text sub>2</Text>O
                    </Text>
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="sub">
            <TestCase itShould="属性sub" tags={['dev']}>
              <View style={styles.section}>
                <Text>sub</Text>
                <View style={styles.subSection}>
                  <Text isTruncated maxW="300" w="80%">
                    <Text>
                      H<Text sub>2</Text>O
                    </Text>
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="letterSpacing">
            <TestCase itShould="letterSpacing" tags={['dev']}>
              <View style={styles.section}>
                <Text>letterSpacing</Text>
                <View style={styles.subSection}>
                  <Text letterSpacing={10} isTruncated maxW="300" w="80%">
                    letterSpacing间距
                  </Text>
                  <Text letterSpacing={20} isTruncated maxW="300" w="80%">
                    letterSpacing间距
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="lineHeight">
            <TestCase itShould="lineHeight" tags={['dev']}>
              <View style={styles.section}>
                <Text>lineHeight</Text>
                <View style={styles.subSection}>
                  <Text lineHeight={'4xl'} bg={'amber.300'}>
                    lineHeight行高4xl
                  </Text>
                  <Text lineHeight={'2xs'} bg={'amber.400'}>
                    lineHeight行高2xs
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="fontWeight">
            <TestCase itShould="fontWeight" tags={['dev']}>
              <View style={styles.section}>
                <Text>fontWeight</Text>
                <View style={styles.subSection}>
                  <Text fontWeight={'normal'}>fontWeight-normal</Text>
                  <Text fontWeight={'bold'}>fontWeight-bold</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="font-不生效">
            <TestCase itShould="font-不生效" tags={['dev']}>
              <View style={styles.section}>
                <Text>font-不生效</Text>
                <View style={styles.subSection}>
                  <Text
                    // fontFamily={'Paxifico'}
                    font={{
                      heading: 'Paxifico',
                      body: 'Paxifico',
                      mono: 'Paxifico',
                    }}>
                    This is body text
                  </Text>
                  <Text>This is body text</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="noOfLines">
            <TestCase itShould="noOfLines" tags={['dev']}>
              <View style={styles.section}>
                <Text>noOfLines</Text>
                <View style={styles.subSection}>
                  <Text noOfLines={2}>
                    noOfLines=2 Taj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-bold
                  </Text>
                  <Text noOfLines={3}>
                    noOfLines=3 Taj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-bold
                  </Text>
                  <Text>
                    Taj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj Mahal-boldTaj
                    Mahal-boldTaj Mahal-boldTaj Mahal-bold
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isTruncated">
            <TestCase itShould="isTruncated" tags={['dev']}>
              <View style={styles.section}>
                <Text>isTruncated</Text>
                <View style={styles.subSection}>
                  <Text isTruncated>
                    isTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncated
                  </Text>
                  <Text>
                    isTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncatedisTruncated
                  </Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="bold">
            <TestCase itShould="bold" tags={['dev']}>
              <View style={styles.section}>
                <Text>bold</Text>
                <View style={styles.subSection}>
                  <Text bold>Taj Mahal-bold</Text>
                  <Text>Taj Mahal</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="italic">
            <TestCase itShould="italic" tags={['dev']}>
              <View style={styles.section}>
                <Text>italic</Text>
                <View style={styles.subSection}>
                  <Text italic>Taj Mahal-italic</Text>
                  <Text>Taj Mahal</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="underline">
            <TestCase itShould="underline" tags={['dev']}>
              <View style={styles.section}>
                <Text>underline</Text>
                <View style={styles.subSection}>
                  <Text underline>Taj Mahal-underline</Text>
                  <Text>Taj Mahal</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="strikeThrough">
            <TestCase itShould="strikeThrough" tags={['dev']}>
              <View style={styles.section}>
                <Text>strikeThrough</Text>
                <View style={styles.subSection}>
                  <Text strikeThrough>Taj Mahal-strikeThrough</Text>
                  <Text>Taj Mahal</Text>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="highlight">
            <TestCase itShould="highlight" tags={['dev']}>
              <View style={styles.section}>
                <Text>highlight</Text>
                <View style={styles.subSection}>
                  <Text highlight>Taj Mahal-highlight</Text>
                  <Text>Taj Mahal</Text>
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

export default TextTest;
