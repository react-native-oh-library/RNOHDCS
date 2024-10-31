import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Spinner, HStack, Heading, useToast} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const SpinnerTest = () => {
  const toast = useToast();
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>

          <TestSuite name="color">
            <TestCase itShould="color" tags={['dev']}>
              <View style={styles.section}>
                <Text>color</Text>
                <View style={styles.subSection}>
                  <HStack space={8} justifyContent="center">
                    <Spinner color="emerald.500" />
                    <Spinner color="warning.500" />
                    <Spinner color="indigo.500" />
                    <Spinner color="cyan.500" />
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Sizes">
            <TestCase itShould="Sizes" tags={['dev']}>
              <View style={styles.section}>
                <Text>Sizes</Text>
                <View style={styles.subSection}>
                  <HStack space={8} justifyContent="center" alignItems="center">
                    <Spinner size="sm" />
                    <Spinner size="lg" />
                  </HStack>
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
    padding: 10,
  },
});

export default SpinnerTest
