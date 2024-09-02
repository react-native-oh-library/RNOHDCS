import {useState, useRef, SetStateAction} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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

export function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState('md');

  const handleSizeClick = (newSize: SetStateAction<string>) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  const [modalVisibleIntialFocusRef, setmodalVisibleIntialFocusRef] =
    useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [modalVisibleAvoidKeyboard, setModalVisibleAvoidKeyboard] =
    useState(false);

  const [placement, setPlacement] = useState('');
  const [open, setOpen] = useState(false);

  const openModal = (placement: string) => {
    setOpen(true);
    setPlacement(placement);
  };

  const [customShowModal, setCustomShowModal] = useState(false);

  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Center>
              <Button onPress={() => setShowModal(true)}>Button</Button>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.CloseButton />
                  <Modal.Header>Contact Us</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Name</FormControl.Label>
                      <Input />
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
                          setShowModal(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setShowModal(false);
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Multiple Modals</Text>
          <View style={styles.subSection}>
            <Center>
              <Button onPress={() => setShowModal4(true)}>Button</Button>
              <Modal
                isOpen={showModal4}
                onClose={() => setShowModal4(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Order</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">Sub Total</Text>
                        <Text color="blueGray.400">$298.77</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">Tax</Text>
                        <Text color="blueGray.400">$38.84</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between">
                        <Text fontWeight="medium">Total Amount</Text>
                        <Text color="green.500">$337.61</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      flex="1"
                      onPress={() => {
                        setShowModal2(true);
                      }}>
                      Continue
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>

              <Modal
                isOpen={showModal2}
                onClose={() => setShowModal2(false)}
                size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Select Address</Modal.Header>
                  <Modal.Body>
                    <Radio.Group
                      defaultValue="address1"
                      name="address"
                      size="sm">
                      <VStack space={3}>
                        <Radio
                          alignItems="flex-start"
                          _text={{
                            mt: '-1',
                            ml: '2',
                            fontSize: 'sm',
                          }}
                          value="address1">
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </Radio>
                        <Radio
                          alignItems="flex-start"
                          _text={{
                            mt: '-1',
                            ml: '2',
                            fontSize: 'sm',
                          }}
                          value="address2">
                          6391 Elign St. Celina, Delaware 10299
                        </Radio>
                      </VStack>
                    </Radio.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      flex="1"
                      onPress={() => {
                        setShowModal3(true);
                      }}>
                      Continue
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>

              <Modal
                isOpen={showModal3}
                size="lg"
                onClose={() => setShowModal3(false)}>
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Payment Options</Modal.Header>
                  <Modal.Body>
                    <Radio.Group name="payment" size="sm">
                      <VStack space={3}>
                        <Radio
                          alignItems="flex-start"
                          _text={{
                            mt: '-1',
                            ml: '2',
                            fontSize: 'sm',
                          }}
                          value="payment1">
                          Cash on delivery
                        </Radio>
                        <Radio
                          alignItems="flex-start"
                          _text={{
                            mt: '-1',
                            ml: '2',
                            fontSize: 'sm',
                          }}
                          value="payment2">
                          Credit/ Debit/ ATM Card
                        </Radio>
                        <Radio
                          alignItems="flex-start"
                          _text={{
                            mt: '-1',
                            ml: '2',
                            fontSize: 'sm',
                          }}
                          value="payment3">
                          UPI
                        </Radio>
                      </VStack>
                    </Radio.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      flex="1"
                      onPress={() => {
                        setShowModal(false);
                        setShowModal2(false);
                        setShowModal3(false);
                      }}>
                      Checkout
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Multiple Modals</Text>
          <View style={styles.subSection}>
            <Center>
              <Modal
                isOpen={modalVisible}
                onClose={setModalVisible}
                size={size}>
                <Modal.Content maxH="212">
                  <Modal.CloseButton />
                  <Modal.Header>Return Policy</Modal.Header>
                  <Modal.Body>
                    <ScrollView>
                      <Text>
                        Create a 'Return Request' under “My Orders” section of
                        App/Website. Follow the screens that come up after
                        tapping on the 'Return’ button. Please make a note of
                        the Return ID that we generate at the end of the
                        process. Keep the item ready for pick up or ship it to
                        us basis on the return mode.
                      </Text>
                    </ScrollView>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setModalVisible(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setModalVisible(false);
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
              <Center>
                <VStack space={4}>
                  {['xs', 'sm', 'md', 'lg', 'xl', 'full'].map(size => {
                    return (
                      <Button
                        onPress={() => handleSizeClick(size)}
                        key={size}>{`Open ${size} Modal`}</Button>
                    );
                  })}
                </VStack>
              </Center>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>intialFocusRef and finalFocusRef</Text>
          <View style={styles.subSection}>
            <Center>
              <Modal
                isOpen={modalVisibleIntialFocusRef}
                onClose={() => setmodalVisibleIntialFocusRef(false)}
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
                          setModalVisible(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setModalVisible(false);
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
              <HStack space="4" justifyContent="center" alignItems="center">
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
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
        <View style={styles.section}>
          <Text>Modal with avoidKeyboard</Text>
          <View style={styles.subSection}>
            <Center>
              <Modal
                isOpen={modalVisibleAvoidKeyboard}
                onClose={() => setModalVisibleAvoidKeyboard(false)}
                avoidKeyboard
                justifyContent="flex-end"
                bottom="4"
                size="lg">
                <Modal.Content>
                  <Modal.CloseButton />
                  <Modal.Header>Forgot Password?</Modal.Header>
                  <Modal.Body>
                    Enter email address and we'll send a link to reset your
                    password.
                    <FormControl mt="3">
                      <FormControl.Label>Email</FormControl.Label>
                      <Input />
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      flex="1"
                      onPress={() => {
                        setModalVisibleAvoidKeyboard(false);
                      }}>
                      Proceed
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
              <VStack space={8} alignItems="center">
                <Button
                  w="104"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  Open Modal
                </Button>
                <Text textAlign="center">
                  Open modal and focus on the input element to see the effect.
                </Text>
              </VStack>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Modal Placement</Text>
          <View style={styles.subSection}>
            <Center>
              <Stack
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                space={2}>
                <Button onPress={() => openModal('top')}>Top</Button>
                <Button onPress={() => openModal('bottom')}>Bottom</Button>
                <Button onPress={() => openModal('center')}>Center</Button>
                <Button onPress={() => openModal('left')}>Left</Button>
                <Button onPress={() => openModal('right')}>Right</Button>
              </Stack>
              <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                safeAreaTop={true}>
                <Modal.Content maxWidth="350" {...styles[placement]}>
                  <Modal.CloseButton />
                  <Modal.Header>Contact Us</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Name</FormControl.Label>
                      <Input />
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
                          setOpen(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setOpen(false);
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Custom Backdrop Modal</Text>
          <View style={styles.subSection}>
            <Center>
              <Button onPress={() => setCustomShowModal(true)}>Button</Button>
              <Modal
                isOpen={customShowModal}
                onClose={() => setCustomShowModal(false)}
                _backdrop={{
                  _dark: {
                    bg: 'coolGray.800',
                  },
                  bg: 'warmGray.50',
                }}>
                <Modal.Content maxWidth="350" maxH="212">
                  <Modal.CloseButton />
                  <Modal.Header>Return Policy</Modal.Header>
                  <Modal.Body>
                    Create a 'Return Request' under “My Orders” section of
                    App/Website. Follow the screens that come up after tapping
                    on the 'Return’ button. Please make a note of the Return ID
                    that we generate at the end of the process. Keep the item
                    ready for pick up or ship it to us basis on the return mode.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setCustomShowModal(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setCustomShowModal(false);
                        }}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
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
