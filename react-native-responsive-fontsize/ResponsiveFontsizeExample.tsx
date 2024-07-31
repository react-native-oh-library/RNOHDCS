import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { View, Text, StyleSheet } from 'react-native';
import { TestSuite, Tester ,TestCase} from '@rnoh/testerino';

const styles = StyleSheet.create({
  welcome: {
    fontSize: RFValue(24, 580),
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    margin: 10,
    fontSize: RFPercentage(5),
  },
});
const App = () => {
  return (
    <Tester>
      <TestSuite name="SponssiveFontsize">
        <TestCase itShould='fontSize RFValue(24, 580)'>
          <Text allowFontScaling style={styles.welcome}>Hello World1</Text>
        </TestCase>
        <TestCase itShould='fontSize RFPercentage(5)'>
          <Text allowFontScaling style={styles.instructions}>Hello World1</Text>
        </TestCase>
    </TestSuite>
    </Tester>
    
  )
}

export default App;

