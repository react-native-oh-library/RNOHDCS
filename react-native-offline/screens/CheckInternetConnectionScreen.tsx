import { checkInternetConnection } from 'react-native-offline';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { View, Button, StyleSheet, Text } from 'react-native';
import React from 'react';


export const CheckInternetConnectionScreen = () => {
    const DEFAULT_TIMEOUT = 3000;
    const DEFAULT_PING_SERVER_URL = 'https://www.huawei.com/';
    const DEFAULT_HTTP_METHOD = 'HEAD';
    const DEFAULT_CUSTOM_HEADERS = {};
    const [connectStatus, setConnectStatus] = React.useState('');

    return (
        <Tester>
            <TestSuite name="checkInternetConnection示例">
                <TestCase tags={['C_API']} itShould="Connected to Internet YES(网络在线) NO(网络离线)"
                    initialState={''}
                    arrange={({ setState }) =>
                        <View>
                            <View style={styles.buttonsContainer}>
                                <Button
                                    title='点击测试网络连接'
                                    color="#FF0000"
                                    onPress={async () => {
                                        const isConnected = await checkInternetConnection(
                                            DEFAULT_PING_SERVER_URL,
                                            DEFAULT_TIMEOUT,
                                            true,
                                            DEFAULT_HTTP_METHOD,
                                            DEFAULT_CUSTOM_HEADERS)
                                        if (isConnected === true) {
                                            setState('success')
                                            setConnectStatus('YES')
                                        }
                                        if (isConnected === false) {
                                            setState('fail')
                                            setConnectStatus('NO')
                                        }
                                    }}
                                />
                            </View>
                            <Text style={styles.text}>Connected to Internet:{connectStatus}</Text>
                        </View>
                    }
                    assert={({ expect, state }) => {
                        expect(state).to.be.eq('success');
                    }}>
                </TestCase>
            </TestSuite>
        </Tester>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 80,
        height: 80,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        height: 20,
        width: 500,
        fontSize: 14,
    },
    buttonNextFocusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    buttonNextFocus: {
        width: 50,
        height: 20,
    },
});



