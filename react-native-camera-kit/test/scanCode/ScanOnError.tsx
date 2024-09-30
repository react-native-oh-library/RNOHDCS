import {useRef, useState} from 'react';
import React, {StyleSheet, View, Text} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const ScanOnErrorTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [errorStr, setErrorStr] = useState<string>('');
  const onError = (e: any) => {
    setErrorStr(e.nativeEvent.errorMessage);
  };

  return (
    <Tester>
      <TestSuite name="onError">
        <TestCase itShould="处理报错信息">
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              onError={onError}
              scanBarcode
            />
          </View>
          <View style={styles.actionBtn}>
            <Text style={styles.text}>error:{errorStr}</Text>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
