import {View, StyleSheet, Text} from 'react-native';
import {
  Stack,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Input,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const StackTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="测试divider">
            <TestCase itShould="测试divider" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试divider</Text>
                <View style={styles.subSection}>
                  <Stack
                    isHovered
                    direction="row"
                    mb="2.5"
                    mt="1.5"
                    space={1}
                    divider={<Center>divider</Center>}>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试space" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={5}>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试reversed" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={5} reversed>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试direction属性值" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <VStack space="2.5" mt="4" px="8">
                    <Heading size="md">row</Heading>
                    <Stack direction="row" mb="2.5" mt="1.5" space={3}>
                      <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 1
                      </Center>
                      <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 2
                      </Center>
                      <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 3
                      </Center>
                    </Stack>
                    <Divider />
                    <Heading size="md">column</Heading>
                    <Stack mb="2.5" mt="1.5" direction="column" space={3}>
                      <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 1
                      </Center>
                      <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 2
                      </Center>
                      <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 3
                      </Center>
                    </Stack>
                    <Divider />
                    <Heading size="md">row-reverse</Heading>
                    <Stack mb="2.5" mt="1.5" direction="row" reversed space={3}>
                      <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 1
                      </Center>
                      <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 2
                      </Center>
                      <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 3
                      </Center>
                    </Stack>
                    <Divider />
                    <Heading size="md">column-reverse</Heading>
                    <Stack
                      mb="2.5"
                      mt="1.5"
                      direction="column-reverse"
                      space={3}>
                      <Center
                        size="16"
                        bg="primary.400"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 1
                      </Center>
                      <Center
                        bg="primary.500"
                        size="16"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 2
                      </Center>
                      <Center
                        size="16"
                        bg="primary.700"
                        rounded="sm"
                        _text={{
                          color: 'warmGray.50',
                          fontWeight: 'medium',
                        }}
                        shadow={'3'}>
                        Box 3
                      </Center>
                    </Stack>
                    <Divider />
                  </VStack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={1} isDisabled>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试isFocused" tags={['dev']}>
              <View style={styles.section}>
                <Text>Basic</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={1} isFocused>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试isInvalid" tags={['dev']}>
              <View style={styles.section}>
                <Text>isInvalid-true</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={1} isInvalid>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isInvalid-false</Text>
                <View style={styles.subSection}>
                  <Stack
                    direction="row"
                    mb="2.5"
                    mt="1.5"
                    space={1}
                    isInvalid={false}>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
            </TestCase>

            <TestCase itShould="测试isReadOnly" tags={['dev']}>
              <View style={styles.section}>
                <Text>isReadOnly-true</Text>
                <View style={styles.subSection}>
                  <Stack direction="row" mb="2.5" mt="1.5" space={1} isReadOnly>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isInvalid-false</Text>
                <View style={styles.subSection}>
                  <Stack
                    direction="row"
                    mb="2.5"
                    mt="1.5"
                    space={1}
                    isReadOnly={false}>
                    <Center
                      size="16"
                      bg="primary.400"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 1
                    </Center>
                    <Center
                      bg="primary.500"
                      size="16"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 2
                    </Center>
                    <Center
                      size="16"
                      bg="primary.700"
                      rounded="sm"
                      _text={{
                        color: 'warmGray.50',
                        fontWeight: 'medium',
                      }}
                      shadow={'3'}>
                      Box 3
                    </Center>
                  </Stack>
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

export default StackTest;
