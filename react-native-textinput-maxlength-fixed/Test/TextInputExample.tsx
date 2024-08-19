import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import { multiply } from 'react-native-textinput-maxlength-fixed';

export function TextInputExample() {
    const [result1, setResult1] = React.useState<number | undefined>();
    const [result2, setResult2] = React.useState<number | undefined>();
    const [result3, setResult3] = React.useState<number | undefined>();

    return (
        <ScrollView style={styles.container}>
            <Tester>
                <TestSuite name="TextInput MaxLength (6 characters) Test">
                    <TestCase
                        itShould="Verify maxlength attribute for 6 characters"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={
                            ({ setState }) => {
                                return <TextInput maxLength={6} onChangeText={text => {
                                    if (text.length > 6) {
                                        setState(false);
                                    } else {
                                        setState(true);
                                    }
                                }} />
                            }
                        }
                    />
                </TestSuite>
                <TestSuite name="TextInput MaxLength (12 characters) Test">
                    <TestCase
                        itShould="Verify maxlength attribute for 12 characters"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={
                            ({ setState }) => {
                                return <TextInput maxLength={12} onChangeText={text => {
                                    if (text.length > 12) {
                                        setState(false);
                                    } else {
                                        setState(true);
                                    }
                                }} />
                            }
                        }
                    />
                </TestSuite>
                <TestSuite name="TextInput No MaxLength Test">
                    <TestCase
                        itShould="Verify behavior without maxlength"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={
                            ({ setState }) => {
                                return <TextInput onChangeText={text => {
                                    setState(true);
                                }} />
                            }
                        }
                    />
                </TestSuite>
                <TestSuite name="Multiply (-2 x -3) Test">
                    <TestCase
                        itShould="Verify multiply result of (-2 x -3)"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                            return <Button title={'计算乘积 multiply(-2 x -3): ' + (result1 || '未计算')} onPress={async () => {
                                let num = await multiply(-2, -3);
                                setResult1(num);
                                if (num === 6) {
                                    setState(true);
                                } else {
                                    setState(false);
                                }
                            }} />
                        }}
                    />
                </TestSuite>
                <TestSuite name="Multiply (4.7 x 3.8) Test">
                    <TestCase
                        itShould="Verify multiply result of (4.7 x 3.8)"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                            return <Button title={'计算乘积 multiply(4.7 x 3.8): ' + (result2 || '未计算')} onPress={async () => {
                                let num = await multiply(4.7, 3.8);
                                setResult2(num);
                                if (num === 17.86) {
                                    setState(true);
                                } else {
                                    setState(false);
                                }
                            }} />
                        }}
                    />
                </TestSuite>
                <TestSuite name="Multiply (-7.08 x 2.94) Test">
                    <TestCase
                        itShould="Verify multiply result of (-7.08 x 2.94)"
                        initialState={false}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                        tags={['C_API']}
                        arrange={({ setState }) => {
                            return <Button title={'计算乘积 multiply(-7.08 x 2.94): ' + (result3 || '未计算')} onPress={async () => {
                                let num = await multiply(-7.08, 2.94);
                                setResult3(num);
                                if (num === -20.8152) {
                                    setState(true);
                                } else {
                                    setState(false);
                                }
                            }} />
                        }}
                    />
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    item: {
        width: '100%',
        marginBottom: 20,
        borderColor: 'blue',
        borderWidth: 1,
    },
    itemText: {
        color: 'white',
        fontSize: 12,
    }
})