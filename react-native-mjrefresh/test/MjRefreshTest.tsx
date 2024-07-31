import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { MJRefreshControl } from "react-native-mjrefresh";

export const MjRefreshTest = () => {
    const [state, setState] = useState<{
        text?: string
    }>({
        text: ''
    })
    const { text } = state

    return (
        <Tester>
            <TestSuite name="MjRefresh">
                <TestCase
                    tags={['C_API']}
                    itShould="MjRefresh">
                    <View style={{ height: 500 }}>
                        <ScrollView
                            refreshControl={
                                <MJRefreshControl
                                    ref={ref => _mjrefresh = ref}
                                    onRefresh={
                                        () => {
                                            setState({
                                                text: '正在刷新'
                                            })
                                            console.log('onRefresh')
                                            _mjrefresh.beginRefresh();
                                            setTimeout(() => {
                                                _mjrefresh && _mjrefresh.finishRefresh();
                                            }, 1000)
                                        }
                                    }
                                    onRefreshIdle={() => console.log('onRefreshIdle')}
                                    onReleaseToRefresh={() => {
                                        setState({
                                            text: '释放刷新'
                                        })
                                    }}
                                    onPulling={e => {
                                        console.log("onpulling:" + e.nativeEvent.percent);
                                        setState({
                                            text: '下拉刷新'
                                        })
                                    }}

                                    HeaderComponent={
                                        <View style={{
                                            height: 100, backgroundColor: 'red',
                                            justifyContent: 'center',
                                            alignItems: 'center', flexDirection: 'row'
                                        }}>
                                            <Text>{state.text}</Text>
                                        </View>
                                    }
                                >

                                </MJRefreshControl>
                            }
                        >
                            <Text>{"mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST mjRefresh TEST"}</Text>
                        </ScrollView>
                    </View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
};