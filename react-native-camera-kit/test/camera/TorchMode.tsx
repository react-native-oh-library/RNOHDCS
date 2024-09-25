import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const TorchModeTest = () => {
  const [torchMode, setTorchMode] = useState<string>('off');
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`TorchMode:${torchMode}`}>
        <TestCase itShould="设置手电筒模式">
          <View>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              torchMode={torchMode}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="off:关闭"
              onPress={() => {
                setTorchMode('off');
              }}
            />
            <Button
              title="on:开启"
              onPress={() => {
                setTorchMode('on');
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
