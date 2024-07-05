var React = require('react-native');
var {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView
} = React;

import { phonecall, text, textWithoutEncoding, email, web } from 'react-native-communications';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

const RNCommunications = () => {
  const handleButton1Press = () => {
    phonecall('0123456789', false)
  }

  const handleButton2Press = () => {
    email(['your-email-address@xxx.com'], null, null, 'My Subject', 'My body text')
  }

  const handleButton3Press = () => {
    text('0123456789')
  }

  const handleButton4Press = () => {
    web('https://www.baidu.com')
  }

  const handleButton5Press = () => {
    textWithoutEncoding('0123456789')
  }

  const handleButton6Press = () => {
    phonecall('0123456789', true)
  }

  const handleButton7Press = () => {
    text('0123456789', 'Protocol://example.com?param=value&another=value2')
  }

  const handleButton8Press = () => {
    textWithoutEncoding('0123456789', 'Protocol://example.com?param=value&another=value2')
  }

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="RNCommunications">
          <TestCase itShould="phonecall-arg:phonenumber,prompt=false" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
              <Text>Make phonecall--first</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="phonecall-arg:phonenumber,prompt=true(unsupport)" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton6Press}>
              <Text>Make phonecall--second</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="email(unsupport)" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
              <Text>Send an email</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="text-arg:phonenumber" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton3Press}>
              <Text>Send a text--first</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="text-arg:phonenumber,body(unsupport)" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton7Press}>
              <Text>Send a text--second</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="web-arg:url" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton4Press}>
              <Text>web to baidu</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="textWithoutEncoding-arg:phonenumber" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton5Press}>
              <Text>Send a textWithoutEncoding--first</Text>
            </TouchableOpacity>
          </TestCase>

          <TestCase itShould="textWithoutEncoding-arg:phonenumber,body(unsupport)" tags={['C_API']}>
            <TouchableOpacity style={styles.button} onPress={handleButton8Press}>
              <Text>Send a textWithoutEncoding--second</Text>
            </TouchableOpacity>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  }
});

export default RNCommunications;