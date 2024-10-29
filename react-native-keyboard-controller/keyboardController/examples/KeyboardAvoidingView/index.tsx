import React, { useEffect, useState, useCallback } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  StyleSheet
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";
import type { KeyboardAvoidingViewProps, LayoutChangeEvent } from "react-native";



type Behavior = KeyboardAvoidingViewProps["behavior"];
const behaviors: Behavior[] = ["padding", "height", "position"];

export function KeyboardAvoidingViewExample() {
  const [behavior, setBehavior] = useState<Behavior>(behaviors[0]);
  const [offset, setOffset] = useState<number>(0);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [style, setStyle] = useState<any>(styles.container_sty);
  const [layoutText, setLayoutText] = useState<any>('');
  const [contentContainerStyle, setContentContainerStyle] = useState<any>(null);
  const [children, setChildren] = useState<any>(null);

  const childrenNode = (<View style={styles.childrenView}>
    <Text style={styles.footerText}> KeyboardAvoidingView </Text>
    <TextInput placeholder="Amount" style={styles.inputInFooter} />
    <Button title="Click me" />
  </View>)
  const handleLayout = useCallback((evt: LayoutChangeEvent) => {
    console.log('###', evt.nativeEvent)
    setLayoutText(JSON.stringify(evt.nativeEvent))
  }, []);
  return (
    <View>
      <Tester>
        <TestSuite name="测试KeyboardAvoidingView组件">
      
       
          <ScrollView style={styles.scrollView}>
            <TestCase itShould="根据键盘的高度，调整自身的样式：height position padding" >
              {/* <Button testID="behavior:height" title="behavior:height" onPress={() => {
                setBehavior('height')
              }}></Button> */}
              <Button testID="behavior:position" title="behavior:position" onPress={() => {
                setContentContainerStyle(null)
                setBehavior('position')
              }}></Button>
               {/* <Button testID="behavior:padding" title="behavior:padding" onPress={() => {
                setBehavior('padding')
              }}></Button> */}
            </TestCase>
            <TestCase itShould="KeyboardAvodingView组件功能是否可用：enabled" >
              <Button testID='enabledtrue' title="enabled:true" onPress={() => {
                setEnabled(true)
              }}></Button>
              <Button testID="enabledfasle" title="enabled:false" onPress={() => {
                setEnabled(false)
              }}></Button>
            </TestCase>
            <TestCase itShould="内容容器的样式：contentContainerStyle" >
              <Button title="设置contentContainerStyle" onPress={() => {
                setBehavior('position')
                setContentContainerStyle(styles.container)
              }}></Button>
            </TestCase>
            
          

            <TestCase itShould="设置键盘与React Native视图之间的距离：keyboardVerticalOffset" >
              <Text>设置keyboardVerticalOffset距离值：200</Text>
               <Button title="设置keyboardVerticalOffset距离值：200" testID="keyboardVerticalOffset" onPress={() => {
                  setEnabled(true); 
                 setOffset(200);
              }}></Button>
            </TestCase>
            <TestCase itShould="布局更改时的回调函数：onLayout" >
              <Text numberOfLines={8}>{layoutText}</Text>
              <Button title="布局更改" onPress={() => {
                setStyle({ 'padding': 50 })
                setChildren(null)
              }}></Button>
            </TestCase>
            <TestCase itShould='组件CSS属性：style' tags={['C_API']}>
              <Button title="style" testID="style" onPress={() => {
                setStyle(styles.content)
                setChildren(null)
              }}></Button>
            </TestCase>
            <TestCase itShould='子组件：children' tags={['C_API']}>
              <Button title="children" testID="children" onPress={() => {
                setChildren(childrenNode)
              }}></Button>
            </TestCase>
          </ScrollView>
          <KeyboardAvoidingView
              behavior={behavior}
              onLayout={handleLayout}
              contentContainerStyle={contentContainerStyle}
              keyboardVerticalOffset={offset}
              enabled={enabled}
              style={style}
            >
                  {children}
              <TextInput
                style={styles.textInput}
                key='test001'
                keyboardType="default"
                placeholder={`请点击弹起键盘`}
              />
                <TextInput
                style={styles.textInput}
                key='test03'
                keyboardType="default"
                placeholder={`请点击弹起键盘`}
              />
            <TextInput
                style={styles.textInput}
                key='test0233'
                keyboardType="default"
                placeholder={`请点击弹起键盘`}
              />
               
          
            </KeyboardAvoidingView>
        </TestSuite>
      </Tester>
    </View>


  );
}
const styles = StyleSheet.create({
  childrenView: {
    backgroundColor:'green',
   
  },

  container: {
    backgroundColor: 'red',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 10,
    height:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    
  },
  container_sty: {
    height:250,
    padding:20
  },
  container_B: {
    backgroundColor: 'grey',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 10,
    height:200,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  row: {
    flexDirection: "row",
  },
  contentView: {
    height: 600,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  content: {
    width: '100%',
    height: 400,
    padding: 20,
    backgroundColor: 'grey'
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
    backgroundColor:'yellow'
  },
  textInput_A: {
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
    fontWeight: "500",
    fontSize: 16,
    color: "blue",
    backgroundColor: "red"
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