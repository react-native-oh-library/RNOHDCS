import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanZoomTest = () => {
  const [zoom, setZoom] = useState<number>(0.5);
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name="zoom">
        <TestCase itShould={`设置变焦倍数:${zoom}x`}>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              zoom={zoom}
              scanBarcode
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="setZoom=5"
              onPress={() => {
                setZoom(5);
              }}
            />
            <Button
              title="setZoom=10"
              onPress={() => {
                setZoom(10);
              }}
            />
            <Button
              title="rest"
              onPress={() => {
                setZoom(0.5);
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
