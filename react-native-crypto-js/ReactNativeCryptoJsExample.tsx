import React, { useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { AES, enc,  MD5, HmacMD5} from "react-native-crypto-js";
// import CryptoJS from "rn-crypto-js";
import { Tester, TestCase } from '@rnoh/testerino';

export default function CryptoJSTest() {
  const [cryptText, setCryptText] = useState('testAES');
  const [decryptText, setDecryptCryptText] = useState('');
  const [cryptText1, setCryptText1] = useState('testMD5');
  const [cryptText2, setCryptText2] = useState('testHmacMD5');

  const AddAESEncryptTest = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      let bytes = AES.encrypt(cryptText, 'mySecretKey').toString();
      setCryptText(bytes);
      props.setState(bytes);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{cryptText}</Text>
        <Button title="AES加密" onPress={encrypt} />
      </View>
    );
  };

  const AddAESDecryptTest = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const decrypt = () => {
      let bytes = AES.decrypt(cryptText, 'mySecretKey').toString(enc.Utf8);
      setDecryptCryptText(bytes);
      props.setState(bytes);
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
      let bytes = MD5(cryptText1).toString();
      setCryptText1(bytes);
      props.setState(bytes);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{cryptText1}</Text>
        <Button title="MD5加密" onPress={encrypt} />
      </View>
    );
  };
  const AddHmacMD5DecryptTest = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const encrypt = () => {
      let bytes = HmacMD5(cryptText2, 'mySecretKey').toString();
      setCryptText2(bytes);
      props.setState(bytes);
    };

    return (
      <View style={{ height: 50 }}>
        <Text>{cryptText2}</Text>
        <Button title="HmacMD5加密" onPress={encrypt} />
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="Test using the AES algorithm to encrypt."
            initialState={''}
            arrange={({ setState }) => <AddAESEncryptTest setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test using the AES algorithm to decrypt."
            initialState={''}
            arrange={({ setState }) => <AddAESDecryptTest setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).equal('testAES');
            }}
          />
          <TestCase
            itShould="Test using the MD5 algorithm to encrypt."
            initialState={''}
            arrange={({ setState }) => <AddMD5DecryptTest setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
          <TestCase
            itShould="Test using the HmacMD5 algorithm to encrypt."  // 该库使用HmacMD5加密会报错，可以使用rn-crypto-js
            initialState={''}
            arrange={({ setState }) => <AddHmacMD5DecryptTest setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  );
}