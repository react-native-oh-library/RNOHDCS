import {useRef, useState} from 'react';
import React, {StyleSheet, View, Text} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const onZoomTest = () => {
  const [zoom, setZoom] = useState<number>(0.5);
  const cameraRef = useRef<CameraApi>(null);
  const onZoom = (e: any) => {
    setZoom(e.nativeEvent.zoom);
  };

  return (
    <Tester>
      <TestSuite name="onZoom">
        <TestCase itShould="onZoom回调">
          <Text style={styles.text}>当前zoom:{zoom}x</Text>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              onZoom={onZoom}
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
    position: 'absolute',
    bottom: 10,
    left: 0,
    zIndex: 999,
    gap: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
});
