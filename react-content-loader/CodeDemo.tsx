import { Code, Rect } from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'

export function CodeDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <Code animate={false}></Code>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <Code animate={true}></Code>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <Code
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </Code>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <Code
                        animate={true}
                        backgroundColor={'#999'}
                    ></Code>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <Code
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    ></Code>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <Code
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </Code>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <Code
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                    </Code>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <Code height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </Code>
                </TestCase>
                <TestCase itShould='uniqueKey:unique-key'>
                    <Code height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        uniqueKey='unique-key'
                    >
                    </Code>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <Code height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </Code>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}