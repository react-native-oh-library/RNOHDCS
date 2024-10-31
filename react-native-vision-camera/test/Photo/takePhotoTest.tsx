import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function takePhotoTest() {
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

  // 属性

  const [isActive, setIsActive] = useState(true);
  const onError = (e: any) => {
    e && JSON.stringify(e);
  };
  // 拍照

  const [photoFile, setPhotoFile] = useState<string>('');
  const [photoPath, setPhotoPath] = useState<string>('');
  // 拍照
  const onTakePhoto = async () => {
    setPhotoFile('');
    setPhotoPath('');
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
    result?.path && setPhotoPath(result?.path);
  };

  return (
    <Tester>
      <TestSuite name="takePhoto">
        <TestCase itShould={`拍照功能`}>
          <View>
            <Text>拍照结果:{photoFile}</Text>
            {photoPath && (
              <View style={{height: 50}}>
                <Button
                  title="SaveAsset"
                  onPress={() => {
                    CameraRoll.saveAsset(photoPath).then(res => {
                      setTimeout(() => {
                        setPhotoFile('');
                        setPhotoPath('');
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
            isActive={isActive}
            preview
            photo
            format={format}
            onError={onError}
          />

          <View style={style.actionBtn}>
            <Button title="takePhoto" onPress={onTakePhoto}></Button>
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
