import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Button, Flex, Icon, AddIcon, ArrowDownIcon, HStack } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Ionicons from 'react-native-vector-icons/Ionicons';
export  function ButtonTest() {

    return <>

        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='colorScheme：按钮颜色'>
                    <TestCase
                        itShould="colorScheme"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <Text>颜色按钮</Text>
                            <View style={styles.BtnSection}>
                                <Button colorScheme='blue'>blue</Button>
                                <Button colorScheme='amber'>amber</Button>
                                <Button colorScheme='red'>black</Button>
                                <Button colorScheme='blueGray'>blueGray</Button>
                                <Button colorScheme='coolGray'>coolGray</Button>
                                <Button colorScheme='cyan'>cyan</Button>
                                <Button colorScheme='dark'>dark</Button>
                                <Button colorScheme='emerald'>emerald</Button>
                                <Button colorScheme='fuchsia'>fuchsia</Button>
                                <Button colorScheme='green'>green</Button>
                            </View>
                            <Text>状态按钮</Text>
                            <View style={styles.BtnSection}>
                                <Button colorScheme='danger'>danger</Button>
                                <Button colorScheme='error'>error</Button>
                                <Button colorScheme='info'>info</Button>
                                <Button colorScheme='success'>success</Button>
                            </View>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='variant：按钮类型'>
                    <TestCase
                        itShould='variant'
                        tags={['dev']}
                    >
                        <View style={styles.BtnSection}>
                            <Button colorScheme='blue' variant='ghost'>ghost</Button>
                            <Button colorScheme='blue' variant='link'>link</Button>
                            <Button colorScheme='blue' variant='outline'>outline</Button>
                            <Button colorScheme='blue' variant='solid'>solid</Button>
                            <Button colorScheme='blue' variant='subtle'>subtle</Button>
                            <Button colorScheme='blue' variant='unstyled'>unstyled</Button>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='status:状态按钮'>
                    <TestCase
                        itShould='status'
                        tags={['dev']}
                    >
                        <View style={styles.BtnSection}>
                            <Button isDisabled>isDisabled</Button>
                            <Button isFocusVisible>isFocusVisible</Button>
                            <Button isHovered>isHovered</Button>
                            <Button isPressed>isPressed</Button>
                            <Button isFocused>isFocused</Button>
                            <Button isDisabled _disabled={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}>isDisabled</Button>
                            <Button isLoading isLoadingText='正在加载中...' _loading={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}></Button>
                            <Button _hover={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}>isHovered</Button>
                            <Button _pressed={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}>isPressed</Button>
                            <Button _focus={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}>isFocused</Button>
                            <Button _focusVisible={{
                                backgroundColor: "amber.400:alpha.70",
                                _text: {
                                    color: 'orange.800',
                                    fontSize: '20'
                                }
                            }}>isFocusVisible</Button>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='size：按钮大小'>
                    <TestCase
                        itShould='size'
                        tags={['dev']}
                    >
                        <View style={styles.BtnSection}>
                            <Button size='lg'>lg</Button>
                            <Button size='md'>md</Button>
                            <Button size='sm'>sm</Button>
                            <Button size='xs'>xs</Button>
                        </View>

                    </TestCase>
                </TestSuite>
                <TestSuite name='Icon：按钮图片'>
                    <TestCase
                        itShould='size'
                        tags={['dev']}
                    >
                        <Flex direction='row' wrap='wrap' alignItems='center' justifyContent='flex-start'>
                            <Button startIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} _icon={{ width: 20, height: 20 }}>startIcon</Button>
                            <Button endIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} _icon={{ width: 20, height: 20 }}>endIcon</Button>
                            <Button variant="subtle" endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />} _icon={{ width: 20, height: 20 }}>rightIcon</Button>
                            <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} _icon={{ width: 20, height: 20 }}>leftIcon</Button>
                        </Flex>

                    </TestCase>
                </TestSuite> 
                <TestSuite name='_text：内部文本style'>
                    <TestCase
                        itShould='_text'
                        tags={['dev']}
                    >
                        <View style={styles.BtnSection}>
                            <Button backgroundColor='orange.100' _text={{
                                color: 'orange.800',
                                fontSize: '20',
                            }}>button内部文本显示</Button>
                            <Button backgroundColor='blue.100' _text={{
                                color: 'blue.500',
                                fontSize: '20',
                            }}>button内部文本显示</Button>
                            <Button _text={{
                                color: 'gray.600',
                                fontSize: '20', backgroundColor: 'gray.100'
                            }}>button内部文本显示</Button>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isLoadingText:loading显示文本'>
                    <TestCase
                        itShould='isLoadingText'
                        tags={['dev']}
                    >
                        <Button isLoading isLoadingText='Loading文本' _text={{
                            color: 'orange.800',
                            fontSize: '20', backgroundColor: 'amber'
                        }}>_text</Button>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_stack'>
                    <TestCase
                        itShould='_stack'
                        tags={['dev']}
                    >
                        <Button _stack={{
                            color: 'orange.800',
                            fontSize: '20', backgroundColor: 'amber'
                        }}><Text>text1</Text>
                        <Text>text2</Text>
                        <Text>text3</Text></Button>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isLoadingText:loading显示文本'>
                    <TestCase
                        itShould='isLoadingText'
                        tags={['dev']}
                    >
                        <Button isLoading isLoadingText='Loading文本' _text={{
                            color: 'orange.800',
                            fontSize: '20', backgroundColor: 'amber'
                        }}>_text</Button>
                    </TestCase>
                </TestSuite>
                <TestSuite name='spinner'>
                    <TestCase
                        itShould='spinner'
                        tags={['dev']}
                    >
                         <View style={styles.BtnSection}>
                        <Button isLoading spinner={<Text>spinner</Text>}  >spinner</Button>
                        <Button isLoading _spinner={{ color: 'orange.800', backgroundColor: 'orange.100' }}>_spinner</Button>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='Button.Group'>
                    <TestCase
                        itShould='Button.Group'
                        tags={['dev']}
                    >
                        <Button.Group isAttached colorScheme="blue"  size="sm">
                        <View style={styles.BtnSection}>
                            <Button>Button</Button>
                            <Button>Button</Button>
                            <Button>Button</Button>
                            </View>
                        </Button.Group>
                    </TestCase>
                </TestSuite>
                

                <TestSuite name='onPressIn'>
                    <TestCase
                        itShould='onPressIn'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onPressIn={()=>{
                                    setState(true)
                                }}>onPressIn</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onPressOut'>
                    <TestCase
                        itShould='onPressOut'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onPressOut={()=>{
                                    setState(true)
                                }}>onPressOut</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onHoverIn'>
                    <TestCase
                        itShould='onHoverIn'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onHoverIn={()=>{
                                    setState(true)
                                }}>onHoverIn</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onHoverOut'>
                    <TestCase
                        itShould='onHoverOut'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onHoverOut={()=>{
                                    setState(true)
                                }}>onHoverOut</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onFocus'>
                    <TestCase
                        itShould='onFocus'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onFocus={()=>{
                                    setState(true)
                                }}>onFocus</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='onBlur'>
                    <TestCase
                        itShould='onBlur'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Button onBlur={()=>{
                                    setState(true)
                                }}>onBlur</Button>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
            </ScrollView>
        </Tester>

    </>

}
const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        aspectRatio: 1,
    },
    content: {
        width: '100%',
        height: '100%',
    },

    section: {
        backgroundColor: '#f2f2f2'
    },
    BtnSection: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 10,
        width: '100%',
        padding: 10,
    },
    box: {
        height: 100,
        width: 200,
    },
    tipText: {
        fontSize: 12,
        color: '#999',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        color: '#fff'
    },
    colText: {
        padding: 5,
    },
    col: {
        backgroundColor: '#FFB6C1'
    },
    row: {
        backgroundColor: '#00BFFF'
    },

});