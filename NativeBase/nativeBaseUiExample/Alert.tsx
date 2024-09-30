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

export function AlertExample() {
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
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
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
                    We are happy to announce that we are going live on July
                    28th. Get ready!
                  </Box>
                </VStack>
              </Alert>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>状态</Text>
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
        <View style={styles.section}>
          <Text>Composition</Text>
          <View style={styles.subSection}>
            <Center>
              <VStack space={5} maxW="400">
                <Alert w="100%" status="success">
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                      flexShrink={1}
                      space={1}
                      alignItems="center"
                      justifyContent="space-between">
                      <HStack space={2} flexShrink={1} alignItems="center">
                        <Alert.Icon />
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Application received!
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
                      _dark={{
                        _text: {
                          color: 'coolGray.600',
                        },
                      }}>
                      Your application has been received. We will review your
                      application and respond within the next 48 hours.
                    </Box>
                  </VStack>
                </Alert>
                <Alert w="100%" status="success">
                  <VStack space={1} flexShrink={1} w="100%" alignItems="center">
                    <Alert.Icon size="md" />
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      _dark={{
                        color: 'coolGray.800',
                      }}>
                      Application received!
                    </Text>

                    <Box
                      _text={{
                        textAlign: 'center',
                      }}
                      _dark={{
                        _text: {
                          color: 'coolGray.600',
                        },
                      }}>
                      Your application has been received. We will review your
                      application and respond within the next 48 hours.
                    </Box>
                  </VStack>
                </Alert>
              </VStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Action</Text>
          <View style={styles.subSection}>
            <Box w="100%" alignItems="center">
              <Collapse isOpen={show}>
                <Alert maxW="400" status="error">
                  <VStack space={1} flexShrink={1} w="100%">
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
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Please try again later!
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
                        onPress={() => setShow(false)}
                      />
                    </HStack>
                    <Box
                      pl="6"
                      _dark={{
                        _text: {
                          color: 'coolGray.600',
                        },
                      }}>
                      Your coupon could not be processed at this time.
                    </Box>
                  </VStack>
                </Alert>
              </Collapse>
              <Button
                size={'sm'}
                onPress={() => setShow(true)}
                mt={8}
                mx="auto">
                Re-Open
              </Button>
            </Box>
          </View>
        </View>
      </ScrollView>
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
