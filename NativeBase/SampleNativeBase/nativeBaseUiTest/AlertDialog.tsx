import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {
  Center,
  Button,
  AlertDialog,
  FormControl,
  HStack,
  Modal,
  Input,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const AlertDialogTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);

  const cancelRef = useRef(null);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="defaultIsOpen">
            <TestCase itShould="defaultIsOpen  值true" tags={['dev']}>
              <View style={styles.section}>
                <Text>defaultIsOpen</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen(!isOpen)}>
                      defaultIsOpen
                    </Button>
                    <AlertDialog
                      leastDestructiveRef={cancelRef}
                      defaultIsOpen={true}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>defaultIsOpen</AlertDialog.Header>
                        <AlertDialog.Body>defaultIsOpen</AlertDialog.Body>
                        <AlertDialog.Footer></AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isOpen">
            <TestCase itShould="isOpen" tags={['dev']}>
              <View style={styles.section}>
                <Text>isOpen</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen1(!isOpen1)}>
                      isOpen
                    </Button>
                    <AlertDialog
                      isOpen={isOpen1}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen1(!isOpen1)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen1(!isOpen1)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen1(!isOpen1)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onClose">
            <TestCase itShould="onClose" tags={['dev']}>
              <View style={styles.section}>
                <Text>onClose</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen2(!isOpen2)}>
                      onClose点击又上交叉叉关闭
                    </Button>
                    <AlertDialog
                      isOpen={isOpen2}
                      leastDestructiveRef={cancelRef}
                      onClose={() => {
                        Alert.alert('执行了onClose'),
                        setIsOpen2(!isOpen2)
                      }}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer></AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
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
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen3(!isOpen3)}>
                      size-400
                    </Button>
                    <AlertDialog
                      size={400}
                      isOpen={isOpen3}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen3(!isOpen3)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen3(!isOpen3)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen3(!isOpen3)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen4(!isOpen4)}>
                      size-200
                    </Button>
                    <AlertDialog
                      size={200}
                      isOpen={isOpen4}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen4(!isOpen4)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen4(!isOpen4)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen4(!isOpen4)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="leastDestructiveRef">
            <TestCase
              itShould="leastDestructiveRef-没有报错也没效果"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>leastDestructiveRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen5(!isOpen5)}>
                      leastDestructiveRef
                    </Button>
                    <AlertDialog
                      isOpen={isOpen5}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen5(!isOpen5)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              ref={cancelRef}
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen5(!isOpen5)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen5(!isOpen5)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="initialFocusRef">
            <TestCase itShould="initialFocusRef" tags={['dev']}>
              <View style={styles.section}>
                <Text>initialFocusRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <AlertDialog
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      initialFocusRef={initialRef}
                      leastDestructiveRef={cancelRef}
                      finalFocusRef={finalRef}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Contact Us</AlertDialog.Header>
                        <AlertDialog.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="ghost"
                              colorScheme="blueGray"
                              onPress={() => {
                                setIsOpen6(!isOpen6);
                              }}>
                              Cancel
                            </Button>
                            <Button
                              onPress={() => {
                                setIsOpen6(!isOpen6);
                              }}>
                              Save
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                    <HStack
                      space="4"
                      justifyContent="center"
                      alignItems="center">
                      <Button
                        onPress={() => {
                          setIsOpen6(!isOpen6);
                        }}>
                        Open Modal
                      </Button>
                      <Input
                        w="32"
                        ref={finalRef}
                        placeholder="Enter the OTP"
                        _light={{
                          placeholderTextColor: 'blueGray.700',
                        }}
                        _dark={{
                          placeholderTextColor: 'blueGray.100',
                        }}
                      />
                    </HStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="finalFocusRef">
            <TestCase itShould="finalFocusRef" tags={['dev']}>
              <View style={styles.section}>
                <Text>finalFocusRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <AlertDialog
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      initialFocusRef={initialRef}
                      leastDestructiveRef={cancelRef}
                      finalFocusRef={finalRef}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Contact Us</AlertDialog.Header>
                        <AlertDialog.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="ghost"
                              colorScheme="blueGray"
                              onPress={() => {
                                setIsOpen6(!isOpen6);
                              }}>
                              Cancel
                            </Button>
                            <Button
                              onPress={() => {
                                setIsOpen6(!isOpen6);
                              }}>
                              Save
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                    <HStack
                      space="4"
                      justifyContent="center"
                      alignItems="center">
                      <Button
                        onPress={() => {
                          setIsOpen6(!isOpen6);
                        }}>
                        Open Modal
                      </Button>
                      <Input
                        w="32"
                        ref={finalRef}
                        placeholder="Enter the OTP"
                        _light={{
                          placeholderTextColor: 'blueGray.700',
                        }}
                        _dark={{
                          placeholderTextColor: 'blueGray.100',
                        }}
                      />
                    </HStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          {/* <TestSuite name="avoidKeyboard">
            <TestCase itShould="avoidKeyboard" tags={['dev']}>
              <View style={styles.section}>
                <Text>avoidKeyboard</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen7(!isOpen7)}>
                      avoidKeyboard-不生效项目问题
                    </Button>
                    <AlertDialog
                      avoidKeyboard
                      isOpen={isOpen7}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen7(!isOpen7)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>
                          <Input></Input>
                          <Input></Input>
                          <Input></Input>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen7(!isOpen7)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen7(!isOpen7)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite> */}

          <TestSuite name="closeOnOverlayClick">
            <TestCase itShould="closeOnOverlayClick" tags={['dev']}>
              <View style={styles.section}>
                <Text>closeOnOverlayClick</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen9(!isOpen9)}>
                      closeOnOverlayClick-点击背景关闭
                    </Button>
                    <AlertDialog
                      closeOnOverlayClick
                      isOpen={isOpen9}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen9(!isOpen9)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen9(!isOpen9)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen9(!isOpen9)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="overlayVisible">
            <TestCase itShould="overlayVisible" tags={['dev']}>
              <View style={styles.section}>
                <Text>overlayVisible-</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen10(!isOpen10)}>
                      overlayVisible-false
                    </Button>
                    <AlertDialog
                      overlayVisible={false}
                      isOpen={isOpen10}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen10(!isOpen10)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen10(!isOpen10)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen10(!isOpen10)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen12(!isOpen12)}>
                      overlayVisible-默认true
                    </Button>
                    <AlertDialog
                      overlayVisible
                      isOpen={isOpen12}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen12(!isOpen12)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen12(!isOpen12)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen12(!isOpen12)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="backdropVisible">
            <TestCase itShould="backdropVisible" tags={['dev']}>
              <View style={styles.section}>
                <Text>backdropVisible</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen11(!isOpen11)}>
                      backdropVisible-默认true
                    </Button>
                    <AlertDialog
                      backdropVisible
                      isOpen={isOpen11}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen11(!isOpen11)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen11(!isOpen11)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen11(!isOpen11)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen13(!isOpen13)}>
                      backdropVisible-false
                    </Button>
                    <AlertDialog
                      backdropVisible={false}
                      isOpen={isOpen13}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen13(!isOpen13)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen13(!isOpen13)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen13(!isOpen13)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_backdrop">
            <TestCase itShould="_backdrop" tags={['dev']}>
              <View style={styles.section}>
                <Text>_backdrop</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen14(!isOpen14)}>
                      _backdrop
                    </Button>
                    <AlertDialog
                      backdropVisible
                      _backdrop={{
                        _dark: {
                          bg: 'coolGray.800',
                        },
                        bg: 'warmGray.50',
                      }}
                      isOpen={isOpen14}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen14(!isOpen14)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen14(!isOpen14)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen14(!isOpen14)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_backdropFade">
            <TestCase itShould="_backdropFade" tags={['dev']}>
              <View style={styles.section}>
                <Text>_backdropFade </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen15(!isOpen15)}>
                      _backdropFader
                    </Button>
                    <AlertDialog
                      backdropVisible
                      _backdrop={{
                        _dark: {
                          bg: 'coolGray.800',
                        },
                        bg: 'warmGray.50',
                      }}
                      _backdropFade={{exitDuration: 1000, entryDuration: 2000}}
                      isOpen={isOpen15}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen15(!isOpen15)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen15(!isOpen15)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen15(!isOpen15)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_fade">
            <TestCase itShould="_fade" tags={['dev']}>
              <View style={styles.section}>
                <Text>_fade </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen16(!isOpen16)}>
                      _fade
                    </Button>
                    <AlertDialog
                      backdropVisible
                      _fade={{
                        exitDuration: 1000,
                        entryDuration: 3000,
                      }}
                      isOpen={isOpen16}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen16(!isOpen16)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen16(!isOpen16)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen16(!isOpen16)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_slide">
            <TestCase itShould="_slide" tags={['dev']}>
              <View style={styles.section}>
                <Text>_slide </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen17(!isOpen17)}>
                      _slide
                    </Button>
                    <AlertDialog
                      backdropVisible
                      animationPreset="slide"
                      _slide={{
                        duration: 3000,
                        placement: 'top',
                        overlay: true,
                        _overlay: {
                          isOpen: true,
                        },
                      }}
                      isOpen={isOpen17}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen17(!isOpen17)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen17(!isOpen17)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen17(!isOpen17)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="animationPreset">
            <TestCase itShould="animationPreset" tags={['dev']}>
              <View style={styles.section}>
                <Text>animationPreset </Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen18(!isOpen18)}>
                      animationPreset
                    </Button>
                    <AlertDialog
                      animationPreset="slide"
                      _slide={{
                        duration: 2000,
                        placement: 'top',
                      }}
                      isOpen={isOpen18}
                      leastDestructiveRef={cancelRef}
                      onClose={() => setIsOpen18(!isOpen18)}>
                      <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>isOpen</AlertDialog.Header>
                        <AlertDialog.Body>isOpen</AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen18(!isOpen18)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen18(!isOpen18)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </AlertDialog.Footer>
                      </AlertDialog.Content>
                    </AlertDialog>
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

export default AlertDialogTest;
