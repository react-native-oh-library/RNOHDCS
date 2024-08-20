import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ViewShot from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';

export default function ViewShotMountTest() {
  const ViewShotMount = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [mountUri, setMountUri] = useState('');
    const myMount = React.useRef<ViewShot>(null);
    const getSuccess = (res) => {
      setMountUri(res);
      props.setState(res);
    }
    const getError = (err) => {
      console.log(err);
    }

    return (
      <View style={{ height: 55 }}>
        <View>
          <ViewShot ref={myMount} style={{ backgroundColor: '#bfa' }} captureMode="mount" onCaptureFailure={getError} onCapture={getSuccess} children={<Text>测试截图</Text>}></ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
        <Text numberOfLines={1} ellipsizeMode="middle">截图保存路径：{mountUri}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="captureMode为mount，"
            initialState={''}
            arrange={({ setState }) => <ViewShotMount setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}