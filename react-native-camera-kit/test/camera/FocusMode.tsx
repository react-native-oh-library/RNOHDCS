import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {FocusMode} from './type';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const FocusModeTest = () => {
  const [focusMode, setFocusMode] = useState<FocusMode>(
    FocusMode.FOCUS_MODE_AUTO,
  );
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`focusMode${focusMode}`}>
        <TestCase itShould="设置对焦模式">
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              focusMode={focusMode}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="手动"
              onPress={() => {
                setFocusMode(FocusMode.FOCUS_MODE_MANUAL);
              }}
            />
            <Button
              title="连续"
              onPress={() => {
                setFocusMode(FocusMode.FOCUS_MODE_CONTINUOUS_AUTO);
              }}
            />
            <Button
              title="自动"
              onPress={() => {
                setFocusMode(FocusMode.FOCUS_MODE_AUTO);
              }}
            />
            <Button
              title="锁定"
              onPress={() => {
                setFocusMode(FocusMode.FOCUS_MODE_LOCKED);
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
    gap: 10,
  },
});
