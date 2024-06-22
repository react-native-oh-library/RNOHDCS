import { TestSuite, Tester } from '@rnoh/testerino';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { Button, TestCase } from '../../components';

export const MaskedTextCNPJ = () => {

    const [mask, setMask] = useState({
        cnpj: ''
    });

    return (
        <Tester style={styles.container}>
            <TestSuite name='CNPJ'>
                <TestCase.Manual
                    tags={['C_API']}
                    itShould="点击确认，判断掩码格式是否为99.999.999/9999-99"
                    initialState={false}
                    arrange={({ setState, reset }) => (
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.container}>
                                <Text>CNPJ</Text>
                                <TextInputMask
                                    type={'cnpj'}
                                    value={mask.cnpj}
                                    onChangeText={text => {
                                        setMask({
                                            cnpj: text
                                        })
                                    }}
                                    style={styles.textInputStype}
                                />
                            </View>
                            <Button
                                label="cnpjTest"
                                onPress={() => {
                                    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
                                    if (regex.test(mask.cnpj)) {
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