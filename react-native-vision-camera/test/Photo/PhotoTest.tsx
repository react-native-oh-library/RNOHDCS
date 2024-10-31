import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function PhotoTest() {
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
  const [photo, setPhoto] = useState(true);
  const [photoFile, setPhotoFile] = useState<string>('');
  const [path, setPath] = useState('');

  // 拍照
  const onTakePhoto = async () => {
    setPath('');
    setPhotoFile('');
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
    result?.path && setPath(result.path);
  };
  return (
    <Tester>
      <TestSuite name="photo:启用拍照功能">
        <TestCase itShould={''}>
        <View>
            <Text>拍照结果:{photoFile}</Text>
            {path && (
              <View style={{height: 50}}>
                <Button
                  title="SaveAsset"
                  onPress={() => {
                    CameraRoll.saveAsset(path).then(res => {
                      setTimeout(() => {
                        setPhotoFile('');
                        setPath('');
                      }, 500);
                    });
                  }}
                />
              </View>
            )}
          </View>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo={photo}
            format={format}
          />
          <View style={style.actionBtn}>
            <Button title="拍照" onPress={onTakePhoto}></Button>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {width: '100%', aspectRatio: 56 / 100},
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 10,
    gap: 5,
    position: 'absolute',
    top: 300,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
