import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Hidden, Image, Center, Button, useColorMode} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {useState} from 'react';
import React from 'react';

const HiddenColorMode = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="colorMode">
            <TestCase itShould="colorMode" tags={['dev']}>
              <View style={styles.section}>
                <Text>colorMode</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="coolGray"
                      _light={{
                        _text: {
                          color: 'white',
                        },
                      }}
                      onPress={() => {
                        toggleColorMode();
                      }}>
                      Change mode
                    </Button>
                    <Hidden colorMode="dark">
                      <Center mt="5">
                        <Text>Change mode Text</Text>
                      </Center>
                    </Hidden>
                    <Hidden colorMode="light">
                      <Center mt="5">
                        <Text>Change mode Text</Text>
                      </Center>
                    </Hidden>
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

export default HiddenColorMode;
