import React, { useState } from 'react';
import base64 from 'react-native-base64';
import {
  ScrollView,
  Text,
  View,
  Button
} from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

export default function Base64Test() {
  const [word, setWord] = useState('react native');
  const [decodeWord, setdecodeWord] = useState('');
  const [testWord, setTestWord] = useState('react native');
  const [Unit8ArrayWord, setUnit8ArrayWord] = useState('');
  const [decodeUnit8ArrayWord, setdecodeUnit8ArrayWord] = useState('');

  const AddBase64Encode = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      const encodeWord = base64.encode(word);
      setWord(encodeWord);
      props.setState(encodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{word}</Text>
        <Button title="编码" onPress={encrypt} />
      </View>
    );
  };

  const AddBase64Decode = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      const decodeWord = base64.decode(word);
      setdecodeWord(decodeWord);
      props.setState(decodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{decodeWord}</Text>
        <Button title="解码" onPress={encrypt} />
      </View>
    );
  };

  const AddBase64EncodeUnit8Array = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      const byteArrayWord = Uint8Array.from(testWord.split(''), w => w.charCodeAt(0)); // 将字符串转为Uint8Array格式
      const encodeWord = base64.encodeFromByteArray(byteArrayWord);
      setUnit8ArrayWord(encodeWord);
      props.setState(encodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{Unit8ArrayWord}</Text>
        <Button title="Unit8Array编码" onPress={encrypt} />
      </View>
    );
  };

  const AddBase64DecodeUnit8Array = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      const decodeWord = base64.decode(Unit8ArrayWord);
      setdecodeUnit8ArrayWord(decodeWord);
      props.setState(decodeWord);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{decodeUnit8ArrayWord}</Text>
        <Button title="Unit8Array解码" onPress={encrypt} />
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
            arrange={({ setState }) => <AddBase64Encode setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test decoding word."
            initialState={''}
            arrange={({ setState }) => <AddBase64Decode setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).equal('react native');
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
              expect(state).equal('react native');
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}