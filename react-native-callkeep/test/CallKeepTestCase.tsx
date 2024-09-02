import React, { useState, useEffect } from 'react';
import {
    Button,
    View,
    Alert,
    Text,
    ScrollView,
} from 'react-native';
import {
    Tester,
    TestSuite,
    TestCase
} from '@rnoh/testerino';

import RNCallKeep from 'react-native-callkeep';

export function CallKeepTestCase() {

    return (
        <View style={styles.screen}>
            <Tester style={{ flex: 1, backgroundColor: 'black' }}>
                <ScrollView>
                    <TestSuite name="CallKeep test">
                        <View style={styles.container}>
                            <TestCase itShould="test_01 callkeep startCall" tags={['C_API']} //跳转到拨号界面
                                initialState={undefined as any}
                                arrange={({ setState }) => {
                                    return (
                                        <Button title={'startCall'} onPress={() => { RNCallKeep.startCall("0x123456", "999"), setState(true) }} />
                                    );
                                }}
                                assert={({ expect, state }) => { expect(state).to.be.true }} />


                            <TestCase itShould="test_02 callkeep isCallActive" tags={['C_API']} //判断当前电话是否已接
                                initialState={undefined as any}
                                arrange={({ setState }) => {
                                    return (
                                        <View>
                                            <Button
                                                title={'isCallActive'}
                                                onPress={() => { RNCallKeep.isCallActive("0x123456").then(res => { setState(res) }) }}
                                            />
                                        </View>
                                    );
                                }}
                                assert={({ expect, state }) => { expect(state).to.be.true }} />


                            <TestCase itShould="test_03 callkeep checkIfBusy" tags={['C_API']}//判断当前是否有通话存
                                initialState={undefined as any}
                                arrange={({ setState }) => {
                                    return (
                                        <View>
                                            <Button
                                                title={'checkIfBusy'}
                                                onPress={() => { RNCallKeep.checkIfBusy().then(res => setState(res)) }}
                                            />
                                        </View>
                                    );
                                }}
                                assert={({ expect, state }) => { expect(state).to.be.true }} />
                        </View>
                    </TestSuite>
                </ScrollView>
            </Tester>
        </View >
    );
}

const styles = {
    screen: {
        flex: 1,
        padding: 4,
        paddingTop: 10,
        backgroundColor: 'black',
    },
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
};