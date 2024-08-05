import React, {useState, useRef} from 'react';
import {StyleSheet, View, ScrollView, Text, Image, Button} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

export const Disable = () => {
  const [disabled1, setDisabled1] = useState(false);
  return (
    <Tester>
      <TestSuite name="disable(禁用国家选择器)">
        <TestCase tags={['C_API']} itShould="disable:true">
          <PhoneInput disabled={disabled1} />
          <Button
            title="禁用，disable:true"
            onPress={() => {
              setDisabled1(true);
            }}
          />
          <Button
            title="取消禁用，disable:false"
            onPress={() => {
              setDisabled1(false);
            }}
          />
        </TestCase>
        <TestCase tags={['C_API']} itShould="disable:false">
          <PhoneInput disabled={false} />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};
