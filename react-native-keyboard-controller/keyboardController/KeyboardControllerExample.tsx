import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
  import { KeyboardControllerView,NativeEvent,KeyboardEvents,KeyboardProvider } from "react-native-keyboard-controller";
import styles from "./styles";
import type { KeyboardAvoidingViewProps } from "react-native";


type Behavior = KeyboardAvoidingViewProps["behavior"];
const behaviors: Behavior[] = ["padding", "height", "position"];

export  function KeyboardAvoidingViewExample() {
  useEffect(() => {
    const show = KeyboardEvents.addListener("keyboardWillShow", (e) => {
      const delay = new Date().getTime() - e.timestamp;
      console.log(`###keyboardWillShow Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`)
    
    });
    const shown = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      const delay = new Date().getTime() - e.timestamp;
      console.log(`###keyboardDidShow Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`)
    });
    const hide = KeyboardEvents.addListener("keyboardWillHide", (e) => {
      const delay = new Date().getTime() - e.timestamp;
      console.log(`###keyboardWillHide Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`)

    });
    const hid = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      const delay = new Date().getTime() - e.timestamp;
      console.log(`###keyboardDidHide Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`)
    });

    return () => {
      show.remove();
      shown.remove();
      hide.remove();
      hid.remove();
    };
  }, []);
   const  onKeyboardMoveStart = (e:any)=>{

     console.log('####onKeyboardMove',e)
  }
  const  onKeyboardMoveEnd = (e:any)=>{
    console.log('####onKeyboardMoveEnd',e)
 }
  return (
    <KeyboardControllerView
      onKeyboardMove={(e)=>onKeyboardMoveStart(e)}
      onKeyboardMoveEnd={(e)=>onKeyboardMoveEnd(e)}
      style={styles.content}
    >
      <View style={styles.inner}>
        <Text style={styles.heading}>Header</Text>
        <View>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#7C7C7C"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7C7C7C"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardControllerView>
  );
}
