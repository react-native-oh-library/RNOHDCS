import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Barcode from "react-native-barcode-builder";
import { Colors } from "react-native/Libraries/NewAppScreen";
export const BarcodeBuilderExample = () => {
  const error = (e) => {
    console.log(e, "click");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
      }}
    >
      <Text style={{ fontSize: 50 }}>This is a Barcode Builder</Text>
      <Barcode
        value=" hello~~~" 
        format="CODE128" 
        text="hello world" 
        onError={error} 
        width={5} 
        height={200}
      />
    </View>
  );
};