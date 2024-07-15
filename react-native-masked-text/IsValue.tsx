import {MaskService, TextInputMask} from 'react-native-masked-text';
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

export const ISValue = () => {
  const [valid1, setValid1] = useState({
    value: '',
    raw: '',
  });
  const [valid2, setValid2] = useState({
    value: '',
    raw: '',
  });
  const [valid3, setValid3] = useState({
    value: '',
    raw: '',
  });
  const [valid4, setValid4] = useState({
    value: '',
    raw: '',
  });
  const [valid5, setValid5] = useState({
    value: '',
    raw: '',
  });
  const [valid6, setValid6] = useState({
    value: '',
    raw: '',
  });
  const [valid7, setValid7] = useState({
    value: '',
    raw: '',
  });
  const [valid8, setValid8] = useState({
    value: '',
    raw: '',
  });
  const [valid9, setValid9] = useState({
    value: '',
    raw: '',
  });

  const divRef1 = useRef();
  const divRef2 = useRef();
  const divRef3 = useRef();
  const divRef4 = useRef();
  const divRef5 = useRef();
  const divRef6 = useRef();
  const divRef7 = useRef();
  const divRef8 = useRef();
  const divRef9 = useRef();

  return (
    <Tester style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TestSuite name="接口测试">
          {/* custom通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在custom类型是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>custom</Text>
                  <TextInputMask
                    type={'custom'}
                    value={valid7.value}
                    includeRawValueInChangeText={true}
                    options={{
                      mask: '999 AAA SSS ***',
                      validator: function (value, settings) {
                        return true;
                      },
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid7({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef7}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid7.value}</Text>
                  <Text>Raw: {valid7.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef7.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('custom', valid7.value, {
                        mask: '999 AAA SSS ***',
                        validator: function (value, settings) {
                          return true;
                        },
                      }),
                      valid7.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* CNPJ测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口是否正确，正确的cnpj示例：54.651.716/0011-50"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CNPJ</Text>
                  <TextInputMask
                    type={'cnpj'}
                    value={valid6.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid6({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef6}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid6.value}</Text>
                  <Text>Raw: {valid6.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef6.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('cnpj', valid6.value, {}),
                      valid6.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* credit-card通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在credit-card是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>credit-card</Text>
                  <TextInputMask
                    type={'credit-card'}
                    value={valid5.value}
                    includeRawValueInChangeText={true}
                    options={{
                      obfuscated: false,
                      issuer: 'amex',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid5({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef5}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid5.value}</Text>
                  <Text>Raw: {valid5.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef5.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('credit-card', valid5.value, {
                        obfuscated: false,
                        issuer: 'amex',
                      }),
                      valid5.value,
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* cel-phone通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在cel-phone是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>cel-phone</Text>
                  <TextInputMask
                    type={'cel-phone'}
                    value={valid1.value}
                    includeRawValueInChangeText={true}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid1({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef1}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid1.value}</Text>
                  <Text>Raw: {valid1.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef1.current.isValid()) {
                      setState(true);
                    }
                    // console.log(MaskService.isValid('cel-phone', valid1.raw, {
                    //     maskType: 'BRL',
                    //     withDDD: true,
                    //     dddMask: '(99) '
                    // }),valid1.raw);
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* cpf测试通过 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口是否正确,正确的cpf示例：007.408.869-67"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>CPF</Text>
                  <TextInputMask
                    type={'cpf'}
                    value={valid2.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid2({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef2}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid2.value}</Text>
                  <Text>Raw: {valid2.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef2.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('cpf', valid2.value, {}),
                      '------123',
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* money通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在money是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>money</Text>
                  <TextInputMask
                    type={'money'}
                    value={valid3.value}
                    includeRawValueInChangeText={true}
                    options={{
                      unit: 'US$',
                      separator: '.',
                      delimiter: ',',
                    }}
                    onChangeText={(text, rawValue) => {
                      setValid3({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef3}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid3.value}</Text>
                  <Text>Raw: {valid3.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef3.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('money', valid3.value, {
                        unit: 'US$',
                        separator: '.',
                        delimiter: ',',
                      }),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* zip-code通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在zip-code是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>zip-code</Text>
                  <TextInputMask
                    type={'zip-code'}
                    value={valid4.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid4({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef4}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid4.value}</Text>
                  <Text>Raw: {valid4.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef4.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('zip-code', valid4.value, {}),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* only-numbers通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在only-numbers是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>Only Numbers</Text>
                  <TextInputMask
                    type={'only-numbers'}
                    value={valid8.value}
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawValue) => {
                      setValid8({
                        value: text,
                        raw: rawValue,
                      });
                    }}
                    ref={divRef8}
                    style={styles.textInputStype}
                  />
                  <Text>value: {valid8.value}</Text>
                  <Text>Raw: {valid8.raw}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef8.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('only-numbers', valid8.value, {}),
                    );
                  }}
                />
                <Button title="reset" onPress={reset} />
              </View>
            )}
            assert={({state, expect}) => {
              expect(state).to.be.true;
            }}
          />
          {/* Datetime通过测试 */}
          <TestCase
            tags={['C_API']}
            itShould="点击确认，判断 isValid接口在Datetime是否正确"
            initialState={false}
            arrange={({setState, reset}) => (
              <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                  <Text>Datetime</Text>
                  <TextInputMask
                    type={'datetime'}
                    value={valid9.value}
                    includeRawValueInChangeText={true}
                    options={{
                      format: 'YYYY/MM/DD',
                    }}
                    onChangeText={text => {
                      setValid9({
                        ...valid9,
                        value: text,
                      });
                    }}
                    ref={divRef9}
                    style={styles.textInputStype}
                  />
                  <Text>DatetimeValue: {valid9.value}</Text>
                </View>
                <Button
                  title="isValid"
                  onPress={() => {
                    if (divRef9.current.isValid()) {
                      setState(true);
                    }
                    console.log(
                      MaskService.isValid('datetime', valid9.value, {
                        format: 'YYYY/MM/DD',
                      }),
                    );
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
      </ScrollView>
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
  scrollView: {
    width: '100%',
    height: '100%',
  },
});
