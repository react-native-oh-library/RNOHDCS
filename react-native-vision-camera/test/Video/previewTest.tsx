import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function previewTest() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
    {fps: 30},
  ])

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  const [audio, setAudio] = useState(true);
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [isActive, setIsActive] = useState(true);
  const [videoCodec, setVideoCodec] = useState<'h265' | 'h264'>('h265');
  const [videoHdr, setVideoHdr] = useState(false);

  const [preview, setPreview] = useState(true);

  const changePreview = () => {
    setPreview(v => !v);
  };

  return (
    <Tester>
      <TestSuite name="isActive">
        <TestCase itShould={`当前状态:${isActive ? '启用' : '禁用'}`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            isActive={isActive}
            preview={preview}
            device={device}
            video={true}
            audio={false}
            videoHdr={videoHdr}
            fps={30}
            format={format}
          />
          <View style={style.actionBtn}>
            <Button
              title={`changePreview:${preview}`}
              onPress={changePreview}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {
    width: 300,
    height: 400,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
