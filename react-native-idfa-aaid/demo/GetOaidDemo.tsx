/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import ReactNativeIdfaAaid, { AdvertisingInfoResponse } from "react-native-idfa-aaid";
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

export default function App(): JSX.Element {
  const [info, setInfo] = useState(AdvertisingInfoResponse);
  const [info_2, setInfo_2] = useState(AdvertisingInfoResponse);

  const testGetAdvertisingInfo = async () => {
    const result: AdvertisingInfoResponse = await ReactNativeIdfaAaid.getAdvertisingInfo();
    setInfo(result as any);
  };
  const testgetAdvertisingInfoAndCheckAuthorization = async () => {
    const result = await ReactNativeIdfaAaid.getAdvertisingInfoAndCheckAuthorization(true);
    setInfo_2(result as any);
  };


  return (
    <Tester style={styles.container}>
      <TestSuite name="GetOaidModuleTests">
        <TestCase
          itShould="Test getAdvertisingInfo method"
          tags={['C_API']}
          fn={({ expect }) => {
            ReactNativeIdfaAaid.getAdvertisingInfo()
              .then((res: AdvertisingInfoResponse) => {
                expect(res.oaid, 'OAID should not be null');
                expect(!res.isAdTrackingLimited, 'Ad tracking should not be limited');
              });
          }}
        />
      </TestSuite>
      <TestSuite name="GetOaidModuleExample">
        <TestCase itShould="getAdvertisingInfo">
          <Button
            title="get OAID"
            onPress={testGetAdvertisingInfo}
          />
          {/* 展示从GetOaidModule中获取的广告信息 */}
          <Text>{JSON.stringify(info)}</Text>
        </TestCase>
      </TestSuite>

      <TestSuite name="GetOaidModuleTests">
        <TestCase
          itShould="Test getAdvertisingInfoAndCheckAuthorization method"
          tags={['C_API']}
          fn={({ expect }) => {
            ReactNativeIdfaAaid.getAdvertisingInfoAndCheckAuthorization(true)
              .then((res: AdvertisingInfoResponse) => {
                expect(res.oaid, 'OAID should not be null');
                expect(!res.isAdTrackingLimited, 'Ad tracking should not be limited');
              });
          }}
        />
      </TestSuite>
      <TestSuite name="GetOaidModuleExample">
        <TestCase itShould="getAdvertisingInfoAndCheckAuthorization">
          <Button
            title="get OAID"
            onPress={testgetAdvertisingInfoAndCheckAuthorization}
          />
          {/* 展示从GetOaidModule中获取的广告信息 */}
          <Text>{JSON.stringify(info_2)}</Text>
        </TestCase>
      </TestSuite>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  info: {
    margin: 16,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'flex-start',
  },
});



