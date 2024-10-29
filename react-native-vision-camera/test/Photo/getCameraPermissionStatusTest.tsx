import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function getCameraPermissionStatusTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [photoFile, setPhotoFile] = useState<string>('');

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  const [status, set] = useState<string>('');

  const getCameraPermissionStatus = async () => {
    const res = await Camera.getCameraPermissionStatus();
    res && set(JSON.stringify(res));
  };

  return (
    <Tester>
      <TestSuite name="getCameraPermissionStatus">
        <TestCase itShould={`获取相机授权情况`}>
          <View>
            <Text>result：{status}</Text>
            <Button
              title="getCameraPermissionStatus"
              onPress={getCameraPermissionStatus}
            />
          </View>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
            enableLocation
          />
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
