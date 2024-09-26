import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View, Text} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanMaxZoomTest = () => {
  const [maxZoom, setMaxZoom] = useState<number>(10);
  const cameraRef = useRef<CameraApi>(null);
  const [zoom, setZoom] = useState<number>(0.5);

  const onZoom = (e: any) => {
    setZoom(e.nativeEvent.zoom);
  };
  return (
    <Tester>
      <TestSuite name="maxZoom">
        <TestCase itShould="允许的最大变焦倍数">
          <View>
            <Text>当前zoom：{zoom}</Text>
          </View>
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            maxZoom={maxZoom}
            onZoom={onZoom}
            scanBarcode
          />
          <View style={styles.actionBtn}>
            <Button
              title="setZoom=5"
              onPress={() => {
                setMaxZoom(5);
              }}
            />
            <Button
              title="setZoom=10"
              onPress={() => {
                setMaxZoom(10);
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
