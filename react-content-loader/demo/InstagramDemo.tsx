import { Instagram, Rect } from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'
import React from 'react'

export function InstagramDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <Instagram animate={false} width={'100%'}></Instagram>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <Instagram animate={true} width={'100%'}></Instagram>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </Instagram>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                    ></Instagram>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    ></Instagram>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </Instagram>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                    </Instagram>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </Instagram>
                </TestCase>
                <TestCase itShould='rtl:false'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={false}
                    >
                    </Instagram>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <Instagram
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </Instagram>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}