
import React, { useCallback, useState } from "react";
import { Button, TextInput, Text, View, StyleSheet, ScrollView, LayoutChangeEvent,Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
const {width,height} = Dimensions.get('window');
export function KeyboardAwareScrollViewExample() {
  const [offset, setOffset] = useState<number>(0);
  const [style, setStyle] = useState<any>(null);
  const [layoutText, setLayoutText] = useState<any>('');
  const [children, setChildren] = useState<any>(null);
  const [enabled, setEnabled] = useState(true);
  const [disableScrollOnKeyboardHide, setDisableScrollOnKeyboardHide] = useState(false);
  const [extraKeyboardSpace, setExtraKeyboardSpace] = useState(0);

  const childrenNode = (<View>
    <Text style={styles.footerText}> KeyboardAwareScrollView </Text>
    <TextInput placeholder="Amount" style={styles.inputInFooter} />
    <Button title="Click me" />
  </View>)
  console.log(KeyboardAwareScrollView)
  const handleLayout = useCallback((evt: LayoutChangeEvent) => {
    setLayoutText(JSON.stringify(evt.nativeEvent))
  }, []);
  return (

      <Tester>
        <TestSuite name="测试KeyboardAwareScrollView组件">

          <ScrollView style={styles.scrollView}>
            {/* <TestCase itShould="防止键盘隐藏时ScrollView自动滚动，保持当前屏幕位置:disableScrollOnKeyboardHide" >
              <Button testID='disableScrollOnKeyboardHide_true' title="disableScrollOnKeyboardHide:true" onPress={() => {
                setDisableScrollOnKeyboardHide(true)
              }}></Button>
              <Button testID="disableScrollOnKeyboardHide_fasle" title="disableScrollOnKeyboardHide:false" onPress={() => {
                setDisableScrollOnKeyboardHide(false)
              }}></Button>

            </TestCase>
            <TestCase itShould="控制此KeyboardAwareScrollView实例是否应生效：enabled" >
              <Button testID='enabled_true' title="enabled:true" onPress={() => {
                setEnabled(true)
              }}></Button>
              <Button testID="enabled_fasle" title="enabled:false" onPress={() => {
                setEnabled(false)
              }}></Button>
            </TestCase>

            <TestCase itShould="键盘与焦点TextInput之间的距离：bottomOffset" >
            <Text>设置bottomOffset：20</Text>
            <Button testID="bottomOffset：20" title="bottomOffset：20" onPress={() => {
              setEnabled(true)
                setOffset(20)
              }}></Button>
       
            </TestCase>
            <TestCase itShould="KeyboardAwareScrollView的底部间距：extraKeyboardSpace" >
            <Text>设置extraKeyboardSpace</Text>
            <Button testID="extraKeyboardSpace：20" title="extraKeyboardSpace：20" onPress={() => {
              setEnabled(true)
                setExtraKeyboardSpace(100)
              }}></Button>
            </TestCase> */}
            <TestCase itShould="布局更改时的回调函数：onLayout" >
              <Text numberOfLines={8}>{layoutText}</Text>
              <Button title="布局更改" onPress={() => {
                setStyle({ 'padding': 50 })
              }}></Button>
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
        <View style={styles.contentView}>
          <KeyboardAwareScrollView
            testID="aware_scroll_view_container"
            bottomOffset={offset}
            enabled={enabled}
            onLayout={handleLayout}
            extraKeyboardSpace={extraKeyboardSpace}
            disableScrollOnKeyboardHide={disableScrollOnKeyboardHide}
            style={style}
          >
            {/* <TextInput
              style={styles.textInput}
              key='test'
              keyboardType="default"
              placeholder={`请点击弹起键盘`}
            /> */}
               {children}
        {new Array(5).fill(0).map((_, i) => (
          <TextInput
            key={i}
            style={styles.textInput}
            contextMenuHidden={i === 4}
            keyboardType={i % 2 === 0 ? "numeric" : "default"}
            placeholder={`TextInput#${i}`}
          />
        ))}
         
          </KeyboardAwareScrollView>
        </View>
      </Tester>
  );
}
const styles = StyleSheet.create({
  container: {
  },
  content: {
    width: '100%',
    height: 800,
    padding: 50,
    backgroundColor: 'green'
  },
  contentView: {
    height: 500,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  scrollView: {
    height: height-500
  },
  textInput: {
    margin: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1
  },
  header: {
    color: "black",
    paddingRight: 12,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  snapToOffsetsAbsoluteContainer: {
    width: "100%",
    position: "absolute",
  },
  snapToOffsetsInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  snapToOffsetsLine: {
    height: 2,
    flex: 1,
    backgroundColor: "black",
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