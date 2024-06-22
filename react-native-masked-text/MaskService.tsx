import { MaskService, TextInputMask } from 'react-native-masked-text'
import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { Button, TestCase } from '../../components';


export const MaskedTextMaskService = () => {

    const [mask, setMask] = useState({
        value: '',
        raw: ''
    });

    const [masktoRow, setMasktoRow] = useState({
        value: '',
        raw: ''
    });
    const [maskgetMask, setMaskgetMask] = useState({
        value: '',
        raw: ''
    });

    const divRef = useRef();
    return (
        <Tester>
            <TestSuite name="接口测试">
                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断toMask接口生成的掩码是否正确"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>CPF</Text>
                                <TextInputMask
                                    type={'cpf'}
                                    value={mask.value}
                                    includeRawValueInChangeText={true}
                                    onChangeText={(text, rawValue) => {
                                        setMask({
                                            value: text,
                                            raw: rawValue
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                                <Text>value: {mask.value}</Text>
                                <Text>Raw: {mask.raw}</Text>
                            </View>

                            <Button
                                label="toMask"
                                onPress={() => {
                                    if (MaskService.toMask('cpf', mask.value) == mask.value) {
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
                    itShould="点击确认，判断toRawValue接口获取屏蔽值的原始值是否正确"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>CPF</Text>
                                <TextInputMask
                                    type={'cpf'}
                                    value={masktoRow.value}
                                    includeRawValueInChangeText={true}
                                    onChangeText={(text, rawValue) => {
                                        setMasktoRow({
                                            value: text,
                                            raw: rawValue
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                                <Text>value: {masktoRow.value}</Text>
                                <Text>Raw: {masktoRow.raw}</Text>
                            </View>
                            <Button
                                label="toRawValue"
                                onPress={() => {
                                    if (MaskService.toRawValue('cpf', masktoRow.value, {}) == masktoRow.raw) {
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
                    itShould="点击确认，判断getMask接口生成的格式是否为正确的格式，比如'YYYY/MM/DD'"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>getMask</Text>
                                <TextInputMask
                                    type={'datetime'}
                                    value={maskgetMask.value}
                                    includeRawValueInChangeText={true}
                                    options={{
                                        format: 'YYYY/MM/DD'
                                    }}
                                    onChangeText={(text, rawValue) => {
                                        setMaskgetMask({
                                            ...maskgetMask,
                                            value: text,
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                                <Text>value: {maskgetMask.value}</Text>

                            </View>
                            <Button
                                label="toRawValue"
                                onPress={() => {
                                    if (MaskService.getMask('datetime', '123123', { format: 'YYYY/MM/DD' }) == '9999/99/99') {
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