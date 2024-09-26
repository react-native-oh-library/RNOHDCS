import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {FlashMode} from './type';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanCodeFashMode = () => {
  const [flashMode, setFlashMode] = useState<FlashMode>(
    FlashMode.FLASH_MODE_CLOSE,
  );
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`flashMode:${flashMode}`}>
        <TestCase itShould="设置闪光灯模式">
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            flashMode={flashMode}
            scanBarcode
          />
          <View style={styles.actionBtn}>
            <Button
              title="close:关闭"
              onPress={() => {
                setFlashMode(FlashMode.FLASH_MODE_CLOSE);
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
    padding: 10,
    backgroundColor: '#000',
  },
});
