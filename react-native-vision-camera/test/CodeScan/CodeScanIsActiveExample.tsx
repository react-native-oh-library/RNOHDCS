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

export function CodeScanIsActiveExample() {
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
    onCodeScanned: (codes: string | any[]) => {
      if (codes.length) {
        setIsActive(false);
      }
      let codeStr = JSON.stringify(codes[0].value);
      setCodes(codeStr);
    },
  });

  const [isActive, setIsActive] = useState(true);
  const [errorStr, setErrorStr] = useState<string>('');

  const changeIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Tester>
      <TestSuite name="isActive：激活/禁用">
        <TestCase itShould={`当前状态:${isActive ? '启用' : '禁用'}`}>
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
            resizeMode={'cover'}
            format={format}
            onError={(e: any) => {
              setErrorStr(JSON.stringify(e));
            }}
          />
          <View style={styles.actionBtn}>
            <Button
              title={`changeIsActive:${isActive}`}
              onPress={changeIsActive}
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
