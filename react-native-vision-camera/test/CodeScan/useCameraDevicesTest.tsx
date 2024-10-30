import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  useCameraDevices,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function useCameraDevicesTest() {
  const device = useCameraDevice('back');
  const devices = useCameraDevices();
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

  return (
    <Tester>
      <TestSuite name="useCameraDevice">
        <TestCase itShould={`获取所有相机设备`}>
          <View>
            <Text style={styles.text}>devices:{JSON.stringify(devices)}</Text>
            <Text style={styles.text}>codes:{codes}</Text>
          </View>
          <Camera
            style={styles.cameraPreview}
            ref={camera}
            codeScanner={codeScanner}
            device={device}
            isActive={isActive}
            preview
            resizeMode={'cover'}
          />
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  cameraPreview: {width: '100%', aspectRatio: 56 / 100},
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
