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

export function PDFResourceTest() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test resource & resourceType">
          <TestCase itShould={'resource base64'}>
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource={base64.document}
                resourceType="base64"
                // fadeInDuration={2000}
              />
            </View>
          </TestCase>
          <TestCase itShould="(设备需要联网)resource url（https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf）">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                resourceType="url"
              />
            </View>
          </TestCase>
          <TestCase itShould="resource file">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="pdf.pdf"
                resourceType="file"
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
