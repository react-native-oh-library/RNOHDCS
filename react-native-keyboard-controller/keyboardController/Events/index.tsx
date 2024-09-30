import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, ScrollView, View, } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  KeyboardEvents,
  useResizeMode,
} from "react-native-keyboard-controller";


const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    padding: 20,
    height: 300,
    fontSize: 14,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#3c3c3c",
  },
  text: {
    height: 100,
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginBottom: 40
  },
});

export function Events() {
  const [keyboardEventText, setKeyboardEventText] = useState('');
  const [keyboardDidShow, setKeyboardDidShow] = useState('');
  useResizeMode();

  useEffect(() => {
    
    const shown = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      const str = '###keyboardDidShow:'+JSON.stringify(e)
      console.log(str);
      setKeyboardEventText(str)
    });
    const hid = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      const str = '###keyboardDidHide:'+JSON.stringify(e)
      console.log(str);
      setKeyboardEventText(str)
    });

    return () => {
    
      shown.remove();
      hid.remove();
    };
  }, []);

  return (
    // <Tester>
      <ScrollView style={styles.content}>
        {/* <TestSuite name='KeyboardEvents'> */}
          <View style={styles.section}>
             <Text style={styles.text}>{keyboardEventText}</Text>
             <TextInput
            style={{
              width: '100%',
              marginTop: 50,
              height: 50,
              backgroundColor: "yellow",
            }}
            testID="text_input"
          />
          </View>
        {/* </TestSuite> */}
      </ScrollView>
      // </Tester>
      )

}


