import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {IconButton, Icon, Box, Center, VStack} from 'native-base';

import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconButtonTest = () => {
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="测试icon属性">
            <TestCase itShould="测试icon属性" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试icon属性</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <IconButton
                      icon={
                        <Icon
                          as={Entypo}
                          name="app-store"
                          color="coolGray.800"
                          _dark={{
                            color: 'warmGray.50',
                          }}
                        />
                      }
                      borderRadius="full"
                      _pressed={{
                        bg: 'orange.600:alpha.20',
                        _icon: {
                          name: 'emoji-flirt',
                        },
                        _ios: {
                          _icon: {
                            size: '2xl',
                          },
                        },
                      }}
                      _ios={{
                        _icon: {
                          size: '2xl',
                        },
                      }}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试_icon属性">
            <TestCase itShould="测试_icon属性" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试_icon属性</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <IconButton
                      icon={
                        <Icon
                          as={Entypo}
                          name="app-store"
                          color="coolGray.800"
                          _dark={{
                            color: 'warmGray.50',
                          }}
                        />
                      }
                      borderRadius="full"
                      _icon={{
                        color: 'orange.900',
                        size: '6xl',
                      }}
                    />
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试colorScheme属性">
            <TestCase itShould="测试colorScheme属性" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试colorScheme属性</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Center>
                      <VStack space={4} alignItems="center">
                        {['primary', 'green', 'red'].map(colorScheme => (
                          <IconButton
                            colorScheme={colorScheme}
                            key={colorScheme}
                            _icon={{
                              as: AntDesign,
                              name: 'search1',
                            }}
                          />
                        ))}
                      </VStack>
                    </Center>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试variant属性">
            <TestCase itShould="测试variant属性" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试variant属性</Text>
                <View style={styles.subSection}>
                  <Box alignItems="center">
                    <Center>
                      <VStack space={4} alignItems="center">
                        {['subtle', 'solid', 'ghost'].map(variant => (
                          <IconButton
                            key={variant}
                            variant={variant}
                            _icon={{
                              as: AntDesign,
                              name: 'search1',
                            }}
                          />
                        ))}
                      </VStack>
                    </Center>
                  </Box>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="Size">
            <TestCase itShould="Size 依次为'xs', 'sm', 'md', 'lg'" tags={['dev']}>
              <View style={styles.section}>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['xs', 'sm', 'md', 'lg'].map(size => (
                        <IconButton
                          size={size}
                          variant="solid"
                          _icon={{
                            // as: MaterialIcons,
                            name: 'menu',
                          }}
                          icon={
                            <Icon
                              as={Entypo}
                              name="app-store"
                              color="coolGray.800"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                            />
                          }
                        />
                      ))}
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>isDisabled</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['outline', 'solid', 'ghost'].map(variant => (
                        <IconButton
                          isDisabled
                          icon={
                            <Icon
                              as={Entypo}
                              name="app-store"
                              color="coolGray.800"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                            />
                          }
                        />
                      ))}
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_pressed">
            <TestCase itShould="_pressed" tags={['dev']}>
              <View style={styles.section}>
                <Text>_pressed</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['outline', 'solid', 'ghost'].map(variant => (
                        <IconButton
                          icon={
                            <Icon
                              as={Entypo}
                              name="app-store"
                              color="coolGray.800"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                            />
                          }
                          _pressed={{
                            bg: 'coolGray.900',
                            _icon: {
                              name: 'emoji-flirt',
                            },
                            _ios: {
                              _icon: {
                                size: '2xl',
                              },
                            },
                          }}
                        />
                      ))}
                    </VStack>
                  </Center>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_focus">
            <TestCase itShould="_focus" tags={['dev']}>
              <View style={styles.section}>
                <Text>_focus</Text>
                <View style={styles.subSection}>
                  <Center>
                    <VStack space={4} alignItems="center">
                      {['outline', 'solid', 'ghost'].map(variant => (
                        <IconButton
                          icon={
                            <Icon
                              as={Entypo}
                              name="app-store"
                              color="coolGray.800"
                              _dark={{
                                color: 'warmGray.50',
                              }}
                            />
                          }
                          _focus={{
                            bg: 'orange.900:alpha.20',
                            size: '6xl',
                            _icon: {
                              name: 'emoji-flirt',
                            },
                          }}
                        />
                      ))}
                    </VStack>
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

export default IconButtonTest;
