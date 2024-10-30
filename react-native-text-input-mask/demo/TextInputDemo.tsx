import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import TextInputMask, {
  mask,
  unmask,
  setMask,
  TextInputMaskProps,
} from 'react-native-text-input-mask';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface OtherControlProps {
  showExtractedValue?: boolean;
  explain?: React.JSX.Element;
}

const BasicTextInputMaskDemo: React.FC<
  TextInputMaskProps & OtherControlProps
> = (props) => {
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
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
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

const TextInputDemo1 = () => {
  const [maskTest, maskValue] = useState('');
  const a = () => {
    mask('+1 ([000]) [000] [00] [00]', '13343468815', true)
      .then((res) => {
        maskValue(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const [unmaskTest, unmaskValue] = useState('');
  const b = () => {
    unmask('+1 ([000]) [000] [00] [00]', '+1 334 346 88 15', true)
      .then((res) => {
        unmaskValue(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const [setmaskTest, setmaskValue] = useState('');
  const c = () => {
    setMask(1, '+1 334 346 88 15', {
      autocomplete: true,
      autoskip: true,
      rightToLeft: true,
    });
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
      <view>
        <View style={styles.container}>
          <Text style={styles.label}>Phone Number:</Text>
          <Button title="mask" onPress={a} />
          <Text style={styles.input}>{maskTest}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Phone Number:</Text>
          <Button title="unmask" onPress={b} />
          <Text style={styles.input}>{unmaskTest}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Phone Number:</Text>
          <Button title="setmask" onPress={c} />
        </View>
      </view>

      <BasicTextInputMaskDemo
        explain={
          <>
            <Text>
              customNotations: (character: s , characterSet : $@ , isOptional:
              true)
            </Text>
          </>
        }
        mask={'[ss] [9999]'}
        customNotations={[
          { character: 's', characterSet: '$@&', isOptional: true },
        ]}
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        explain={
          <>
            <Text>
              customNotations: (character: s , characterSet : $@ , isOptional:
              false)
            </Text>
          </>
        }
        mask={'[ss] [9999]'}
        customNotations={[
          { character: 's', characterSet: '$@&', isOptional: false },
        ]}
      ></BasicTextInputMaskDemo>
      {/* Affinity calculation strategy */}

      <BasicTextInputMaskDemo
        showExtractedValue={true}
        mask={'[00].[00]'}
        affinityCalculationStrategy="WHOLE_STRING"
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        affineFormats={['8 [000] [000]']}
        showExtractedValue={true}
        mask={'+7 [000] [000]'}
        affinityCalculationStrategy="PREFIX"
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        affineFormats={['[00]-[000]', '[00]-[00000]']}
        showExtractedValue={true}
        mask={'[00]-[0]'}
        affinityCalculationStrategy="CAPACITY"
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        affineFormats={['[00]-[000]', '[00]-[00000]']}
        showExtractedValue={true}
        mask={'[00]-[0]'}
        affinityCalculationStrategy="EXTRACTED_VALUE_CAPACITY"
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        autoskip={true}
        mask={'+86 [aaaa].[aaa]'}
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        autoskip={false}
        mask={'+86 [aaaa].[aaa]'}
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        mask={'+86 [000] [0000] [0000]'}
        rightToLeft={true}
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        showExtractedValue={true}
        mask={'+86 [000] [0000] [0000]'}
        rightToLeft={false}
      ></BasicTextInputMaskDemo>

      <BasicTextInputMaskDemo
        showExtractedValue={true}
        affineFormats={['+7 ([000]) [000] [00] [00]#[900]']}
        mask={'+7 ([000]) [000] [00] [00]'}
        rightToLeft={false}
      ></BasicTextInputMaskDemo>
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
    fontWeight: '600',
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

export default TextInputDemo1;
