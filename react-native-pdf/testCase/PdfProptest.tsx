import React, { useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import Pdf from "react-native-pdf";

export default function PdfProptest() {
  const localSource = require("../assets/pdfPassword.pdf");
  const password = '74108520';
  const [style, setStyle] = React.useState(styles.pdfCaseBlock);
  const [page, setPage] = React.useState(3);
  const [scale, setScale] = React.useState(0.9);
  const [minScale, setMinscale] = React.useState(0.5);
  const [maxScale, setMaxscale] = React.useState(6);
  const [spacing, setSpacing] = React.useState(30);
  const [fitPolicy, setFitPolicy] = React.useState(3);
  return (
    <View style={{ flex: 1 }}>
      <Tester>
        <TestSuite name={'PDFTest'}>
          <TestCase itShould={'webPDF show'}>
            <View style={{ width: 350, height: 350 ,zIndex: -30,}}>
              <Pdf
                style={style}
                spacing={spacing}
                source={localSource}
                scale={scale}
                password={password}
                page={page}
                minScale={minScale}
                maxScale={maxScale}
                fitPolicy={fitPolicy}
              />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>

      <ScrollView bounces={false}>
        <Tester>
          <TestCase itShould={'Pdf minScale prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='0.1'
                onPress={async () => {
                  setMinscale(0.1)
                }}></Button>
              <Button title='0.5'
                onPress={async () => {
                  setMinscale(0.5)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf maxScale prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='5'
                onPress={async () => {
                  setMaxscale(5)
                }}></Button>
              <Button title='10'
                onPress={async () => {
                  setMaxscale(10)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf scale prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='1'
                onPress={async () => {
                  setScale(1)
                }}></Button>
              <Button title='3'
                onPress={async () => {
                  setScale(3)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf page prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='1'
                onPress={async () => {
                  setPage(1)
                }}></Button>
              <Button title='3'
                onPress={async () => {
                  setPage(3)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf style prop type.'}>
            <View style={styles.testCaseBlock}>
              <Button title='red'
                onPress={async () => {
                  setStyle(styles.pdfRedCaseBlock)
                }}></Button>
              <Button title='revert'
                onPress={async () => {
                  setStyle(styles.pdfCaseBlock)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf spacing prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='10'
                onPress={async () => {
                  setSpacing(10)
                }}></Button>
              <Button title='90'
                onPress={async () => {
                  setSpacing(90)
                }}></Button>
            </View>
          </TestCase>
          <TestCase itShould={'Pdf fitPolicy prop.'}>
            <View style={styles.testCaseBlock}>
              <Button title='0'
                onPress={async () => {
                  setFitPolicy(0)
                }}></Button>
              <Button title='1'
                onPress={async () => {
                  setFitPolicy(1)
                }}></Button>
              <Button title='2'
                onPress={async () => {
                  setFitPolicy(2)
                }}></Button>
            </View>
          </TestCase>

        </Tester>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  testCaseBlock: {
    flexDirection: "row",
    width: "100%",
    height: 50,
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
