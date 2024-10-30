import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function EnableZoomGestureTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [photoFile, setPhotoFile] = useState<string>('');
  const [photoPath, setPhotoPath] = useState<string>('');

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  // 拍照
  const onTakePhoto = async () => {
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
    result?.path && setPhotoPath(result.path);
  };

  // 属性
  const [enableZoomGesture, setEnableZoomGesture] = useState<boolean>(true);

  const changeEnableZoomGesture = () => {
    setEnableZoomGesture(v => !v);
  };

  return (
    <Tester>
      <TestSuite name="enableZoomGesture">
        <TestCase
          itShould={`是否启用双指缩放功能:${
            enableZoomGesture ? '开启' : '关闭'
          }`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
            enableZoomGesture={enableZoomGesture}
          />
          <View style={style.actionBtn}>
            <Button
              title="changeEnableZoomGesture"
              onPress={changeEnableZoomGesture}></Button>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {width: '100%', aspectRatio: 56 / 100},
  imageView: {
    width: 300,
    height: 600,
  },
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
    color: '#fff',
  },
});
