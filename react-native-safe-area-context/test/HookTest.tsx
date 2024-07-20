import React from 'react';
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import { View } from 'react-native';
import HooksExample from './demo/HooksExample';

export function HookTest() {

    return (
        <Tester >
            <View style={{ width: '100%', height: '100%' }}>
                <HooksExample />
            </View>
        </Tester >
    );
}