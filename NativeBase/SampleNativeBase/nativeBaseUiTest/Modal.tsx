import {useState, useRef, SetStateAction} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {
  Center,
  Button,
  Modal,
  FormControl,
  Input,
  VStack,
  HStack,
  Text,
  Radio,
  Stack,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const ModalTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
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
  const [isOpen19, setIsOpen19] = useState(false);
  const [isOpen20, setIsOpen20] = useState(false);
  const [isOpen21, setIsOpen21] = useState(false);
  const [isOpen22, setIsOpen22] = useState(false);

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
                    <Modal defaultIsOpen={true}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>defaultIsOpen</Modal.Header>
                        <Modal.Body>defaultIsOpen</Modal.Body>
                        <Modal.Footer></Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_overlay">
            <TestCase
              itShould="_overlay-值style: {
                          backgroundColor: 'pink',
                        },"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_overlay</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen21(!isOpen21)}>
                      isOpen
                    </Button>
                    <Modal
                      isOpen={isOpen21}
                      overlayVisible
                      _overlay={{
                        style: {
                          backgroundColor: 'pink',
                        },
                      }}
                      onClose={() => setIsOpen21(!isOpen21)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen21(!isOpen21)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen21(!isOpen21)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isKeyboardDismissable">
            <TestCase itShould="isKeyboardDismissable" tags={['dev']}>
              <View style={styles.section}>
                <Text>isKeyboardDismissable</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen20(!isOpen20)}>
                      isOpen
                    </Button>
                    <Modal
                      isKeyboardDismissable
                      isOpen={isOpen20}
                      onClose={() => setIsOpen20(!isOpen20)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen20(!isOpen20)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen20(!isOpen20)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isKeyboardDismissable-false</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen22(!isOpen22)}>
                      isOpen
                    </Button>
                    <Modal
                      isKeyboardDismissable={false}
                      isOpen={isOpen22}
                      onClose={() => setIsOpen22(!isOpen22)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen22(!isOpen22)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen22(!isOpen22)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isOpen">
            <TestCase itShould="isOpen" tags={['dev']}>
              <View style={styles.section}>
                <Text>isOpen</Text>
                <Text>是否打开关闭-`{isOpen1 ? '打开' : '关闭'}`</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen1(!isOpen1)}>
                      isOpen
                    </Button>
                    <Modal
                      isOpen={isOpen1}
                      onClose={() => setIsOpen1(!isOpen1)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                      onPress={() => {
                        setIsOpen2(!isOpen2);
                      }}>
                      onClose点击又上交叉叉关闭
                    </Button>
                    <Modal
                      isOpen={isOpen2}
                      onClose={() => {
                        Alert.alert('执行了onClose-modal'),
                          setIsOpen2(!isOpen2);
                      }}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer></Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      size={400}
                      isOpen={isOpen3}
                      onClose={() => setIsOpen3(!isOpen3)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen4(!isOpen4)}>
                      size-200
                    </Button>
                    <Modal
                      size={200}
                      isOpen={isOpen4}
                      onClose={() => setIsOpen4(!isOpen4)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="initialFocusRef">
            <TestCase itShould="initialFocusRef-打开输入框聚焦" tags={['dev']}>
              <View style={styles.section}>
                <Text>initialFocusRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Modal
                      avoidKeyboard
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Contact Us</Modal.Header>
                        <Modal.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
            <TestCase itShould="finalFocusRef-关闭聚焦" tags={['dev']}>
              <View style={styles.section}>
                <Text>finalFocusRef</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Modal
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Contact Us</Modal.Header>
                        <Modal.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      avoidKeyboard
                      isOpen={isOpen7}
                      onClose={() => setIsOpen7(!isOpen7)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      closeOnOverlayClick
                      isOpen={isOpen9}
                      onClose={() => {
                        Alert.alert('closeOnOverlayClick点击背景关闭了');
                        setIsOpen9(!isOpen9);
                      }}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      overlayVisible={false}
                      isOpen={isOpen10}
                      onClose={() => setIsOpen10(!isOpen10)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen12(!isOpen12)}>
                      overlayVisible-默认true
                    </Button>
                    <Modal
                      overlayVisible
                      isOpen={isOpen12}
                      onClose={() => setIsOpen12(!isOpen12)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      backdropVisible
                      isOpen={isOpen11}
                      onClose={() => setIsOpen11(!isOpen11)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen13(!isOpen13)}>
                      backdropVisible-false
                    </Button>
                    <Modal
                      backdropVisible={false}
                      isOpen={isOpen13}
                      onClose={() => setIsOpen13(!isOpen13)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      backdropVisible
                      _backdrop={{
                        _dark: {
                          bg: 'coolGray.800',
                        },
                        bg: 'warmGray.50',
                      }}
                      isOpen={isOpen14}
                      onClose={() => setIsOpen14(!isOpen14)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      backdropVisible
                      _backdrop={{
                        _dark: {
                          bg: 'coolGray.800',
                        },
                        bg: 'warmGray.50',
                      }}
                      _backdropFade={{exitDuration: 1000, entryDuration: 2000}}
                      isOpen={isOpen15}
                      onClose={() => setIsOpen15(!isOpen15)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      backdropVisible
                      _fade={{
                        exitDuration: 1000,
                        entryDuration: 3000,
                      }}
                      isOpen={isOpen16}
                      onClose={() => setIsOpen16(!isOpen16)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
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
                      onClose={() => setIsOpen17(!isOpen17)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
                    <Modal
                      animationPreset="slide"
                      _slide={{
                        duration: 2000,
                        placement: 'top',
                      }}
                      isOpen={isOpen18}
                      onClose={() => setIsOpen18(!isOpen18)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
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
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="useRNModal">
            <TestCase
              itShould="useRNModal-改了原码测试属性生效但对于用户无感"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>useRNModal</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button
                      colorScheme="danger"
                      onPress={() => setIsOpen19(!isOpen19)}>
                      isOpen
                    </Button>
                    <Modal
                      useRNModal
                      isOpen={isOpen19}
                      onClose={() => setIsOpen19(!isOpen19)}>
                      <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>isOpen</Modal.Header>
                        <Modal.Body>isOpen</Modal.Body>
                        <Modal.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="unstyled"
                              colorScheme="coolGray"
                              onPress={() => setIsOpen19(!isOpen19)}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="danger"
                              onPress={() => setIsOpen19(!isOpen19)}>
                              Delete
                            </Button>
                          </Button.Group>
                        </Modal.Footer>
                      </Modal.Content>
                    </Modal>
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
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
});

export default ModalTest;
