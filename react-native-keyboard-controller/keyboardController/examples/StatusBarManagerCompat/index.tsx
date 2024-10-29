import React, { useState } from "react";
import { Button, StatusBar, Text, View, StatusBarStyle, StyleSheet } from "react-native";
import { TestCase, TestSuite, Tester } from "@rnoh/testerino";

export function StatusBarManagerCompat() {
  const [color, setColor] = useState("red");
  const [barStyle, setBarStyle] = useState<StatusBarStyle>("light-content");
  const [hidden, setHidden] = useState(false);
  const [translucent, setTranslucent] = useState(false);
  function randomColor() {
    return "#" + Math.random().toString(16).slice(-6);
  }
  return (
    <View style={styles.content}>
      <StatusBar
        backgroundColor={color}
        barStyle={barStyle}
        hidden={hidden}
        translucent={translucent}
      />
      <Tester>
        <TestSuite name=''>
          <TestCase itShould='隐藏状态栏：setHidden' tags={['C_API']}>
            <Button title="隐藏" testID="setHidden" onPress={() => setHidden(true)}></Button>
            <Button title="不隐藏" testID="setHidden" onPress={() => setHidden(false)}></Button>
          </TestCase>
          {/* <TestCase itShould='设置状态栏背景颜色:setColor' tags={['C_API']}>
                  <Button title="setColor" testID="setColor" onPress={()=>{setColor(`${randomColor()}`)}}></Button>
                  </TestCase>
                  <TestCase itShould='设置状态栏是否透明:setTranslucent' tags={['C_API']}>
                  <Button title="透明" testID="setTranslucent" onPress={()=>{setTranslucent(true)}}></Button>
                  <Button title="不透明" testID="setTranslucent" onPress={()=>{setTranslucent(false)}}></Button>
                  </TestCase> */}
          <TestCase itShould='设置状态栏样式:setStyle' tags={['C_API']}>
            <Button title="黑色样式" testID="setStyle" onPress={() => setBarStyle("dark-content")}></Button>
            <Button title="白色样式" testID="setStyle" onPress={() => setBarStyle("light-content")}></Button>
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
  text: {
    color: 'blue', padding: 20, fontSize: 15
  }
})