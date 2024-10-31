import {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {
  Popover,
  Box,
  Button,
  VStack,
  Select,
  CheckIcon,
  Center,
  Input,
  FormControl,
  HStack,
  Divider,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';

const PopoverTest = () => {
  const [position, setPosition] = useState('auto');
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

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="defaultIsOpen">
            <TestCase itShould="defaultIsOpen-true自动打开" tags={['dev']}>
              <View style={styles.section}>
                <Text>defaultIsOpen</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <Popover
                      trapFocus={false}
                      defaultIsOpen
                      trigger={triggerProps => {
                        return (
                          <Button {...triggerProps} colorScheme="danger">
                            Delete Customer
                          </Button>
                        );
                      }}>
                      <Popover.Content
                        accessibilityLabel="Delete Customerd"
                        w="56">
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        <Popover.Header>Delete Customer</Popover.Header>
                        <Popover.Body>
                          This will remove all data relating to Alex. This
                          action cannot be reversed. Deleted data can not be
                          recovered.
                        </Popover.Body>
                        <Popover.Footer justifyContent="flex-end">
                          <Button.Group space={2}>
                            <Button colorScheme="coolGray" variant="ghost">
                              Cancel
                            </Button>
                            <Button colorScheme="danger">Delete</Button>
                          </Button.Group>
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isOpen">
            <TestCase itShould="isOpen" tags={['dev']}>
              <View style={styles.section}>
                <Text>isOpen</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen1(!isOpen1)}>
                              isOpen
                            </Button>
                          );
                        }}
                        isOpen={isOpen1}
                        onClose={() => setIsOpen1(!isOpen1)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen1(!isOpen1)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen1(!isOpen1)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen1(!isOpen1)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
              <View style={styles.section}>
                <Text>children</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen8(!isOpen8)}>
                              isOpen
                            </Button>
                          );
                        }}
                        isOpen={isOpen8}
                        onClose={() => setIsOpen8(!isOpen8)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen8(!isOpen8)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen8(!isOpen8)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen8(!isOpen8)}>
                                Children按钮
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="placement-位置">
            <TestCase itShould="placement-位置" tags={['dev']}>
              <View style={styles.section}>
                <Text>placement-位置</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover // @ts-ignore
                        placement={position === 'auto' ? undefined : position}
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen(true)}>
                              Delete Customer
                            </Button>
                          );
                        }}
                        isOpen={isOpen}
                        onClose={() => setIsOpen(!isOpen)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen(false)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will remove all data relating to Alex. This
                            action cannot be reversed. Deleted data can not be
                            recovered.
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen(false)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>

                      <Select
                        selectedValue={position}
                        mx={{
                          base: 0,
                          md: 'auto',
                        }}
                        accessibilityLabel="Select a position for Popover"
                        onValueChange={nextValue => setPosition(nextValue)}
                        _selectedItem={{
                          bg: 'cyan.600',
                          endIcon: <CheckIcon size={4} />,
                        }}>
                        <Select.Item label="auto" value="auto" />
                        <Select.Item label="Top Left" value="top left" />
                        <Select.Item label="Top" value="top" />
                        <Select.Item label="Top Right" value="top right" />
                        <Select.Item label="Right Top" value="right top" />
                        <Select.Item label="Right" value="right" />
                        <Select.Item
                          label="Right Bottom"
                          value="right bottom"
                        />
                        <Select.Item label="Bottom Left" value="bottom left" />
                        <Select.Item label="Bottom" value="bottom" />
                        <Select.Item
                          label="Bottom Right"
                          value="bottom right"
                        />
                        <Select.Item label="Left Top" value="left top" />
                        <Select.Item label="Left" value="left" />
                        <Select.Item label="Left Bottom" value="left bottom" />
                      </Select>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="trigger">
            <TestCase itShould="trigger手动触发的元素" tags={['dev']}>
              <View style={styles.section}>
                <Text>trigger</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen3(!isOpen3)}>
                              trigger手动触发的元素
                            </Button>
                          );
                        }}
                        isOpen={isOpen3}
                        onClose={() => setIsOpen3(!isOpen3)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onClose">
            <TestCase itShould="onClose-点击右上角叉叉关闭" tags={['dev']}>
              <View style={styles.section}>
                <Text>onClose</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen2(!isOpen2)}>
                              Open
                            </Button>
                          );
                        }}
                        isOpen={isOpen2}
                        onClose={() => {
                          Alert.alert('点击onClose'), setIsOpen2(!isOpen2);
                        }}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
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
                    <Popover
                      trigger={triggerProps => {
                        return (
                          <Button
                            colorScheme="danger"
                            alignSelf="center"
                            {...triggerProps}
                            onPress={() => setIsOpen9(!isOpen9)}>
                            Open
                          </Button>
                        );
                      }}
                      isOpen={isOpen9}
                      onClose={() => setIsOpen9(!isOpen9)}
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}>
                      <Popover.Content>
                        <Popover.CloseButton />
                        <Popover.Header>Contact Us</Popover.Header>
                        <Popover.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </Popover.Body>
                        <Popover.Footer>
                          <Button.Group space={2}>
                            <Button
                              variant="ghost"
                              colorScheme="blueGray"
                              onPress={() => {
                                setIsOpen9(!isOpen9);
                              }}>
                              Cancel
                            </Button>
                            <Button
                              onPress={() => {
                                setIsOpen9(!isOpen9);
                              }}>
                              Save
                            </Button>
                          </Button.Group>
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover>
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
                    <Popover
                      trigger={triggerProps => {
                        return (
                          <Button
                            colorScheme="danger"
                            alignSelf="center"
                            {...triggerProps}
                            onPress={() => setIsOpen6(!isOpen6)}>
                            Open
                          </Button>
                        );
                      }}
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}>
                      <Popover.Content>
                        <Popover.CloseButton />
                        <Popover.Header>Contact Us</Popover.Header>
                        <Popover.Body>
                          <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input ref={initialRef} />
                          </FormControl>
                          <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                          </FormControl>
                        </Popover.Body>
                        <Popover.Footer>
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
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover>
                    <HStack
                      space="4"
                      justifyContent="center"
                      alignItems="center">
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

          <TestSuite name="isKeyboardDismissable">
            <TestCase
              itShould="isKeyboardDismissable-系统返回键看是否关闭弹框"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>isKeyboardDismissable</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Popover
                      trigger={triggerProps => {
                        return (
                          <Button
                            colorScheme="danger"
                            alignSelf="center"
                            {...triggerProps}
                            onPress={() => setIsOpen7(!isOpen7)}>
                            isKeyboardDismissable
                          </Button>
                        );
                      }}
                      isKeyboardDismissable
                      isOpen={isOpen7}
                      onClose={() => setIsOpen7(!isOpen7)}>
                      <Popover.Content>
                        <Popover.CloseButton />
                        <Popover.Header>isKeyboardDismissable</Popover.Header>
                        <Popover.Body>
                          This will remove all data relating to Alex. This
                          action cannot be reversed. Deleted data can not be
                          recovered.
                        </Popover.Body>
                      </Popover.Content>
                    </Popover>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="trapFocus">
            <TestCase itShould="trapFocus" tags={['dev']}>
              <View style={styles.section}>
                <Text>trapFocus</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        trapFocus={true}
                        placement={'right'}
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen11(!isOpen11)}>
                              trapFocus-true
                            </Button>
                          );
                        }}
                        isOpen={isOpen11}
                        onClose={() => setIsOpen11(!isOpen11)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen11(!isOpen11)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen11(!isOpen11)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen11(!isOpen11)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                      <Popover
                        trapFocus={false}
                        placement={'right'}
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen10(!isOpen10)}>
                              trapFocus-false
                            </Button>
                          );
                        }}
                        isOpen={isOpen10}
                        onClose={() => setIsOpen10(!isOpen10)}>
                        <Popover.Content w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen10(!isOpen10)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen10(!isOpen10)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen10(!isOpen10)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldFlip">
            <TestCase itShould="shouldFlip" tags={['dev']}>
              <View style={styles.section}>
                <Text>trapFocus</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        shouldFlip
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen12(!isOpen12)}>
                              反转
                            </Button>
                          );
                        }}
                        isOpen={isOpen12}
                        onClose={() => setIsOpen12(!isOpen12)}>
                        <Popover.Content>
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen12(!isOpen12)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen12(!isOpen12)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen12(!isOpen12)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                      <Popover
                        shouldFlip={false}
                        trigger={triggerProps => {
                          return (
                            <Button
                              colorScheme="danger"
                              alignSelf="center"
                              {...triggerProps}
                              onPress={() => setIsOpen13(!isOpen13)}>
                              不反转
                            </Button>
                          );
                        }}
                        isOpen={isOpen13}
                        onClose={() => setIsOpen13(!isOpen13)}>
                        <Popover.Content>
                          <Popover.Arrow />
                          <Popover.CloseButton
                            onPress={() => setIsOpen13(!isOpen13)}
                          />
                          <Popover.Header>Delete Customer</Popover.Header>
                          <Popover.Body>
                            This will isOpen
                            <View>
                              <Text>Text test</Text>
                            </View>
                          </Popover.Body>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button
                                colorScheme="coolGray"
                                variant="ghost"
                                onPress={() => setIsOpen13(!isOpen13)}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() => setIsOpen13(!isOpen13)}>
                                Delete
                              </Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="crossOffset">
            <TestCase itShould="crossOffset-x轴偏移量（-50）" tags={['dev']}>
              <View style={styles.section}>
                <Text>crossOffset</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <Popover
                      trapFocus={false}
                      crossOffset={-50}
                      trigger={triggerProps => {
                        return (
                          <Button {...triggerProps} colorScheme="danger">
                            Delete Customer
                          </Button>
                        );
                      }}>
                      <Popover.Content
                        accessibilityLabel="Delete Customerd"
                        w="56">
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        <Popover.Header>crossOffset</Popover.Header>
                        <Popover.Footer justifyContent="flex-end">
                          <Button.Group space={2}>
                            <Button colorScheme="coolGray" variant="ghost">
                              Cancel
                            </Button>
                            <Button colorScheme="danger">Delete</Button>
                          </Button.Group>
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="offset">
            <TestCase itShould="offset-y轴偏移量（100）" tags={['dev']}>
              <View style={styles.section}>
                <Text>offset</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <Popover
                      trapFocus={false}
                      offset={100}
                      trigger={triggerProps => {
                        return (
                          <Button {...triggerProps} colorScheme="danger">
                            offset
                          </Button>
                        );
                      }}>
                      <Popover.Content
                        accessibilityLabel="Delete Customerd"
                        w="56">
                        <Popover.Arrow />
                        <Popover.CloseButton />
                        <Popover.Header>crossOffset</Popover.Header>
                        <Popover.Footer justifyContent="flex-end">
                          <Button.Group space={2}>
                            <Button colorScheme="coolGray" variant="ghost">
                              Cancel
                            </Button>
                            <Button colorScheme="danger">Delete</Button>
                          </Button.Group>
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldOverlapWithTrigger">
            <TestCase itShould="shouldOverlapWithTrigger" tags={['dev']}>
              <View style={styles.section}>
                <Text>offset</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        shouldOverlapWithTrigger
                        trigger={triggerProps => {
                          return (
                            <Button {...triggerProps} colorScheme="danger">
                              shouldOverlapWithTrigger-值为true
                            </Button>
                          );
                        }}>
                        <Popover.Content
                          accessibilityLabel="Delete Customerd"
                          w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>
                            shouldOverlapWithTrigger-值为true
                          </Popover.Header>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button colorScheme="coolGray" variant="ghost">
                                Cancel
                              </Button>
                              <Button colorScheme="danger">Delete</Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                      <Popover
                        shouldOverlapWithTrigger={false}
                        trigger={triggerProps => {
                          return (
                            <Button {...triggerProps} colorScheme="danger">
                              shouldOverlapWithTrigger-值为false
                            </Button>
                          );
                        }}>
                        <Popover.Content
                          accessibilityLabel="Delete Customerd"
                          w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>
                            shouldOverlapWithTrigger-值为false
                          </Popover.Header>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button colorScheme="coolGray" variant="ghost">
                                Cancel
                              </Button>
                              <Button colorScheme="danger">Delete</Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="useRNModal">
            <TestCase itShould="useRNModal-代码有效果单用户无感" tags={['dev']}>
              <View style={styles.section}>
                <Text>offset</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        useRNModal
                        trigger={triggerProps => {
                          return (
                            <Button {...triggerProps} colorScheme="danger">
                              useRNModal
                            </Button>
                          );
                        }}>
                        <Popover.Content
                          accessibilityLabel="Delete Customerd"
                          w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>
                            shouldOverlapWithTrigger-值为true
                          </Popover.Header>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button colorScheme="coolGray" variant="ghost">
                                Cancel
                              </Button>
                              <Button colorScheme="danger">Delete</Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onOpen">
            <TestCase itShould="onOpen" tags={['dev']}>
              <View style={styles.section}>
                <Text>onOpen</Text>
                <View style={styles.subSection}>
                  <Box w="100%" alignItems="center">
                    <VStack space={6} alignSelf="flex-start" w="100%">
                      <Popover
                        onOpen={() => Alert.alert('执行onOpen')}
                        trigger={triggerProps => {
                          return (
                            <Button {...triggerProps} colorScheme="danger">
                              useRNModal
                            </Button>
                          );
                        }}>
                        <Popover.Content
                          accessibilityLabel="Delete Customerd"
                          w="56">
                          <Popover.Arrow />
                          <Popover.CloseButton />
                          <Popover.Header>
                            shouldOverlapWithTrigger-值为true
                          </Popover.Header>
                          <Popover.Footer justifyContent="flex-end">
                            <Button.Group space={2}>
                              <Button colorScheme="coolGray" variant="ghost">
                                Cancel
                              </Button>
                              <Button colorScheme="danger">Delete</Button>
                            </Button.Group>
                          </Popover.Footer>
                        </Popover.Content>
                      </Popover>
                    </VStack>
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

export default PopoverTest;
