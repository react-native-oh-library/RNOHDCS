import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { AddIcon, Box, DeleteIcon, HStack, Radio, VStack } from 'native-base';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
export function RadioTest() {
    const [value, setValue] = React.useState("one");
    const myRef = React.useRef({});
    return <>

        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='value'>
                    <TestCase
                        itShould="value"
                        tags={['dev']}
                    >
                        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                            setValue(nextValue);
                        }}>
                            <Radio value="one" my={1}>
                                One
                            </Radio>
                            <Radio value="two" my={1}>
                                Two
                            </Radio>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='colorScheme'>
                    <TestCase
                        itShould="colorScheme"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="colorScheme">
                            <HStack space={4}>
                                <Radio value="one" colorScheme='red.600' my={1}>
                                    One
                                </Radio>
                                <Radio value="two" colorScheme='default' my={1}>
                                    Two
                                </Radio>
                                <Radio value="three" colorScheme='blue.600' my={1}>
                                    three
                                </Radio>
                                <Radio colorScheme="emerald" value="1" my={1}>
                                    emerald
                                </Radio>
                                <Radio colorScheme="secondary" value="2" my={1}>
                                    secondary
                                </Radio>
                                <Radio colorScheme="warning" value="3" my={1}>
                                    warning
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isDisabled'>
                    <TestCase
                        itShould="isDisabled"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isDisabled">
                            <HStack space={4} >
                                <Radio value="1" my={1} isDisabled>
                                    First
                                </Radio>
                                <Radio value="2" my={1}>
                                    Second
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isHovered'>
                    <TestCase
                        itShould="isHovered"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isHovered">
                            <HStack space={4} >
                                <Radio isHovered value="1" my={1} >
                                    isHovered true
                                </Radio>
                                <Radio isHovered={false} value="2" my={1}>
                                    isHovered false
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isPressed'>
                    <TestCase
                        itShould="isPressed"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isPressed">
                            <HStack space={4} >
                                <Radio isPressed value="1" my={1} >
                                    isPressed true
                                </Radio>
                                <Radio isPressed={false} value="2" my={1}>
                                    isPressed false
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isFocused'>
                    <TestCase
                        itShould="isFocused"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isFocused">
                            <HStack space={4} >
                                <Radio isFocused value="1" my={1} >
                                    isFocused true
                                </Radio>
                                <Radio isFocused={false} value="2" my={1}>
                                    isFocused false
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isFocusVisible'>
                    <TestCase
                        itShould="isFocusVisible"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isFocusVisible">
                            <HStack space={4} >
                                <Radio isFocusVisible value="1" my={1} >
                                    isFocusVisible true
                                </Radio>
                                <Radio isFocusVisible={false} value="2" my={1}>
                                    isFocusVisible false
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='isInvalid'>
                    <TestCase
                        itShould="isInvalid"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="isInvalid">
                            <HStack space={4} >
                                <Radio isInvalid value="1" my={1} >
                                    isInvalid true
                                </Radio>
                                <Radio isInvalid={false} value="2" my={1}>
                                    isInvalid false
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='size'>
                    <TestCase
                        itShould="size"
                        tags={['dev']}
                    >
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                            <HStack space={4} w="75%" maxW="300px">
                                <Radio value="1" colorScheme="red" size="sm" my={1}>
                                    Small
                                </Radio>
                                <Radio value="2" colorScheme="green" size="md" my={1}>
                                    Medium
                                </Radio>
                                <Radio value="3" colorScheme="yellow" size="lg" my={1}>
                                    Large
                                </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='icon'>
                    <TestCase
                        itShould="icon"
                        tags={['dev']}
                    >
                           <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a icon">
                            <HStack space={4} w="75%" maxW="300px">
                            <Radio _text={{
      mx: 2
    }} colorScheme="green" value="1" icon={<AddIcon />} my={1}>
        AddIcon
      </Radio>
      <Radio _text={{
      mx: 2
    }} colorScheme="red" value="2" icon={<DeleteIcon/>} my={1}>
        DeleteIcon
      </Radio>
                            </HStack>
                        </Radio.Group>
                    </TestCase>
                </TestSuite>
                <TestSuite name='wrapperRef'>
                    <TestCase
                        itShould="wrapperRef"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_stack'>
                    <TestCase
                        itShould="_stack"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_disabled'>
                    <TestCase
                        itShould="_disabled"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_checked'>
                    <TestCase
                        itShould="_checked"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_focus'>
                    <TestCase
                        itShould="_focus"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_hover'>
                    <TestCase
                        itShould="_hover"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_invalid'>
                    <TestCase
                        itShould="_invalid"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_pressed'>
                    <TestCase
                        itShould="_pressed"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_icon'>
                    <TestCase
                        itShould="_icon"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_readOnly'>
                    <TestCase
                        itShould="_readOnly"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='_interactionBox'>
                    <TestCase
                        itShould="_interactionBox"
                        tags={['dev']}
                    >
                        <View style={styles.section}>

                        </View>
                    </TestCase>
                </TestSuite>
                <TestSuite name='ref'>
                    <TestCase
                        itShould="ref"
                        tags={['dev']}
                    >
                       <Radio.Group name="exampleGroup" colorScheme="success" accessibilityLabel="pick an option" onChange={value => {
                                    if (value === "2") {
                                     myRef.current.setNativeProps({
                                        backgroundColor: "#00de0050"
                                      });
                                    } else {
                                     myRef.current.setNativeProps({
                                        backgroundColor: "#fa000050"
                                      });
                                    }
                                  }}>
                                      <Radio colorScheme="success" value="1" my={1}>
                                        Wrong
                                      </Radio>
                                      <Radio colorScheme="success" ref={myRef} value="2" my={1}>
                                        Right
                                      </Radio>
                                    </Radio.Group>
                    </TestCase>
                </TestSuite>

                <TestSuite name='onChange'>
                    <TestCase
                        itShould='onChange'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <Radio.Group name="exampleGroup" colorScheme="success" accessibilityLabel="pick an option" onChange={value => {
                                    if (value === "2") {
                                       setState(false)
                                    } else {
                                      setState(true)
                                    }
                                  }}>
                                      <Radio colorScheme="success" value="1" my={1}>
                                      true
                                      </Radio>
                                      <Radio colorScheme="success"  value="2" my={1}>
                                      false
                                      </Radio>
                                    </Radio.Group>
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