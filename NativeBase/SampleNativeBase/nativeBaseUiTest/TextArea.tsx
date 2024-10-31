import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Box, TextArea, Stack, Divider, Button} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

const TextAreaTest = () => {
  const mywrapperRef = React.useRef({});
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="测试wrapperRef">
            <TestCase itShould="测试wrapperRef" tags={['dev']}>
              <View style={styles.section}>
                <Button
                  onPress={() =>
                    // @ts-ignore
                    mywrapperRef.current.setNativeProps({
                      backgroundColor: '#00de0050',
                    })
                  }>
                  点击测试mywrapperRef
                </Button>
                <Text>测试mywrapperRef</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea wrapperRef={mywrapperRef} autoCompleteType />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试size">
            <TestCase itShould="测试size" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试size</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      size={'lg'}
                      placeholder="测试size-lg"
                      autoCompleteType
                    />
                    <TextArea
                      size={'md'}
                      placeholder="测试size-md"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试variant">
            <TestCase itShould="测试variant" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试variant</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      variant="filled"
                      placeholder="测试variant-filled"
                      autoCompleteType
                      isInvalid
                    />
                    <TextArea
                      variant="outline"
                      placeholder="测试variant-outline"
                      autoCompleteType
                      isInvalid
                    />
                    <TextArea
                      variant="rounded"
                      placeholder="测试variant-rounded"
                      autoCompleteType
                      isInvalid
                    />
                    <TextArea
                      variant="underlined"
                      placeholder="测试variant-underlined"
                      autoCompleteType
                      isInvalid
                    />
                    <TextArea
                      variant="unstyled"
                      placeholder="测试variant-unstyled"
                      autoCompleteType
                      isInvalid
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isInvalid">
            <TestCase itShould="测试isInvalid" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isInvalid</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isInvalid
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_invalid">
            <TestCase itShould="测试_invalid" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_invalid</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isInvalid
                      _invalid={{fontSize: 20, color: 'amber.600'}}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试placeholder">
            <TestCase itShould="测试placeholder" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试placeholder</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <Stack space={2.5} w="75%" maxW="300">
                      <Box>
                        <Text>Invalid TextArea</Text>
                        <TextArea
                          aria-label="t1"
                          numberOfLines={4}
                          placeholder="Invalid TextArea"
                          isInvalid
                          _dark={{
                            placeholderTextColor: 'gray.300',
                          }}
                          mb="5"
                          autoCompleteType
                        />
                        <Divider />
                      </Box>
                      <Box>
                        <Text>Disabled TextArea</Text>

                        <TextArea
                          aria-label="t1Disabled"
                          placeholder="Disabled TextArea"
                          isDisabled
                          autoCompleteType
                        />
                      </Box>
                    </Stack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isDisabled">
            <TestCase itShould="测试isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isDisabled-true</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <Stack space={2.5} w="75%" maxW="300">
                      <Box>
                        <Text>Disabled TextArea</Text>
                        <TextArea
                          aria-label="t1Disabled"
                          placeholder="Disabled TextArea"
                          isDisabled={true}
                          autoCompleteType
                        />
                      </Box>
                    </Stack>
                  </Box>
                </View>
              </View>
              <View style={styles.section}>
                <Text>测试isDisabled-false</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <Stack space={2.5} w="75%" maxW="300">
                      <Box>
                        <Text>Disabled TextArea</Text>
                        <TextArea
                          aria-label="t1Disabled"
                          placeholder="Disabled TextArea"
                          isDisabled={false}
                          autoCompleteType
                        />
                      </Box>
                    </Stack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isFocused">
            <TestCase itShould="测试isFocused" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isFocused</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isFocused
                    />
                  </Box>
                </View>
              </View>
              <View style={styles.section}>
                <Text>测试isFocused-false</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_focus">
            <TestCase itShould="测试_focus" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_focus</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isFocused
                      _focus={{fontSize: 20, color: 'amber.600'}}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_readOnly">
            <TestCase itShould="测试_readOnly" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_readOnly</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isReadOnly
                      _readOnly={{fontSize: 20, color: 'amber.600'}}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试isReadOnly">
            <TestCase itShould="测试isReadOnly" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试isReadOnly</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                      isReadOnly
                    />
                  </Box>
                </View>
              </View>
              <View style={styles.section}>
                <Text>测试isReadOnly-false</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      placeholder="Text Area Placeholder"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_stack">
            <TestCase itShould="测试_stack" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_stack</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      _stack={{
                        fontSize: 10,
                        color: 'amber.600',
                        height: 100,
                        width: 100,
                        backgroundColor:'amber.800'
                      }}
                      placeholder="_stack"
                      value="_stack"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="focusOutlineColor">
            <TestCase itShould="focusOutlineColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>focusOutlineColor</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      isFocused
                      focusOutlineColor="red.500"
                      placeholder="focusOutlineColor true"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="invalidOutlineColor">
            <TestCase itShould="invalidOutlineColor" tags={['dev']}>
              <View style={styles.section}>
                <Text>invalidOutlineColor</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      isInvalid
                      invalidOutlineColor='amber.300'
                      placeholder="invalidOutlineColor true"
                      autoCompleteType
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isFullWidth">
            <TestCase itShould="isFullWidth" tags={['dev']}>
              <View style={styles.section}>
                <Text>isFullWidth</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      isFullWidth
                      placeholder="invalidOutlineColor true"
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="type">
            <TestCase itShould="type" tags={['dev']}>
              <View style={styles.section}>
                <Text>type-password</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      type="password"
                      placeholder="invalidOutlineColor true"
                    />
                  </Box>
                </View>
              </View>
              <View style={styles.section}>
                <Text>type-text</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      type="text"
                      placeholder="invalidOutlineColor true"
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="InputLeftElement">
            <TestCase itShould="InputLeftElement" tags={['dev']}>
              <View style={styles.section}>
                <Text>InputLeftElement</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      InputLeftElement={<Text>addElement</Text>}
                      placeholder="placeholder"
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="InputRightElement">
            <TestCase itShould="InputRightElement" tags={['dev']}>
              <View style={styles.section}>
                <Text>InputRightElement</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      InputRightElement={<Text>addElement</Text>}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="leftElement">
            <TestCase itShould="leftElement" tags={['dev']}>
              <View style={styles.section}>
                <Text>leftElement</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      leftElement={<Text>addElement</Text>}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="rightElement">
            <TestCase itShould="rightElement" tags={['dev']}>
              <View style={styles.section}>
                <Text>rightElement</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center" w="100%">
                    <TextArea
                      autoCompleteType
                      type="password"
                      rightElement={<Text>addElement</Text>}
                    />
                  </Box>
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
export default TextAreaTest;
