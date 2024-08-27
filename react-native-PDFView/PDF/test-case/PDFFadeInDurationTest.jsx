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

export function PDFFadeInDurationTest() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test fadeInDuration">
          <TestCase itShould="fadeInDuration={1000}">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                resourceType="url"
                enableAnnotations={true}
                fadeInDuration={1000}
              />
            </View>
          </TestCase>
          <TestCase itShould="fadeInDuration={5000}">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                resourceType="url"
                enableAnnotations={true}
                fadeInDuration={5000}
              />
            </View>
          </TestCase>
          <TestCase itShould="fadeInDuration={10000}">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                resourceType="url"
                enableAnnotations={true}
                fadeInDuration={10000}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
