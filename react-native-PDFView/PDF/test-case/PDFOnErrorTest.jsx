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

export function PDFOnErrorTest() {
  const [onErrorValue, setOnErrorValue] = useState('no error');

  return (
    <Tester>
      <ScrollView>
        <TestSuite name="Test onError">
          <TestCase itShould="onError 加载失败">
            <Text>这里显示error信息:{onErrorValue}</Text>
            <View style={{height: 500}}>
              <PDFView
                style={{flex: 1}}
                resource="https://www.w1233.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                resourceType="url"
                onError={error => {
                  setOnErrorValue(error.message);
                }}
              />
            </View>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}
