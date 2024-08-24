import React from "react";
import { Svg, Circle, SvgFromXml, Symbol, Use } from 'react-native-svg'
import { ScrollView, View, Text } from 'react-native'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { transformer } from "../../metro.config";
export default function () {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestCase
                    itShould="case 1 Use href=#sym01 x=0 y=0 width=100 height=50"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 100 110">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="100" height="50" />
                        </Svg>
                    </View>
                </TestCase>
                <TestCase
                    itShould="case 2 Use href=#sym01 x=0 y=0 width=75 height=38"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 100 110">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="75" height="38" />
                        </Svg>
                    </View>
                </TestCase>
                <TestCase
                    itShould="case 3 Use href=#sym01 x=0 y=0 width=50 height=25"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 100 110">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="50" height="25" />
                        </Svg>
                    </View>
                </TestCase>
                <TestCase
                    itShould="case 4 viewBox=0 0 200 220"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 200 220">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="100" height="50" />
                        </Svg>
                    </View>
                </TestCase>
                <TestCase
                    itShould="case 5 viewBox=0 0 150 160"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 150 160">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="100" height="50" />
                        </Svg>
                    </View>
                </TestCase>
                <TestCase
                    itShould="case 6 viewBox=0 0 80 90"
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 50
                        }}
                    >
                        <Svg>
                            <Symbol id="sym01" viewBox="0 0 80 90">
                                <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
                                <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="100" height="50" />
                        </Svg>
                    </View>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}