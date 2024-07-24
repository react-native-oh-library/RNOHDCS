import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView,
    StyleSheet,
    Button
} from 'react-native';
import {
    Tester,
    TestSuite,
    TestCase
} from '@rnoh/testerino';
import VectorDrawable from "react-native-vector-drawable";
export function VectorDrawableTest(): JSX.Element {
    return (
        <Tester style={{ flex: 1 }}>
            <TestSuite name="vectordrawable">
                <TestCase itShould="drawable" tags={['Se_Ra']}
                >
                    <ScrollView>
                        <Text>对标源库IOS开发，此处空白属于正常</Text>
                        <VectorDrawable
                            resourceName="ic_drawable_name"
                            style={{ width: 50, height: 50, tintColor: 'blue' }}
                        />
                    </ScrollView>
                </TestCase>
            </TestSuite>
        </Tester>
    );
}

// const styles = StyleSheet.create({
//     TextInput: {
//         height: 40,
//         borderColor: '#fff',
//         borderWidth: 1,
//         borderRadius: 4,
//         width: '90%',
//         backgroundColor: '#fff'
//     },
//     btn: {
//         borderRadius: 6,
//         height: 36,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         backgroundColor: 'rgb(61, 176, 236)',
//     },
//     btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 },
// });
