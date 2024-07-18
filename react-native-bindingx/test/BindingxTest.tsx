import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TestSuite } from '@rnoh/testerino';
import { TestCase } from '../../components';
import { createStackNavigator } from "@react-navigation/stack";
import PanDemo from '../PanDemo-CAPI'
import OrientationDemo from './OrientationDemo-CAPI'
import ScrollViewDemo from './ScrollViewDemo-CAPI'
import TimingDemo from './TimingDemo-CAPI'

const Stack = createStackNavigator();
export const BindingxTest = () => {
    return (
        <TestSuite name="Bindingx">
            <TestCase.Example
                tags={['C_API']}
                itShould="Pan">
                <PanDemo />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Orientation">
                <OrientationDemo />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Scroll">
                <ScrollViewDemo />
            </TestCase.Example>

            <TestCase.Example
                tags={['C_API']}
                itShould="Timing">
                <TimingDemo />
            </TestCase.Example>
        </TestSuite>
    );
};
