import {useRef, useState} from 'react';
import React, {StyleSheet, View, Text, Button} from 'react-native';
import {CameraApi, CameraType, Camera} from 'react-native-camera-kit';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

export const MethodTest = () => {
  const cameraRef = useRef<CameraApi>(null);
  const [reqRes, setReqRes] = useState<any>();
  const [checkRes, setCheckRes] = useState<any>();

  return (
    <Tester>
      <TestSuite name="Method:静态方法">
        <TestCase itShould="">
          <View>
            <Text>当前相机权限状态{checkRes}</Text>
            <Text>请求相机权限状态{reqRes}</Text>
          </View>
          <Camera ref={cameraRef} style={styles.cameraPreview} />

          <View style={styles.actionBtn}>
            <Button
              title="请求相机权限"
              onPress={async () => {
                const res =
                  await cameraRef.current?.requestDeviceCameraAuthorization();
                setReqRes(res ? '请求成功' : '请求失败');
              }}
            />
            <Button
              title="检查相机权限"
              onPress={async () => {
                const res =
                  await cameraRef.current?.checkDeviceCameraAuthorizationStatus();
                setCheckRes(res ? '成功' : '失败');
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
});
