import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Box,
  Heading,
  Center,
  Modal,
  Button,
  VStack,
  Icon,
  Text,
  Input,
  HStack,
  Skeleton,
  Stack,
  Switch,
  useDisclose,
  useBreakpointValue,
  useClipboard,
  useMediaQuery,
  useTheme,
  useToken,
  useColorMode,
  useColorModeValue,
  useContrastText,
  useAccessibleColors,
} from 'native-base';
import {useState} from 'react';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const HooksTest = () => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const flexDir = useBreakpointValue({
    base: 'column',
    lg: 'row',
  });

  const [isLandScape, isPortrait] = useMediaQuery([
    {
      orientation: 'landscape',
    },
    {
      orientation: 'portrait',
    },
  ]);

  const [isSmallScreen] = useMediaQuery({
    minWidth: 280,
  });

  const [copyText, setCopyText] = useState('Hello');
  const [pasteText, setPasteText] = useState('');
  const {value, onCopy} = useClipboard();

  const {colors} = useTheme();

  const [colorPick1, colorPick2] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors', // the subkey(s), resolving to `theme.colors.warning.1`
    ['yellow.500', 'cyan.500'], // a single fallback or fallback array matching the length of the previous arg
  );

  const {colorMode, toggleColorMode} = useColorMode();

  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');

  const bgDark = 'gray.900';
  const bgLight = 'gray.50';
  const colorContrastDark = useContrastText(bgDark);
  const colorContrastLight = useContrastText(bgLight);

  const [, , toggleAccessibleColors] = useAccessibleColors();
  const [, , toggleAccessibleColors1] = useAccessibleColors();
  const ButtonTemplate = ({shade}) => {
    const colorContrast = useContrastText(`emerald.${shade}`);
    return (
      <Center>
        <Button
          colorScheme="emerald"
          key={`emerald.${shade}`}
          bg={`emerald.${shade}`}
          _text={{
            color: colorContrast,
          }}
          mb={1}>
          Save
        </Button>
      </Center>
    );
  };

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="useDisclose">
            <TestCase itShould="useDisclose" tags={['dev']}>
              <View style={styles.section}>
                <Text>useDisclose</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header fontSize="4xl" fontWeight="bold">
                          Delete Customer
                        </Modal.Header>
                        <Modal.Body>
                          This will remove all data relating to Alex. This
                          action cannot be reversed. Deleted data can not be
                          recovered.
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="unstyled" mr="1" onPress={onClose}>
                            Cancel
                          </Button>
                          <Button colorScheme="error" onPress={onClose}>
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                    <Button onPress={onOpen}>Open Modal</Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useBreakpointValue">
            <TestCase
              itShould="useBreakpointValue-代码内部调用没有ui效果"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>useBreakpointValue</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <VStack
                    py="8"
                    space={8}
                    alignItems="center"
                    justifyContent="center">
                    <Heading>Why us?</Heading>
                    <View
                      style={{
                        flexDirection: flexDir,
                      }}>
                      <VStack
                        m="3"
                        w="140"
                        borderRadius="xl"
                        p="3"
                        bg="cyan.200"
                        space={2}
                        alignItems="center"
                        justifyContent="center">
                        <Icon
                          as={Foundation}
                          name="shield"
                          size="sm"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}
                        />
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Secure Checkout
                        </Text>
                      </VStack>
                      <VStack
                        m="3"
                        w="140"
                        borderRadius="xl"
                        p="3"
                        bg="cyan.200"
                        space={2}
                        alignItems="center"
                        justifyContent="center">
                        <Icon
                          as={Feather}
                          name="clock"
                          size="sm"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}
                        />
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Fast Turn Around
                        </Text>
                      </VStack>
                      <VStack
                        m="3"
                        w="140"
                        borderRadius="xl"
                        p="3"
                        bg="cyan.200"
                        space={2}
                        alignItems="center"
                        justifyContent="center">
                        <Icon
                          as={Feather}
                          name="clock"
                          size="sm"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}
                        />
                        <Text
                          fontSize="lg"
                          textAlign="center"
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Fast Turn Around
                        </Text>
                      </VStack>
                    </View>
                  </VStack>
                </ScrollView>
                {/* </View> */}
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useClipboard">
            <TestCase itShould="useClipboard" tags={['dev']}>
              <View style={styles.section}>
                <Text>useClipboard</Text>
                {/* <View style={styles.subSection}> */}
                <Center>
                  <VStack space={2} w="100%" maxW="300">
                    <HStack space={3}>
                      <Input
                        flex={1}
                        placeholder="Copy From"
                        onChangeText={v => setCopyText(v)}
                        value={copyText}
                      />
                      <Button onPress={() => onCopy(copyText)}>Copy</Button>
                    </HStack>
                    <HStack space={3}>
                      <Input
                        flex={1}
                        placeholder="Paste Here"
                        onChangeText={v => setPasteText(v)}
                        value={pasteText}
                      />
                      <Button onPress={() => setPasteText(value)}>Paste</Button>
                    </HStack>
                  </VStack>
                </Center>
                {/* </View> */}
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useMediaQuery">
            <TestCase itShould="useMediaQuery" tags={['dev']}>
              <View style={styles.section}>
                <Text>useMediaQuery</Text>
                {/* <View style={styles.subSection}> */}
                <Center w="100%">
                  {isPortrait && (
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      borderColor="coolGray.400"
                      p="4">
                      <VStack flex="3" space="4">
                        <Skeleton />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton h="3" flex="1" rounded="full" />
                        </HStack>
                      </VStack>
                    </HStack>
                  )}
                  {isLandScape && (
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      borderColor="coolGray.400"
                      p="4">
                      <Skeleton flex="1" h="150" rounded="md" />
                      <VStack flex="3" space="4">
                        <Skeleton />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton h="3" flex="1" rounded="full" />
                        </HStack>
                      </VStack>
                    </HStack>
                  )}
                </Center>
                <Center w="100%">
                  {isSmallScreen ? (
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      borderColor="coolGray.400"
                      p="4">
                      <VStack flex="3" space="4">
                        <Skeleton />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton h="3" flex="1" rounded="full" />
                        </HStack>
                      </VStack>
                    </HStack>
                  ) : (
                    <HStack
                      w="90%"
                      maxW="400"
                      borderWidth="1"
                      space={8}
                      rounded="md"
                      borderColor="coolGray.400"
                      p="4">
                      <Skeleton flex="1" h="150" rounded="md" />
                      <VStack flex="3" space="4">
                        <Skeleton />
                        <Skeleton.Text />
                        <HStack space="2" alignItems="center">
                          <Skeleton size="5" rounded="full" />
                          <Skeleton h="3" flex="2" rounded="full" />
                          <Skeleton h="3" flex="1" rounded="full" />
                        </HStack>
                      </VStack>
                    </HStack>
                  )}
                </Center>
                {/* </View> */}
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useTheme">
            <TestCase itShould="useTheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>useTheme</Text>
                <Center w="100%" justifyContent={'space-between'}>
                  {Object.keys(colors.primary).map((key, index) => {
                    if (index >= 1 && index <= 5)
                      return (
                        <Center py="4" bg={`primary.${key}`}>
                          {key}
                        </Center>
                      );
                  })}
                </Center>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useToken">
            <TestCase itShould="useToken" tags={['dev']}>
              <View style={styles.section}>
                <Text>useToken</Text>
                <Center w="100%" justifyContent={'space-between'}>
                  <VStack space={5}>
                    <HStack space={2} alignItems="center">
                      <Box bg={colorPick1} p="3"></Box>
                      <Text>{colorPick1}</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                      <Box bg={colorPick2} p="3"></Box>
                      <Text>{colorPick2}</Text>
                    </HStack>
                  </VStack>
                </Center>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useColorMode">
            <TestCase itShould="useColorMode" tags={['dev']}>
              <View style={styles.section}>
                <Text>useColorMode</Text>
                <Center>
                  <Box
                    p="4"
                    flex="1"
                    maxW="300"
                    mt={10}
                    w="100%"
                    bg={colorMode === 'dark' ? 'coolGray.800' : 'warmGray.50'}
                    safeArea>
                    <Text fontSize="lg" display="flex" mb="20">
                      The active color mode is{' '}
                      <Text bold fontSize="lg">
                        {colorMode}
                      </Text>
                    </Text>
                    <Button onPress={toggleColorMode} h={10}>
                      Toggle
                    </Button>
                  </Box>
                </Center>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useColorModeValue">
            <TestCase itShould="useColorModeValue" tags={['dev']}>
              <View style={styles.section}>
                <Text>useColorModeValue</Text>
                <Center>
                  <Box
                    p="4"
                    flex="1"
                    bg={bg}
                    maxW="300"
                    w="100%"
                    mt={10}
                    safeArea>
                    <Text fontSize="lg" display="flex" mb={20}>
                      The active color mode is{' '}
                      <Text bold fontSize="18px">
                        {text}
                      </Text>
                    </Text>
                    <Button onPress={toggleColorMode} h={10}>
                      Toggle
                    </Button>
                  </Box>
                </Center>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useAccessibleColors">
            <TestCase itShould="useAccessibleColors" tags={['dev']}>
              <View style={styles.section}>
                <Text>useAccessibleColors</Text>
                <Center>
                  <VStack space="4">
                    <Button
                      bg={bgDark}
                      _text={{
                        color: colorContrastDark,
                      }}>
                      NativeBase
                    </Button>
                    <Button
                      bg={bgLight}
                      _text={{
                        color: colorContrastLight,
                      }}>
                      NativeBase
                    </Button>
                  </VStack>
                </Center>
              </View>
            </TestCase>
          </TestSuite>
          <TestSuite name="useContrastText">
            <TestCase itShould="useContrastText" tags={['dev']}>
              <View style={styles.section}>
                <Text>useContrastText</Text>
                <Center>
                  <Stack space="3" direction={['column', 'row']}>
                    {Object.keys(colors.yellow).map((key, index) => {
                      if (index > 2 && index < 9)
                        return <ButtonTemplate shade={key} />;
                    })}
                  </Stack>
                  <HStack mt="6" space="3">
                    <Text>Toggle Accessible Colors</Text>
                    <Switch
                      onValueChange={toggleAccessibleColors1}
                      colorScheme="coolGray"
                    />
                  </HStack>
                </Center>
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

export default HooksTest;
