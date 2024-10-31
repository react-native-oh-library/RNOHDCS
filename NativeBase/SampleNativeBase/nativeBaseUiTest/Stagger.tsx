import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';

const StaggerTest = () => {
  const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    return (
      <HStack>
        <>
          <Box alignItems="center" minH="220">
            <Text>translateX：0</Text>
            <Stagger
              visible={isOpen}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 34,
                translateX: 0,
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen(!isOpen)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </>
        <>
          <Box alignItems="center" minH="220">
            <Text>translateX100</Text>

            <Stagger
              visible={isOpen2}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 100,
                translateX: 100,
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen2(!isOpen2)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </>
      </HStack>
    );
  };

  const Example2 = () => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
      <>
        <Center>
          <Box alignItems="center" minH="220">
            <Text>{'设置了transition:stagger- offset: 30'}</Text>
            <Stagger
              visible={isOpen2}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 34,
              }}
              exit={{
                translateY: 100,
                translateX: 0,
                scale: 0.5,
                opacity: 0,
                transition: {
                  duration: 100,
                  stagger: {
                    offset: 30,
                    reverse: true,
                  },
                },
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen2(!isOpen2)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </Center>
        <Center>
          <Box alignItems="center" minH="220">
            <Text>没设置transition:stagger- offset: 30</Text>
            <Stagger
              visible={isOpen3}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 34,
              }}
              exit={{
                translateY: 34,
                translateX: 100,
                scale: 0.5,
                opacity: 0,
                // transition: {
                //   duration: 100,
                //   stagger: {
                //     offset: 30,
                //     reverse: true,
                //   },
                // },
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen3(!isOpen3)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </Center>
      </>
    );
  };

  const Example3 = () => {
    const [isOpen3, setIsOpen3] = useState(false);

    return (
      <Center>
        <Box alignItems="center" minH="220">
          <Text>是否打开或者关闭-{isOpen3 ? '打开' : '关闭'}</Text>
          <Stagger
            visible={isOpen3}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <IconButton
              mb="4"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="microphone"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              onPress={() => {
                console.log(12);
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="video"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="microphone"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="teal.400"
              colorScheme="teal"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="video"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="4"
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="video"
                  color="warmGray.50"
                />
              }
            />
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            onPress={() => setIsOpen3(!isOpen3)}
            bg="cyan.400"
            onPressIn={() => {
              console.log('MaterialCommunityIconstest');
            }}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="warmGray.50"
                _dark={{
                  color: 'warmGray.50',
                }}
              />
            }
          />
        </HStack>
      </Center>
    );
  };

  const Example4 = () => {
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    return (
      <HStack>
        <Center>
          <Box alignItems="center" minH="220">
            <Text>设置animate：x轴偏移20</Text>
            <Stagger
              visible={isOpen4}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 34,
              }}
              animate={{
                translateY: 0,
                translateX: 20,
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  mass: 0.8,
                  stagger: {
                    offset: 30,
                    reverse: true,
                  },
                },
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen4(!isOpen4)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </Center>
        <Center>
          <Box alignItems="center" minH="220">
            <Text>未设animate,x轴偏移</Text>
            <Stagger
              visible={isOpen5}
              initial={{
                opacity: 0,
                scale: 0,
                translateY: 34,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  mass: 0.8,
                  stagger: {
                    offset: 30,
                    reverse: true,
                  },
                },
              }}>
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="indigo.500"
                colorScheme="indigo"
                borderRadius="full"
                onPress={() => {
                  console.log(12);
                }}
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="yellow.400"
                colorScheme="yellow"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="microphone"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="teal.400"
                colorScheme="teal"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
              <IconButton
                mb="4"
                variant="solid"
                bg="red.500"
                colorScheme="red"
                borderRadius="full"
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    size="6"
                    name="video"
                    color="warmGray.50"
                  />
                }
              />
            </Stagger>
          </Box>
          <HStack alignItems="center">
            <IconButton
              variant="solid"
              borderRadius="full"
              size="lg"
              onPress={() => setIsOpen5(!isOpen5)}
              bg="cyan.400"
              onPressIn={() => {
                console.log('MaterialCommunityIconstest');
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dots-horizontal"
                  color="warmGray.50"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                />
              }
            />
          </HStack>
        </Center>
      </HStack>
    );
  };
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="initial">
            <TestCase itShould="initial" tags={['dev']}>
              <View style={styles.section}>
                <Text>initial</Text>
                <View style={styles.subSection}>
                  <Example />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="animate">
            <TestCase itShould="animate" tags={['dev']}>
              <View style={styles.section}>
                <Text>animate</Text>
                <View style={styles.subSection}>
                  <Example4 />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="exit">
            <TestCase itShould="exit" tags={['dev']}>
              <View style={styles.section}>
                <Text>exit</Text>
                <View style={styles.subSection}>
                  <Example2 />
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="visible">
            <TestCase itShould="visible" tags={['dev']}>
              <View style={styles.section}>
                <Text>visible</Text>
                <View style={styles.subSection}>
                  <Example3 />
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

export default StaggerTest;
