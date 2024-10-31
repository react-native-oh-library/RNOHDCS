import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {
  Button,
  Box,
  Menu,
  Pressable,
  HamburgerIcon,
  Divider,
  VStack,
  Select,
  CheckIcon,
} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React from 'react';
import {color} from 'harmony/react-native-native-base/lib/commonjs/theme/styled-system';

const MenuTest = () => {
  const [shouldOverlapWithTrigger] = useState(false);
  const [position, setPosition] = useState('auto');
  const [show, setshow] = useState(false);
  const [textValue, setTextValue] = useState('textValue默认值');
  const [optionValue, setOptionValue] = useState('value');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="defaultIsOpen">
            <TestCase itShould="defaultIsOpen" tags={['dev']}>
              <View style={styles.section}>
                {/* <Text>trigger</Text> */}
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      defaultIsOpen={isOpen1}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item onPress={() => setIsOpen1(!isOpen1)}>
                        关闭
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Menu.Item _text">
            <TestCase itShould=" Menu.Item _text-值'amber.800'" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item _text={{color: 'amber.800'}}>Arial</Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isOpen">
            <TestCase itShould="isOpen" tags={['dev']}>
              <View style={styles.section}>
                <Button onPress={() => setIsOpen(!isOpen)}>isOpen</Button>
                {/* <Text>trigger</Text> */}
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      isOpen={isOpen}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item onPress={() => setIsOpen(!isOpen)}>
                        关闭
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="trigger">
            <TestCase itShould="trigger" tags={['dev']}>
              <View style={styles.section}>
                {/* <Text>trigger</Text> */}
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item _stack={{fontSize: 10, color: 'red'}}>
                        Arial
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onOpen & onClose">
            <TestCase
              itShould="onOpen & onClose 打开菜单 & 点击空白区域关闭菜单"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      onOpen={() => Alert.alert('打开菜单触发onOpen')}
                      onClose={() => Alert.alert('关闭菜单触发onClose')}
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="closeOnSelect">
            <TestCase
              itShould="closeOnSelect: false 按下菜单选项时不关闭"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="closeOnSelect">
            <TestCase
              itShould="closeOnSelect: true 按下菜单选项时关闭菜单"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={true}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="crossOffset">
            <TestCase itShould="crossOffset  菜单向X轴偏移50" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      crossOffset={-50}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item _stack={{fontSize: 10, color: 'red'}}>
                        Arial
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="offset">
            <TestCase itShould="offset  菜单Y轴偏移50" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      offset={50}
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item _stack={{fontSize: 10, color: 'red'}}>
                        Arial
                      </Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                      <Menu.Item>Poppins</Menu.Item>
                      <Menu.Item>SF Pro</Menu.Item>
                      <Menu.Item>Helvetica</Menu.Item>
                      <Menu.Item isDisabled>Sofia</Menu.Item>
                      <Menu.Item>Cookie</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldOverlapWithTrigger">
            <TestCase itShould="shouldOverlapWithTrigger: false" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      shouldOverlapWithTrigger={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldOverlapWithTrigger">
            <TestCase itShould="shouldOverlapWithTrigger: true" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      shouldOverlapWithTrigger={true}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Placement">
            <TestCase itShould="Placement" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <VStack space={6} alignSelf="flex-start" w="100%">
                    <Menu
                      w="160"
                      shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
                      placement={position == 'auto' ? undefined : position}
                      trigger={triggerProps => {
                        return (
                          <Button
                            alignSelf="center"
                            variant="solid"
                            {...triggerProps}>
                            Menu
                          </Button>
                        );
                      }}>
                      <Menu.Item>Arial</Menu.Item>
                      <Menu.Item>Nunito Sans</Menu.Item>
                      <Menu.Item>Roboto</Menu.Item>
                    </Menu>

                    <Select
                      selectedValue={position}
                      mx={{
                        base: 0,
                        md: 'auto',
                      }}
                      onValueChange={nextValue => setPosition(nextValue)}
                      _selectedItem={{
                        bg: 'cyan.600',
                        endIcon: <CheckIcon size={4} />,
                      }}
                      accessibilityLabel="Select a position for Menu">
                      <Select.Item label="auto" value="auto" />
                      <Select.Item label="Top Left" value="top left" />
                      <Select.Item label="Top" value="top" />
                      <Select.Item label="Top Right" value="top right" />
                      <Select.Item label="Right Top" value="right top" />
                      <Select.Item label="Right" value="right" />
                      <Select.Item label="Right Bottom" value="right bottom" />
                      <Select.Item label="Bottom Left" value="bottom left" />
                      <Select.Item label="Bottom" value="bottom" />
                      <Select.Item label="Bottom Right" value="bottom right" />
                      <Select.Item label="Left Top" value="left top" />
                      <Select.Item label="Left" value="left" />
                      <Select.Item label="Left Bottom" value="left bottom" />
                    </Select>
                  </VStack>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldFlip">
            <TestCase
              itShould="shouldFlip: true 菜单根据demo上下空间弹出"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      shouldFlip={true}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="shouldFlip">
            <TestCase
              itShould="shouldFlip: false 菜单始终从下方弹出"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      shouldFlip={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_overlay">
            <TestCase itShould="_overlay" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      _overlay={show ? Alert.alert('触发_overlay') : false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <Text>
                              根据任意值(show)选择是否触发_overlay show:
                              {show ? 'true' : 'false'}
                            </Text>
                            <Button onPress={() => setshow(!show)}>
                              Toggle Overlay
                            </Button>
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_presenceTransition">
            <TestCase
              itShould="_presenceTransition 传递opacity0.8"
              tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      _presenceTransition={{
                        animate: {
                          opacity: 0.8,
                        },
                      }}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_backdrop">
            <TestCase itShould="_backdrop" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      _backdrop={{
                        backgroundColor: 'red.100',
                      }}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
                        <Menu.ItemOption value="Nunito Sans">
                          Nunito Sans
                        </Menu.ItemOption>
                        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
                      </Menu.OptionGroup>
                      <Divider mt="3" w="100%" />
                      <Menu.OptionGroup title="paid" type="checkbox">
                        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
                        <Menu.ItemOption value="Helvetica">
                          Helvetica
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="children">
            <TestCase itShould="children" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item children="children111111111"></Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled true&false" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item isDisabled>isDisabled</Menu.Item>
                      <Menu.Item isDisabled={false}>isDisabled</Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="textValue">
            <TestCase itShould="textValue" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.Item
                        textValue="textValue1"
                        onPress={() => setTextValue('textValue001')}>
                        1
                      </Menu.Item>
                      <Menu.Item
                        textValue="textValue2"
                        onPress={() => setTextValue('textValue002')}>
                        2
                      </Menu.Item>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuItemOption value">
            <TestCase itShould="MenuItemOption value" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                            <Text>value: {optionValue}</Text>
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        value={optionValue}
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          onPress={() => setOptionValue('Arial')}
                          value="Arial">
                          Arial
                        </Menu.ItemOption>
                        <Menu.ItemOption
                          onPress={e => setOptionValue('Roboto')}
                          value="Roboto">
                          Roboto
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuItemOption _stack">
            <TestCase itShould="_stack" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          _stack={{backgroundColor: 'red.100'}}
                          value="Arial">
                          Arial
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuItemOption _icon">
            <TestCase itShould="_icon" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_icon"
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          _icon={{backgroundColor: 'red.100'}}
                          value="Arial">
                          _icon
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuItemOption _text">
            <TestCase itShould="_text" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          _text={{color: 'red.100'}}
                          value="Arial">
                          _text
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup title">
            <TestCase itShould="title: title1111" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="title1111"
                        type="radio">
                        <Menu.ItemOption value="Arial">title</Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup children">
            <TestCase itShould="children: children111" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="title"
                        type="radio">
                        <Menu.ItemOption
                          value="Arial"
                          children="children111"></Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup _title">
            <TestCase itShould="_title" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="title"
                        type="radio"
                        _title={{color: 'red.200'}}>
                        <Menu.ItemOption value="Arial">_title</Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup type: radio">
            <TestCase itShould="type" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="title"
                        type="radio">
                        <Menu.ItemOption value="Arial1">type1</Menu.ItemOption>
                        <Menu.ItemOption value="Arial2">type2</Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup type: checkbox">
            <TestCase itShould="type" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="_text"
                        title="title"
                        type="checkbox">
                        <Menu.ItemOption value="Arial3">type1</Menu.ItemOption>
                        <Menu.ItemOption value="Arial4">type2</Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup defaultValue">
            <TestCase itShould="defaultValue" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      closeOnSelect={false}
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                            <Text>defaultValue</Text>
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="defaultValue"
                        title="title"
                        type="checkbox"></Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup value">
            <TestCase itShould="MenuGroup value" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                            <Text>value: {optionValue}</Text>
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        value={optionValue}
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          onPress={() => setOptionValue('Arial')}
                          value="Arial">
                          Arial
                        </Menu.ItemOption>
                        <Menu.ItemOption
                          onPress={() => setOptionValue('Roboto')}
                          value="Roboto">
                          Roboto
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="MenuGroup value改变触发onChange">
            <TestCase itShould="MenuGroup value改变触发onChange" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Box w="90%" alignItems="center">
                    <Menu
                      w="190"
                      trigger={triggerProps => {
                        return (
                          <Pressable {...triggerProps}>
                            <HamburgerIcon />
                            <Text>value: {optionValue}</Text>
                          </Pressable>
                        );
                      }}>
                      <Menu.OptionGroup
                        defaultValue="Arial"
                        value={optionValue}
                        onChange={() => {
                          Alert.alert('value改变触发onChange');
                        }}
                        title="free"
                        type="radio">
                        <Menu.ItemOption
                          onPress={() => setOptionValue('Arial')}
                          value="Arial">
                          Arial
                        </Menu.ItemOption>
                        <Menu.ItemOption
                          onPress={() => setOptionValue('Roboto')}
                          value="Roboto">
                          Roboto
                        </Menu.ItemOption>
                      </Menu.OptionGroup>
                    </Menu>
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

export default MenuTest;
