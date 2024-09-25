import {useRef, useState} from 'react';
import React, {StyleSheet, View, Text} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanOnReadCodeTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [barcode, setBarcode] = useState<string>('');
  const onReadCode = (e: any) => {
    setBarcode(e.nativeEvent?.codeStringValue);
  };

  return (
    <Tester>
      <TestSuite name="OnReadCode">
        <TestCase itShould="获取扫描的结果">
          <View>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              onReadCode={onReadCode}
              scanBarcode
            />
          </View>
          <View style={styles.actionBtn}>
            <Text numberOfLines={1} style={styles.textStyle}>
              code: {barcode}
            </Text>
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
  textStyle: {
    padding: 10,
    color: 'white',
    fontSize: 20,
  },
});
