import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {FlashMode} from './type';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const FashModeTest = () => {
  const [flashMode, setFlashMode] = useState<FlashMode>(
    FlashMode.FLASH_MODE_CLOSE,
  );
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`flashMode:${flashMode}`}>
        <TestCase itShould="设置闪光灯模式">
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              flashMode={flashMode}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="close:关闭"
              onPress={() => {
                setFlashMode(FlashMode.FLASH_MODE_CLOSE);
              }}
            />
            <Button
              title="open:开启"
              onPress={() => {
                setFlashMode(FlashMode.FLASH_MODE_OPEN);
              }}
            />
            <Button
              title="auto:自动"
              onPress={() => {
                setFlashMode(FlashMode.FLASH_MODE_AUTO);
              }}
            />
            <Button
              title="always_open:常亮"
              onPress={() => {
                setFlashMode(FlashMode.FLASH_MODE_ALWAYS_OPEN);
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
const styles = StyleSheet.create({
  view: {flex: 1},
  cameraPreview: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap:10
  },
});
