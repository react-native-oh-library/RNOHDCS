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
                        speed={0.5}
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
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <ContentLoader
                        width={'100%'}
                        animate={false}
                        backgroundColor={'#999'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='作为容器组件包裹子组件'>
                    <ContentLoader
                        width={'100%'}
                        height={100}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}