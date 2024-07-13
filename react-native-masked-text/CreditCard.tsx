import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {TextInputMask} from 'react-native-masked-text';

export const MaskedTextCreditCard = () => {
  const [mask, setMask] = useState({
    creditcard: '',
    creditcardissuer: '',
    creditcarddiners: '',
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name="Credit">
        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为9999 9999 9999 9999 or 9999 **** **** 9999"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>Credit Card</Text>
                <TextInputMask
                  type={'credit-card'}
                  value={mask.creditcard}
                  options={{
                    obfuscated: true,
                    issuer: 'visa-or-mastercard',
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      creditcard: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="CreditCardTest"
                onPress={() => {
                  const regex = /^\d{4} (\d{4}|[*]{4}) (\d{4}|[*]{4}) \d{4}\b$/;
                  if (regex.test(mask.creditcard)) {
                    setState(true);
                  }
                }}
              />
              <Button title="reset" onPress={reset} />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为9999 999999 99999 or 9999 ****** 99999"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>CreditCard:issuer</Text>
                <TextInputMask
                  type={'credit-card'}
                  value={mask.creditcardissuer}
                  options={{
                    issuer: 'amex',
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      creditcardissuer: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="CreditCardTest"
                onPress={() => {
                  const regex = /^\d{4} (\d{6}|[*]{6}) \d{5}\b$/;
                  if (regex.test(mask.creditcardissuer)) {
                    setState(true);
                  }
                }}
              />
              <Button title="reset" onPress={reset} />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />

        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为9999 999999 9999 or 9999 ****** 9999"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>CreditCard:diners</Text>
                <TextInputMask
                  type={'credit-card'}
                  value={mask.creditcarddiners}
                  options={{
                    obfuscated: false,
                    issuer: 'diners',
                  }}
                  onChangeText={text => {
                    setMask({
                      ...mask,
                      creditcarddiners: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="CreditCardTest"
                onPress={() => {
                  const regex = /^\d{4} (\d{6}|[*]{6}) \d{4}\b$/;
                  if (regex.test(mask.creditcarddiners)) {
                    setState(true);
                  }
                }}
              />
              <Button title="reset" onPress={reset} />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    </Tester>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputStype: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});
