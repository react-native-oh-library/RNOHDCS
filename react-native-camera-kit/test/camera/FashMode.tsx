import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const FashModeTest = () => {
  const [flashMode, setFlashMode] = useState<string>();
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`flashMode:${flashMode}`}>
        <TestCase itShould="设置闪光灯模式">
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            flashMode={flashMode}
          />
          <View style={styles.actionBtn}>
            <Button
              title="close:关闭"
              onPress={() => {
                setFlashMode('off');
              }}
            />
            <Button
              title="open:开启"
              onPress={() => {
                setFlashMode('on');
              }}
            />
            <Button
              title="auto:自动"
              onPress={() => {
                setFlashMode('auto');
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
const styles = StyleSheet.create({
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
    gap: 10,
  },
});
