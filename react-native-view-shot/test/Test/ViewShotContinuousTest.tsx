import React, { useState } from "react";
import { View, Text,  ScrollView } from "react-native";
import ViewShot from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';

export default function ViewShotContinuousTest() {
  const ViewShotContinuous = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [mountUri, setMountUri] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const myText = React.useRef<ViewShot>(null);
    const getSuccess = (res) => {
      console.log('captureSuccess', res);
      setMountUri(res);
    }

    const getError = (err) => {
      console.log('captureFailed', err.message);
      setErrMsg(err.message);
    }
    return (
      <View style={{ height: 80 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} captureMode="continuous" onCaptureFailure={getError} onCapture={getSuccess}>
            <Text>测试截图</Text>
          </ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text numberOfLines={1} ellipsizeMode="middle">截图成功路径：{mountUri}</Text>
          <Text numberOfLines={1} ellipsizeMode="middle">截图失败信息：{errMsg}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="captureMode为continuous，onCapture属性返回截图成功的路径，onCaptureFailure属性返回截图失败信息"
            initialState={''}
            arrange={({ setState }) => <ViewShotContinuous setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}