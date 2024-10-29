import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, Button, EmitterSubscription } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  KeyboardAvoidingView,
  KeyboardEvents,
  useResizeMode,
} from "react-native-keyboard-controller";

export function KeyboardEventsExample() {
  const [keyboardShowEventText, setKeyboardShowEventText] = useState('');
  const [keyboardHideEventText, setKeyboardHideEventText] = useState('');
  let hide: EmitterSubscription; let shown: EmitterSubscription;
  useResizeMode();
  const addkeyboardDidHideEvent = () => {
    hide = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      const str = '###keyboardDidHide:' + JSON.stringify(e)
      // setKeyboardShowEventText('');
      setKeyboardHideEventText(str)
    });
  }
  const addkeyboardDidShowEvent = () => {
    shown = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      const str = '###keyboardDidShow:' + JSON.stringify(e)
      // setKeyboardHideEventText('');
      setKeyboardShowEventText(str);
    });
  }
  useEffect(() => {
    return () => {
      if (hide) {
        hide.remove()
      }
      if (shown) {
        shown.remove()
      }
    }
  }, [])

  return (

    <KeyboardAvoidingView style={styles.content}>
      <Tester>
        <TestSuite name='测试键盘事件：KeyboardEvents'>
          <TestCase itShould='键盘已经显示事件:keyboardDidShow' tags={['C_API']}>
            <Text style={styles.text}>{keyboardShowEventText}</Text>
            <Button title="addkeyboardDidShowEvent" testID="addkeyboardDidShowEvent" onPress={() => addkeyboardDidShowEvent()}></Button>
            <TextInput
             placeholder="点击此处，显示键盘"
              style={styles.input}
              testID="text_input"
            />
          </TestCase>
          <TestCase itShould='键盘已经隐藏事件:keyboardDidHide' tags={['C_API']}>
            <Text style={styles.text}>{keyboardHideEventText}</Text>
            <Button title="addkeyboardDidHideEvent" testID="addkeyboardDidHideEvent" onPress={() => addkeyboardDidHideEvent()}></Button>
            <TextInput
            placeholder="点击此处，显示键盘"
              style={styles.input}
              testID="text_input"
            />
          </TestCase>
        </TestSuite>
      </Tester>

    </KeyboardAvoidingView>

  )

}
const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
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
    height: 100,
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginBottom: 10
  },
});

