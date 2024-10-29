import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function EnableLocationTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [photoFile, setPhotoFile] = useState<string>('');
  const [enableLocation, setEnableLocation] = useState(false);

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
  };

  const changeEnableLocation = () => {
    setEnableLocation(v => !v);
  };

  return (
    <Tester>
      <TestSuite name="enableLocation">
        <TestCase itShould={`${enableLocation ? '启用' : '禁用'}`}>
          <View>
            <Text>拍照结果:{photoFile}</Text>
          </View>
          <Text>有位置权限：图片有位置信息</Text>
          <Text>没有位置权限：图片没有位置信息</Text>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
            enableLocation={enableLocation}
          />
          <View style={style.actionBtn}>
            <Button title="拍照" onPress={onTakePhoto}></Button>
            <Button
              title="enableLocation"
              onPress={changeEnableLocation}></Button>
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
