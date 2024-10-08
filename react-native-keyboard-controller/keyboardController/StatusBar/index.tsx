import React, { useState } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import KeyboardAnimationTemplate from "../components/KeyboardAnimation";

import type { StatusBarStyle } from "react-native";
import {KeyboardAvoidingView} from "react-native-keyboard-controller";
export  function StatusBarManipulation() {
  const [color, setColor] = useState("#00FF0000");
  const [barStyle, setBarStyle] = useState<StatusBarStyle>("light-content");
  const [hidden, setHidden] = useState(false);
  const [animated, setAnimated] = useState(true);
  function randomColor() {
    return "#" + Math.random().toString(16).slice(-6);
  }
  return (
    <KeyboardAvoidingView style={{ flex:1, backgroundColor: "pink" }}>
      <StatusBar
        backgroundColor={color}
        barStyle={barStyle}
        hidden={hidden}
        animated={animated}
        translucent
      />
      {/* <KeyboardAnimationTemplate /> */}
      <View style={{height:'200',width:'100%', flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <Text testID="555" style={{color:'blue',padding:20,fontSize:15}}  onPress={() => setHidden(!hidden)}>{`Set ${hidden ? "shown" : "hidden"}`}</Text>
        <Text testID="44"  style={{color:'blue',padding:20,fontSize:15}} onPress={() => setColor(`${randomColor()}`)}>{'Update color'}</Text>
        <Text testID="9"  style={{color:'blue',padding:20,fontSize:15}} onPress={() => setAnimated(!animated)}>{`Set ${!animated ? "" : "not"} animated`}</Text>
        <Text testID="996"  style={{color:'blue',padding:20,fontSize:15}}   onPress={() =>
          setBarStyle(
            barStyle === "light-content" ? "dark-content" : "light-content",
          )
        }>{`Change ${barStyle}`}</Text>
      </View>
  
    </KeyboardAvoidingView>
  );
}
