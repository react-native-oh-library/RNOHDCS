import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { createStackNavigator } from "@react-navigation/stack";
import PanDemo from '../PanDemo-CAPI'
import OrientationDemo from './OrientationDemo-CAPI'
import ScrollViewDemo from './ScrollViewDemo-CAPI'
import TimingDemo from './TimingDemo-CAPI'

const Stack = createStackNavigator();
export const BindingxTest = () => {
    return (
        <ScrollView>
            <Tester>
                <TestSuite name="Bindingx">
                    <TestCase
                        tags={['C_API']}
                        itShould="Pan">
                        <PanDemo />
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="Orientation">
                        <OrientationDemo />
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="Scroll">
                        <ScrollViewDemo />
                    </TestCase>

                    <TestCase
                        tags={['C_API']}
                        itShould="Timing">
                        <TimingDemo />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};
