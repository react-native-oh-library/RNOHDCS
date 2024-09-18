import React, {useRef, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Camera from 'react-native-camera-kit';
import {CameraApi, CameraType} from 'react-native-camera-kit';

export const ScanCodeDemo: React.FC = (): JSX.Element => {
  const nativeRef = useRef<CameraApi>(null);
  const [zoomStr, setZoomStr] = useState<number>(0);
  const [errorStr, setErrorStr] = useState<string>('');
  const [codeResult, setCodeResult] = useState<string>('');

  const onError = (e: any) => {
    setErrorStr(e.nativeEvent.errorMessage);
  };

  const onZoom = (e: any) => {
    setZoomStr(e.nativeEvent.zoom);
  };

  const onReadCode = (e: any) => {
    setCodeResult(JSON.stringify(e));
  };

  return (
    <>
      <View>
        <Camera
          style={{width: '100%', height: 400}}
          ref={nativeRef}
          maxZoom={50}
          cameraType={CameraType.Back}
          onError={onError}
          onZoom={onZoom}
          scanBarcode
          onReadCode={onReadCode}
          ratioOverlay="4:3"
        />
      </View>
      <View>
        <Text style={styles.text}>zoom:{zoomStr}</Text>
        <Text style={styles.text}>code:{codeResult}</Text>
        <Text style={styles.text}>error:{errorStr}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
});
