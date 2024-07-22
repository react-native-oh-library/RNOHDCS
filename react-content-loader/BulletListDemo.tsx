import { BulletList ,Rect} from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'

export function BulletListDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <BulletList animate={false}></BulletList>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <BulletList animate={true}></BulletList>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <BulletList
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </BulletList>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <BulletList
                        animate={true}
                        backgroundColor='#999'
                    ></BulletList>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <BulletList
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor='red'
                    ></BulletList>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <BulletList
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </BulletList>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <BulletList
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                    </BulletList>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <BulletList height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </BulletList>
                </TestCase>
                <TestCase itShould='uniqueKey:unique-key'>
                    <BulletList height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        uniqueKey='unique-key'
                    >
                    </BulletList>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <BulletList height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </BulletList>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}