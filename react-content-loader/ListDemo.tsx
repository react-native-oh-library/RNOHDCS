import { List, Rect } from 'react-content-loader/native'
import { View, ScrollView } from "react-native"
import { Tester, TestCase } from '@rnoh/testerino'

export function ListDemo() {
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView >
            <Tester>
                <TestCase itShould='animate:false'>
                    <List animate={false}></List>
                </TestCase>
                <TestCase itShould='animate:true'>
                    <List animate={true}></List>
                </TestCase>
                <TestCase itShould='viewBox:0 0 380 70'>
                    <List
                        animate={true}
                        viewBox="0 0 380 70"
                    >
                    </List>
                </TestCase>
                <TestCase itShould='backgroundColor:#999'>
                    <List
                        animate={true}
                        backgroundColor={'#999'}
                    ></List>
                </TestCase>
                <TestCase itShould='foregroundColor:red'>
                    <List
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                    ></List>
                </TestCase>
                <TestCase itShould='speed:0.5'>
                    <List
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                    >
                    </List>
                </TestCase>
                <TestCase itShould='interval:2'>
                    <List
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                    >
                    </List>
                </TestCase>
                <TestCase itShould='rtl:true'>
                    <List height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        rtl={true}
                    >
                    </List>
                </TestCase>
                <TestCase itShould='uniqueKey:unique-key'>
                    <List height={140}
                        animate={true}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        speed={0.5}
                        interval={2}
                        uniqueKey='unique-key'
                    >
                    </List>
                </TestCase>
                <TestCase itShould='beforeMask:Rect(组件)'>
                    <List height={140}
                        animate={false}
                        backgroundColor={'#999'}
                        foregroundColor={'red'}
                        beforeMask={<Rect x="80" y="40" rx="3" ry="3" width="250" height="10" fill='red' />}
                    >
                    </List>
                </TestCase>
            </Tester>
        </ScrollView>
    </View>
}