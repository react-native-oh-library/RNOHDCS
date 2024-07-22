import React from 'react';
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import { View } from 'react-native';
import SafeAreaBasic from './demo/SafeAreaDemo-CAPI';

export function SafeAreaViewTest() {

    return (
        <Tester >
            <View style={{ width: '100%', height: '100%' }}>
                <SafeAreaBasic />
            </View>
        </Tester >
    );
}