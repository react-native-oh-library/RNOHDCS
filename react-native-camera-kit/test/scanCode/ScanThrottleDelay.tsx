import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanScanThrottleDelayTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [scanThrottleDelay, setScanThrottleDelay] = useState<number>(2000);

  return (
    <Tester>
      <TestSuite name="scanThrottleDelay">
        <TestCase itShould={`扫描限制延时:${scanThrottleDelay}ms`}>
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            scanBarcode
            scanThrottleDelay={scanThrottleDelay}
          />
          <View style={styles.actionBtn}>
            <Button
              title="设置2s"
              onPress={() => {
                setScanThrottleDelay(2000);
              }}
            />
            <Button
              title="设置3s"
              onPress={() => {
                setScanThrottleDelay(3000);
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
