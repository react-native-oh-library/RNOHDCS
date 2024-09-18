import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanZoomModeTest = () => {
  const [zoomMode, setZoomMode] = useState<string>('off');
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name="zoomMode">
        <TestCase
          itShould={`设置对焦模式:${
            zoomMode === 'on' ? '开启对焦' : '关闭对焦'
          }`}>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              zoomMode={zoomMode}
              scanBarcode
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="开启"
              onPress={() => {
                setZoomMode('on');
              }}
            />
            <Button
              title="关闭"
              onPress={() => {
                setZoomMode('off');
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
