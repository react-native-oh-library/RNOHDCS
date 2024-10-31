import {View, StyleSheet, ScrollView} from 'react-native';
import {Actionsheet, Center, Button, Box, Text, Icon} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import {Path} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';

const ActionSheetTest = () => {
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
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="isOpen和onClose">
            <TestCase itShould="isOpen和onClose" tags={['dev']}>
              <View style={styles.section}>
                <Text>isOpen和onClose</Text>
                <Text>是否打开关闭-`{isOpen ? '打开' : '关闭'}`</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen(!isOpen)}>
                      isOpen和onClose
                    </Button>
                    <Actionsheet
                      isOpen={isOpen}
                      onClose={() => setIsOpen(!isOpen)}
                      size="full"
                      hideDragIndicator={true}>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} size="6" name="delete" />
                          }>
                          Delete
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} name="favorite" size="6" />
                          }>
                          Share
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={Ionicons} name="play-circle" size="6" />
                          }>
                          Play
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} size="6" name="favorite" />
                          }
                          onPress={() => setIsOpen(!isOpen)}>
                          Favourite colick close
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          isDisabled
                          startIcon={
                            <Icon viewBox="0 0 24 24" size="6" fill="none">
                              <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
                            </Icon>
                          }>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="disableOverlay">
            <TestCase itShould="disableOverlay" tags={['dev']}>
              <View style={styles.section}>
                <Text>disableOverlay-true</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen1(!isOpen1)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen1}
                      onClose={() => setIsOpen1(!isOpen1)}
                      disableOverlay>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen1(!isOpen1)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>disableOverlay-false</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen5(!isOpen5)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen5}
                      disableOverlay={false}
                      onClose={() => setIsOpen5(!isOpen5)}>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen5(!isOpen5)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
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
                    <Button onPress={() => setIsOpen2(!isOpen2)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen2}
                      onClose={() => setIsOpen2(!isOpen2)}
                      _backdrop={{
                        bg: 'teal.600',
                      }}>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen1(!isOpen1)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="hideDragIndicator">
            <TestCase itShould="hideDragIndicator" tags={['dev']}>
              <View style={styles.section}>
                <Text>hideDragIndicator-false</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen3(!isOpen3)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen3}
                      onClose={() => setIsOpen3(!isOpen3)}
                      hideDragIndicator={false}>
                      <Actionsheet.Content borderTopRadius="0">
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item>Cancel</Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
              <View style={styles.section}>
                <Text>hideDragIndicator-true</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen6(!isOpen6)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen6}
                      onClose={() => setIsOpen6(!isOpen6)}
                      hideDragIndicator>
                      <Actionsheet.Content borderTopRadius="0">
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item>Cancel</Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="useRNModal">
            <TestCase itShould="useRNModal-用户无感" tags={['dev']}>
              <View style={styles.section}>
                <Text>useRNModal</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen4(!isOpen4)}>
                      useRNModal
                    </Button>
                    <Actionsheet
                      useRNModal={false}
                      isOpen={isOpen4}
                      onClose={() => setIsOpen4(!isOpen4)}
                      size="full"
                      hideDragIndicator={true}>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} size="6" name="delete" />
                          }>
                          Delete
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} name="favorite" size="6" />
                          }>
                          Share
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={Ionicons} name="play-circle" size="6" />
                          }>
                          Play
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          startIcon={
                            <Icon as={MaterialIcons} size="6" name="favorite" />
                          }
                          onPress={() => setIsOpen4(!isOpen4)}>
                          Favourite colick close
                        </Actionsheet.Item>
                        <Actionsheet.Item
                          isDisabled
                          startIcon={
                            <Icon viewBox="0 0 24 24" size="6" fill="none">
                              <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
                            </Icon>
                          }>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_dragIndicatorWrapperOffSet">
            <TestCase
              itShould="_dragIndicatorWrapperOffSet-值bg: 'amber.900'"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_dragIndicatorWrapperOffSet</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen7(!isOpen7)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen7}
                      onClose={() => setIsOpen7(!isOpen7)}
                      _backdrop={{
                        bg: 'teal.600',
                      }}>
                      <Actionsheet.Content
                        _dragIndicatorWrapperOffSet={{bg: 'amber.900'}}>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen7(!isOpen7)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_dragIndicatorWrapper">
            <TestCase
              itShould="_dragIndicatorWrapper-值bg:'amber.600'"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_dragIndicatorWrapper</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen8(!isOpen8)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen8}
                      onClose={() => setIsOpen8(!isOpen8)}
                      _backdrop={{
                        bg: 'teal.600',
                      }}>
                      <Actionsheet.Content
                        _dragIndicatorWrapper={{bg: 'amber.600'}}>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen8(!isOpen8)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_dragIndicator">
            <TestCase itShould="_dragIndicator-值bg:'amber.600'" tags={['dev']}>
              <View style={styles.section}>
                <Text>_dragIndicator</Text>
                <View style={styles.subSection}>
                  <Center>
                    <Button onPress={() => setIsOpen9(!isOpen9)}>
                      Actionsheet
                    </Button>
                    <Actionsheet
                      isOpen={isOpen9}
                      onClose={() => setIsOpen9(!isOpen9)}
                      _backdrop={{
                        bg: 'teal.600',
                      }}>
                      <Actionsheet.Content _dragIndicator={{bg: 'amber.600'}}>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                              color: 'gray.300',
                            }}>
                            Albums
                          </Text>
                        </Box>
                        <Actionsheet.Item>Delete</Actionsheet.Item>
                        <Actionsheet.Item>Share</Actionsheet.Item>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                        <Actionsheet.Item onPress={() => setIsOpen9(!isOpen9)}>
                          Cancel
                        </Actionsheet.Item>
                      </Actionsheet.Content>
                    </Actionsheet>
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
export default ActionSheetTest;
