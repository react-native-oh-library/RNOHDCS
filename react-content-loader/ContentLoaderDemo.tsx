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
                        height={80}
                        animate={false}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='uniqueKey:unique-key'>
                    <ContentLoader
                        width={'100%'}
                        height={80}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        uniqueKey='unique-key'
                    >
                        <Circle cx="30" cy="30" r="30" />
                        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <ContentLoader
                        width={'100%'}
                        height={120}
                        animate={false}
                        backgroundColor={'#999'}
                        beforeMask={ <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </ContentLoader>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}
