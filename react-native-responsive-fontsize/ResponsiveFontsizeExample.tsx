import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

export function ResponsiveFontsizeDemo() {
  return (
    <ScrollView style={{ flex: 1, height: '100%' }}>
      <Tester>
        <TestSuite name="SponssiveFontsize">
          <TestCase itShould='fontSize RFValue(16, 500)'>
            <Text style={{ ...styles.welcome, fontSize: RFValue(16, 500) }}>Hello World RFValue(16, 500)</Text>
          </TestCase>
          <TestCase itShould='fontSize RFValue(24, 500)'>
            <Text style={{ ...styles.welcome, fontSize: RFValue(24, 500) }}>Hello World RFValue(24, 500)</Text>
          </TestCase>
          <TestCase itShould='fontSize RFValue(24, 640)'>
            <Text style={{ ...styles.welcome, fontSize: RFValue(24, 640) }}>Hello World RFValue(24, 640)</Text>
          </TestCase>
          <TestCase itShould='fontSize RFPercentage(2)'>
            <Text style={{ ...styles.instructions, fontSize: RFPercentage(2) }}>Hello World RFPercentage(2)</Text>
          </TestCase>
          <TestCase itShould='fontSize RFPercentage(4)'>
            <Text style={{ ...styles.instructions, fontSize: RFPercentage(4) }}>Hello World RFPercentage(4)</Text>
          </TestCase>
          <TestCase itShould='fontSize RFPercentage(8)'>
            <Text style={{ ...styles.instructions, fontSize: RFPercentage(8) }}>Hello World RFPercentage(8)</Text>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  welcome: {
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    margin: 10,
  },
});
