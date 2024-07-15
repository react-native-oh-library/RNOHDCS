import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {TextInputMask} from 'react-native-masked-text';

export const MaskedTextOnlyNumbers = () => {
  const [mask, setMask] = useState({
    numbers: '',
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name="OnlyNumbers">
        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为纯数字"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>OnlyNumbers</Text>
                <TextInputMask
                  type={'only-numbers'}
                  value={mask.numbers}
                  onChangeText={text => {
                    setMask({
                      numbers: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="OnlyNumbersTest"
                onPress={() => {
                  const regex = /^\d+$/;
                  if (regex.test(mask.numbers)) {
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
