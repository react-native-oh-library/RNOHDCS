import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'
import React from 'react'

export function ContentLoaderDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <ContentLoader
                        width={'100%'}
                        animate={false}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        interval={2}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='rtl:false'>
                    <ContentLoader
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={false}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <ContentLoader
                        width={'100%'}
                        animate={false}
                        backgroundColor={'#999'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </ContentLoader>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}