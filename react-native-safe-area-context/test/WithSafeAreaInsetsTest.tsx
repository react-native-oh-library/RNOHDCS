import React from 'react';
import { TestCase, Tester, TestSuite } from '@rnoh/testerino';
import { View } from 'react-native';
import {Element} from './demo/withSafeAreaInsets';

export function WithSafeAreaInsetsTest() {

    return (
        <Tester >
            <View style={{ width: '100%', height: '100%' }}>
                <Element />
            </View>
        </Tester >
    );
}