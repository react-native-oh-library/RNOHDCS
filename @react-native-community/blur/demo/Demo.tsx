import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";

export  function BlurDemo() {
  return (
    <View style={styles.container}>
      <Image
        key={'blurryImage'}
        source={{ uri:"https://avatars0.githubusercontent.com/u/15728691?s=460&v=4" }}
        style={styles.absolute}
      />
      <Text style={styles.absolute}>Hi, I am some blurred text</Text>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Text>I'm the non blurred text because I got rendered on top of the BlurView</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});