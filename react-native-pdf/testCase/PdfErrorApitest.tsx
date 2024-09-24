import React, { useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import Pdf from "react-native-pdf";

export default function PdfErrorApitest() {
  const localSource = require("../assets/pdfPassword.pdf");
  const password = '6666666';
  const [onErrorResult, setOnErrorResult] = useState(new Error());
  return (
    <View style={{ flex: 1 }}>
      <Tester>
        <TestSuite name={'PDFTest'}>
          <TestCase itShould={'PDF show'}>
            <View style={{ width: 350, height: 350 }}>
              <Pdf
                source={localSource}
                password={password}
                onError={(error) => {
                  console.log(`onError parameter of error: ${error}`);
                  setOnErrorResult(error as React.SetStateAction<Error>)
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
      <ScrollView bounces={false}>
        <Tester>
        <TestCase itShould={'PDF run by imperative setOnError invoke.'}>
            <View style={styles.testCaseBlock}>
              <Text style={styles.resultText}>error:{onErrorResult.message}</Text>
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
