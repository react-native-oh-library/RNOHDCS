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

export function PDFOnLoadTest() {
  const [onLoadValue, setOnLoadValue] = useState('no load');

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test onLoad">
          <TestCase itShould="onLoad 加载完成">
            <Text>这里显示加载完成信息:{onLoadValue}</Text>
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource={base64.document}
                resourceType="base64"
                onLoad={() => {
                  setOnLoadValue('load complete');
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
