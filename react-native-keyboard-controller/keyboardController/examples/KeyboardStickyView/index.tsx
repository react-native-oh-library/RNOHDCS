import React, { useCallback, useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardStickyView,
} from "react-native-keyboard-controller";
import type { LayoutChangeEvent } from "react-native";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

export function KeyboardStickyViewExample() {
  const [footerHeight, setFooterHeight] = useState(0);
  // const [closed, setClosed] = useState(0);
  // const [opened, setOpened] = useState(0);
  const [offset, setOffset] = useState({ closed: 0, opened: 0 });
  const [style, setStyle] = useState(styles.container);
  const [children, setChildren] = useState<any>(null);
  const handleLayout = useCallback((evt: LayoutChangeEvent) => {
    setFooterHeight(evt.nativeEvent.layout.height);
  }, []);
  const childrenNode = (<View style={styles.footer} onLayout={handleLayout}>
    <Text style={styles.footerText}>A mocked sticky footer</Text>
    <TextInput placeholder="Amount" style={styles.inputInFooter} />
    <Button title="Click me" />
  </View>)
  return (

    <View
      style={[
        styles.pageContainer,
        { paddingBottom: 0 },
      ]}
    >
      <KeyboardAwareScrollView
        bottomOffset={footerHeight + 50}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <Tester>
          <TestSuite name='测试KeyboardStickyView组件'>
            <TestCase itShould='为给定的键盘状态指定视图的附加偏移：offset' tags={['C_API']}>
              <Text>设置offset的值[-50,50]</Text>
              <Button title="setOffset" testID="opened" onPress={() => {
                setOffset({opened:-20,closed:20})
              }}></Button>
              
              <TextInput
                style={styles.textInput}
                key='test'
                keyboardType="default"
                placeholder={`请点击弹起键盘`}
              />

            </TestCase>
            <TestCase itShould='组件CSS属性：style' tags={['C_API']}>
              <Button title="style" testID="style" onPress={() => {
                setStyle(styles.stickContainer)
              }}></Button>
            </TestCase>
            <TestCase itShould='子组件：children' tags={['C_API']}>
              <Button title="children" testID="children" onPress={() => {
                setChildren(childrenNode)
              }}></Button>

            </TestCase>
          </TestSuite>
        </Tester>

      </KeyboardAwareScrollView>

      <KeyboardStickyView offset={offset} style={style}>
        <View style={styles.footer} onLayout={handleLayout}>
          <Text style={styles.footerText}> KeyboardStickyView </Text>
          {children}
        </View>
      </KeyboardStickyView>


    </View>


  );
}
const styles = StyleSheet.create({
  container: {
  },
  content: {
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  stickContainer: {
    padding: 50,
    backgroundColor: 'red',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2
  },
  textInput: {
    margin: 10,
    padding: 10,
    borderRadius: 3,
    // borderColor:'white',
    borderWidth: 1
  },
  footer: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    gap: 10,
  },
  footerText: {
    color: "#555555",
    fontWeight: "bold",
  },
  circle: {
    position: "absolute",
    bottom: 0,
    right: 30,
    justifyContent: "flex-end",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#002099",
  },
  header: {
    color: "black",
    paddingRight: 12,
  },
  inputInFooter: {
    width: 200,
    backgroundColor: "yellow",
  },
});