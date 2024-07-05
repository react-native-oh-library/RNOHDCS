import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TextInputMask } from 'react-native-masked-text'
import { Button, TestCase } from '../../components';

export const MaskedTextCelPhone = () => {

    const [mask, setMask] = useState({
        phoneBR: '',
        phoneBRWithoutDDD: '',
        phoneBRWithCustomDDD: '',
        international: ''
    });

    return (
        <Tester style={styles.container}>
            <TestSuite name="Cel Phone">
                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断掩码格式是否为默认项(99) 9999-9999 or (99) 99999-9999"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>Cel Phone: BR</Text>
                                <TextInputMask
                                    type={'cel-phone'}
                                    value={mask.phoneBR}
                                    onChangeText={text => {
                                        setMask({
                                            ...mask,
                                            phoneBR: text,
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                            </View>
                            <Button
                                label="Datetime"
                                onPress={() => {
                                    const regex = /^\(\d{2}\) (\d{4}-\d{4})|(\d{5}-\d{4})$/;
                                    if (regex.test(mask.phoneBR)) {
                                        setState(true)
                                    }
                                }}
                            />
                            <Button label="reset" onPress={reset} />
                        </View>
                    )}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断掩码格式是否正确"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>Cel Phone: BR without ddd</Text>
                                <TextInputMask
                                    type={'cel-phone'}
                                    options={{
                                        withDDD: false
                                    }}
                                    value={mask.phoneBRWithoutDDD}
                                    onChangeText={text => {
                                        setMask({
                                            ...mask,
                                            phoneBRWithoutDDD: text,
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                            </View>
                            <Button
                                label="Datetime"
                                onPress={() => {
                                    const regex = /^\d{5}|\d{4}-\d{4}$/;
                                    if (regex.test(mask.phoneBRWithoutDDD)) {
                                        setState(true)
                                    }
                                }}
                            />
                            <Button label="reset" onPress={reset} />
                        </View>
                    )}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断掩码格式是否为前缀（99）"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>Cel Phone: BR with custom ddd</Text>
                                <TextInputMask
                                    type={'cel-phone'}
                                    options={{
                                        dddMask: '(99) '
                                    }}
                                    value={mask.phoneBRWithCustomDDD}
                                    onChangeText={text => {
                                        setMask({
                                            ...mask,
                                            phoneBRWithCustomDDD: text,
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                            </View>
                            <Button
                                label="Datetime"
                                onPress={() => {
                                    const regex = /^\(\d{2}\) (\d{4}-\d{4})|(\d{5}-\d{4})$/;
                                    if (regex.test(mask.phoneBRWithCustomDDD)) {
                                        setState(true)
                                    }
                                }}
                            />
                            <Button label="reset" onPress={reset} />
                        </View>
                    )}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />

                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断掩码是否为+999 999 999 999格式"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>Cel Phone: International</Text>
                                <TextInputMask
                                    type={'cel-phone'}
                                    options={{
                                        maskType: 'INTERNATIONAL'
                                    }}
                                    value={mask.international}
                                    onChangeText={text => {
                                        setMask({
                                            ...mask,
                                            international: text,
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                            </View>
                            <Button
                                label="Datetime"
                                onPress={() => {
                                    const regex = /^\+\d{3} \d{3} \d{3} \d{3}$/;
                                    if (regex.test(mask.international)) {
                                        setState(true)
                                    }
                                }}
                            />
                            <Button label="reset" onPress={reset} />
                        </View>
                    )}
                    assert={({ state, expect }) => {
                        expect(state).to.be.true;
                    }}
                />
            </TestSuite>
        </Tester>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    textInputStype: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'
    }
});