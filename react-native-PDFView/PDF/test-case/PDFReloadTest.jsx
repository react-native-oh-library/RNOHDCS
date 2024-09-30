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
  Button,
  Alert,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import PDFView from 'react-native-view-pdf';
import base64 from '../base64.json';

export function PDFReLoadTest() {
  const [reloadTimes, setReloadTimes] = React.useState(0);
  const [canReload, setCanReload] = React.useState(true);
  const _pdfRef = React.createRef();
  reloadPDF = async () => {
    if (!canReload) {
      return;
    }
    setCanReload(false);
    try {
      console.log("do!");
      await _pdfRef.current.reload();
    } catch (err) {
    }
    setReloadTimes(reloadTimes + 1);
    setCanReload(true);
  };
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test reload">
          <TestCase itShould={'Test reload'}>
            <Text>reload times:{reloadTimes}</Text>
            <View style={{height: 500}}>
              <PDFView
                ref={_pdfRef}
                style={{flex: 1}}
                resource={base64.document}
                resourceType="base64"
              />
            </View>
            <Button onPress={this.reloadPDF} title="Reload PDF" />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
