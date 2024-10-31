import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import React from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import RNBugly from 'rn-bugly';


export function BuglyTest() {

  return (
    <Tester>
      <ScrollView keyboardShouldPersistTaps={'always'} keyboardDismissMode={'none'}>
        <TestSuite name="BuglyTestCase">

          <TestCase itShould="setAppVersion"
          >
            <Button title='setAppVersion' onPress={() => {
              console.log("setAppVersion");
              RNBugly.setAppVersion("2.0.3");
            }} />
          </TestCase>

          <TestCase itShould="setAppChannel"
          >
            <Button title='setAppChannel' onPress={() => {
              console.log("setAppChannel");
              RNBugly.setAppChannel("HarmonyOS");
            }} />
          </TestCase>

          <TestCase itShould="setUserId"
          >
            <Button title='setUserId' onPress={() => {
              console.log("setUserId");
              RNBugly.setUserId("12345678");
            }} />
          </TestCase>

          <TestCase itShould="setDeviceID"
          >
            <Button title='setDeviceID' onPress={() => {
              console.log("setDeviceID");
              RNBugly.setDeviceID("555555555888");
            }} />
          </TestCase>

          <TestCase itShould="setDeviceModel"
          >
            <Button title='setDeviceModel' onPress={() => {
              console.log("setDeviceModel");
              RNBugly.setDeviceModel("HUAWEI Mate 60 Pro");
            }} />
          </TestCase>

          <TestCase itShould="init"
          >
            <Button title='init' onPress={() => {
              console.log("init");
              RNBugly.init("appid", "appkey");
            }} />
          </TestCase>

          <TestCase itShould="putUserData"
          >
            <Button title='putUserData' onPress={() => {
              console.log("putUserData");
              RNBugly.putUserData("name", "xiaoli");
            }} />
          </TestCase>

          <TestCase itShould="postException"
          >
            <Button title='postException' onPress={() => {
              console.log("postException");
              RNBugly.postException({ category: 1, errorType: "test", errorMsg: "throw new err" });
            }} />
          </TestCase>

          <TestCase itShould="crash"
          >
            <Button title='crash' onPress={() => {
              console.log("crash");
              RNBugly.testCrash(1);
            }} />
          </TestCase>

          <TestCase itShould="appfree"
          >
            <Button title='appfree' onPress={() => {
              console.log("appfree");
              RNBugly.testCrash(2);
            }} />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

