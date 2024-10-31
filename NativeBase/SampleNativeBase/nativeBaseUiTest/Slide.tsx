import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Slide,
  Center,
  Button,
  Alert,
  Text,
  useColorModeValue,
  Box,
  VStack,
  HStack,
  Heading,
  Input,
  CheckIcon,
  useSafeArea,
  Spacer,
  WarningIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {useState} from 'react';
import React from 'react';

const SlideTest = () => {
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isOpenTop1, setIsOpenTop1] = useState(false);
  const str = `${isOpenTop ? 'Hide' : 'Check Internet Connection'}`;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="placement">
            <TestCase itShould="placement" tags={['dev']}>
              <View style={styles.section}>
                <Text>placement-top </Text>
                <View style={styles.subSection}>
                  <Center h="32">
                    <Slide in={isOpenTop} placement="top">
                      <Alert
                        justifyContent="center"
                        status="error"
                        safeAreaTop={8}>
                        <Alert.Icon />
                        <Text color="error.600" fontWeight="medium">
                          No Internet Connection-top
                        </Text>
                      </Alert>
                    </Slide>
                    <Button
                      onPress={() => {
                        setIsOpenTop(!isOpenTop);
                      }}
                      variant="unstyled"
                      bg="coolGray.700:alpha.30"
                      _text={{
                        color: useColorModeValue('darkText', 'lightText'),
                      }}>
                      {str}
                    </Button>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>placement-bottom </Text>
                <View style={styles.subSection}>
                  <Center h="32">
                    <Slide in={isOpenTop1} placement='bottom'>
                      <Alert
                        justifyContent="center"
                        status="error"
                        safeAreaTop={8}>
                        <Alert.Icon />
                        <Text color="error.600" fontWeight="medium">
                          No Internet Connection-bottom
                        </Text>
                      </Alert>
                    </Slide>
                    <Button
                      onPress={() => {
                        setIsOpenTop1(!isOpenTop1);
                      }}
                      variant="unstyled"
                      bg="coolGray.700:alpha.30"
                      _text={{
                        color: useColorModeValue('darkText', 'lightText'),
                      }}>
                      {str}
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="in">
            <TestCase itShould="in" tags={['dev']}>
              <View style={styles.section}>
                <Text>in </Text>
                <View style={styles.subSection}>
                  <Center h="32">
                    <Slide in={isOpenTop} placement="top">
                      <Alert
                        justifyContent="center"
                        status="error"
                        safeAreaTop={8}>
                        <Alert.Icon />
                        <Text color="error.600" fontWeight="medium">
                          No Internet Connection
                        </Text>
                      </Alert>
                    </Slide>
                    <Button
                      onPress={() => {
                        setIsOpenTop(!isOpenTop);
                      }}
                      variant="unstyled"
                      bg="coolGray.700:alpha.30"
                      _text={{
                        color: useColorModeValue('darkText', 'lightText'),
                      }}>
                      {str}
                    </Button>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="duration">
            <TestCase itShould="duration" tags={['dev']}>
              <Center>
                <Box w={['250', '300']} justifyContent="center">
                  <VStack space={3}>
                    <Button my="2" onPress={() => setIsOpen(!isOpen)}>
                      Place Order
                    </Button>
                  </VStack>
                  <Slide in={isOpen} placement="top" duration={2000}>
                    <Box
                      w="100%"
                      position="absolute"
                      p="2"
                      borderRadius="xs"
                      bg="emerald.100"
                      alignItems="center"
                      justifyContent="center"
                      _dark={{
                        bg: 'emerald.200',
                      }}
                      safeArea>
                      <HStack space={2}>
                        <CheckIcon
                          size="4"
                          color="emerald.600"
                          mt="1"
                          _dark={{
                            color: 'emerald.700',
                          }}
                        />
                        <Text
                          color="emerald.600"
                          textAlign="center"
                          _dark={{
                            color: 'emerald.700',
                          }}
                          fontWeight="medium">
                          Order Placed Successfully.
                        </Text>
                      </HStack>
                    </Box>
                  </Slide>
                </Box>
              </Center>
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

export default SlideTest;
