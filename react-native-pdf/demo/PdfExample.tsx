import React from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import Pdf from "react-native-pdf";

export default function PdfExample() {
  const localSource = require("../assets/pdfPassword.pdf");
  const spacing = 10;
  const scale = 1;
  const password = '74108520';
  const page = 0;
  const minScale = 0.5;
  const maxScale = 5;
  const fitPolicy = 1;
  return (
    <View style={styles.sectionContainer}>
      <Pdf
        source={localSource}
        style={styles.pdf}
        spacing={spacing}
        scale={scale}
        password={password}
        page={page}
        minScale={minScale}
        maxScale={maxScale}
        fitPolicy={fitPolicy}
        onError={(error) => {
          console.log(`onError parameter of error: ${error}`);
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`onLoadComplete parameter of numberOfPages: ${numberOfPages}`);
          console.log(`onLoadComplete parameter of filePath: ${filePath}`);
        }}
        onLoadProgress={(percent) => {
          console.log(`onLoadProgress parameter of percent: ${percent}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`onPageChanged parameter of page: ${page}`);
          console.log(`onPageChanged parameter of numberOfPages: ${numberOfPages}`);
        }}
        onScaleChanged={(scale) => {
          console.log(`onScaleChanged parameter of scale: ${scale}`);
        }}
        onPressLink={(uri) => {
          console.log(`onScaleChanged parameter: ${uri}`);
        }}
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