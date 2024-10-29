import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFocusedInputHandler,KeyboardControllerView } from "react-native-keyboard-controller";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import {
  runOnJS,
} from "react-native-reanimated";

export function Hook_useFocusedInputHandler() {
  const [workletData, setWorkletData] = useState("");

  useFocusedInputHandler(
    {
      onChangeText: (event) => {
        "worklet";
        console.log(event)
        runOnJS(setWorkletData)(JSON.stringify(event));
      },
    },
    [],
  );
  const inputTextHandler = (e:any) => {
    console.log('###inputTextHandler', e.nativeEvent)
    setWorkletData(JSON.stringify(e.nativeEvent))
  }
  return (
    <View style={styles.content}>
      <Tester>
        <TestSuite name="useFocusedInputHandler">
          <TestCase itShould="设置监听输入框回调事件的钩子函数:useFocusedInputHandler" >
            <Text style={styles.text} numberOfLines={8}>{workletData}</Text>
            {/* <TextInput style={styles.input} testID="text_input" /> */}
            <View style={styles.contentView}>
            <KeyboardControllerView
            enabled={true}
              onFocusedInputTextChanged={inputTextHandler}
            >
              <TextInput style={styles.input} testID="text_input" /> 
            </KeyboardControllerView>
          </View>
          </TestCase>

        </TestSuite>
      </Tester>

    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor:'#000'
  },
  container: {
    flex: 1,
  },
  contentView: {
    height: 150,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  section: {
    padding: 20,
    height: 300,
    fontSize: 14,
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1
  },
  text: {
    padding: 10,
    fontSize: 14,
    color:'red'
  },
});
