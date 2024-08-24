import React from "react";
import { Svg, Circle,  } from 'react-native-svg'
import { ScrollView, View, Text } from 'react-native'
import {Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
export default function() {
    return (
        <Tester style={{flex: 1}}>
             <ScrollView>
                <TestCase 
                    itShould="case 1 desc"
                >
                    <Text>case 1 in here</Text>
                </TestCase>
                <TestCase 
                    itShould="case 2 desc"
                >
                    <Text>case 2 in here</Text>
                </TestCase>
            </ScrollView>
        </Tester>
    )
}