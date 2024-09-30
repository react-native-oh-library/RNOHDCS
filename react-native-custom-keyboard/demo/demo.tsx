import React from 'react';  
import {  
  StyleSheet,  
  Text,  
  View,  
  TouchableOpacity,  
} from 'react-native';  

import {  
  CustomTextInput,  
  register,  
  insertText,  
  backSpace,  
} from 'react-native-custom-keyboard';  

/**  
 * Custom Keyboard Component  
 */  
const MyKeyboard = ({ tag }) => {  
  const onPress = (value) => {  
    insertText(tag, value);  
  };  

  return (  
    <View style={styles.keyboard}>  
      {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map((row, rowIndex) => (  
        <View style={styles.row} key={`row-${rowIndex}`}>  
          {row.map((num) => (  
            <View style={styles.button} key={num}>  
              <TouchableOpacity onPress={() => onPress(num.toString())}>  
                <Text style={styles.buttonLabel}>{num}</Text>  
              </TouchableOpacity>  
            </View>  
          ))}  
        </View>  
      ))}  
      <View style={styles.row}>  
        <View style={styles.button}>  
          <TouchableOpacity onPress={() => onPress('0')}>  
            <Text style={styles.buttonLabel}>0</Text>  
          </TouchableOpacity>  
        </View>  
        <View style={styles.button}>  
          <TouchableOpacity onPress={() => onPress('.')}>  
            <Text style={styles.buttonLabel}>.</Text>  
          </TouchableOpacity>  
        </View>  
        <View style={styles.button}>  
          <TouchableOpacity onPress={() => backSpace(tag)}>  
            <Text style={styles.buttonLabel}>←</Text>  
          </TouchableOpacity>  
        </View>  
      </View>  
    </View>  
  );  
};  

register('price', () => MyKeyboard);  

/**  
 * Main Application Component  
 */  
const App = () => {  
  return (  
    <View style={styles.container}>  
      <CustomTextInput  
        customKeyboardType="price"  
        style={styles.input}  
      />  
    </View>  
  );  
};  

export default App;  

/**  
 * Style Definition  
 */  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
  input: {  
    backgroundColor: '#ffffff',  
    borderWidth: 1,  
    borderColor: 'grey',  
    width: 270,  
    fontSize: 19,  
  },  
  keyboard: {  
    backgroundColor: 'white',  
  },  
  row: {  
    flexDirection: 'row',  
  },  
  button: {  
    width: '33.3333%',  
  },  
  buttonLabel: {  
    borderWidth: 0.5,  
    borderColor: '#d6d7da',  
    paddingVertical: 13,  
    textAlign: 'center',  
    fontSize: 20,  
  },  
});  