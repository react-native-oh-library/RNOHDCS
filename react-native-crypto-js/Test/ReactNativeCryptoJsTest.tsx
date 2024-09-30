import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { AES, enc, MD5, HmacMD5 } from "react-native-crypto-js";
import { Tester, TestCase } from '@rnoh/testerino';

export function CryptoJSTest() {
  const [word, setWord] = useState('');
  const [word1, setWord1] = useState('');
  const [secret, setSecret] = useState('');
  const [cryptText, setCryptText] = useState('');
  const [decryptText, setDecryptCryptText] = useState('');
  const [cryptText1, setCryptText1] = useState('');

  const AddAESDecryptTest = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const decrypt = () => {
      if (word && secret) {
        let bytes = AES.decrypt(cryptText, secret).toString(enc.Utf8);
        setDecryptCryptText(bytes);
        props.setState(bytes);
      }
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{decryptText}</Text>
        <Button title="AES解密" onPress={decrypt} />
      </View>
    );
  };

  const AddMD5DecryptTest = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      if (word1) {
        let bytes = MD5(word1).toString();
        setCryptText1(bytes);
        props.setState(bytes);
      }
    };

    return (
      <View style={{ height: 70 }}>
        <TextInput
          placeholder="请输入待加密字符，如：react native "
          style={styles.TextInput}
          onChangeText={(newValue) => {
            setWord1(newValue);
          }}
          value={word1}
        ></TextInput>
        <Text>待加密字符：{word1}</Text>
        <Text numberOfLines={2}>加密后：{cryptText1}</Text>
        <Button title="MD5加密" onPress={encrypt} />
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="Test using the AES algorithm to encrypt string or object."
            initialState={''}
            arrange={({ setState }) => {
              const encrypt = () => {
                if (word && secret) {
                  const encodeWord = AES.encrypt(word, secret).toString();
                  setCryptText(encodeWord);
                  setState(encodeWord);
                }
              };

              return (
                <View style={{ height: 155 }}>
                  <TextInput
                    placeholder="请输入待加密字符，如：{lang: 'Javascript'} 或者 react native "
                    style={styles.TextInput}
                    onChangeText={(newValue) => {
                      setWord(newValue);
                    }}
                    value={word}
                  ></TextInput>
                  <TextInput
                    placeholder='请输入密钥，如：mySecret 或者 Secret'
                    style={styles.TextInput}
                    onChangeText={(newValue) => {
                      setSecret(newValue);
                    }}
                    value={secret}
                  ></TextInput>
                  <TextInput
                    placeholder='加密后'
                    style={styles.TextInput}
                    value={cryptText}
                  ></TextInput>
                  <Button title="AES加密" onPress={encrypt} />
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test using the AES algorithm to decrypt string or object."
            initialState={''}
            arrange={({ setState }) => <AddAESDecryptTest setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).equal(word);
            }}
          />
          <TestCase
            itShould="Test using the MD5 algorithm to encrypt."
            initialState={''}
            arrange={({ setState }) => {
              const encrypt = () => {
                if (word1) {
                  let bytes = MD5(word1).toString();
                  setCryptText1(bytes);
                  setState(bytes);
                }
              };

              return (
                <View style={{ height: 110 }}>
                  <TextInput
                    placeholder="请输入待加密字符，如：react native "
                    style={styles.TextInput}
                    onChangeText={(newValue) => {
                      setWord1(newValue);
                    }}
                    value={word1}
                  ></TextInput>
                  <Text>待加密字符：{word1}</Text>
                  <Text numberOfLines={2}>加密后：{cryptText1}</Text>
                  <Button title="MD5加密" onPress={encrypt} />
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%' },
});