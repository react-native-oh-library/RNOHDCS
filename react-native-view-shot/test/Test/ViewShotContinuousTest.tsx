import React, { useState } from "react";
import { View, Text, Button, ScrollView, TextInput, } from "react-native";
import ViewShot, { captureRef, captureScreen } from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';

export default function ViewShotContinuousTest() {
  const ViewShotContinuous = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [mountUri, setMountUri] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const myText = React.useRef<ViewShot>(null);
    const getSuccess = (res) => {
      setMountUri(res);
    }

    const getError = (err) => {
      setErrMsg(err)
    }
    return (
      <View style={{ height: 80 }}>
        <View>
          <ViewShot ref={myText} style={{ backgroundColor: '#bfa' }} captureMode="continuous" onCaptureFailure={getError} onCapture={getSuccess} children={<Text>测试截图</Text>}></ViewShot>
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