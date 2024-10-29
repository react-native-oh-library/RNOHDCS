import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCameraDevices,
  useCameraFormat,
  useLocationPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function useLocationPermissionTest() {
  const device = useCameraDevice('back');
  const devices = useCameraDevices();
  const {hasPermission, requestPermission} = useCameraPermission();
  const {hasPermission: _hasPermission, requestPermission: _requestPermission} =
    useLocationPermission();

  const camera = useRef<Camera>(null);
  const format = useCameraFormat(device, [
    {videoResolution: {width: 1920, height: 1080}},
    {fps: 30},
  ]);

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }
  // if (!_hasPermission) {
  //   _requestPermission();
  // }

  const [audio, setAudio] = useState(true);
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [preview, setPreview] = useState(true);
  const [videoCodec, setVideoCodec] = useState<'h265' | 'h264'>('h265');
  const [videoStabilizationMode, setVideoStabilizationMode] = useState<
    'off' | 'standard' | 'cinematic' | 'cinematic-extended' | 'auto'
  >('auto');
  const [videoHdr, setVideoHdr] = useState(false);

  const [startStatus, seteStartStatus] = useState('end');
  const [videoFile, setVideoFile] = useState<string>('');
  const [videoPath, setVideoPath] = useState<string>('');
  const [fps, set] = useState<number>(30);

  return (
    <Tester>
      <TestSuite name="useLocationPermission">
        <TestCase
          itShould={`${_hasPermission ? '有位置权限' : '没有位置权限'}`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            isActive={true}
            preview={preview}
            device={device}
            video={true}
            videoHdr={videoHdr}
            videoStabilizationMode={videoStabilizationMode}
            fps={30}
            format={format}
          />
          {!_hasPermission && (
            <Button title="requestPermission" onPress={_requestPermission} />
          )}
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
