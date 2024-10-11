import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';

export function PhotoDemo() {
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
  const [isActive, setIsActive] = useState(true);

  const changeIsActive = () => {
    setIsActive(v => !v);
  };

  return (
    <>
      <View>
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
      />
      <View>
        <Text>isActive:{isActive}</Text>
      </View>
      <View style={style.actionBtn}>
        <Button title="拍照" onPress={onTakePhoto}></Button>
        <Button title="changeIsActive" onPress={changeIsActive}></Button>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  cameraPreview: {},
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
