import React from "react";
import { Svg, Circle, Defs, Use, G } from 'react-native-svg'
import { ScrollView, View, Text } from 'react-native'
import {Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
export default function() {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestCase
                    itShould="case 1: Use defined shape "
                >
                    <View style={{
                                    borderWidth: 1,
                                    width: 100,
                                    height: 100
                                }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle cx="100" cy="100" r="50" stroke="black" />
                            <Defs>
                                <G id="shape">
                                    <Circle cx="100" cy="100" r="50" stroke="black" />
                                </G>
                            </Defs>
                            <Use href="#shape" x="200" y="200" />
                        </Svg>
                    </View>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}