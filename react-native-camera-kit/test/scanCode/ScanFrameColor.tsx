import {useRef} from 'react';
import React, {StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanFrameColorTest = () => {

  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name="FrameColor:对焦框的颜色">
        <TestCase itShould='设置为红色'>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              frameColor='#FF0034'
              scanBarcode
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
    flexWrap:'wrap',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    left: 0,
    zIndex: 999,
    gap:10,
  },
});
