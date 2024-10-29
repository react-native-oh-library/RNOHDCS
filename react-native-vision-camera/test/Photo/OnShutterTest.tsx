import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function OnShutterTest() {
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

  const [status, setStatus] = useState<string>('');
  const [photoFile, setPhotoFile] = useState<string>('');
  const [isActive, setIsActive] = useState(true);

  // 拍照
  const onTakePhoto = async () => {
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
  };

  return (
    <Tester>
      <TestSuite name="onShutter">
        <TestCase itShould={`按下拍照按钮的回调`}>
          <View>
            <Text>status:{status}</Text>
            <Text>拍照结果:{photoFile}</Text>
          </View>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive={isActive}
            preview
            photo
            format={format}
            onShutter={() => {
              setStatus('我是onShutter，相机拍照时执行');
            }}
          />
          <View style={style.actionBtn}>
            <Button title="拍照" onPress={onTakePhoto}></Button>
            <Button
              title="Reset"
              onPress={() => {
                setPhotoFile('');
                setStatus('');
              }}></Button>
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
