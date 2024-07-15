import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import PhoneInput from 'react-native-phone-number-input';

export const PINMethodsDemo = () => {
  const [value, setValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const phoneInput1 = useRef<PhoneInput>(null);
  const phoneInput2 = useRef<PhoneInput>(null);
  const phoneInput3 = useRef<PhoneInput>(null);
  const phoneInput4 = useRef<PhoneInput>(null);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ScrollView style={styles.containers}>
        <Tester style={{width: '100%', height: 800}}>
          <TestSuite name="测试接口">
            <TestCase
              tags={['C_API']}
              itShould="测试getCountryCode接口,获取国家代码"
              initialState={false}
              arrange={({setState, reset}) => (
                <>
                  <PhoneInput
                    ref={phoneInput1}
                    defaultValue={value}
                    disableArrowIcon={true}
                    defaultCode="AX"
                    layout="first"
                    onChangeText={text => {
                      setValue(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValue(text);
                      setCountryCode(
                        phoneInput1.current?.getCountryCode() || '',
                      );
                    }}
                    countryPickerProps={{withAlphaFilter: true}}
                    disabled={disabled}
                    withDarkTheme={false}
                    withShadow={false}
                    autoFocus={true}
                    renderDropdownImage={<h1>Hello, world!</h1>}
                  />
                  <View style={styles.view}>
                    <Button
                      title="测试getCountryCode接口,获取国家代码"
                      onPress={() => {
                        if (
                          phoneInput1.current?.getCountryCode() == countryCode
                        ) {
                          setState(true);
                        }
                      }}
                    />
                    <Button title="reset" onPress={reset} />
                  </View>
                </>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              tags={['C_API']}
              itShould="测试getCallingCode接口，获取国家电话区号，如+86"
              initialState={false}
              arrange={({setState, reset}) => (
                <>
                  <PhoneInput
                    ref={phoneInput2}
                    defaultValue={value}
                    disableArrowIcon={true}
                    defaultCode="AX"
                    layout="first"
                    onChangeText={text => {
                      setValue(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValue(text);
                      setCountryCode(
                        phoneInput2.current?.getCountryCode() || '',
                      );
                    }}
                    countryPickerProps={{withAlphaFilter: true}}
                    disabled={disabled}
                    withDarkTheme={false}
                    withShadow={false}
                    autoFocus={true}
                    renderDropdownImage={<h1>Hello, world!</h1>}
                  />
                  <View style={styles.view}>
                    <Button
                      title="测试getCallingCode接口，获取国家电话区号，如+86"
                      onPress={() => {
                        if (
                          phoneInput2.current?.getCallingCode() ==
                          formattedValue.slice(
                            1,
                            formattedValue.length - value.length,
                          )
                        ) {
                          setState(true);
                        }
                      }}
                    />
                    <Button title="reset" onPress={reset} />
                  </View>
                </>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              tags={['C_API']}
              itShould="测试getNumberAfterPossiblyEliminatingZero接口，获取输入的电话号码和加了区号的电话号码"
              initialState={false}
              arrange={({setState, reset}) => (
                <>
                  <PhoneInput
                    ref={phoneInput3}
                    defaultValue={value}
                    disableArrowIcon={true}
                    defaultCode="AX"
                    layout="first"
                    onChangeText={text => {
                      setValue(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValue(text);
                      setCountryCode(
                        phoneInput3.current?.getCountryCode() || '',
                      );
                    }}
                    countryPickerProps={{withAlphaFilter: true}}
                    disabled={disabled}
                    withDarkTheme={false}
                    withShadow={false}
                    autoFocus={true}
                    renderDropdownImage={<h1>Hello, world!</h1>}
                  />
                  <View style={styles.view}>
                    <View style={{width: '60%'}}>
                      <Button
                        title="调用getNumberAfterPossiblyEliminatingZero接口"
                        onPress={() => {
                          let res =
                            phoneInput3.current?.getNumberAfterPossiblyEliminatingZero();
                          console.log(res);
                          if (
                            phoneInput3.current?.getNumberAfterPossiblyEliminatingZero()
                              .number == value &&
                            phoneInput3.current?.getNumberAfterPossiblyEliminatingZero()
                              .formattedNumber == formattedValue
                          ) {
                            setState(true);
                          }
                        }}
                      />
                    </View>
                    <Button title="reset" onPress={reset} />
                  </View>
                </>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
            <TestCase
              tags={['C_API']}
              itShould="测试isValidNumber接口，校验生成的电话号码"
              initialState={false}
              arrange={({setState, reset}) => (
                <>
                  <PhoneInput
                    ref={phoneInput4}
                    defaultValue={value}
                    disableArrowIcon={true}
                    defaultCode="AX"
                    layout="first"
                    onChangeText={text => {
                      setValue(text);
                    }}
                    onChangeFormattedText={text => {
                      setFormattedValue(text);
                      setCountryCode(
                        phoneInput4.current?.getCountryCode() || '',
                      );
                    }}
                    countryPickerProps={{withAlphaFilter: true}}
                    disabled={disabled}
                    withDarkTheme={false}
                    withShadow={false}
                    autoFocus={true}
                    renderDropdownImage={<h1>Hello, world!</h1>}
                  />
                  <View style={styles.view}>
                    <Button
                      title="调用isValidNumber接口"
                      onPress={() => {                    
                        if (
                          phoneInput4.current?.isValidNumber(value)
                        ) {
                          setState(true);
                        }
                      }}
                    />
                    <Button title="reset" onPress={reset} />
                  </View>
                </>
              )}
              assert={({state, expect}) => {
                expect(state).to.be.true;
              }}
            />
          </TestSuite>
        </Tester>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    width: '100%',
    backgroundColor: '#333',
    flex: 1,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
