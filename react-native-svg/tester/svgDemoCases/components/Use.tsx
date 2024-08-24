import React from "react";
import { Svg, Circle, Use, Defs, G, Symbol, Ellipse, Line, Rect } from 'react-native-svg'
import { ScrollView, View, Text } from 'react-native'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
export default function () {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestCase
                    itShould="case 1: move x "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle id="shape" cx="100" cy="100" r="50" stroke="black" />
                            <Use href="#shape" x="200" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 2: move y "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle id="shape" cx="100" cy="100" r="50" stroke="black" />
                            <Use href="#shape" y="200" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 3: change opacity"
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle id="shape" cx="100" cy="100" r="20" strokeWidth="8" stroke="black" fill="black" opacity="1" />
                            <Circle cx="140" cy="100" r="20" strokeWidth="8" stroke="black" fill="black" opacity="0.8" />
                            <Circle cx="180" cy="100" r="20" strokeWidth="8" stroke="black" fill="black" opacity="0.6" />
                            <Circle cx="220" cy="100" r="20" strokeWidth="8" stroke="black" fill="black" opacity="0.4" />

                            <Use href="#shape" x="100" y="160" />
                            <Use href="#shape" x="140" y="160" fill="black" opacity="0.8" />
                            <Use href="#shape" x="180" y="160" fill="black" opacity="0.6" />
                            <Use href="#shape" x="220" y="160" fill="black" opacity="0.4" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 4: draw Ellipse "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Ellipse
                                id="shape"
                                cx="55"
                                cy="55"
                                rx="50"
                                ry="30"
                                stroke="purple"
                                strokeWidth="2"
                                fill="yellow"
                            />
                            <Use href="#shape" x="105" y="105" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 5: draw Rect "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Rect
                                id="shape"
                                x="25"
                                y="5"
                                width="150"
                                height="50"
                                fill="rgb(0,0,255)"
                                strokeWidth="3"
                                stroke="rgb(0,0,0)"
                            />
                            <Use href="#shape" x="125" y="105" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 6: draw line "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Line
                                id="shape"
                                x1="0"
                                y1="0"
                                x2="200"
                                y2="200"
                                stroke="red"
                                strokeWidth="2"
                            />
                            <Use href="#shape" x="50" y="0" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 7: draw symbol "
                >
                    <View
                        style={{
                            borderWidth: 1,
                            width: 100,
                            height: 100
                        }}
                    >
                        <Svg>
                            <Circle cx="50" cy="50" r="10" strokeWidth="2" stroke="green" fill="red" />
                            <Circle cx="55" cy="55" r="10" strokeWidth="2" stroke="green" fill="white" />
                            <Symbol id="sym01" viewBox="0 0 80 90">
                                <Circle cx="50" cy="20" r="10" strokeWidth="2" stroke="green" fill="red" />
                                <Circle cx="55" cy="15" r="10" strokeWidth="2" stroke="green" fill="white" />
                            </Symbol>
                            <Use href="#sym01" x="0" y="0" width="1000" height="500" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 8: use xlinkHref as reference (as same as href) "
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle id="shape" cx="100" cy="100" r="50" stroke="black" />
                            <Use href="#shape" x="200" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 9: Use has childs"
                >
                    <View style={{
                        borderWidth: 1,
                        width: 100,
                        height: 100
                    }}
                    >
                        <Svg viewBox="0 0 400 400">
                            <Circle id="shape" cx="100" cy="100" r="50" stroke="black" />
                            <Use href="#shape" x="200">
                                <G>
                                    <Rect
                                        x="25"
                                        y="5"
                                        width="150"
                                        height="50"
                                        fill="rgb(0,0,255)"
                                        strokeWidth="3"
                                        stroke="rgb(0,0,0)"
                                    />
                                    <Circle id="shape" cx="0" cy="0" r="50" stroke="red" />
                                </G>
                            </Use>
                        </Svg>
                    </View>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}