import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function CodeScanTorchExample() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  const [codes, setCodes] = useState('暂未扫描');
  const codeScanner = useCodeScanner({
    codeTypes: [
      'code-128',
      'code-39',
      'code-93',
      'codabar',
      'ean-13',
      'ean-8',
      'itf',
      'upc-e',
      'upc-a',
      'qr',
      'pdf-417',
      'aztec',
      'data-matrix',
    ],
    onCodeScanned: (codes: string | any[], frame: any) => {
      if (codes.length) {
        setIsActive(false);
      }
      let codeStr = JSON.stringify(codes[0].value);
      setCodes(codeStr);
    },
  });

  const [isActive, setIsActive] = useState(true);
  const [torch, setTorch] = useState<'off' | 'on'>('off');
  const [torchTxt, setTorchTxt] = useState(torch);
  const [errorStr, setErrorStr] = useState<string>('');

  useEffect(() => {
    setTorchTxt(torch);
  }, [torch]);

  const changeIsActive = () => {
    setIsActive(!isActive);
  };

  const changeSetTorch = () => {
    setTorch(torch === 'off' ? 'on' : 'off');
  };

  return (
    <Tester>
      <TestSuite name="torch">
        <TestCase itShould={`手电筒： ${torch === 'on' ? '开启' : '关闭'}`}>
          <View>
            <Text style={styles.text}>codes:{codes}</Text>
            <Text style={styles.text}>err:{errorStr}</Text>
          </View>
          <Camera
            style={styles.cameraPreview}
            ref={camera}
            codeScanner={codeScanner}
            device={device}
            isActive={isActive}
            preview
            torch={torch}
            format={format}
            onError={(e: any) => {
              setErrorStr(JSON.stringify(e));
            }}
          />
          <View style={styles.actionBtn}>
            <Button
              title={`changeSetTorch:${torchTxt}`}
              onPress={changeSetTorch}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  cameraPreview: {
    width: 300,
    height: 400,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
