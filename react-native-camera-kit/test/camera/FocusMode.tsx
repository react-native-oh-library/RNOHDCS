import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const FocusModeTest = () => {
  const [focusMode, setFocusMode] = useState<string>();
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`focusMode${focusMode}`}>
        <TestCase itShould="设置对焦模式">
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            focusMode={focusMode}
          />

          <View style={styles.actionBtn}>
            <Button
              title="开启"
              onPress={() => {
                setFocusMode('on');
              }}
            />
            <Button
              title="关闭"
              onPress={() => {
                setFocusMode('off');
              }}
            />
          </View>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
const styles = StyleSheet.create({
  cameraPreview: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  actionBtn: {
    marginTop:10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
  },
});
