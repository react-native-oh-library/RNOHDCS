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

export function PDFFileFromTest() {
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test fileFrom">
          <TestCase itShould="fileFrom files">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="files.pdf"
                resourceType="file"
                fileFrom="files"
              />
            </View>
          </TestCase>

          <TestCase itShould="fileFrom temp">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="temp.pdf"
                resourceType="file"
                fileFrom="temp"
              />
            </View>
          </TestCase>

          <TestCase itShould="fileFrom cache">
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="cache.pdf"
                resourceType="file"
                fileFrom="cache"
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
