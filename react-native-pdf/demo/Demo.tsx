import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";

export function PdfExample() {
  const source = require("../assets/test.pdf");
  return (
    <View style={styles.sectionContainer}>
      <Pdf
        source={source}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});