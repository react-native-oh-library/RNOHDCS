var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} = React;

import { phonecall, text, textWithoutEncoding, email, web } from 'react-native-communications';


const RNCommunications = () => {
  const handleButton1Press = () => {
    phonecall('0123456789', false)
  }

  const handleButton2Press = () => {
    email(['yqd382@163.com'], null, null, 'My Subject', 'My body text')
  }

  const handleButton3Press = () => {
    text('13911111111')
  }

  const handleButton4Press = () => {
    web('https://www.baidu.com')
  }

  const handleButton5Press = () => {
    textWithoutEncoding('0123456789')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
        <Text>Make phonecall</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
        <Text>Send an email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton3Press}>
        <Text>Send a text only phonenumber</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton4Press}>
        <Text>web to baidu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton5Press}>
        <Text>Send a textWithoutEncoding</Text>
      </TouchableOpacity>
    </View>
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