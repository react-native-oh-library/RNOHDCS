import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanShowFrameTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [showFrame, setShowFrame] = useState<boolean>(false);

  return (
    <Tester>
      <TestSuite name="showFrame">
        <TestCase itShould={`${showFrame ? '显示' : '不显示'}扫描帧率`}>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              scanBarcode
              showFrame={showFrame}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="设置显示"
              onPress={() => {
                setShowFrame(true);
              }}
            />
            <Button
              title="设置不显示"
              onPress={() => {
                setShowFrame(false);
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
