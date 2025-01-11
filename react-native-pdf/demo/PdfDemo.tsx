import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";
import PagerView from "react-native-pager-view";

export function PdfExample() {
  const source = { uri: 'https://www-file.huawei.com/minisite/media/annual_report/annual_report_2022_cn.pdf', cache: true };
  // const source = require("../assets/test.pdf");

  return (
    <View style={styles.sectionContainer}>
      <PagerView style={styles.sectionContainer} initialPage={0}>
        <View key="1">
          <Pdf
            source={source}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf}
          />
        </View>
        <View key="2">
          <Pdf
            source={source}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf}
          />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});