import React from "react";
import { Button, View,Dimensions } from "react-native";
import KeyboardAnimationTemplate from "../../components/KeyboardAnimation";
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
const {width,height} = Dimensions.get('window');
export function Hook_useKeyboardAnimation() {
  return <View style={{ flex: 1 }}>
    <Tester>
      <TestSuite name="验证Hook：useKeyboardAnimation">
        <View style={{ height: height-160 }}>
          <KeyboardAnimationTemplate />
        </View>

      </TestSuite>
    </Tester>
  </View>

}
