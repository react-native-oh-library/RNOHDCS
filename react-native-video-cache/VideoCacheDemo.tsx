import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import convertToCache, { convertAsync } from "react-native-video-cache";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const url = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4";

export default function App() {
    const [asyncData, setAsyncData] = useState<string>('')

    return (
        <Tester>
            <TestSuite name="VideoCache">
                <TestCase
                    tags={['C_API']}
                    itShould='convertToCache(返回链接为http://127.0.0.1开头且绑定随机端口号则为成功)'
                    initialState={undefined as any}
                    arrange={({ setState }) => {
                        return (
                            <TouchableOpacity
                                onPress={async () => {
                                    const proxyUrl = await convertAsync(url)
                                    setAsyncData(proxyUrl)
                                    if (Object.prototype.toString.call(proxyUrl) === '[object String]') {
                                        setState(proxyUrl.startsWith('http://'))
                                    } else {
                                        setState(false)
                                    }
                                }}
                                style={{ height: 30 }}
                            >
                                <Text style={{ textAlign: 'center', lineHeight: 25 }}>同步获取代理地址</Text>
                            </TouchableOpacity>
                        )
                    }}
                    assert={async ({ expect, state }) => {
                        expect(state).to.be.true
                    }}
                />
                <Text style={{ color: '#fff' }}>{'syncData(同步接口返回):' + asyncData}</Text>
            </TestSuite>
        </Tester>
    );
}