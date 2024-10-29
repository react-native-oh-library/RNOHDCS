import React,{useEffect} from "react";
import { Button, View,StyleSheet ,Dimensions} from "react-native";
import { useKeyboardController } from "react-native-keyboard-controller";

import KeyboardAnimationTemplate from "../../components/KeyboardAnimation";
import { Tester, TestSuite, TestCase } from "@rnoh/testerino";
const {width,height} = Dimensions.get('window');
export function Hook_useKeyboardController() {
  const { setEnabled, enabled } = useKeyboardController();
  useEffect(() => {
    return () => {
       setEnabled(true)
    }
  }, [])
  return (
    <View>
      <Tester>
        <TestSuite name="验证Hook：useKeyboardController" >
          <View style={styles.content}>
            <Button
              title={enabled ? "Enabled" : "Disabled"}
              onPress={() => setEnabled(!enabled)}
              testID="toggle_button"
            />
            <KeyboardAnimationTemplate />
          </View>

        </TestSuite>
      </Tester>
    </View>
  );
}
const styles = StyleSheet.create({
  content:{
    display:'flex',
    flexDirection:'column',
    height: height-160
  }
})