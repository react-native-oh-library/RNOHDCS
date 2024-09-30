import {useRef, useState} from 'react';
import React, {StyleSheet, View, Text} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanOnZoomTest = () => {
  const [zoom, setZoom] = useState<number>(0.5);
  const cameraRef = useRef<CameraApi>(null);
  const onZoom = (e: any) => {
    setZoom(e.nativeEvent.zoom);
  };

  return (
    <Tester>
      <TestSuite name="onZoom">
        <TestCase itShould="onZoom回调">
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            onZoom={onZoom}
            scanBarcode
          />
          <View style={styles.actionBtn}>
            <Text style={styles.text}>当前zoom:{zoom}</Text>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
  },
});
