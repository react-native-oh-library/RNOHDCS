import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View, Text} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const zoomModeTest = () => {
  const [zoomMode, setZoomMode] = useState<string>('off');
  const cameraRef = useRef<CameraApi>(null);
  const [zoom, setZoom] = useState<number>(0.5);
  const onZoom = (e: any) => {
    setZoom(e.nativeEvent.zoom);
  };

  return (
    <Tester>
      <TestSuite name="zoomMode">
        <TestCase
          itShould={`设置对焦模式:${
            zoomMode === 'on' ? '开启对焦' : '关闭对焦'
          }`}>
          <Text style={styles.text}>当前zoom:{zoom}x</Text>
          <View>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              zoomMode={zoomMode}
              onZoom={onZoom}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="开启对焦"
              onPress={() => {
                setZoomMode('on');
              }}
            />
            <Button
              title="关闭对焦"
              onPress={() => {
                setZoomMode('off');
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
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
});
