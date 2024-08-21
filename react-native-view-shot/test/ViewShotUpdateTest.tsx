import React, { useState } from "react";
import { View, Text, Button, ScrollView, TextInput, Image } from "react-native";
import ViewShot from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';

export default function ViewShotTest() {
  const ViewShotUpdate = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [mode, setChangeMode] = useState(false);
    const [flag, setFlag] = useState(false);
    const [txt, setTxt] = useState('');
    const getSuccess = (res) => {
      console.log(res);
      setTxt(res);
      setFlag(false);
    }
    const getError = (err) => {
      console.log(err);
    }
    return (
      <View style={{ height: 150 }}>
        <View>
          {flag ? <ViewShot onCaptureFailure={getError} onCapture={getSuccess} options={{ result: "tmpfile" }} captureMode="update" style={{ backgroundColor: '#bfa' }} >
            {mode ? <Text>update模式</Text> : null}
            <Text>测试截图</Text>
          </ViewShot> : null}
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 5 }}>
            <Button title="显示整体组件" onPress={() => { setFlag(true) }} />
          </View>
          <Text>{txt}</Text>
          <Button title="显示组件触发update模式" onPress={() => { setChangeMode(!mode) }} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase
            itShould="captureMode为update"
            initialState={''}
            arrange={({ setState }) => <ViewShotUpdate setState={setState} />}
            assert={({ expect, state }) => {
              expect(state).to.be.string;
            }}
          />
        </Tester>
      </ScrollView>
    </View>
  )
}