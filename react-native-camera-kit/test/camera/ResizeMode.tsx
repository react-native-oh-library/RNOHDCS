import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import Camera, {CameraApi} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ResizeModeTest = () => {
  const [resizeMode, setResizeMode] = useState<string>('cover');
  const cameraRef = useRef<CameraApi>(null);

  return (
    <Tester>
      <TestSuite name={`resizeMode`}>
        <TestCase itShould="相机预览模式">
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              resizeMode={resizeMode}
            />
            <View style={styles.actionBtn}>
              <Button
                title="设置cover"
                onPress={() => {
                  setResizeMode('cover');
                }}
              />
              <Button
                title="设置contain"
                onPress={() => {
                  setResizeMode('contain');
                }}
              />
            </View>
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
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
});
