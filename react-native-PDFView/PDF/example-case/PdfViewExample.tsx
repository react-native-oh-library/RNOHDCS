import React, {useState} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import PDFView from 'react-native-view-pdf';
import base64 from '../base64.json';

export function PdfViewExample() {
  return (
    <View style={{backgroundColor: 'white', width: '100%', flex: 1}}>
      <View style={{flex: 1}}>
        <PDFView
          style={{flex: 1}}
          resource="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          resourceType="url"
          key={'url'}></PDFView>
        <PDFView
          style={{flex: 1}}
          resource={base64.document}
          resourceType="base64"
          fadeInDuration={2000}
          enableAnnotations={true}
          key={'base64'}></PDFView>
      </View>
    </View>
  );
}
