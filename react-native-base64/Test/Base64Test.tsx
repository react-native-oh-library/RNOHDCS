import React, { useState } from 'react';
import base64 from 'react-native-base64';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

export function Base64Test() {
  const [word, setWord] = useState('react native');
  const [encodeWord, setEncodeWord] = useState('');
  const [byteArrayWord, setByteArrayWord] = useState('');
  const [decodeWord, setdecodeWord] = useState('');
  const [Unit8ArrayWord, setUnit8ArrayWord] = useState('');
  const [decodeUnit8ArrayWord, setdecodeUnit8ArrayWord] = useState('');
  const byte = Uint8Array.from(word.split(''), w => w.charCodeAt(0));

  const AddBase64Decode = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const decrypt = () => {
      const decodeWord = base64.decode(encodeWord);
      setdecodeWord(decodeWord);
      props.setState(decodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>解码值：{decodeWord}</Text>
        <Button title="解码" onPress={decrypt} />
      </View>
    );
  };

  const AddBase64EncodeUnit8Array = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    setByteArrayWord(byte.toString());
    const encrypt = () => {
      const encodeWord = base64.encodeFromByteArray(Uint8Array.from(word.split(''), w => w.charCodeAt(0)));
      setUnit8ArrayWord(encodeWord);
      props.setState(encodeWord);
    };

    return (
      <View style={{ height: 90 }}>
        <Text style={{ borderWidth: 1 }}>Unit8Array字符：{byteArrayWord}</Text>
        <Text>编码值：{Unit8ArrayWord}</Text>
        <Button title="Unit8Array编码" onPress={encrypt} />
      </View>
    );
  };

  const AddBase64DecodeUnit8Array = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const decrypt = () => {
      const decodeWord = base64.decode(Unit8ArrayWord);
      setdecodeUnit8ArrayWord(decodeWord);
      props.setState(decodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>解码值：{decodeUnit8ArrayWord}</Text>
        <Button title="Unit8Array解码" onPress={decrypt} />
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="Test encoding word."
            initialState={''}
            arrange={({ setState }) => {
              const encrypt = () => {
                const encodeWord = base64.encode(word);
                setEncodeWord(encodeWord);
                setState(encodeWord);
              };

              return (
                <View style={{ height: 100 }}>
                  <TextInput
                    key="textinput2"
                    style={styles.TextInput}
                    onChangeText={(newValue) => {
                      setWord(newValue);
                    }}
                    value={word}
                  ></TextInput>
                  <Text>编码值：{encodeWord}</Text>
                  <Button title="编码" onPress={encrypt} />
                </View>
              );
            }}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test decoding word."
            initialState={''}
            arrange={({ setState }) => <AddBase64Decode setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).equal(word);
            }}
          />
          <TestCase
            itShould="Test encoding the word of Uint8Array."
            initialState={''}
            arrange={({ setState }) => <AddBase64EncodeUnit8Array setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test decoding the word of Uint8Array."
            initialState={''}
            arrange={({ setState }) => <AddBase64DecodeUnit8Array setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).equal(word);
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  TextInput: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%' },
});