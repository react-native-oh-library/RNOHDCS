import React, {useState} from 'react';
import QRCode from 'react-native-qrcode';
import {StyleSheet, View, TextInput, Button, ScrollView} from 'react-native';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
export const QrCodeExamle = () => {
  const [text, setText] = useState('');
  const [QRCodeValue, setQRCodeValue] = useState<any>(null);
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState('black');
  const [fgColor, setFgColor] = useState('white');
  const showQRCode = () => {
    setQRCodeValue(text);
  };
  const reset = () => {
    setQRCodeValue(null);
    setSize(200);
    setBgColor('black');
    setFgColor('white');
    setText('');
  };
  return (
    <Tester style={{flex: 1}}>
      <ScrollView>
        <TestSuite name="QRCode">
          <TestCase
            itShould="Enter the content and click Generate QR Code.(value)"
            tags={['C_API']}>
            <View style={styles.container}>
              <TextInput
                placeholder="请输入要生成二维码的文本"
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
              />
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Button title="点击生成二维码" onPress={showQRCode} />
                <Button title="重置" onPress={reset} />
              </View>

              {QRCodeValue && (
                <QRCode
                  value={QRCodeValue}
                  size={size}
                  bgColor={bgColor}
                  fgColor={fgColor}
                />
              )}
            </View>
          </TestCase>
          <TestCase
            itShould="Size of the QR code (size:400,  default:128)"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                size={300}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="Size of the QR code (size:200, default:128)"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                size={200}
              />
            </View>
          </TestCase>
          <TestCase
            itShould="bgColor of the QR code (bgColor:black, default:black)"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                bgColor="black"
              />
            </View>
          </TestCase>
          <TestCase
            itShould="bgColor of the QR code (bgColor:red, default:black)"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                bgColor="red"
              />
            </View>
          </TestCase>
          <TestCase
            itShould="fgColor of the QR code (fgColor:red, default:white )"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                fgColor="red"
              />
            </View>
          </TestCase>
          <TestCase
            itShould="fgColor of the QR code (fgColor:blue, default:white )"
            tags={['C_API']}>
            <View style={styles.container}>
              <QRCode
                value="hello~~~~"
                fgColor="blue"
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
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
