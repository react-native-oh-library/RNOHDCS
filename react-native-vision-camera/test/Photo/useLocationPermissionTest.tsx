import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useLocationPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function useLocationPermissionTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const {hasPermission: _hasPermission, requestPermission: _requestPermission} =
    useLocationPermission();

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }
  // if (!_hasPermission) {
  //   _requestPermission();
  // }

  return (
    <Tester>
      <TestSuite name="useLocationPermission">
        <TestCase
          itShould={`result：${
            _hasPermission ? '有位置权限' : '没有位置权限'
          }`}>
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
  cameraPreview: {width: 300, height: 600},
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
