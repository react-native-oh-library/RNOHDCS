import React from "react";
import { Svg, Circle, ClipPath, Rect, Path, Use, Defs, G, RNSVGClipPath, } from 'react-native-svg'
import { ScrollView, View, Text } from 'react-native'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
export default function () {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>

                <TestCase itShould="Attribute: clipPath=Red rect">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <Rect x="5" y="5" width="80" height="80" fill="green" />
                            <Rect x="35" y="25" width="80" height="80" fill="red" />

                            <ClipPath id="myClip1">
                                <Rect x="185" y="25" width="80" height="80" />
                            </ClipPath>
                            <Rect x="155" y="5" width="80" height="80" fill="green" clipPath="url(#myClip1)" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipPath=Green rect">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <Rect x="5" y="5" width="80" height="80" fill="green" />
                            <Rect x="35" y="25" width="80" height="80" fill="red" />

                            <ClipPath id="myClip2">
                                <Rect x="155" y="5" width="80" height="80" />
                            </ClipPath>
                            <Rect x="185" y="25" width="80" height="80" fill="red" clipPath="url(#myClip2)" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipRule=default/evenodd(L) + default/evenodd(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <ClipPath id="emptyStar1">
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>
                            <ClipPath id="emptyStar2">
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>

                            <Rect clipPath="url(#emptyStar1)" width="50" height="90" fill="blue" />
                            <Rect clipPath="url(#emptyStar2)" width="50" height="90" x="50" fill="red" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipRule=evenodd(L) + evenodd(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <ClipPath id="emptyStar3" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>
                            <ClipPath id="emptyStar4" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>

                            <Rect clipPath="url(#emptyStar3)" width="50" height="90" fill="blue" clipRule="evenodd"/>
                            <Rect clipPath="url(#emptyStar4)" width="50" height="90" x="50" fill="red" clipRule="evenodd"/>
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipRule=nonzero(L) + nonzero(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <ClipPath id="emptyStar5" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>
                            <ClipPath id="emptyStar6" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>

                            <Rect clipPath="url(#emptyStar5)" width="50" height="90" fill="blue" clipRule="nonzero"/>
                            <Rect clipPath="url(#emptyStar6)" width="50" height="90" x="50" fill="red" clipRule="nonzero"/>
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipRule=evenodd(L) + nonzero(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <ClipPath id="emptyStar7" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>
                            <ClipPath id="emptyStar8" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>

                            <Rect clipPath="url(#emptyStar7)" width="50" height="90" fill="blue" clipRule="evenodd"/>
                            <Rect clipPath="url(#emptyStar8)" width="50" height="90" x="50" fill="red" clipRule="nonzero"/>
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="Attribute: clipRule=nonzero(L) + evenodd(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <ClipPath id="emptyStar9" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>
                            <ClipPath id="emptyStar10" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </ClipPath>

                            <Rect clipPath="url(#emptyStar9)" width="50" height="90" fill="blue" clipRule="nonzero"/>
                            <Rect clipPath="url(#emptyStar10)" width="50" height="90" x="50" fill="red" clipRule="evenodd"/>
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="RNSVGClipPath: clipPath=Red rect">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <Rect x="5" y="5" width="80" height="80" fill="green" />
                            <Rect x="35" y="25" width="80" height="80" fill="red" />

                            <RNSVGClipPath name="myClip3">
                                <Rect x="185" y="25" width="80" height="80" />
                            </RNSVGClipPath>
                            <Rect x="155" y="5" width="80" height="80" fill="green" clipPath="url(#myClip3)" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="RNSVGClipPath: clipRule=default(L) + default(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <RNSVGClipPath name="emptyStar11" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </RNSVGClipPath>
                            <RNSVGClipPath name="emptyStar12" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </RNSVGClipPath>

                            <Rect clipPath="url(#emptyStar11)" width="50" height="90" fill="blue" />
                            <Rect clipPath="url(#emptyStar12)" width="50" height="90" x="50" fill="red" />
                        </Svg>
                    </View>
                </TestCase>

                <TestCase itShould="RNSVGClipPath: clipRule=nonzero(L) + evenodd(R)">
                    <View style={{
                        borderWidth: 1, width: 400, height: 120
                    }}>
                        <Svg>
                            <RNSVGClipPath name="emptyStar13" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </RNSVGClipPath>
                            <RNSVGClipPath name="emptyStar14" >
                                <Path d="M50,0 21,90 98,35 2,35 79,90z" />
                            </RNSVGClipPath>

                            <Rect clipPath="url(#emptyStar13)" width="50" height="90" fill="blue" clipRule="nonzero"/>
                            <Rect clipPath="url(#emptyStar14)" width="50" height="90" x="50" fill="red" clipRule="evenodd"/>
                        </Svg>
                    </View>
                </TestCase>

            </ScrollView >
        </Tester >
    )
}