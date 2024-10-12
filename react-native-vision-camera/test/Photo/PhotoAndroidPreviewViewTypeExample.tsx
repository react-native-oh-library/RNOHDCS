import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export function PhotoAndroidPreviewViewTypeExample() {
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

  const [androidPreviewViewType, setAndroidPreviewViewType] = useState<
    'surface-view' | 'texture-view'
  >('surface-view');
  const changeAndroidPreviewViewType = () => {
    setAndroidPreviewViewType(
      androidPreviewViewType === 'surface-view'
        ? 'texture-view'
        : 'surface-view',
    );
  };

  return (
    <Tester>
      <TestSuite name="androidPreviewViewType">
        <TestCase itShould={`${androidPreviewViewType}`}>
          <View>
            <Text>拍照结果:{photoFile}</Text>
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
            androidPreviewViewType={androidPreviewViewType}
          />
          <View style={style.actionBtn}>
            <Button title="拍照" onPress={onTakePhoto}></Button>
            <Button
              title="changeAndroidPreviewViewType"
              onPress={changeAndroidPreviewViewType}></Button>
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const style = StyleSheet.create({
  cameraPreview: {width: 300, height: 400},
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
