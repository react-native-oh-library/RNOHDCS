import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TestSuite, Tester } from '@rnoh/testerino';
import { TextInputMask } from 'react-native-masked-text'
import { Button, TestCase } from '../../components';


export const MaskedTextDatetime = () => {
  const [mask, setMask] = useState({
    datetime1: '',
    datetime2: '',
    datetime3: '',
    datetime4: '',
    datetime5: '',
    datetime6: '',
    datetime7: ''
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name='Datetime'>
        <TestCase.Manual
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为YYYY/MM/DD"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'YYYY/MM/DD'
                  }}
                  value={mask.datetime1}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime1: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^\d{4}\/\d{2}\/\d{2}$/;
                  if (regex.test(mask.datetime1)) {
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
          itShould="点击确认，判断掩码格式是否DD/MM/YYYY HH:mm:ss"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY HH:mm:ss'
                  }}
                  value={mask.datetime2}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime2: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
                  if (regex.test(mask.datetime2)) {
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
          itShould="点击确认，判断掩码格式是否DD/MM/YYYY"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  value={mask.datetime3}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime3: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
                  if (regex.test(mask.datetime3)) {
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
          itShould="点击确认，判断掩码格式是否MM/DD/YYYY"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'MM/DD/YYYY'
                  }}
                  value={mask.datetime4}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime4: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
                  if (regex.test(mask.datetime4)) {
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
          itShould="点击确认，判断掩码格式是否HH:mm:ss"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'HH:mm:ss'
                  }}
                  value={mask.datetime5}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime5: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
                  if (regex.test(mask.datetime5)) {
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
          itShould="点击确认，判断掩码格式是否HH:mm"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'HH:mm'
                  }}
                  value={mask.datetime6}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime6: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
                  if (regex.test(mask.datetime6)) {
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
          itShould="点击确认，判断掩码格式是否HH"
          initialState={false}
          arrange={({ setState, reset }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.container}>
                <Text>Datetime</Text>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'HH'
                  }}
                  value={mask.datetime7}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      datetime7: text
                    })
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                label="Datetime"
                onPress={() => {
                  const regex = /^(2[0-3]|[01]?[0-9])$/;
                  if (regex.test(mask.datetime7)) {
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