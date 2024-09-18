import {useRef, useState} from 'react';
import React, {Button, StyleSheet, View, Text} from 'react-native';
import Camera, {CameraApi, CameraType} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const CameraTypeTest = () => {
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.Back);
  const cameraRef = useRef<CameraApi>(null);
  const [errorStr, setErrorStr] = useState<string>('');
  const onError = (e: any) => {
    setErrorStr(e.nativeEvent.errorMessage);
  };

  return (
    <Tester>
      <TestSuite name="CameraType">
        <TestCase itShould={`设置相机类型:${cameraType}`}>
          <View>
            <Text style={styles.text}>error:{errorStr}</Text>
          </View>
          <View style={styles.view}>
            <Camera
              ref={cameraRef}
              style={styles.cameraPreview}
              cameraType={cameraType}
              onError={onError}
            />
          </View>
          <View style={styles.actionBtn}>
            <Button
              title="前置相机"
              onPress={() => {
                setCameraType(CameraType.Front);
              }}
            />
            <Button
              title="后置相机"
              onPress={() => {
                setCameraType(CameraType.Back);
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
    backgroundColor: '#000',
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
