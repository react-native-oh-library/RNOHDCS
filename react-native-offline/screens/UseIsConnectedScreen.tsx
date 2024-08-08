import { useIsConnected } from 'react-native-offline';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { View, Button, StyleSheet, Text } from 'react-native';
import React from 'react';


export const UseIsConnectedScreen = () => {

    const [connectStatus, setConnectStatus] = React.useState('');
    const isConnected = useIsConnected();

    return (
        <Tester>
            <TestSuite name="useIsConnected示例">
                <TestCase tags={['C_API']} itShould="Connected to Internet YES(网络在线) NO(网络离线)"
                    initialState={''}
                    arrange={({ setState }) =>
                        <View>
                            <View style={styles.buttonsContainer}>
                                <Button
                                    title='点击测试网络连接'
                                    color="#FF0000"
                                    onPress={() => {
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