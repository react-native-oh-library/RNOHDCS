import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  ColorValue,
  Image,
  ScrollView,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import PDFView from 'react-native-view-pdf';
import base64 from '../base64.json';

export function PDFStyleTest() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test style">
          <TestCase itShould="style={{ width:400,marginTop:30, flex: 1}}">
            <ScrollView horizontal={true}>
            <View style={{height: 500}}>
              <PDFView
                resource={base64.document}
                resourceType="base64"
                style={{width: 400, marginTop: 30, flex: 1}}
              />
              <PDFView
                resource={base64.document}
                resourceType="base64"
                style={{width: 400, marginTop: 30, flex: 1}}
              />
            </View>
            </ScrollView>
          </TestCase>
          <TestCase itShould="style={{ width:300, marginTop:10, flex: 1}}">
            <View style={{height: 500}}>
              <PDFView
                resource={base64.document}
                resourceType="base64"
                style={{width: 300, marginTop: 10, flex: 1}}
              />
              <PDFView
                resource={base64.document}
                resourceType="base64"
                style={{width: 300, marginTop: 10, flex: 1}}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
