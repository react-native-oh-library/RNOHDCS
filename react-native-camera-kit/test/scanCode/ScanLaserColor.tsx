import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View} from 'react-native';
import {CameraApi, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanLaserColorTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [laserColor, setLaserColor] = useState<string>('#fff');

  return (
    <Tester>
      <TestSuite name="LaserColor:条形码扫描仪激光可视化的颜色">
        <TestCase itShould={laserColor === '#FF0034' ? '红色' : '白色'}>
          <Camera
            ref={cameraRef}
            style={styles.cameraPreview}
            laserColor={laserColor}
            scanBarcode
            showFrame
          />
          <View style={styles.actionBtn}>
            <Button
              title="设置红色"
              onPress={() => {
                setLaserColor('#FF0034');
              }}
            />
            <Button
              title="设置白色"
              onPress={() => {
                setLaserColor('#fff');
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#000',
  },
});
