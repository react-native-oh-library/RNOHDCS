import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import "react-native-get-random-values";

export const GetRandomValues = () => {
  const [randomValue, setRandomValue] = useState < any > [];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    },
  });

  const clickBtn = () => {
    const getRandomValues = global?.crypto?.getRandomValues(new Uint8Array(4));
    console.log(JSON.stringify(getRandomValues), "click");

    const array = Object.values(getRandomValues);
    console.log(array, "click");

    setRandomValue(array);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> 点击获取随机数 </Text>
      <Button onPress={clickBtn} title="click" />
      {randomValue?.map((item: any, index: number) => {
        return <Text key={index}>{item}</Text>;
      })}
    </View>
  );
};