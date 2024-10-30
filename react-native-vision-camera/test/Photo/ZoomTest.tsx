import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function ZoomTest() {
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

  const [zoom, setZoom] = useState(1);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const changeZoom = () => {
    setZoom(getRandomNumber(0.48, 15));
  };
  const changeZoom1X = () => {
    setZoom(1);
  };
  const changeZoom14X = () => {
    setZoom(1.4);
  };

  const onResetProps = () => {
    setZoom(1);
  };

  return (
    <Tester>
      <TestSuite name="zoom">
        <TestCase itShould={`zoom:${zoom}`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            zoom={zoom}
            format={format}
          />
          {/* 按钮组 */}
          <View style={style.actionBtn}>
            <Button title="zoom" onPress={changeZoom}></Button>
            <Button title="zoom1x" onPress={changeZoom1X}></Button>
            <Button title="zoom1.4x" onPress={changeZoom14X}></Button>
            <Button title="重置" onPress={onResetProps}></Button>
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
