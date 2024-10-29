import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function ResizeModeTest() {
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

  const [resizeMode, setResizeMode] = useState<'cover' | 'contain'>('cover');

  return (
    <Tester>
      <TestSuite name="resizeMode">
        <TestCase itShould={`预览模式:${resizeMode}`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            resizeMode={resizeMode}
            format={format}
          />

          <View>
            <Text>resizeMode:{resizeMode}</Text>
          </View>
          {/* 按钮组 */}
          <View style={style.actionBtn}>
            <Button
              title="set:cover"
              onPress={() => {
                setResizeMode('cover');
              }}></Button>
            <Button
              title="set:contain"
              onPress={() => {
                setResizeMode('contain');
              }}></Button>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {width: '100%', aspectRatio: 3 / 4},
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
