import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent
} from "react-native";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import {
  KeyboardHandlerHook,
  FocusedInputTextChangedEvent,
  EventWithName,
  NativeEvent,
  KeyboardControllerView
} from "react-native-keyboard-controller";

const NOOP = () => () => { };
const useAnimatedKeyboardHandler: KeyboardHandlerHook<
  Record<string, unknown>,
  EventWithName<NativeEvent>
> = NOOP;

export function KeyboardControllerViewExample() {

  const [enabled, setEnabled] = useState<boolean>(true);
  const [style, setStyle] = useState<any>(null);
  const [keyboardMoveText, setkeyboardMoveText] = useState<any>('');
  const [inputChangeText, setInputChangeText] = useState<any>('');
  const [children, setChildren] = useState<any>(null);

  const childrenNode = (<View>
    <Text style={styles.footerText}> KeyboardControllerView </Text>
    <TextInput placeholder="Amount" style={styles.inputInFooter} />
    <Button title="Click me" />
  </View>)
  const keyboardHandler = (e: NativeSyntheticEvent<NativeEvent>) => {
    console.log('###keyboardHandler', e.nativeEvent);
    setkeyboardMoveText(JSON.stringify(e.nativeEvent))
  }

  const inputTextHandler = (e: NativeSyntheticEvent<EventWithName<FocusedInputTextChangedEvent>>) => {
    console.log('###inputTextHandler', e.nativeEvent)
    setInputChangeText(JSON.stringify(e.nativeEvent))
  }


  return (
    <View>
      <Tester>
        <TestSuite name="测试KeyboardControllerView组件">
          <View style={styles.contentView}>
            <KeyboardControllerView
              enabled={enabled}
              onKeyboardMoveEnd={keyboardHandler}
              onFocusedInputTextChanged={inputTextHandler}
              style={style}
            >
              <TextInput
                style={styles.textInput}
                key='test'
                keyboardType="default"
                placeholder={`请点击弹起键盘`}
              />
              {children}
            </KeyboardControllerView>
          </View>

          <ScrollView style={styles.scrollView}>

            <TestCase itShould="是否开启键盘监听事件：enabled" >
              <Button testID='enabledtrue' title="enabled:true" onPress={() => {
                setEnabled(true)
              }}></Button>
              <Button testID="enabledfasle" title="enabled:false" onPress={() => {
                setInputChangeText('')
                setkeyboardMoveText('')
                setEnabled(false)
              }}></Button>
            </TestCase>
            <TestCase itShould='键盘移动结束的监听事件：onKeyboardMoveEnd' tags={['C_API']}>
              <Text style={styles.text} numberOfLines={8}>{keyboardMoveText}</Text>
            </TestCase>
            <TestCase itShould='聚焦输入框文本变化的监听事件：onFocusedInputTextChanged' tags={['C_API']}>
              <Text style={styles.text} numberOfLines={8}>{inputChangeText}</Text>
            </TestCase>

            <TestCase itShould='组件CSS属性：style' tags={['C_API']}>
              <Button title="style" testID="style" onPress={() => {
                setStyle(styles.content)
              }}></Button>
            </TestCase>
            <TestCase itShould='子组件：children' tags={['C_API']}>
              <Button title="children" testID="children" onPress={() => {
                setChildren(childrenNode)
              }}></Button>
            </TestCase>
          </ScrollView>
        </TestSuite>
      </Tester>
    </View>


  );
}
const styles = StyleSheet.create({
  header: {
    color: "black",
    marginRight: 12,
  },
  container: {
    backgroundColor: 'red',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 10
  },
  row: {
    flexDirection: "row",
  },
  contentView: {
    height: 150,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  content: {
    width: '100%',
    height: 100,
    padding: 0,
    backgroundColor: 'green'
  },
  heading: {
    color: "black",
    fontSize: 36,
    marginBottom: 48,
    fontWeight: "600",
  },
  scrollView: {
    height: 500

  },
  textInput: {
    height: 45,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: 12,
    height: 45,
    borderRadius: 10,
    backgroundColor: "rgb(40, 64, 147)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {

    fontSize: 16,
    color: "#555555",
    padding: 20
  },
  footerText: {
    color: "#555555",
    fontWeight: "bold",
  },

  inputInFooter: {
    width: 200,
    backgroundColor: "yellow",
  },
});