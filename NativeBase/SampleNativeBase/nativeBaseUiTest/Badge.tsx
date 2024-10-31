import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {
  Badge,
  Box,
  VStack,
  HStack,
  Button,
  Center,
  CloseIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

function Example() {
  return (
    <Box alignItems="center">
      <VStack>
        {/* 鸿蒙上单独写zIndex属性不生效可以用position+zIndex实现效果 */}
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-4}
          mr={-4}
          zIndex={1}
          variant="solid"
          position={'absolute'}
          right={0}
          top={-5}
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}>
          2
        </Badge>

        <Button
          zIndex={0}
          mx={{
            base: 'auto',
            md: 0,
          }}
          p="2"
          bg="cyan.500"
          _text={{
            fontSize: 14,
          }}>
          Notifications
        </Button>
      </VStack>
    </Box>
  );
}

const BadgeTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>colorScheme</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      startIcon={<MaterialIcons name="mic" size={20} />}>
                      SUCCESS
                    </Badge>
                    <Badge
                      colorScheme="danger"
                      endIcon={<MaterialIcons name="mic" size={20} />}>
                      DANGER
                    </Badge>
                    <Badge colorScheme="info">INFO</Badge>
                    <Badge colorScheme="coolGray">DARK</Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Variants">
            <TestCase itShould="Variants" tags={['dev']}>
              <View style={styles.section}>
                <Text>Variants</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <HStack
                      space={4}
                      mx={{
                        base: 'auto',
                        md: '0',
                      }}>
                      {['solid', 'outline', 'subtle'].map(key => (
                        <VStack key={key} space={4}>
                          <Badge
                            variant={key}
                            alignSelf="center"
                            rightIcon={<MaterialIcons name="mic" size={20} />}>
                            DEFAULT
                          </Badge>
                          <Badge
                            colorScheme="success"
                            alignSelf="center"
                            _text={{bg: 'amber.400'}}
                            variant={key}>
                            SUCCESS
                          </Badge>
                          <Badge
                            leftIcon={<MaterialIcons name="mic" size={20} />}
                            colorScheme="error"
                            alignSelf="center"
                            _icon={{
                              as: {MaterialIcons},
                              size: 100,
                              color: 'amber.900',
                            }}
                            variant={key}>
                            ERROR
                          </Badge>
                          <Badge
                            colorScheme="info"
                            alignSelf="center"
                            variant={key}>
                            INFO
                          </Badge>
                          <Badge
                            colorScheme="warning"
                            alignSelf="center"
                            variant={key}>
                            WARNING
                          </Badge>
                        </VStack>
                      ))}
                    </HStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="rightIcon">
            <TestCase itShould="rightIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>rightIcon</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      rightIcon={<MaterialIcons name="mic" size={20} />}>
                      rightIcon
                    </Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="leftIcon">
            <TestCase itShould="leftIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>leftIcon</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      leftIcon={<MaterialIcons name="mic" size={20} />}>
                      leftIcon
                    </Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="startIcon">
            <TestCase itShould="startIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>startIcon</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      startIcon={<MaterialIcons name="mic" size={20} />}>
                      startIcon
                    </Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="endIcon">
            <TestCase itShould="endIcon" tags={['dev']}>
              <View style={styles.section}>
                <Text>endIcon</Text>
                <View style={styles.subSection}>
                  <HStack
                    space={{
                      base: 2,
                      sm: 4,
                    }}
                    mx={{
                      base: 'auto',
                      md: 0,
                    }}>
                    <Badge
                      colorScheme="success"
                      endIcon={<MaterialIcons name="mic" size={20} />}>
                      SUCCESS
                    </Badge>
                  </HStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_text">
            <TestCase itShould="_text" tags={['dev']}>
              <View style={styles.section}>
                <Text>_text</Text>
                <View style={styles.subSection}>
                  <Center flex={1} px="3">
                    <Example />
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_icon">
            <TestCase itShould="_icon" tags={['dev']}>
              <View style={styles.section}>
                <Text>_icon</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <HStack
                      space={4}
                      mx={{
                        base: 'auto',
                        md: '0',
                      }}>
                      <VStack space={4}>
                        <Badge
                          leftIcon={<MaterialIcons name="mic" size={20} />}
                          colorScheme="error"
                          alignSelf="center"
                          _icon={{
                            as: {MaterialIcons},
                            size: 50,
                            color: 'amber.900',
                          }}>
                          ERROR
                        </Badge>
                      </VStack>
                    </HStack>
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

export default BadgeTest;
