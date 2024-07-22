import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import SechartsLine from './SechartsLineDemo';
import SechartsPie from './SechartsPieDemo';
import SechartsCandlestick from './SechartsCandlestickDemo';
import SechartsBar from './SechartsBarDemo';

export function SechartsTest() {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="SechartsDemo">
          <TestCase
            itShould={`Test:height:400,width:350 
            backgroundColor={'#499C9F'}
          option:{
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                color: l1,
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            }`}>
            <SechartsLine />
          </TestCase>
          <TestCase
            itShould={`Test: onPress function
          height:600,width:300 
          backgroundColor={'#468B58'}
          option:{
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [120, 200, 150, 80, 70],
                type: 'bar'
              }
            ]
          }`}>
            <SechartsBar />
          </TestCase>
          <TestCase
            itShould={`Test:option、backgroundColor
            backgroundColor={'white'}
          option:{
            title: {
              text: '测试饼状图',
              subtext: '假数据',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          `}>
            <SechartsPie />
          </TestCase>
          <TestCase
            itShould={`Test:option
          option:{
            xAxis: {
              data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
            },
            yAxis: {},
            series: [
              {
                type: 'candlestick',
                data: [
                  [20, 34, 10, 38],
                  [40, 35, 30, 50],
                  [31, 38, 33, 44],
                  [38, 15, 5, 42]
                ]
              }
            ]
          }
          `}>
            <SechartsCandlestick />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
