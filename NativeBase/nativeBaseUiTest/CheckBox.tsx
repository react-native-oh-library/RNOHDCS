import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { HStack, Checkbox, Box, Stack } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
export function CheckBoxTest() {
    const myRef = React.useRef();
    const [bg, setBg] = React.useState("#fa000050");
    const [groupValue, setGroupValue] = React.useState(["Photography", "Gardening"]);
    useEffect(() => {
        const styleObj = {
            backgroundColor: bg
        };
        // @ts-ignore
        myRef.current.setNativeProps({
            style: styleObj
        });

    }, [myRef, bg])
    return <>

        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='accessibilityLabel'>
                    <TestCase
                        itShould="accessibilityLabel"
                        tags={['dev']}
                    >

                        <HStack space={6}>
                            <Checkbox value="test" accessibilityLabel="This is a  checkbox" />
                        </HStack>

                    </TestCase>
                </TestSuite>
                <TestSuite name='name'>
                    <TestCase
                        itShould="name"
                        tags={['dev']}
                    >
                        <HStack space={6}>
                            <Checkbox name="test" value='test' accessibilityLabel="This is a  checkbox" />
                        </HStack>
                    </TestCase>
                </TestSuite>
                <TestSuite name='value'>
                    <TestCase
                        itShould="value"
                        tags={['dev']}
                    >
                        <HStack space={6}>
                            <Checkbox name="test" value='test' accessibilityLabel="This is a  checkbox" />
                        </HStack>
                    </TestCase>
                </TestSuite>
                <TestSuite name='colorScheme'>
                    <TestCase
                        itShould="colorScheme"
                        tags={['dev']}
                    >
                        <Box alignItems="center">
                            <Stack direction={{
                                base: "column",
                                md: "row"
                            }} space={3} alignItems="flex-start">
                                <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
                                    Danger
                                </Checkbox>
                                <Checkbox value="info" colorScheme="info" defaultIsChecked>
                                    Info
                                </Checkbox>
                                <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
                                    Orange
                                </Checkbox>
                                <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
                                    Purple
                                </Checkbox>
                            </Stack>
                        </Box>;
                    </TestCase>
                </TestSuite>
                <TestSuite name='defaultIsChecked'>
                    <TestCase
                        itShould="defaultIsChecked"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test 1" accessibilityLabel="defaultIsChecked false" defaultIsChecked={false} />
                                <Checkbox value="test 2" accessibilityLabel="defaultIsChecked true" defaultIsChecked />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isChecked'>
                    <TestCase
                        itShould="isChecked"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test 1" accessibilityLabel="isChecked:fasle" isChecked={false} />
                                <Checkbox value="test 2" accessibilityLabel="isChecked:true" isChecked={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isIndeterminate'>
                    <TestCase
                        itShould="isIndeterminate"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isIndeterminate:false" isIndeterminate={false} />
                                <Checkbox value="test2" accessibilityLabel="isIndeterminate:true" isIndeterminate={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isDisabled'>
                    <TestCase
                        itShould="isDisabled"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isDisabled:false" isDisabled={false} />
                                <Checkbox value="test2" accessibilityLabel="isDisabled:true" isDisabled={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isInvalid'>
                    <TestCase
                        itShould="isInvalid"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isInvalid:false" isInvalid={false} />
                                <Checkbox value="test2" accessibilityLabel="isInvalid:true" isInvalid={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isReadOnly'>
                    <TestCase
                        itShould="isReadOnly"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isReadOnly:false" isReadOnly={false} />
                                <Checkbox value="test2" accessibilityLabel="isReadOnly:true" isReadOnly={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isHovered'>
                    <TestCase
                        itShould="isHovered"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isHovered:false" isHovered={false} />
                                <Checkbox value="test2" accessibilityLabel="isHovered:true" isHovered={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isPressed'>
                    <TestCase
                        itShould="isPressed"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox value="test1" accessibilityLabel="isPressed:false" isPressed={false} />
                                <Checkbox value="test2" accessibilityLabel="isPressed:true" isPressed={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isFocused'>
                    <TestCase
                        itShould="isFocused"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox isFocusVisible value="test1" accessibilityLabel="isFocused:false" isFocused={false} />
                                <Checkbox isFocusVisible value="test2" accessibilityLabel="isFocused:true" isFocused={true} />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isFocusVisible'>
                    <TestCase
                        itShould="isFocusVisible"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox isFocusVisible={true} value="test1" accessibilityLabel="isFocusVisible:false" />
                                <Checkbox isFocusVisible={false} value="test2" accessibilityLabel="isFocusVisible:true" />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='size'>
                    <TestCase
                        itShould="size"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>
                                <Checkbox size='lg' value="test1" accessibilityLabel="size:lg" />
                                <Checkbox size='md' value="test2" accessibilityLabel="size:md" />
                                <Checkbox size='sm' value="test2" accessibilityLabel="size:sm" />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                {/* <TestSuite name='icon'>
                    <TestCase
                        itShould="icon"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>

                                <Checkbox icon={<></>} size='md' value="test2" accessibilityLabel="icon" />
                                <Checkbox size='md' value="test2" accessibilityLabel="icon" />
                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite> */}
                <TestSuite name='_stack'>
                    <TestCase
                        itShould="_stack"
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>

                                <Checkbox _stack={{ fontSize: 20, color: 'red' }} value="test2" accessibilityLabel="_stack" />

                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='Group '>
                    <TestCase
                        itShould="Group "
                        tags={['dev']}
                    >
                        <View style={styles.section}>
                            <HStack space={6}>

                                <Checkbox.Group
                                    colorScheme="green"
                                    defaultValue={groupValue}
                                    accessibilityLabel="pick an item in Group"
                                    onChange={values => {
                                        setGroupValue(values || []);
                                    }}>
                                    <Checkbox value="Photography" my="1">
                                        Photography
                                    </Checkbox>
                                    <Checkbox value="Writing" my="1">
                                        Writing
                                    </Checkbox>
                                    <Checkbox value="Gardening" my="1">
                                        Gardening
                                    </Checkbox>
                                    <Checkbox value="Cooking" my="1">
                                        Cooking
                                    </Checkbox>
                                </Checkbox.Group>

                            </HStack>
                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='onChange'>
                    <TestCase
                        itShould='true'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Checkbox _stack={{ fontSize: 20, color: 'red' }} value="test2" accessibilityLabel="onChange" onChange={(isSelected) => {
                                    setState(isSelected)
                                }} />
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='wrapperRef'>
                    <TestCase
                        itShould='true'
                        initialState={true}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Box alignItems="flex-start">
                                    <Checkbox value="success" colorScheme="success" name="bullseye" wrapperRef={myRef} onChange={state => {
                                        if (state) {
                                            setBg("#00de0050");
                                            setState(true);
                                        } else {
                                            setBg("#fa000050");
                                            setState(false);
                                        }
                                    }}>
                                        Archery
                                    </Checkbox>
                                </Box>
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