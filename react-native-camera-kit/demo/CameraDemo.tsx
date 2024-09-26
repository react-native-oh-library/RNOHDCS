import React, {useRef, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';

export const CameraDemo: React.FC = (): JSX.Element => {
  const nativeRef = useRef<CameraApi>(null);
  const [zoom, setZoom] = useState<number>(0);
  const [errorStr, setErrorStr] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');

  const onError = (e: any) => {
    setErrorStr(e.nativeEvent.errorMessage);
  };

  const onZoom = (e: any) => {
    setZoom(e.nativeEvent.zoom);
  };

  const onPhoto = async () => {
    const result = await nativeRef.current?.capture();
    result && setPhoto(JSON.stringify(result));
  };

  return (
    <>
      <View>
        <Camera
          style={{width: '100%', height: 500}}
          ref={nativeRef}
          maxZoom={10}
          cameraType={CameraType.Back}
          flashMode={0}
          onError={onError}
          onZoom={onZoom}
        />
      </View>
      <View>
        <Button title="拍照" onPress={onPhoto} />
        <Text style={styles.text}>zoom:{zoom}</Text>
        <Text style={styles.text}>error:{errorStr}</Text>
        <Text style={styles.text}>photo:{photo}</Text>
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
