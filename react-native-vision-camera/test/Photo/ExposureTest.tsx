import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function ExposureTest() {
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

  // 拍照
  const onTakePhoto = async () => {
    const result = await camera.current?.takePhoto();
    result && setPhotoFile(JSON.stringify(result));
  };

  // 属性
  const [exposure, setExposure] = useState<number>(0);

  return (
    <Tester>
      <TestSuite name="exposure:白平衡">
        <TestCase itShould={`exposure:${exposure}`}>
          <Camera
            style={style.cameraPreview}
            ref={camera}
            device={device}
            isActive
            preview
            photo
            format={format}
            exposure={exposure}
          />
          <View style={style.actionBtn}>
            <Button
              title="setExposure:1"
              onPress={() => {
                setExposure(1);
              }}
            />
            <Button
              title="setExposure:2"
              onPress={() => {
                setExposure(2);
              }}
            />
            <Button
              title="reset"
              onPress={() => {
                setExposure(0);
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
