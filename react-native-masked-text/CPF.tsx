import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TextInputMask } from 'react-native-masked-text'
import { Button, TestCase } from '../../components';


export const MaskedTextCPF = () => {

  const [mask, setMask] = useState({
    cpf: ''
  });

  return (
    <Tester>
      <TestSuite name="CPF">
        <TestCase.Manual
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为999.999.999-99格式"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>CPF</Text>
                <TextInputMask
                  type={'cpf'}
                  value={mask.cpf}
                  onChangeText={text => {
                    setMask({
                      cpf: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
                  if (regex.test(mask.cpf)) {
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