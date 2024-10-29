import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import Reanimated, {
  runOnJS,
} from "react-native-reanimated";

export function Hook_useKeyboardHandler() {
  const [keyboardHandlerText, setkeyboardHandlerText] = useState<any>('');
  const keyboardHandler = useKeyboardHandler(
    {
      onStart: (e) => {
        "worklet";
      },
      onMove: (e) => {
        "worklet";
      },
      onInteractive: (e) => {
        "worklet";
      },
      onEnd: (e) => {
        "worklet";
        console.log(e);
        runOnJS(setkeyboardHandlerText)(JSON.stringify(e));
      },
    },
    [],

  );
  return (
    <View style={styles.content}>
      <Tester>
        <TestSuite name="useKeyboardHandler">
          <TestCase itShould="设置是否启动键盘监听事件的钩子函数:useKeyboardHandler" >
            <Text style={styles.text} numberOfLines={8}>{keyboardHandlerText}</Text>
            <TextInput style={styles.input} testID="text_input" />
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
    backgroundColor: '#000'
  },
  container: {
    flex: 1,

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
  },
});
