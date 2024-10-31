import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Alert,
  Center,
  VStack,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Box,
  Stack,
  ScrollView,
  Divider,
  Collapse,
  Button,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const AlertTest = () => {
  const [show, setShow] = useState(true);
  const statusArray = [
    {
      status: 'success',
      title: 'Selection successfully moved!',
    },
    {
      status: 'error',
      title: 'Please try again later!',
    },
    {
      status: 'info',
      title: 'We are going live in July!',
    },
    {
      status: 'warning',
      title: 'Poor internet connection.',
    },
  ];

  const getTextColor = (variant: any) => {
    switch (variant) {
      case 'left-accent':
      case 'top-accent':
      case 'subtle':
        return 'coolGray.800';

      case 'solid':
        return 'warmGray.50';
    }
  };

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>colorScheme</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Alert maxW="400" status="info" colorScheme="info">
                      <VStack space={2} flexShrink={1} w="100%">
                        <HStack
                          flexShrink={1}
                          space={2}
                          alignItems="center"
                          justifyContent="space-between">
                          <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text
                              fontSize="md"
                              fontWeight="medium"
                              color="coolGray.800">
                              We are going live in July!
                            </Text>
                          </HStack>
                          <IconButton
                            variant="unstyled"
                            _focus={{
                              borderWidth: 0,
                            }}
                            icon={<CloseIcon size="3" />}
                            _icon={{
                              color: 'coolGray.600',
                            }}
                          />
                        </HStack>
                        <Box
                          pl="6"
                          _text={{
                            color: 'coolGray.600',
                          }}>
                          We are happy to announce that we are going live on
                          July 28th. Get ready!
                        </Box>
                      </VStack>
                    </Alert>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="status">
            <TestCase itShould="status" tags={['dev']}>
              <View style={styles.section}>
                <Text>status</Text>
                <View style={styles.subSection}>
                  <Stack space={3} w="100%" maxW="400">
                    {statusArray.map(status => {
                      return (
                        <Alert w="100%" status={status.status}>
                          <VStack space={2} flexShrink={1} w="100%">
                            <HStack
                              flexShrink={1}
                              space={2}
                              justifyContent="space-between">
                              <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" />
                                <Text fontSize="md" color="coolGray.800">
                                  {status.title}
                                </Text>
                              </HStack>
                              <IconButton
                                variant="unstyled"
                                _focus={{
                                  borderWidth: 0,
                                }}
                                icon={<CloseIcon size="3" />}
                                _icon={{
                                  color: 'coolGray.600',
                                }}
                              />
                            </HStack>
                          </VStack>
                        </Alert>
                      );
                    })}
                  </Stack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Variant">
            <TestCase itShould="Variant" tags={['dev']}>
              <View style={styles.section}>
                <Text>Variant</Text>
                <View style={styles.subSection}>
                  <ScrollView mt={5}>
                    <Stack
                      space={3}
                      maxW="400"
                      mr={5}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center">
                      {[
                        'solid',
                        'left-accent',
                        'top-accent',
                        'outline',
                        'subtle',
                        'outline-light',
                      ].map(key => {
                        return (
                          <>
                            <Text bold fontSize="xl" mb="4" textAlign="center">
                              {key}
                            </Text>
                            <Alert
                              w="100%"
                              variant={key}
                              colorScheme="success"
                              status="success">
                              <VStack space={2} flexShrink={1} w="100%">
                                <HStack
                                  flexShrink={1}
                                  space={2}
                                  alignItems="center"
                                  justifyContent="space-between">
                                  <HStack
                                    space={2}
                                    flexShrink={1}
                                    alignItems="center">
                                    <Alert.Icon />
                                    <Text color={getTextColor(key)}>
                                      Selection successfully moved!
                                    </Text>
                                  </HStack>
                                </HStack>
                              </VStack>
                            </Alert>
                            <Divider mt="5" mb="2.5" />
                          </>
                        );
                      })}
                    </Stack>
                  </ScrollView>
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
    width: '100%',
    padding: 10,
  },
});

export default AlertTest