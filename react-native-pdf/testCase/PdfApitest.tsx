import React, { useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import Pdf from "react-native-pdf";

export default function PdfApitest() {
  const localSource = require("../assets/pdfApi.pdf");
  const [onLoadCompleteResult1, setOnLoadComplete1] = React.useState(0.0);
  const [onLoadCompleteResult2, setOnLoadComplete2] = React.useState('');
  const [onLoadProgressResult, setOnLoadProgress] = React.useState(0);
  const [onPageChangedResult1, setOnPageChanged1] = React.useState(0);
  const [onPageChangedResult2, setOnPageChanged2] = React.useState(0);
  const [onScaleChangedResult, setOnScaleChanged] = React.useState(0);
  const [onPressLinkResult, setOnPressLink] = React.useState('');
  return (
    <View style={{ flex: 1 }}>
      <Tester>
        <TestSuite name={'PDFTest'}>
          <TestCase itShould={'PDF show'}>
            <View style={{ width: 350, height: 350 }}>
              <Pdf
                source={localSource}
                onLoadProgress={(percent) => {
                  setOnLoadProgress(percent);
                }}
                onLoadComplete={(numberOfPages, filePath) => {
                  setOnLoadComplete1(numberOfPages);
                  setOnLoadComplete2(filePath);
                }}
                onPageChanged={(page, numberOfPages) => {
                  setOnPageChanged1(page);
                  setOnPageChanged2(numberOfPages);
                }}
                onScaleChanged={(scale) => {
                  setOnScaleChanged(scale)
                }}
                onPressLink={(uri) => {
                  setOnPressLink(uri)
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>

      <ScrollView bounces={false}>
        <Tester>
        <TestCase itShould={'PDF run by imperative onLoadProgress invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>percent:{onLoadProgressResult}</Text>
            </View>
          </TestCase>
          <TestCase itShould={'PDF run by imperative onLoadComplete invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>numberOfPages:{onLoadCompleteResult1}</Text>
              <Text style={styles.resultText}>filePath:{onLoadCompleteResult2}</Text>
            </View>
          </TestCase>
          <TestCase itShould={'PDF run by imperative onPageChanged invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>page:{onPageChangedResult1}</Text>
              <Text style={styles.resultText}>numberOfPages:{onPageChangedResult2}</Text>
            </View>
          </TestCase>
          <TestCase itShould={'PDF run by imperative onScaleChanged invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>scale:{onScaleChangedResult}</Text>
            </View>
          </TestCase>
          <TestCase itShould={'PDF run by imperative onPressLink invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>uri:{onPressLinkResult}</Text>
            </View>
          </TestCase>
        </Tester>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  testCaseBlock: {
    flexDirection: "column",
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: 'center'

  },
  resultText: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  pdfCaseBlock: {
    flex: 1,
    width: 340,
    height: 340,
  },
  pdfRedCaseBlock: {
    flex: 1,
    width: 340,
    height: 340,
    backgroundColor: 'red'
  },
});
