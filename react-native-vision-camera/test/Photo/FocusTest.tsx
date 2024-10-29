import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function FocusTest() {
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);
  const {hasPermission, requestPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [result, setResult] = useState<any>('');

  if (!device) {
    return <Text>No Devices</Text>;
  }

  if (!hasPermission) {
    requestPermission();
  }

  return (
    <Tester>
      <TestSuite name="Focus">
        <TestCase itShould={`设置聚焦坐标`}>
          <View>
            <Text>focus:{JSON.stringify(result)}</Text>
          </View>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
          />
          <View style={style.actionBtn}>
            <Button
              title="set:{x:0,y:0}"
              onPress={() => {
                camera.current?.focus({x: 0, y: 0});
                setResult({x: 0, y: 0});
              }}
            />
            <Button
              title="set:{x:1000,y:3000}"
              onPress={() => {
                camera.current?.focus({x: 1000, y: 3000});
                setResult({x: 1000, y: 3000});
              }}
            />
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
