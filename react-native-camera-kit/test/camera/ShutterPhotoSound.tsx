import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View, Image} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ShutterPhotoSoundTest = () => {
  const [shutterPhotoSound, setShutterPhotoSound] = useState<boolean>(true);
  const cameraRef = useRef<CameraApi>(null);
  const [photo, setPhoto] = useState<string>('');

  const onPhoto = async () => {
    const result = await cameraRef.current?.capture();
    result?.uri && setPhoto(result.uri);
  };

  return (
    <Tester>
      <TestSuite name="ShutterPhotoSound">
        <TestCase itShould="是否相机快门声音">
          <View>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              shutterPhotoSound={shutterPhotoSound}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="开启"
              onPress={() => {
                setShutterPhotoSound(true);
              }}
            />
            <Button
              title="关闭"
              onPress={() => {
                setShutterPhotoSound(false);
              }}
            />
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
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
const styles = StyleSheet.create({
  view: {flex: 1},
  cameraPreview: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
    backgroundColor: '#000',
  },
});
