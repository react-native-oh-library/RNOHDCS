import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, Button, EmitterSubscription, ScrollView } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  KeyboardEvents,
  KeyboardController
} from "react-native-keyboard-controller";


export function KeyboardControllerExample() {
  const [keyboardHideEventText, setKeyboardHideEventText] = useState('');
  let hide: EmitterSubscription; let shown: EmitterSubscription;

  const dismiss = () => {
    KeyboardController.dismiss()
  }
  const addkeyboardEvent = () => {
   hide = KeyboardEvents.addListener("keyboardDidHide", (e) => {
    const str = '###keyboardDidHide:' + JSON.stringify(e)
   console.log('###',str)
    setKeyboardHideEventText(str)
  });
  shown = KeyboardEvents.addListener("keyboardDidShow", (e) => {
    const str = '###keyboardDidShow:' + JSON.stringify(e)
    console.log('###',str)
    setKeyboardHideEventText(str);
  });
    KeyboardController.addListener('KeyboardController::keyboardDidShow');
    KeyboardController.addListener('KeyboardController::keyboardDidHide');

  }
  const removeListeners = () => {
    setKeyboardHideEventText('Listener removed');
    KeyboardController.removeListeners(1)

  }
  return (
    <ScrollView style={styles.content}>
      <Tester>
        <TestSuite name='键盘控制器：KeyboardController'>
          <TestCase itShould='设置键盘隐藏:dismiss(): void' tags={['C_API']}>
            <TextInput
              style={styles.input}
              testID="text_input"
              placeholder="点击此输入框、显示键盘"
            />
            <Button title="dismiss" testID="dismiss" onPress={() => dismiss()}></Button>

          </TestCase>
          <TestCase itShould='添加键盘的监听事件与删除:addListener、removeListeners' tags={['C_API']}>
            <Text style={styles.text}>{keyboardHideEventText}</Text>
           
            <Button title="addListener" testID="addListener" onPress={() => addkeyboardEvent()}></Button>
            <Button title="removeListeners" testID="removeListeners" onPress={() => removeListeners()}></Button>
            <TextInput
              style={styles.input}
              testID="text_input"
              placeholder="点击此输入框，显示键盘"
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
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
    height: 50,
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginBottom: 10
  },
});