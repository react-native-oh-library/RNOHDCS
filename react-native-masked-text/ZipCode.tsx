import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {TextInputMask} from 'react-native-masked-text';

export const MaskedTextZipCode = () => {
  const [mask, setMask] = useState({
    code: '',
  });

  return (
    <Tester style={styles.container}>
      <TestSuite name="ZipCode">
        <TestCase
          tags={['C_API']}
          itShould="点击确认，判断掩码格式是否为99999-999"
          initialState={false}
          arrange={({setState, reset}) => (
            <View style={{flexDirection: 'column'}}>
              <View style={styles.container}>
                <Text>ZipCode</Text>
                <TextInputMask
                  type={'zip-code'}
                  value={mask.code}
                  onChangeText={text => {
                    setMask({
                      code: text,
                    });
                  }}
                  style={styles.textInputStype}
                />
              </View>
              <Button
                title="ZipCodeTest"
                onPress={() => {
                  const regex = /^\d{5}-\d{3}$/;
                  if (regex.test(mask.code)) {
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
