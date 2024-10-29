
import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View ,Button,Text} from "react-native";
// import { trigger } from "react-native-haptic-feedback";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
  KeyboardStickyView,
DefaultKeyboardToolbarTheme
} from "react-native-keyboard-controller";
import type { LayoutChangeEvent } from "react-native";
import { AutoFillContacts } from "./Contacts";
import CutomeButton from "./Button";
import CustomArrow  from "./Arrow";
import type { Contact } from "./Contacts";
import { TestCase,TestSuite,Tester } from "@rnoh/testerino";


// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const colors = DefaultKeyboardToolbarTheme;
export function KeyboardToolbarExmaple() {
  const [doneCallback, setdoneCallback] = useState('');
  const [name, setName] = useState("");
  const [theme, setTheme] = useState(colors);
  const [content, setContent] = useState(<Text>工具栏标题</Text>);
  const [blur, setBlur] = useState<any>(undefined);
  const [opacity, setOpacity] = useState<any>('');
  const [doneText, setDoneText] = useState('Done');
  const [custom, setCustome] = useState(false);
  const [icon, setIcon] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
 const contentText= (<Text>设置了新的工具栏标题</Text>);
const blurText = (<Text>自定义blur</Text>)
 function randomColor() {
  return "#" + Math.random().toString(16).slice(-6);
}
const haptic = () => {
   setdoneCallback('onDoneCallback事件响应')
}

  return (
    <>
     <Tester>
        <TestSuite name="测试KeyboardToolbar组件">
          <ScrollView style={styles.scorllView}>
            <TestCase itShould="工具栏组件主题：theme" >
            <Button title="theme:randomColor" testID="red" onPress={()=> {
               setTheme( {
                light: {
                  primary: randomColor(),
                  disabled: "#B0BEC5",
                  background: "#f3f3f4",
                  ripple: "#bcbcbcbc",
                },
                dark: {
                  primary: randomColor(),
                  disabled: "#707070",
                  background: "#2C2C2E",
                  ripple: "#F8F8F888",
                },
              })
            }}></Button>
            </TestCase>
            <TestCase itShould="显示在工具栏中间的元素：content" >
            <Button title="content" testID="content" onPress={()=> {
               setContent(contentText)
            }}></Button>
            </TestCase>
            <TestCase itShould="完成按钮的自定义文本：doneText" >
            <Button title="doneText：完成" testID="doneText" onPress={()=> {
                setDoneText('完成')
            }}></Button>
            </TestCase>
            <TestCase itShould="工具栏的自定义可触摸组件：button" >
            <Button title="自定义button" testID="button" onPress={()=> {
              setCustome(true)
            }}></Button>
            <Button title="默认button" testID="button" onPress={()=> {
              setCustome(false)
            }}></Button>
            </TestCase>
            <TestCase itShould="用于显示next/prev按钮的自定义图标组件：icon" >
            <Button title="自定义Icon" testID="button" onPress={()=> {
              setIcon(true)
            }}></Button>
            <Button title="默认Icon" testID="button" onPress={()=> {
              setIcon(false)
            }}></Button>
            </TestCase>
            <TestCase itShould="是否显示下一个和上一个按钮：showArrows" >
            <Button title="hideArrows" testID="showArrows" onPress={()=> {
              setShowArrow(false)
            }}></Button>
            <Button title="showArrows" testID="showArrows" onPress={()=> {
              setShowArrow(true);
            }}></Button>
           
            </TestCase>
            <TestCase itShould="设置工具栏聚焦时的标题：blur" >
            <Button title="自定义blur" testID="blur" onPress={()=> {
              setBlur(blurText)
            }}></Button>
              <Button title="默认blur" testID="blur" onPress={()=> {
              setBlur(undefined)
            }}></Button>
            </TestCase>
            <TestCase itShould="十六进制格式的容器不透明度值：opacity" >
            <Button title="opacity:ff" testID="opacity" onPress={()=> {
              setOpacity('ff');
            }}></Button>
            <Button title="opacity:00" testID="opacity" onPress={()=> {
              setOpacity('00');
            }}></Button>
            </TestCase>
            <TestCase itShould="当用户按下“完成”按钮时调用的回调：onDoneCallback" >
            <Text style={styles.text} numberOfLines={8}>{doneCallback}</Text>
            </TestCase>
            </ScrollView>
        </TestSuite>

        
             { custom ? <KeyboardToolbar
            theme={theme}
            content={content}
            doneText={doneText}
            button={icon?undefined:CutomeButton}
         
            showArrows={showArrow}
            opacity={'ff'}
            onDoneCallback={haptic}
            onPrevCallback={haptic}
            onNextCallback={haptic}
          />:<KeyboardToolbar
          theme={theme}
          content={content}
          doneText={doneText}
          showArrows={showArrow}
          icon={icon?CustomArrow:undefined}
          blur={blur}
          opacity={opacity}
          onDoneCallback={haptic}
          onPrevCallback={haptic}
          onNextCallback={haptic}
        />}
     </Tester>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  content: {

  },
  text: {
    padding: 10,
    fontSize: 14,
  },
  scorllView: {
    height:600
  },
  footer: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",

  },
  row: {
    flexDirection: "row",
  },
  birthday: {
    flex: 1 / 3,
  },
  withPadding: {
    paddingHorizontal: 16,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


