import { generateSecureRandom  } from "react-native-securerandom";
import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

export default function secureRandomDemo(number: number): JSX.Element {
  const [size, setSize] = useState('30');
  const titleText = `Random Test ${number}`;
  const [secureRandom, setSecureRandom] = useState('')
  return (
    <Tester style={{ flex: 1 }}>
      <TestSuite name="securerandom">
        {/* 输入长度 */}
        <TextInput
          style={styles.TextInput}
          value={size}
          onChangeText={s => {
            setSize(s);
          }}></TextInput>
        <TestCase
          itShould="out res"
          tags={['Se_Ra']}
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <ScrollView style={{ height: 60 }}>
                <Text>{secureRandom}</Text>
              </ScrollView>
            );
          }}
          assert={async ({ expect, state }) => {
            expect((state as Buffer).byteLength).to.be.eq(Number(size));
          }}
        />
        <TestCase
          itShould="secure random"
          tags={['Se_Ra']}
          initialState={undefined as any}
          arrange={({ setState }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  generateSecureRandom(Number(size)).then((myRandom:any) => {
                    setSecureRandom(`${JSON.stringify(myRandom?.data)}`)
                  }).catch((err)=>{
                    console.log(err,'err')
                  })
                }}
                style={styles.btn}>
                <Text style={styles.btnText}>Secure Random</Text>
              </TouchableOpacity>
            );
          }}
          assert={async ({ expect, state }) => {
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
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
    backgroundColor: '#fff'
  },
  btn: {
    borderRadius: 6,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'rgb(61, 176, 236)',
  },
  btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 },
});
