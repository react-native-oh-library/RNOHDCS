import React, {useRef, useState} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import Camera from 'react-native-camera-kit';
import {CameraApi, CameraType} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const CaptureTest: React.FC = (): JSX.Element => {
  const nativeRef = useRef<CameraApi>(null);
  const [photo, setPhoto] = useState<string>('');

  const onPhoto = async () => {
    const result = await nativeRef.current?.capture();
    result?.uri && setPhoto(result.uri);
  };

  return (
    <Tester>
      <TestSuite name="capture">
        <TestCase itShould="拍照功能">
          <>
            <Camera
              style={styles.cameraPreview}
              ref={nativeRef}
              maxZoom={10}
              cameraType={CameraType.Back}
            />
            <View style={{padding: 10}}>
              <Button title="拍照" onPress={onPhoto} />
            </View>
            {photo ? (
              <View>
                <Image
                  source={{uri: photo}}
                  style={styles.cameraPreview}
                  resizeMode="contain"
                />
              </View>
            ) : null}
          </>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
  cameraPreview: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
});
