import * as React from 'react';
import { Text } from 'react-native';
import VersionNumber from 'react-native-version-number';
import { Tester, TestCase } from '@rnoh/testerino';

export default function () {
  return (
    <Tester>
      <TestCase itShould='应用程序版本：appVersion'>
        <Text>appVersion:{VersionNumber.appVersion}</Text>
      </TestCase>
      <TestCase itShould='构建版本：buildVersion'>
        <Text>buildVersion:{VersionNumber.buildVersion}</Text>
      </TestCase>
      <TestCase itShould='应用标识：bundleIdentifier'>
        <Text>bundleIdentifier:{VersionNumber.bundleIdentifier}</Text>
      </TestCase>
    </Tester>
  );
};