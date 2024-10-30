import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, findNodeHandle } from 'react-native';
import TextInputMask, {
  mask,
  unmask,
  setMask,
  TextInputMaskProps,
} from 'react-native-text-input-mask';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

interface OtherControlProps {
  showExtractedValue?: boolean;
  explain?: React.JSX.Element;
}

const BasicTextInputMaskDemo: React.FC<
  TextInputMaskProps & OtherControlProps
> = props => {
  const [formatedValue, setFormatedValue] = useState('');
  const [extractedValue, setExtractedValue] = useState('');

  const callBack = (formatted: string, extracted: string | undefined) => {
    setFormatedValue(formatted);
    if (extracted) {
      setExtractedValue(extracted);
    }else{
      setExtractedValue("");
    }
    if (props.onChangeText) {
      props.onChangeText(formatted, extracted);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 600, color: '#546e9e' }}>
          Mask:{' '}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>{props.mask}</Text>
      </View>

      {props.explain && props.explain}
      <TextInputMask
        rightToLeft={false}
        onChangeText={callBack}
        affinityCalculationStrategy="PREFIX"
        style={styles.input}
        autoComplete="nickname"
        customNotations={[
          { character: 's', characterSet: '$@', isOptional: false },
        ]}
        mask={'[ss] [9999]'}
        {...props}
      />
      <Text style={styles.input}>{formatedValue}</Text>
      {props.showExtractedValue && (
        <Text style={styles.input}>{extractedValue}</Text>
      )}
    </View>
  );
};

const TextInputDemo = () => {
  const textInputRef = useRef<TextInput>(null);
  const [maskTest, maskValue] = useState('');
  const a = () => {
    mask('+1 ([000]) [000] [00] [00]', '13343468815', true)
      .then(res => {
        maskValue(res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const [unmaskTest, unmaskValue] = useState('');
  const b = () => {
    unmask('+1 ([000]) [000] [00] [00]', '13343468815', true)
      .then(res => {
        unmaskValue(res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const [setmaskTest, setmaskValue] = useState('');
  const c = () => {
    const nodeId = findNodeHandle(textInputRef.current);
    if (nodeId) {
      setMask(nodeId, '+1 334 346 88 15', {
        autocomplete: true,
        autoskip: true,
        rightToLeft: true,
      });
    }

  };
  const [onChangeTextTest_formatted, setonChangeTextValue_formatted] =
    useState('');
  const [onChangeTextTest_extracted, setonChangeTextValue_extracted] =
    useState('');
  const dd = (formatted: string, extracted: string | undefined) => {
    console.log('formatted', formatted);
    setonChangeTextValue_formatted(formatted);
    console.log('extracted', extracted);
    if (extracted) {
      setonChangeTextValue_extracted(extracted);
    }
  };

  const maskList: {
    label: string;
    mask: string;
    maskValue: string;
    result: string;
  }[] = [
      {
        label: 'Phone numbers',
        mask: '+86 ([000]) [0000] [0000]',
        maskValue: '18271959655',
        result: '+86 (182) 7195 9655',
      },
      {
        label: 'Dates',
        mask: '[00]{.}[00]{.}[9900]',
        maskValue: '10242024',
        result: '10.24.2024',
      },
      {
        label: 'Serial numbers',
        mask: '[AA]-[00000099]',
        maskValue: 'CH12345678',
        result: 'CH-12345678',
      },
      {
        label: 'IPv4',
        mask: '[099]{.}[099]{.}[099]{.}[099]',
        maskValue: '19216811',
        result: '192.168.11',
      },
    ];

  const [mList, setMList] = useState(maskList);

  return (
    <ScrollView>
      <Tester style={{ marginBottom: 400 }}>
        <TestSuite name="Mask">
          {mList.map((m, index) => (

            <TestCase key={m.label}
              itShould={'mask: ' + m.label}
              tags={['C_API']}
              initialState={''}
              arrange={({ setState }) => {
                return (
                  <View style={styles.container} key={m.label}>
                    <View
                      style={styles.flexRow}>
                      <Text
                        style={styles.textSt}>
                        Mask:{' '}
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        {m.mask}
                      </Text>
                    </View>
                    <View
                      style={styles.flexRow}>
                      <Text
                        style={styles.textSt}>
                        MaskValue:{' '}
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        {m.maskValue}
                      </Text>
                    </View>
                    <Button
                      title="mask"
                      onPress={() => {
                        mask(m.mask, m.maskValue, true)
                          .then(res => {
                            console.log(res);
                            setState(res);
                          })
                          .catch(err => {
                            console.log('error', err);
                          });
                      }}
                    />
                    <Text style={styles.input}>{m.result}</Text>
                  </View>
                );
              }}
              assert={({ expect, state }) => {
                expect(state).to.be.eq(m.result);
              }}></TestCase>

          ))}
          <TestCase itShould="mask: ">
            <View style={styles.container}>
              <Text style={styles.label}>Phone Number:</Text>
              <Button title="mask" onPress={a} />
              <Text style={styles.input}>{maskTest}</Text>
            </View>
          </TestCase>

          <TestCase itShould="unmask: ">
            <View style={styles.container}>
              <Text style={styles.label}>Phone Number:</Text>
              <Button title="unmask" onPress={b} />
              <Text style={styles.input}>{unmaskTest}</Text>
            </View>
          </TestCase>

          <TestCase itShould="setmask: ">
            <View style={styles.container}>
              <Text style={styles.label}>Phone Number:</Text>
              <Button title="setmask" onPress={c} />
              <TextInput style={{ width: "100%", height: "50", borderColor: "black", borderWidth: 1 }} ref={textInputRef}></TextInput>
            </View>
          </TestCase>
        </TestSuite>
        <TestSuite name="TextInputMask Component">
          <TestSuite name="customNotations(自定义mask规则)">
            <TestCase itShould="isOptional: true" key={'[ss] [9999] true'}>
              <BasicTextInputMaskDemo
                explain={
                  <>
                    <Text>
                      customNotations: (character: s , characterSet : $@& ,
                      isOptional: true)
                    </Text>
                  </>
                }
                mask={'[ss] [9999]'}
                customNotations={[
                  { character: 's', characterSet: '$@&', isOptional: true },
                ]}></BasicTextInputMaskDemo>
            </TestCase>

            <TestCase itShould="isOptional: false" key={'[ss] [9999] false'}>
              <BasicTextInputMaskDemo
                explain={
                  <>
                    <Text>
                      customNotations: (character: s , characterSet : $@& ,
                      isOptional: false)
                    </Text>
                  </>
                }
                mask={'[ss] [9999]'}
                customNotations={[
                  { character: 's', characterSet: '$@&', isOptional: false },
                ]}></BasicTextInputMaskDemo>
            </TestCase>

            <TestSuite name="rightToLeft ( 是否从右往左mask )">
              <TestCase itShould="rightToLeft: true">
                <BasicTextInputMaskDemo
                  mask={'+86 [000] [0000] [0000]'}
                  rightToLeft={true}></BasicTextInputMaskDemo>
              </TestCase>

              <TestCase itShould="rightToLeft: false">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'+86 [000] [0000] [0000]'}
                  rightToLeft={false}></BasicTextInputMaskDemo>
              </TestCase>
            </TestSuite>
            <TestSuite name="affineFormats">
              <TestCase itShould="mask +7 ([000]) [000] [00] [00] affineFormats +7 ([000]) [000] [00] [00]#[900]">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  affineFormats={["+7 ([000]) [000] [00] [00]#[900]"]}
                  mask={'+7 ([000]) [000] [00] [00]'}
                ></BasicTextInputMaskDemo>
              </TestCase>
            </TestSuite>
            <TestSuite name='Affinity calculation strategy'>
              {/* Affinity calculation strategy */}

              <TestCase itShould="strategy WHOLE_STRING">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'[00].[00]'}
                  affinityCalculationStrategy='WHOLE_STRING'
                ></BasicTextInputMaskDemo>
              </TestCase>
              <TestCase itShould=" strategy PREFIX +7 [000] [000] affineFormats 8 [000] [000]">
                <BasicTextInputMaskDemo
                 affineFormats={["8 [000] [000]"]}
                  showExtractedValue={true}
                  mask={'+7 [000] [000]'}
                  affinityCalculationStrategy='PREFIX'
                ></BasicTextInputMaskDemo>
              </TestCase>
              {/* <TestCase itShould=" strategy PREFIX 8 [000] [000]">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'8 [000] [000]'}
                  affinityCalculationStrategy='PREFIX'
                ></BasicTextInputMaskDemo>
              </TestCase> */}

              <TestCase itShould="strategy CAPACITY mask [00]-[0] affineFormats [00]-[000] / [00]-[00000]">
                <BasicTextInputMaskDemo
                  affineFormats={["[00]-[000]","[00]-[00000]"]}
                  showExtractedValue={true}
                  mask={'[00]-[0]'}
                  affinityCalculationStrategy='CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase>

              {/* <TestCase itShould="strategy CAPACITY">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'[00]-[000]'}
                  affinityCalculationStrategy='CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase>
              <TestCase itShould="strategy CAPACITY">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'[00]-[00000]'}
                  affinityCalculationStrategy='CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase> */}


              <TestCase itShould="strategy EXTRACTED_VALUE_CAPACITY mask [00]-[0] affineFormats  [00]-[000] / [00]-[00000]">
                <BasicTextInputMaskDemo
                affineFormats={["[00]-[000]","[00]-[00000]"]}
                  showExtractedValue={true}
                  mask={'[00]-[0]'}
                  affinityCalculationStrategy='EXTRACTED_VALUE_CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase>

              {/* <TestCase itShould="strategy EXTRACTED_VALUE_CAPACITY">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'[00]-[000]'}
                  affinityCalculationStrategy='EXTRACTED_VALUE_CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase>
              <TestCase itShould="strategy EXTRACTED_VALUE_CAPACITY">
                <BasicTextInputMaskDemo
                  showExtractedValue={true}
                  mask={'[00]-[00000]'}
                  affinityCalculationStrategy='EXTRACTED_VALUE_CAPACITY'
                ></BasicTextInputMaskDemo>
              </TestCase> */}
            </TestSuite>

            <TestSuite name='autoskip'>
              <TestCase itShould="autoskip: true">
                <BasicTextInputMaskDemo
                  autoskip={true}
                  mask={'+86 [aaaa].[aaa]'}></BasicTextInputMaskDemo>
              </TestCase>
              <TestCase itShould="autoskip: false">
                <BasicTextInputMaskDemo
                  autoskip={false}
                  mask={'+86 [aaaa].[aaa]'}></BasicTextInputMaskDemo>
              </TestCase>
            </TestSuite>
            <TestSuite name="autoComplete (是否自动补充） ">
              <TestCase itShould="autoComplete: true">
                <BasicTextInputMaskDemo
                  autocomplete={true}
                  mask={'+86 [aaaa].[aaa]'}></BasicTextInputMaskDemo>
              </TestCase>

              <TestCase itShould="autoComplete: false">
                <BasicTextInputMaskDemo
                  autocomplete={false}
                  mask={'+86 [aaaa].[aaa]'}></BasicTextInputMaskDemo>
              </TestCase>
            </TestSuite>
          </TestSuite>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSt: {
    fontSize: 18,
    fontWeight: 600,
    color: '#546e9e',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,

    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default TextInputDemo;
