import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanFrameColorTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [frameColor, setFrameColor] = useState<string>('#FF0034');

  return (
    <Tester>
      <TestSuite name="FrameColor:扫码框的颜色">
        <TestCase itShould={frameColor === '#FF0034' ? '红色' : '白色'}>
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            frameColor={frameColor}
            scanBarcode
            showFrame
          />
          <View style={styles.actionBtn}>
            <Button
              title="设置红色"
              onPress={() => {
                setFrameColor('#FF0034');
              }}
            />
            <Button
              title="设置白色"
              onPress={() => {
                setFrameColor('#fff');
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
