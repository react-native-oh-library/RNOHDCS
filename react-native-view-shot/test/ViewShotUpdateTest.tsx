import React, { useState } from "react";
import { View, Text, Button, ScrollView, TextInput, Image} from "react-native";
import ViewShot from "react-native-view-shot";
import { Tester, TestCase } from '@rnoh/testerino';

export default function ViewShotTest() {
  const ViewShotUpdate = (props: {
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [mode, setChangeMode] = useState(false);
    const myText = React.useRef<ViewShot>(null);
    const getSuccess = (res) => {
      console.log(res);
    }
    const getError = (err) => {
      console.log(err);
    }
    return (
      <View style={{ height: 130 }}>
        <View>
          <ViewShot ref={myText} onCaptureFailure={getError} onCapture={getSuccess} options={{result:"tmpfile"}} captureMode="update" style={{ backgroundColor: '#bfa' }} >
            {mode ? <Text>update模式</Text> : null}
            <Text>测试截图</Text>
          </ViewShot>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 5 }}>
            <Button title="显示组件触发update模式" onPress={() => { setChangeMode(true) }} />
          </View>
          <Button title="隐藏组件触发update模式" onPress={() => { setChangeMode(false) }} />
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