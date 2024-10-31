import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Center,
  Box,
  VStack,
  HStack,
  Button,
  Skeleton,
  Image,
  Text,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const SkeletonTest = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [isLoaded3, setIsLoaded3] = useState(false);
  const [isLoaded4, setIsLoaded4] = useState(false);
  const [text, setText] = useState('');
  setTimeout(() => {
    setIsLoaded(true);
    setText(
      'Lose yourself in the greens of nature, the ones that make you strong. Come visit us at the Greenway Park, and we will be happy to show you around.',
    );
  }, 5000);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="fadeDuration">
            <TestCase itShould="fadeDuration-值2000" tags={['dev']}>
              <View style={styles.section}>
                <Text>fadeDuration</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <VStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      overflow="hidden"
                      rounded="md"
                      _dark={{
                        borderColor: 'coolGray.500',
                      }}
                      _light={{
                        borderColor: 'coolGray.200',
                      }}>
                      <Skeleton h="40" />
                      <Skeleton.Text px="4" />
                      <Skeleton
                        px="4"
                        my="4"
                        rounded="md"
                        startColor="primary.100"
                        fadeDuration={2000}
                      />
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="speed">
            <TestCase itShould="speed-值50" tags={['dev']}>
              <View style={styles.section}>
                <Text>speed</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <VStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      overflow="hidden"
                      rounded="md"
                      _dark={{
                        borderColor: 'coolGray.500',
                      }}
                      _light={{
                        borderColor: 'coolGray.200',
                      }}>
                      <Skeleton h="40" />
                      <Skeleton.Text px="4" />
                      <Skeleton
                        px="4"
                        my="4"
                        rounded="md"
                        startColor="primary.500"
                        speed={50}
                      />
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="endColor">
            <TestCase itShould="endColor-值amber.600" tags={['dev']}>
              <View style={styles.section}>
                <Text>endColor</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      _dark={{
                        borderColor: 'coolGray.500',
                      }}
                      _light={{
                        borderColor: 'coolGray.200',
                      }}
                      p="4">
                      <Skeleton flex="1" h="150" rounded="md" />
                      <VStack flex="3" space="4">
                        <Skeleton endColor="amber.600" />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton h="3" flex="1" rounded="full" />
                        </HStack>
                      </VStack>
                    </HStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="startColor">
            <TestCase itShould="startColor-值indigo.300" tags={['dev']}>
              <View style={styles.section}>
                <Text>startColor</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      _dark={{
                        borderColor: 'coolGray.500',
                      }}
                      _light={{
                        borderColor: 'coolGray.200',
                      }}
                      p="4">
                      <Skeleton flex="1" h="150" rounded="md" />
                      <VStack flex="3" space="4">
                        <Skeleton />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton
                            h="3"
                            flex="1"
                            rounded="full"
                            startColor="indigo.300"
                          />
                        </HStack>
                      </VStack>
                    </HStack>
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
                    <VStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={6}
                      rounded="md"
                      alignItems="center"
                      _dark={{
                        borderColor: 'coolGray.500',
                      }}
                      _light={{
                        borderColor: 'coolGray.200',
                      }}>
                      <Skeleton h="40" />
                      <Skeleton
                        borderWidth={1}
                        borderColor="coolGray.200"
                        endColor="warmGray.50"
                        size="20"
                        rounded="full"
                        mt="-70"
                      />
                      <HStack space="2">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton size="10" rounded="full" />
                        <Skeleton size="15" rounded="full" />
                        <Skeleton size="20" rounded="full" />
                        <Skeleton size="25" rounded="full" />
                      </HStack>
                      <Skeleton.Text lines={3} alignItems="center" px="12" />
                      <Skeleton mb="3" w="40" rounded="20" />
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="IsLoaded">
            <TestCase itShould="IsLoaded" tags={['dev']}>
              <View style={styles.section}>
                <Text>IsLoaded</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Button m="4" onPress={() => setIsLoaded(!isLoaded)}>
                      change isloaded
                    </Button>
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton h="40" isLoaded={isLoaded}></Skeleton>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          _line={{bg: 'red'}}
                          isLoaded={isLoaded}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            {text}
                          </Text>
                        </Skeleton.Text>
                        <Skeleton
                          px="4"
                          mb="4"
                          rounded="md"
                          startColor="primary.100"
                          isLoaded={isLoaded}></Skeleton>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text speed">
            <TestCase itShould="Skeleton.Text speed" tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text speed</Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton h="40"></Skeleton>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          _line={{bg: 'red'}}
                          speed={50}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            {text}
                          </Text>
                        </Skeleton.Text>
                        <Skeleton
                          px="4"
                          mb="4"
                          rounded="md"
                          startColor="primary.100">
                          <Button m="4">Explore</Button>
                        </Skeleton>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text IsLoaded">
            <TestCase itShould="Skeleton.Text IsLoaded" tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text IsLoaded </Text>
                <Button m="4" onPress={() => setIsLoaded1(!isLoaded1)}>
                  change isloaded1
                </Button>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          fadeDuration={2000}
                          _line={{bg: 'red'}}
                          isLoaded={isLoaded1}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            {text}text
                          </Text>
                        </Skeleton.Text>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text startColor">
            <TestCase
              itShould="Skeleton.Text startColor-值amber.900"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text startColor </Text>
                <Button m="4" onPress={() => setIsLoaded2(!isLoaded2)}>
                  change Text
                </Button>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          _line={{bg: 'red'}}
                          startColor={'amber.900'}
                          isLoaded={isLoaded2}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            text startColor
                          </Text>
                        </Skeleton.Text>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text endColor">
            <TestCase
              itShould="Skeleton.Text endColor-值amber.500"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text endColor </Text>
                <Button m="4" onPress={() => setIsLoaded4(!isLoaded4)}>
                  change Text
                </Button>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          _line={{bg: 'red'}}
                          endColor={'amber.900'}
                          isLoaded={isLoaded4}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            text endColor
                          </Text>
                        </Skeleton.Text>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text fadeDuration">
            <TestCase
              itShould="Skeleton.Text fadeDuration-值amber.900"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text fadeDuration </Text>
                <Button m="4" onPress={() => setIsLoaded3(!isLoaded3)}>
                  change Text
                </Button>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Box w="90%" maxWidth="400">
                      <VStack
                        maxWidth="400"
                        borderWidth="1"
                        space={8}
                        overflow="hidden"
                        rounded="md"
                        _dark={{
                          borderColor: 'coolGray.500',
                        }}
                        _light={{
                          borderColor: 'coolGray.200',
                        }}>
                        <Skeleton.Text
                          lines={1}
                          _stack={{
                            bg: 'red',
                          }}
                          px="4"
                          _line={{bg: 'red'}}
                          startColor={'amber.700'}
                          fadeDuration={3000}
                          isLoaded={isLoaded3}>
                          <Text px="3" fontSize={'lg'} lineHeight={'20px'}>
                            text fadeDuration
                          </Text>
                        </Skeleton.Text>
                        <Skeleton
                          px="4"
                          mb="4"
                          rounded="md"
                          startColor="primary.100"
                          isLoaded={isLoaded3}>
                          <Button m="4">Explore</Button>
                        </Skeleton>
                      </VStack>
                    </Box>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text lines">
            <TestCase itShould="Skeleton.Text lines-设置两行无效" tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text lines </Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Center w="100%">
                      <Box w="90%" maxWidth="400">
                        <VStack
                          maxWidth="400"
                          borderWidth="1"
                          space={8}
                          overflow="hidden"
                          rounded="md"
                          _dark={{
                            borderColor: 'coolGray.500',
                          }}
                          _light={{
                            borderColor: 'coolGray.200',
                          }}>
                          <Skeleton h="40" isLoaded={isLoaded}>
                            <Image
                              h="40"
                              source={{
                                uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                              }}
                            />
                          </Skeleton>
                          <Skeleton.Text lines={2} px="4" isLoaded={isLoaded}>
                            <Text px="4" fontSize={'md'} lineHeight={'20px'}>
                              {text}
                            </Text>
                          </Skeleton.Text>
                          <Skeleton
                            px="4"
                            mb="4"
                            rounded="md"
                            startColor="primary.100"
                            isLoaded={isLoaded}>
                            <Button m="4">Explore</Button>
                          </Skeleton>
                        </VStack>
                      </Box>
                    </Center>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text _line-无效">
            <TestCase itShould="Skeleton.Text _line" tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text _line </Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Center w="100%">
                      <Box w="90%" maxWidth="400">
                        <VStack
                          maxWidth="400"
                          borderWidth="1"
                          space={8}
                          overflow="hidden"
                          rounded="md"
                          _dark={{
                            borderColor: 'coolGray.500',
                          }}
                          _light={{
                            borderColor: 'coolGray.200',
                          }}>
                          <Skeleton h="40" isLoaded={isLoaded}>
                            <Image
                              h="40"
                              source={{
                                uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                              }}
                            />
                          </Skeleton>
                          <Skeleton.Text
                            lines={2}
                            px="4"
                            isLoaded={isLoaded}
                            _line={{backgroundColor: 'amber.900'}}>
                            <Text px="4" fontSize={'md'} lineHeight={'20px'}>
                              {text}
                            </Text>
                          </Skeleton.Text>
                          <Skeleton
                            px="4"
                            mb="4"
                            rounded="md"
                            startColor="primary.100"
                            isLoaded={isLoaded}>
                            <Button m="4">Explore</Button>
                          </Skeleton>
                        </VStack>
                      </Box>
                    </Center>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Skeleton.Text _stack">
            <TestCase itShould="Skeleton.Text _stack-无效" tags={['dev']}>
              <View style={styles.section}>
                <Text>Skeleton.Text _stack </Text>
                <View style={styles.subSection}>
                  <Center w="100%">
                    <Center w="100%">
                      <Box w="90%" maxWidth="400">
                        <VStack
                          maxWidth="400"
                          borderWidth="1"
                          space={8}
                          overflow="hidden"
                          rounded="md"
                          _dark={{
                            borderColor: 'coolGray.500',
                          }}
                          _light={{
                            borderColor: 'coolGray.200',
                          }}>
                          <Skeleton h="40" isLoaded={isLoaded}>
                            <Image
                              h="40"
                              source={{
                                uri: 'https://developer.huawei.com/images/new-content/develop/img_DLP_develop_gailan_ArkUI.png',
                              }}
                            />
                          </Skeleton>
                          <Skeleton.Text
                            lines={2}
                            px="4"
                            isLoaded={isLoaded}
                            _stack={{
                              backgroundColor: 'amber.700',
                              height:100,
                              width:300,
                              bg:'amber.800'
                            }}
                            _line={{backgroundColor: 'amber.900'}}>
                            <Text px="4" fontSize={'md'} lineHeight={'20px'}>
                              {text}
                            </Text>
                          </Skeleton.Text>
                          <Skeleton
                            px="4"
                            mb="4"
                            rounded="md"
                            startColor="primary.100"
                            isLoaded={isLoaded}>
                            <Button m="4">Explore</Button>
                          </Skeleton>
                        </VStack>
                      </Box>
                    </Center>
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

export default SkeletonTest;
