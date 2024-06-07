import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export default function CodeScanDemo() {
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
      console.log('frame', frame);
      if (codes.length) {
        setIsActive(false);
      }

      let codeStr = JSON.stringify(codes);
      setCodes(codeStr);
    },
  });

  const [isActive, setIsActive] = useState(true);
  const [torch, setTorch] = useState<'off' | 'on'>('off');
  const [torchTxt, setTorchTxt] = useState(torch);

  useEffect(() => {
    setCodes(`torch change ${torch}`);
    setTorchTxt(torch);
  }, [torch]);

  const changeIsActive = () => {
    setIsActive(!isActive);
  };

  const changeSetTorch = () => {
    setTorch(torch === 'off' ? 'on' : 'off');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Camera
        style={{flex: 1}}
        ref={camera}
        codeScanner={codeScanner}
        device={device}
        isActive={isActive}
        preview={true}
        resizeMode={'cover'}
        torch={torch}
        format={format}
        onError={(e: any) => {
          console.log('err', e);
        }}
      />
      <View style={styles.position}>
        <Button
          title={`changeSetTorch:${torchTxt}`}
          onPress={changeSetTorch}></Button>
        <View style={styles.button}>
          <Button
            title={`changeIsActive:${isActive}`}
            onPress={changeIsActive}></Button>
        </View>
        <Text style={styles.text}>{codes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    gap: 10,
  },
  position: {
    position: 'absolute',
    bottom: 20,
    width: '96%',
    margin: '2%',
  },
  button: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  text: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 2,
    paddingBottom: 2,
    opacity: 0.6,
    borderRadius: 10,
    marginTop: '2%',
    zIndex: -1,
  },
});