import { Facebook ,Rect} from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'

export function FacebookDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <Facebook
                        width={'100%'}
                        animate={false}></Facebook>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <Facebook
                        width={'100%'}
                        animate={true}></Facebook>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <Facebook
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </Facebook>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                    ></Facebook>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    ></Facebook>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </Facebook>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                    </Facebook>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </Facebook>
                </TestCase>
                <TestCase itShould='uniqueKey:unique-key'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        uniqueKey='unique-key'
                    >
                    </Facebook>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <Facebook
                        width={'100%'}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </Facebook>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}