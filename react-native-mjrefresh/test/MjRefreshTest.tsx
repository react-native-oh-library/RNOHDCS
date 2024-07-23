import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { MJRefreshControl } from "react-native-mjrefresh";

export const MjRefreshTest = () => {
    const [state, setState] = useState<{
        message?: string
    }>({
        message: ''
    })
    const { message } = state
    let mjRefreshRef: React.RefObject<MJRefreshControl>;

    return (
        <Tester>
        <TestSuite name="MjRefresh">
            <TestCase.Example
                tags={['C_API']}
                itShould="MjRefresh">
                refreshControl={<MJRefreshControl
                    ref={(ref) => this.mjRefreshRef = ref}
                    onRefresh={() => {
                        setState({ message: '正在刷新' })
                        console.log("------------onRefresh")
                        // 开始刷新
                        this.mjRefreshRef.beginRefresh()
                        // 自定义刷新结束事件
                        setTimeout(() => {
                            console.log("------------ Finish Refresh")
                            // 结束刷新
                            this.mjRefreshRef.finishRefresh()
                        }, 2000)
                    }}
                    onRefreshIdle={() => {
                        setState({ message: '下拉刷新' })
                        console.log("------------onRefreshIdle")
                    }}
                    onReleaseToRefresh={() => {
                        setState({ message: '释放刷新' })
                        console.log("------------onReleaseToRefresh")
                    }}
                    onPulling={() => {
                        setState({ message: '下拉刷新' })
                        console.log("------------onPulling")
                    }}>


                    HeaderComponent = {
                        <View style={{
                            height: 100, backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'row'
                        }}>
                            <Text>Refresh State:{message}</Text>
                        </View>
                    }
                </MJRefreshControl>
                }
            </TestCase.Example>
        </TestSuite>
        </Tester>
    );
};
