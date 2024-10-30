import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function OnStartedTest() {
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
  const onError = (e: any) => {
    e && JSON.stringify(e);
  };
  // 拍照
  const onTakePhoto = async () => {
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
  };

  const changeIsActive = () => {
    setIsActive(v => !v);
  };

  return (
    <Tester>
      <TestSuite name="onStarted">
        <TestCase itShould={`相机启动时的回调`}>
          <View>
            <Text>status:{status}</Text>
          </View>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive={isActive}
            preview
            photo
            format={format}
            onStarted={() => {
              setStatus('我是onStarted，相机启动时执行');
            }}
          />
          <View style={style.actionBtn}>
            <Button title="changeIsActive" onPress={changeIsActive}></Button>
            <Button title="rest" onPress={()=>{setStatus('')}}></Button>
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
