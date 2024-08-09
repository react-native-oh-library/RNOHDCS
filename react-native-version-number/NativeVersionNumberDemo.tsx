import { TestSuite, Tester, TestCase } from '@rnoh/testerino';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import  VersionNumber  from 'react-native-version-number';
export function NativeVersionNumberDemoCom() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  return (
    <Tester>
      <ScrollView style={styles.container}>
        <TestSuite name='HyperlinkDemo'>
          <TestCase itShould='{injectViewProps}'>
            <Text>{VersionNumber.appVersion}</Text>
            <Text>{VersionNumber.buildVersion}</Text>
            <Text>{VersionNumber.bundleIdentifier}</Text>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
});

