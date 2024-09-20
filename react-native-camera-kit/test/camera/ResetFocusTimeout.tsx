import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ResetFocusTimeoutTest = () => {
  const [resetFocusTimeout, setResetFocusTimeout] = useState<number>(2000);
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name="resetFocusTimeout">
        <TestCase itShould={`自动取消对焦时间:${resetFocusTimeout}ms`}>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              resetFocusTimeout={resetFocusTimeout}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="设置2S"
              onPress={() => {
                setResetFocusTimeout(2000);
              }}
            />
            <Button
              title="设置5s"
              onPress={() => {
                setResetFocusTimeout(5000);
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
