import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {randomBytes} from 'react-native-randombytes';
import {
   Tester,
   TestSuite,
   TestCase
  } from '@rnoh/testerino';

export default function randomBytesDemo(): JSX.Element {
  const [bytesString, setBytesString] = useState('');
  const [size, setSize] = useState('30');

  return (
    <Tester style={{flex: 1, backgroundColor: '#fff'}}>
      <TestSuite name="randomBytes">
        <Text>{bytesString}</Text>

        <TextInput
          style={styles.TextInput}
          value={size}
          onChangeText={s => {
            setSize(s);
          }}></TextInput>

        {/* 通过传入的arrange, 手动触发断言 */}
        <TestCase
          itShould="native random"
          tags={['C_API']}
          initialState={undefined as any}
          arrange={({setState}) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  randomBytes(Number(size), (err: any, bytes: any) => {
                    setBytesString(JSON.stringify(bytes));
                    setState(bytes);
                    console.log(err);
                  });
                }}
                style={styles.btn}>
                <Text style={styles.btnText}> Native RandomBytes </Text>
              </TouchableOpacity>
            );
          }}
          assert={async ({expect, state}) => {
            expect((state as Buffer).byteLength).to.be.eq(Number(size));
          }}
        />

        <TestCase
          itShould="js random"
          tags={['C_API']}
          initialState={null as any}
          arrange={({setState}) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  const bytes: Buffer = randomBytes(Number(size));
                  setBytesString(JSON.stringify(bytes));
                  setState(bytes)
                }}
                style={styles.btn}>
                <Text style={styles.btnText}> Js RandomBytes </Text>
              </TouchableOpacity>
            );
          }}
          assert={async ({expect, state}) => {
            expect((state as Buffer).byteLength).to.be.eq(Number(size));
          }}
        />

      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },
  btn: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
  },
  btnText: {fontWeight: 'bold', color: '#fff', fontSize: 20},
});
