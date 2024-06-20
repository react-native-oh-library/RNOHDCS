import React, {useState} from 'react';
import QRCode from 'react-native-qrcode';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
export const QrCodeExamle = () => {
  const [text, setText] = useState('');
  const [QRCodeValue, setQRCodeValue] = useState<any>(null);
  const showQRCode = () => {
    setQRCodeValue(text);
  };
  const reset = () => {
    setQRCodeValue(null);
    setText('');
  };
  return (
    <Tester style={{flex: 1}}>
      <TestSuite name="QRCode">
        <TestCase itShould="点击生成二维码" tags={['C_API']}>
          <View style={styles.container}>
            <TextInput
              placeholder="请输入要生成二维码的文本"
              style={styles.input}
              onChangeText={text => setText(text)}
              value={text}
            />
            <View style={{flexDirection: 'row'}}>
              <Button title="点击生成二维码" onPress={showQRCode} />
              <Button title="重置" onPress={reset} />
            </View>

            {QRCodeValue && (
              <QRCode
                value={QRCodeValue}
                size={200}
                bgColor="black"
                fgColor="white"
              />
            )}
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },

  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
});
