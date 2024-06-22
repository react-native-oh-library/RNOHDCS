import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TextInputMask } from 'react-native-masked-text'
import { Button, TestCase } from '../../components';
export const MaskedTextCustom = () => {

  const [mask, setMask] = useState({
    custom1: '',
    custom2: '',
    custom3: ''
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name='Custom'>
        <TestCase.Manual
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为999 AAA SSS ***"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Custom: 999 AAA SSS ***</Text>
                <TextInputMask
                  type={'custom'}
                  value={mask.custom1}
                  options={{
                    mask: '999 AAA SSS ***'
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      custom1: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Custom"
                onPress={() => {
                  const regex = /^\d{3} [a-zA-Z]{3} [a-zA-Z]||\d{3} [^ ]{3}\$/;
                  if (regex.test(mask.custom1)) {
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
          itShould="点击确认，判断掩码格式是否为999 (99) 999 99 99"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Custom: 999 (99) 999 99 99</Text>
                <TextInputMask
                  type={'custom'}
                  value={mask.custom2}
                  options={{
                    mask: '999 (99) 999 99 99'
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      custom2: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^\d{3} \(\d{2}\) \d{3} \d{2} \d{2}$/;
                  if (regex.test(mask.custom2)) {
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
          itShould="点击确认，判断掩码格式是否为AA-99-99-99-A"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Custom: AA-99-99-99-A</Text>
                <TextInputMask
                  type={'custom'}
                  value={mask.custom3}
                  options={{
                    mask: 'AA-99-99-99-A'
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      custom3: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^[a-zA-Z]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[a-zA-Z]$/;
                  if (regex.test(mask.custom3)) {
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