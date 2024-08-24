import React from "react";
import { Svg, Text, TextPath, Path, Defs, G, TSpan } from 'react-native-svg'
import { ScrollView, View } from 'react-native'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps, genFillProps, CaseParams } from '../genUtil'
import {Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

export default function () {
    return (
        <Tester style={{ flex: 1 }}>
            <ScrollView>
                <TestCase
                    itShould="case 1: TextPath use href "
                >
                    <View style={{
                                    borderWidth: 1,
                                    width: 150,
                                    height: 150
                                }}
                    >
                        <Svg viewBox="0 0 100 100">
                            <G stroke="blue">
                                <Path
                                    id="MyPath"
                                    fill="none"
                                    stroke="red"
                                    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

                                <Text stroke="blue" fill="blue" fontVariant="small-caps" fontStretch="ultra-expanded">
                                <TextPath stroke="blue" fill="blue" href="#MyPath">Quick <TSpan kerning="10">brown</TSpan> fox jumps over <TSpan kerning="1">the</TSpan> lazy dog.</TextPath>
                                </Text>
                            </G>
                        </Svg >
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 2: TextPath use startOffset number "
                >
                    <View style={{
                                    borderWidth: 1,
                                    width: 150,
                                    height: 150
                                }}
                    >
                        <Svg viewBox="0 0 100 100">
                            <G stroke="blue">
                                <Path
                                    id="MyPath"
                                    fill="none"
                                    stroke="red"
                                    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

                                <Text stroke="blue" fill="blue" fontVariant="small-caps" fontStretch="ultra-expanded">
                                <TextPath stroke="blue" fill="blue" href="#MyPath" startOffset="50">Quick brown fox jumps over the lazy dog.</TextPath>
                                </Text>
                            </G>
                        </Svg >
                    </View>
                </TestCase>

                <TestCase
                    itShould="case 3: TextPath use startOffset percent "
                >
                    <View style={{
                                    borderWidth: 1,
                                    width: 150,
                                    height: 150
                                }}
                    >
                        <Svg viewBox="0 0 100 100">
                            <G stroke="blue">
                                <Path
                                    id="MyPath"
                                    fill="none"
                                    stroke="red"
                                    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

                                <Text stroke="blue" fill="blue" fontVariant="small-caps" fontStretch="ultra-expanded">
                                <TextPath stroke="blue" fill="blue" href="#MyPath" startOffset="50%">Quick brown fox jumps over the lazy dog.</TextPath>
                                </Text>
                            </G>
                        </Svg >
                    </View>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}