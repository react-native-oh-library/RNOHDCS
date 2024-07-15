import {
  Tester,
  Filter,
  TestSuite,
  TestCase as _TestCase,
} from "@rnoh/testerino";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from "react-native";
import ParsedText from "react-native-parsed-text";
type TesterSkipProp =
  | {
      android: string | boolean;
      harmony: TesterHarmonySkipProp;
    }
  | string;

function prepareSkipProp(skipProp: TesterSkipProp | undefined) {
  return skipProp
    ? typeof skipProp === "string"
      ? skipProp
      : Platform.select({
          android: skipProp?.android,
          harmony: prepareHarmonySkipProp(skipProp?.harmony),
        })
    : undefined;
}
function Example({
  itShould,
  children,
  skip,
  tags,
  modal,
}: {
  itShould: string;
  children: any;
  modal?: boolean;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip)}
    >
      {children}
    </_TestCase>
  );
}
const TestCase = {
  Example: Example,
};
export function TestNativeParsedTextDemo({ filter }: { filter: Filter }) {
  const [param1, setParam1] = React.useState("");
  const [param2, setParam2] = React.useState("");
  const [param2l, setParam2l] = React.useState("");
  const [param3, setParam3] = React.useState("");
  const [param3l, setParam3l] = React.useState("");
  const [param4, setParam4] = React.useState("");
  const [param5, setParam5] = React.useState("");
  const [param6, setParam6] = React.useState("");
  const [param7, setParam7] = React.useState("");
  const [param8, setParam8] = React.useState("");
  const [param9, setParam9] = React.useState(0);
  const handleUrlPress1 = (url, matchIndex /*: number*/) => {
    let p = { url, matchIndex };
    setParam1(JSON.stringify(p));
    Linking.openURL(url);
  };
  const handleUrlPress2 = (phone, matchIndex /*: number*/) => {
    let p = { phone, matchIndex };
    setParam2(
      JSON.stringify(p) + `---展示点击事件回调信息：${phone} has been pressed!`,
    );
  };
  const handleLongPress2 = () => {
    setParam2l(" ParsedText child text Long Press 方法回调被执行");
  };
  const handleUrlPress3 = (email, matchIndex /*: number*/) => {
    let p = { email, matchIndex };
    setParam3(
      JSON.stringify(p) + `---展示点击事件回调信息：${email} has been pressed!`,
    );
  };
  const handleLongPress3 = () => {
    setParam3l("ParsedText Long Press 方法回调被执行");
  };
  const handleUrlPress4 = (name, matchIndex /*: number*/) => {
    let p = { name, matchIndex };
    setParam4(
      JSON.stringify(p) + `---展示点击事件回调信息：${name} has been pressed!`,
    );
  };
  const handleUrlPress5 = (matchString, matchIndex /*: number*/) => {
    let p = { matchString, matchIndex };
    setParam5(
      JSON.stringify(p) +
        `---展示点击事件回调信息：${matchString} has been pressed!`,
    );
  };
  const renderText = (matchingString, matches) => {
    let p = { matchingString, matches };
    setParam6(JSON.stringify(p));
    return matches[0];
  };
  const handleUrlPress6 = (matchString, matchIndex /*: number*/) => {
    let p = { matchString, matchIndex };
    setParam7(
      JSON.stringify(p) +
        `---展示点击事件回调信息：${matchString} has been pressed!`,
    );
  };
  const renderText2 = (matchingString, matches) => {
    let p = { matchingString, matches };
    setParam8(JSON.stringify(p));
    return matches[0];
  };
  const handleLongPressFunc = () => {
    let times = param9 + 1;
    setParam9(times);
  };

  return (
    <Tester style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="React Native Parsed Text">
          <TestCase.Example itShould="测试parse属性type:'url'">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse:[{type: 'url',style: styles.url, onPress: handleUrlPress1}]`}</Text>
              <Text>{`url类型的正则表达式: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.(xn--)?[a-z0-9-]{2,20}\b([-a-zA-Z0-9@:%_\+\[\],.~#?&\/=]*[-a-zA-Z0-9@:%_\+\]~#?&\/=])*/i`}</Text>
              <Text>{`匹配到的文本样式:{color:'red',...`}</Text>
              <Text>{`展示匹配文本被点击时handleUrlPress1获取的参数,点击匹配文本有值，同时跳转浏览器，证明方法被调用:${param1}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[
                  { type: "url", style: styles.url, onPress: handleUrlPress1 },
                ]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText, links like
                http://www.google.com、https://www.baidu.com and
                http://www.facebook.com are clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性type:'phone'">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse:[{type: 'phone',style: styles.phone, onPress: handleUrlPress2,onLongPress:handleLongPress2}]`}</Text>
              <Text>{`phone类型的正则表达式::  ${/[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}/}`}</Text>
              <Text>{`匹配到的文本样式::{color:'green',...`}</Text>
              <Text>{`展示匹配文本被点击时handleUrlPress2获取的参数,点击匹配文本有值,证明方法被调用:${param2}`}</Text>
              <Text>{`展示匹配文本被长按时handleLongPress2获取的参数,点击匹配文本有值,证明方法被调用:${param2l}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[
                  {
                    type: "phone",
                    style: styles.phone,
                    onPress: handleUrlPress2,
                    onLongPress: handleLongPress2,
                  },
                ]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText, phone address like
                444-555-6666、15138646572 and 511-4405222 are clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性type:'email'">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`onLongPress：{handleLongPress3}，parse:[{type: 'email',style: styles.email, onPress: handleUrlPress3}]`}</Text>
              <Text>{`email类型的正则表达式: ${/\S+@\S+\.\S+/}`}</Text>
              <Text>{`匹配到的文本样式::{color:'blue',...`}</Text>
              <Text>{`展示整个组件文本被长按时handleLongPress3获取的参数，点击整个组件文本有值,证明方法被调用:${param3l}`}</Text>
              <Text>{`展示匹配文本被点击时handleUrlPress3方法返回的信息，点击匹配文本有值,证明方法被调用:${param3}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                onLongPress={handleLongPress3}
                parse={[
                  {
                    type: "email",
                    style: styles.email,
                    onPress: handleUrlPress3,
                  },
                ]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText, email address like
                jinz@l-partners.com or 2550125965@qq.com and 15138646578@163.com
                are clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性pattern、type">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse:[{pattern: /Bob|David/,style: styles.name, onPress: handleUrlPress4},{type: 'email',style: styles.email}]`}</Text>
              <Text>{`pattern自定义正则表达式为：/Bob|David/，type:'email'类型的正则表达式为：${/\S+@\S+\.\S+/}`}</Text>
              <Text>{`pattern匹配到的文本样式:{color:'purple',...},type:'email'正则匹配到的文本样式：{color:'blue',...}`}</Text>
              <Text>{`展示pattern正则匹配文本被点击时handleUrlPress4方法获取的参数，点击匹配文本有值,证明方法被调用:${param4}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[
                  {
                    pattern: /Bob|David/,
                    style: styles.name,
                    onPress: handleUrlPress4,
                  },
                  { type: "email", style: styles.email },
                ]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText,names like Bob or
                David ,email address like jinz@l-partners.com or
                2550125965@qq.com and 15138646578@163.com and John are
                clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性的pattern及renderText方法">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`[{pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: handleUrlPress5, renderText: renderText}]`}</Text>
              <Text>{`pattern自定义正则表达式为:  ${/\[(@[^:]+):([^\]]+)\]/i}`}</Text>
              <Text>{`pattern匹配到的文本样式:{color:'orange',...}`}</Text>
              <Text>{`展示pattern正则匹配文本被点击时handleUrlPress5获取的参数,点击匹配文本有值,证明方法被调用:${param5}`}</Text>
              <Text>{`提示:renderText默认返回matches[0]`}</Text>
              <Text>{`展示 renderText获取的参数,当pattern正则匹配到文本时，展示并渲染matches[0]，证明方法被调用:${param6}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[
                  {
                    pattern: /\[(@[^:]+):([^\]]+)\]/i,
                    style: styles.username,
                    onPress: handleUrlPress5,
                    renderText: renderText,
                  },
                ]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText,names like [@^:^] or
                [@^^:^^] and [@jinzhao:api] are clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性的pattern1">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse={[{pattern: /520|521/,style: styles.magicNumber}]}`}</Text>
              <Text>{`pattern自定义正则表达式为:  /520|521/`}</Text>
              <Text>{`pattern匹配到的文本样式:{color:'pink',...}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[{ pattern: /520|521/, style: styles.magicNumber }]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText,magic numbers like
                520 or 521.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性的pattern2">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse:{[{pattern: /#(\w+)/,style: styles.hashTag}]}`}</Text>
              <Text>{`pattern自定义正则表达式为:  ${/#(\w+)/}`}</Text>
              <Text>{`pattern匹配到的文本样式:{color:'#009f5d',...)}`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[{ pattern: /#(\w+)/, style: styles.hashTag }]}
                childrenProps={{ allowFontScaling: false }}
              >
                Hello this is an example of the ParsedText,names like #react or
                #react-native and #009f5d.
              </ParsedText>
            </View>
          </TestCase.Example>
          <TestCase.Example itShould="测试parse属性的pattern、renderText方法以及childrenProps属性">
            <View style={styles.inputpart}>
              <Text>测试组件输入：</Text>
              <Text>{`parse:[{pattern: /\d{17}[0-9|X]/, style: styles.idnumber, onPress: handleUrlPress6,renderText: renderText2}],childrenProps:{onLongPress:handleLongPressFunc}`}</Text>
              <Text>{`pattern自定义正则表达式为:  ${/\d{17}[0-9|X]/}`}</Text>
              <Text>{`pattern匹配到的文本样式为:{color:'#8cc540',...}`}</Text>
              <Text>{`展示pattern正则匹配文本被点击时handleUrlPress6获取的参数,,点击匹配文本有值,证明方法被调用:${param7}`}</Text>
              <Text>{`提示:renderText默认返回matches[0]`}</Text>
              <Text>{`展示 renderText获取的参数,当pattern正则匹配到文本时，展示并渲染matches[0]，证明方法被调用:${param8}`}</Text>
              <Text>{`提示:childrenProps属性传递onLongPress给所有匹配到的文本，当匹配文本被长按时handleLongPressFunc被执行`}</Text>
              <Text>{`展示handleLongPressFunc方法执行了${param9}次`}</Text>
            </View>
            <View style={styles.outputpart}>
              <Text>展示组件效果：</Text>
              <ParsedText
                style={styles.text}
                parse={[
                  {
                    pattern: /\d{17}[0-9|X]/,
                    style: styles.idnumber,
                    onPress: handleUrlPress6,
                    renderText: renderText2,
                  },
                ]}
                childrenProps={{
                  allowFontScaling: false,
                  onLongPress: handleLongPressFunc,
                }}
              >
                Hello this is an example of the ParsedText,idnumber like
                110108199302173951 or 110108199605183951 are clickable.
              </ParsedText>
            </View>
          </TestCase.Example>
          <View style={styles.buttomMargin}></View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  inputpart: {
    marginBottom: 10,
  },
  output: {},
  url: {
    color: "red",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  phone: {
    color: "green",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  email: {
    color: "blue",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  name: {
    color: "purple",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  username: {
    color: "orange",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  magicNumber: {
    color: "pink",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  hashTag: {
    color: "#009f5d",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  idnumber: {
    color: "#8cc540",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  idnumber2: {
    color: "#880000",
    fontFamily: "Times",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: ("bold", "700"),
  },
  fontstyle: {
    fontSize: 32,
    fontWeight: 600,
  },
  buttomMargin: {
    width: "100%",
    height: 60,
  },
});
