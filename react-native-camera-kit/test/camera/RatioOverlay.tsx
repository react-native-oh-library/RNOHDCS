import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const RatioOverlayTest = () => {
  const [ratioOverlay, setRatioOverlay] = useState<string>('4:3');
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`RatioOverlay:${ratioOverlay}`}>
        <TestCase itShould="相机预览比例">
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              ratioOverlay={ratioOverlay}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="4:3"
              onPress={() => {
                setRatioOverlay('4:3');
              }}
            />
            <Button
              title="16:9"
              onPress={() => {
                setRatioOverlay('16:9');
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
    aspectRatio: 9 / 16,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#000',
    position:'absolute',
    bottom:0,
    zIndex:999,
    width:'100%'
  },
});
