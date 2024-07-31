import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';
import { Tester, TestSuite, TestCase as _TestCase } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import { MaskedTextInput, MaskedText, mask, unMask } from 'react-native-mask-text';

export function MaskTextDemo() {
  const [maskedValue, setMaskedValue] = useState({
    customInp: '',
    customUnmask: '',
    custom2Inp: '',
    custom2Unmask: '',
    dateInp: '',
    dateInp2: '',
    timeInp: '',
    timeInp2: '',
    prefixInp: '',
    prefixUnmask: '',
    prefix2Inp: '',
    prefix2Unmask: '',
    decimalSPInp: '',
    decimalSPUnmask: '',
    decimalSP2Inp: '',
    decimalSP2Unmask: '',
    groupSSInp: '',
    groupSSUnmask: '',
    groupSS2Inp: '',
    groupSS2Unmask: '',
    secGroupInp: '',
    secGroupUnmask: '',
    secGroup2Inp: '',
    secGroup2Unmask: '',
    fraGroupInp: '',
    fraGroupUnmask: '',
    fraGroup2Inp: '',
    fraGroup2Unmask: '',
    suffixInp: '',
    suffixUnmask: '',
    suffix2Inp: '',
    suffix2Unmask: '',
  });

  const maskReg = 'AAA-9999-SSS';
  const maskReg2 = 'AAAA/999';
  const maskRegDate = 'YYYY/DD/MM';
  const maskRegDate2 = 'YYYY-DD-MM';
  const maskRegTime = 'HH:mm:ss';
  const maskRegTime2 = 'HH:mm';

  return (
    <ScrollView style={{ flex: 1, height: '100%', marginBottom: 40 }}>
      <Tester>
        <TestSuite name="MaskText">
          <_TestCase
            itShould="mask('ABC1234', 'AAA-9999') === 'ABC-1234'"
            fn={async ({ expect }) => {
              expect(mask('ABC1234', 'AAA-9999')).to.be.eq('ABC-1234');
            }}
          />
          <_TestCase
            itShould="unMask('ABC-1234') === 'ABC1234'"
            fn={async ({ expect }) => {
              expect(unMask('ABC-1234')).to.be.eq('ABC1234');
            }}
          />

          <TestCase
            itShould={`MaskedTextInput type=custom mask=${maskReg}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    mask={maskReg}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, customInp: `mask: ${text} , unmask: ${rawText}`, customUnmask: rawText });
                      text.length === maskReg.length && setState(true);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText mask={maskReg}>{maskedValue.customUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.customInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=custom mask=${maskReg2}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    mask={maskReg2}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, custom2Inp: `mask: ${text} , unmask: ${rawText}`, custom2Unmask: rawText });
                      text.length === maskReg2.length && setState(true);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText mask={maskReg2}>{maskedValue.custom2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.custom2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=date mask=${maskRegDate}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="date"
                    options={{ dateFormat: maskRegDate }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, dateInp: `mask: ${text} , unmask: ${rawText}` });
                      text.length === maskRegDate.length && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.dateInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=date mask=${maskRegDate2}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="date"
                    options={{ dateFormat: maskRegDate2 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, dateInp2: `mask: ${text} , unmask: ${rawText}` });
                      text.length === maskRegDate2.length && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.dateInp2}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=time mask=${maskRegTime}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="time"
                    options={{ timeFormat: maskRegTime }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, timeInp: `mask: ${text} , unmask: ${rawText}` });
                      text.length === maskRegTime.length && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <View style={styles.sourceText}>
                    <Text>mask{maskedValue.timeInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=time mask=${maskRegTime2}`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="time"
                    options={{ timeFormat: maskRegTime2 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, timeInp2: `mask: ${text} , unmask: ${rawText}` });
                      text.length === maskRegTime2.length && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <View style={styles.sourceText}>
                    <Text>mask{maskedValue.timeInp2}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=currency  prefix: '$'`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ prefix: '$' }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, prefixInp: `mask: ${text} , unmask: ${rawText}`, prefixUnmask: rawText });
                      rawText.length >= 1 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ prefix: '$' }}>{maskedValue.prefixUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.prefixInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=currency  prefix: '￥'`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ prefix: '￥' }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, prefix2Inp: `mask: ${text} , unmask: ${rawText}`, prefix2Unmask: rawText });
                      rawText.length >= 1 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ prefix: '￥' }}>{maskedValue.prefix2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.prefix2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=currency  decimalSeparator: '.', precision: 1`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ decimalSeparator: '.', precision: 1 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, decimalSPInp: `mask: ${text} , unmask: ${rawText}`, decimalSPUnmask: rawText });
                      rawText.length >= 2 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ decimalSeparator: '.', precision: 1 }}>{maskedValue.decimalSPUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.decimalSPInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency decimalSeparator: '_', precision: 2`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ decimalSeparator: '_', precision: 2 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, decimalSP2Inp: `mask: ${text} , unmask: ${rawText}`, decimalSP2Unmask: rawText })
                      rawText.length >= 3 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ decimalSeparator: '_', precision: 2 }}>{maskedValue.decimalSP2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.decimalSP2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=currency groupSeparator: ',', groupSize: 3`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ groupSeparator: ',', groupSize: 3 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, groupSSInp: `mask: ${text} , unmask: ${rawText}`, groupSSUnmask: rawText })
                      rawText.length >= 4 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ groupSeparator: ',', groupSize: 3 }}>{maskedValue.groupSSUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.groupSSInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency groupSeparator: '·', groupSize: 4`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ groupSeparator: '·', groupSize: 4 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, groupSS2Inp: `mask: ${text} , unmask: ${rawText}`, groupSS2Unmask: rawText })
                      rawText.length >= 5 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ groupSeparator: '·', groupSize: 4 }}>{maskedValue.groupSS2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.groupSS2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency groupSeparator: ',', groupSize: 3, secondaryGroupSize: 2`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ groupSeparator: ',', groupSize: 3, secondaryGroupSize: 2 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, secGroupInp: `mask: ${text} , unmask: ${rawText}`, secGroupUnmask: rawText })
                      rawText.length >= 6 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ groupSeparator: ',', groupSize: 3, secondaryGroupSize: 2 }}>{maskedValue.secGroupUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.secGroupInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency groupSeparator: ',', groupSize: 3, secondaryGroupSize: 5`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ groupSeparator: ',', groupSize: 3, secondaryGroupSize: 5 }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, secGroup2Inp: `mask: ${text} , unmask: ${rawText}`, secGroup2Unmask: rawText })
                      rawText.length >= 9 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ groupSeparator: ',', groupSize: 3, secondaryGroupSize: 5 }}>{maskedValue.secGroup2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.secGroup2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />


          <TestCase
            itShould={`type=currency  decimalSeparator: '.', precision: 6, fractionGroupSize: 1, fractionGroupSeparator: '*'`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ decimalSeparator: '.', precision: 6, fractionGroupSize: 1, fractionGroupSeparator: '*' }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, fraGroupInp: `mask: ${text} , unmask: ${rawText}`, fraGroupUnmask: rawText })
                      rawText.length >= 6 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ decimalSeparator: '.', precision: 6, fractionGroupSize: 1, fractionGroupSeparator: '*' }}>{maskedValue.fraGroupUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.fraGroupInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency  decimalSeparator: '.', precision: 6, fractionGroupSize: 2, fractionGroupSeparator: "'"`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ decimalSeparator: '.', precision: 6, fractionGroupSize: 2, fractionGroupSeparator: "'" }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, fraGroup2Inp: `mask: ${text} , unmask: ${rawText}`, fraGroup2Unmask: rawText })
                      rawText.length >= 6 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ decimalSeparator: '.', precision: 6, fractionGroupSize: 2, fractionGroupSeparator: "'" }}>{maskedValue.fraGroup2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.fraGroup2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />

          <TestCase
            itShould={`type=currency  suffix: '#'`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ suffix: '#' }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, suffixInp: `mask: ${text} , unmask: ${rawText}`, suffixUnmask: rawText })
                      rawText.length >= 1 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ suffix: '#' }}>{maskedValue.suffixUnmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.suffixInp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
          <TestCase
            itShould={`type=currency  suffix: '%'`}
            initialState={undefined as any}
            arrange={({ setState }) => {
              return (
                <View>
                  <Text style={styles.typeTitle}>MaskedTextInput:</Text>
                  <MaskedTextInput
                    type="currency"
                    options={{ suffix: '%' }}
                    onChangeText={(text, rawText) => {
                      setMaskedValue({ ...maskedValue, suffix2Inp: `mask: ${text} , unmask: ${rawText}`, suffix2Unmask: rawText })
                      rawText.length >= 1 && setState(true);
                    }}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                  <Text style={styles.typeTitle}>MaskedText:</Text>
                  <MaskedText type="currency" options={{ suffix: '%' }}>{maskedValue.suffix2Unmask}</MaskedText>
                  <View style={styles.sourceText}>
                    <Text>{maskedValue.suffix2Inp}</Text>
                  </View>
                </View>
              );
            }}
            assert={({ expect, state }) => { expect(state).to.be.true }}
          />
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

// TestCase
function TestCase<TState = undefined>({
  itShould,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>['arrange'];
  assert: SmartManualTestCaseProps<TState>['assert'];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 4,
    borderWidth: 1,
  },
  viewbox: {
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#eee',
    fontSize: 30
  },
  typeTitle: {
    fontWeight: 'bold'
  },
  sourceText: {
    opacity: 0.6,
    marginTop: 12
  }
});
