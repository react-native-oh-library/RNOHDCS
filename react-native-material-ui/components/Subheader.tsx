import { View, StyleSheet, Text, ScrollView, UIManager, Platform, ToastAndroid } from 'react-native';
import React, { Component, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Subheader  } from 'react-native-material-ui';
import { Tester, TestSuite, TestCase } from "@rnoh/testerino"

const SubheaderDemo =()=>{
  return (
    <Tester>
      <ScrollView style={{marginBottom:70}}> 
      <TestSuite name='Subheader（副标题） text 文本'>
        <TestCase itShould='Props:text(文本)'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text'></Subheader>
           </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Subheader（副标题） inset 后移 '>
        <TestCase itShould='Props:inset(后移) true'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={true}></Subheader>
           </View>
        </TestCase>
        <TestCase itShould='Props:inset(后移) false'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={false}></Subheader>
           </View>
        </TestCase>
      </TestSuite>
      <TestSuite name='Subheader（副标题） lines 行数 '>
        <TestCase itShould='Props:lines(行数) 两行'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={true} lines={2}></Subheader>
           </View>
        </TestCase>
        <TestCase itShould='Props:lines(行数) 一行'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={true} lines={1}></Subheader>
           </View>
        </TestCase>
      </TestSuite>

      <TestSuite name='Subheader（副标题） style 样式 '>
        <TestCase itShould='Props:style(样式) 字体颜色为红色'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={true} lines={2} style={{text:{color:'red'}}}></Subheader>
           </View>
        </TestCase>
        <TestCase itShould='Props:style(样式) 字体大小为20'>
           <View style={{height:200}}>
              <Subheader text='Subheader text,Subheader text,Subheader text,Subheader text,Subheader text' inset={true} lines={1} style={{text:{fontSize:20}}}></Subheader>
           </View>
        </TestCase>
      </TestSuite>
      </ScrollView>
    </Tester>
  )
}

export default SubheaderDemo