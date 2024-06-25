import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import SechartsLine from './SechartsLineDemo';
import SechartsPie from './SechartsPieDemo';
import SechartsCandlestick from './SechartsCandlestickDemo';
import SechartsBar from './SechartsBarDemo';


export function SechartsTest() {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="SechartsDemo">
          <TestCase itShould={`高400*宽350 折线图`}>
            <SechartsLine />
          </TestCase>
          <TestCase itShould={`高600*宽300绿色背景 基础柱状图`}>
            <SechartsBar />
          </TestCase>
          <TestCase itShould={`饼状图`}>
            <SechartsPie />
          </TestCase>
          <TestCase itShould={`K线图`}>
            <SechartsCandlestick />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>

  );


}

