import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';

type VideoStabilizationMode =
  | 'off'
  | 'standard'
  | 'cinematic'
  | 'cinematic-extended'
  | 'auto';

export default function PhotoDemo() {
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

  // 拍照
  const onTakePhoto = async () => {
    const photoFile = await camera.current?.takePhoto();
    setHandle('\n拍照结果：' + JSON.stringify(photoFile));
  };

  // 聚焦
  const onFocus = async () => {
    const getRandomNumber = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randomPoint = {
      x: getRandomNumber(0, 2000),
      y: getRandomNumber(0, 4000),
    };
    setHandle(`\n随机聚焦坐标: ${JSON.stringify(randomPoint)}`);
    await camera.current?.focus(randomPoint);
  };

  // 属性
  const [enableLocation, setEnableLocation] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [preview, setPreview] = useState(true);
  const [enableZoomGesture, setEnableZoomGesture] = useState(true);
  const [resizeMode, setResizeMode] = useState<'cover' | 'contain'>('cover');
  const [androidPreviewViewType, setAndroidPreviewViewType] = useState<
    'surface-view' | 'texture-view'
  >('surface-view');
  const [photoQualityBalance, setPhotoQualityBalance] = useState<
    'speed' | 'balanced' | 'quality'
  >('speed');
  const [torch, setTorch] = useState<'off' | 'on'>('off');
  const [exposure, setExposure] = useState(0.1);
  const [zoom, setZoom] = useState(1);
  const [photo, setPhoto] = useState(true);
  const [handle, setHandle] = useState('');

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const changeEnableLocation = () => {
    setEnableLocation(!enableLocation);
  };
  const changeIsActive = () => {
    setIsActive(!isActive);
  };
  const changePreview = () => {
    setPreview(!preview);
  };
  const changeEnableZoomGesture = () => {
    setEnableZoomGesture(!enableZoomGesture);
  };
  const changeResizeMode = () => {
    setResizeMode(resizeMode === 'contain' ? 'cover' : 'contain');
  };
  const changeSetTorch = () => {
    setTorch(torch === 'off' ? 'on' : 'off');
  };
  const changeZoom = () => {
    setZoom(getRandomNumber(0.48, 15));
  };
  const changeExposure = () => {
    setExposure(exposure === 4 ? -4 : 4);
  };
  const changeAndroidPreviewViewType = () => {
    setAndroidPreviewViewType(
      androidPreviewViewType === 'surface-view'
        ? 'texture-view'
        : 'surface-view',
    );
  };
  const changePhotoQualityBalance = () => {
    const nextObj: Record<
      'speed' | 'balanced' | 'quality',
      'speed' | 'balanced' | 'quality'
    > = {
      speed: 'balanced',
      balanced: 'quality',
      quality: 'speed',
    };
    setPhotoQualityBalance(nextObj[photoQualityBalance]);
  };

  const onResetProps = () => {
    setEnableLocation(false);
    setIsActive(true);
    setPreview(true);
    setEnableZoomGesture(true);
    setResizeMode('cover');
    setAndroidPreviewViewType('surface-view');
    setPhotoQualityBalance('speed');
    setTorch('off');
    setExposure(0.1);
    setZoom(1);
  };

  return (
    <View style={{flex: 1, backgroundColor:'red'}}>
      <Camera
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}
        ref={camera}
        device={device}
        isActive={isActive}
        preview={preview}
        photo={photo}
        resizeMode={resizeMode}
        enableZoomGesture={enableZoomGesture}
        exposure={exposure}
        zoom={zoom}
        torch={torch}
        enableLocation={enableLocation}
        androidPreviewViewType={androidPreviewViewType}
        photoQualityBalance={photoQualityBalance}
        format={format}
        onShutter={e => {
          setHandle('onShutter');
        }}
        onStarted={() => {
          setHandle('onStarted');
        }}
        onStopped={() => {
          setHandle('onStopped');
        }}
        onTouchEnd={() => {
          setHandle('onTouchEnd');
        }}
        onInitialized={() => {
          setHandle('onInitialized');
        }}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 999,
        }}>
        <View style={{gap: 10}}></View>

        <View style={{gap: 10, paddingTop: 20}}>
          {/* 文本展示 */}
          <View style={style.blockTxt}>
            <Text>
              torch:{torch}; exposure:{exposure}; photoQualityBalance:
              {photoQualityBalance}; androidPreviewViewType:
              {androidPreviewViewType}; enableZoomGesture:
              {enableZoomGesture.toString()}; resizeMode:{resizeMode}; zoom:
              {zoom}; enableLocation:{enableLocation.toString()}; isActive:
              {isActive.toString()}; preview:{preview.toString()}; 
              handle: {handle} ; 
            </Text>
          </View>
          {/* 按钮组 */}
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              flexWrap: 'wrap',
              paddingBottom: 10,
            }}>
            <Button title="拍照" onPress={onTakePhoto}></Button>
            <Button title="聚焦" onPress={onFocus}></Button>
            <Button title="重置" onPress={onResetProps}></Button>
            <Button
              title="enableLocation"
              onPress={changeEnableLocation}></Button>
            <Button title="preview" onPress={changePreview}></Button>
            <Button title="resizeMode" onPress={changeResizeMode}></Button>
            <Button
              title="enableZoomGesture"
              onPress={changeEnableZoomGesture}></Button>
            <Button title="torch" onPress={changeSetTorch}></Button>
            <Button title="exposure" onPress={changeExposure}></Button>
            <Button
              title="androidPreviewViewType"
              onPress={changeAndroidPreviewViewType}></Button>
            <Button title="zoom" onPress={changeZoom}></Button>
            <Button
              title="photoQualityBalance"
              onPress={changePhotoQualityBalance}></Button>
            <Button title="isActive" onPress={changeIsActive}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  blockTxt: {
    width: '100%',
    padding: 10,
    paddingBottom: 40
  },
  btns: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    zIndex: 999999,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
});