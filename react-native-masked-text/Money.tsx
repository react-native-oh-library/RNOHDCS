import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {TextInputMask} from 'react-native-masked-text';

export const MaskedTextMoney = () => {
  const [mask, setMask] = useState({
    advanced: '',
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name="Money">
        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为money格式"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>Money</Text>
                <TextInputMask
                  type={'money'}
                  value={mask.advanced}
                  options={{
                    precision: 2,
                    separator: '.',
                    delimiter: ',',
                    unit: 'R$',
                    suffixUnit: '',
                  }}
                  onChangeText={text => {
                    setMask({
                      advanced: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="MoneyTest"
                onPress={() => {
                  const regex = /^R\$\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?$/;
                  if (regex.test(mask.advanced)) {
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
