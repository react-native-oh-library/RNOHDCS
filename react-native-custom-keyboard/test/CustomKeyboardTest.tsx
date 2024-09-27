import React, { useState } from 'react';  
import {  
  View,  
  SafeAreaView,  
  Text,  
  TouchableOpacity,  
  ScrollView,  
  StyleSheet,  
} from 'react-native';  
import {  
  CustomTextInput,  
  register,  
  install,  
  insertText,  
  backSpace,  
  doDelete,  
  moveLeft,  
  moveRight,  
  switchSystemKeyboard,  
  uninstall,  
} from 'react-native-custom-keyboard';  
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';  

/**  
 * General number key component for use in custom keyboards  
 */  
function NumberKeys({ tag, onPressFunctionKey, functionKeyLabel }) {  
  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];  

  return (  
    <View style={styles.numberKeysContainer}>  
      {/* Combine number keys and function key into three rows */}  
      <View style={styles.numberRow}>  
        {numberKeys.slice(0, 4).map((key) => (  
          <TouchableOpacity  
            key={key}  
            style={styles.numberKey}  
            onPress={() => insertText(tag, key)}  
          >  
            <Text style={styles.numberKeyText}>{key}</Text>  
          </TouchableOpacity>  
        ))}  
      </View>  
      <View style={styles.numberRow}>  
        {numberKeys.slice(4, 8).map((key) => (  
          <TouchableOpacity  
            key={key}  
            style={styles.numberKey}  
            onPress={() => insertText(tag, key)}  
          >  
            <Text style={styles.numberKeyText}>{key}</Text>  
          </TouchableOpacity>  
        ))}  
      </View>  
      <View style={styles.numberRow}>  
        {/* The third row includes the remaining number keys and the function key */}  
        {numberKeys.slice(8).map((key) => (  
          <TouchableOpacity  
            key={key}  
            style={styles.numberKey}  
            onPress={() => insertText(tag, key)}  
          >  
            <Text style={styles.numberKeyText}>{key}</Text>  
          </TouchableOpacity>  
        ))}  
        {/* Function key */}  
        <TouchableOpacity  
          style={[styles.numberKey, styles.functionKey]}  
          onPress={onPressFunctionKey}  
        >  
          <Text style={styles.functionKeyText}>{functionKeyLabel}</Text>  
        </TouchableOpacity>  
      </View>  
    </View>  
  );  
}  

/**  
 * Custom keyboard component: used to demonstrate various interfaces  
 */  
function createKeyboardComponent(onPressFunctionKey, functionKeyLabel) {  
  return function CustomKeyboard({ tag }) {  
    const numericTag = Number(tag); // Ensure tag is a number type  

    return (  
      <View style={styles.keyboardContainer}>  
        {/* Number keys and function key */}  
        <NumberKeys  
          tag={numericTag}  
          onPressFunctionKey={() => onPressFunctionKey(numericTag)}  
          functionKeyLabel={functionKeyLabel}  
        />  
      </View>  
    );  
  };  
}  

// Create various custom keyboard components  
const InsertTextKeyboard = createKeyboardComponent(  
  (tag) => insertText(tag, 'Hello'),  
  "Insert 'Hello'"  
);  
const BackSpaceKeyboard = createKeyboardComponent(backSpace, 'Backspace');  
const DoDeleteKeyboard = createKeyboardComponent(doDelete, 'Delete');  
const MoveLeftKeyboard = createKeyboardComponent(moveLeft, 'Move Left');  
const MoveRightKeyboard = createKeyboardComponent(moveRight, 'Move Right');  
const SwitchSystemKeyboard = createKeyboardComponent(  
  switchSystemKeyboard,  
  'System Keyboard'  
);  
const UninstallKeyboard = createKeyboardComponent(uninstall, 'Uninstall Keyboard');  

/**  
 * Register custom keyboard types  
 */  
register('insert-text-keyboard', () => InsertTextKeyboard);  
register('backspace-keyboard', () => BackSpaceKeyboard);  
register('delete-keyboard', () => DoDeleteKeyboard);  
register('move-left-keyboard', () => MoveLeftKeyboard);  
register('move-right-keyboard', () => MoveRightKeyboard);  
register('switch-system-keyboard', () => SwitchSystemKeyboard);  
register('uninstall-keyboard', () => UninstallKeyboard);  

// Register 'registered-keyboard' when the component loads  
register('registered-keyboard', () => InsertTextKeyboard);  

/**  
 * Main application component  
 */  
export default function App() {  
  const [installStatus, setInstallStatus] = useState('');  
  const [registerStatus, setRegisterStatus] = useState('');  
  const [isKeyboardRegistered, setIsKeyboardRegistered] = useState(false);  

  // Define function for installing a keyboard  
  const handleInstallKeyboard = () => {  
    install('dynamic-keyboard', () => InsertTextKeyboard);  
    setInstallStatus('Custom keyboard installed: dynamic-keyboard');  
  };  

  // Define function for registering a keyboard  
  const handleRegisterKeyboard = () => {  
    // Dynamically register a new keyboard type  
    register('new-registered-keyboard', () => InsertTextKeyboard);  
    setRegisterStatus('Custom keyboard registered: new-registered-keyboard');  
    setIsKeyboardRegistered(true);  
  };  

  return (  
    <SafeAreaView style={styles.container}>  
      <ScrollView contentContainerStyle={styles.scrollContainer}>  
        <Tester style={styles.tester}>  
          <TestSuite name='custom-keyboard'>  
        <TestCase style={styles.demoSection}  itShould="register interface demonstration">  
          <Text style={styles.demoTitle}>register interface demonstration</Text>  
          <TouchableOpacity style={styles.button} onPress={handleRegisterKeyboard}>  
            <Text style={styles.buttonText}>Register custom keyboard</Text>  
          </TouchableOpacity>  
          <Text style={styles.statusText}>{registerStatus}</Text>  

          {isKeyboardRegistered && (  
            <View>  
              <Text style={styles.demoTitle}>Using registered keyboard</Text>  
              <CustomTextInput  
                style={styles.textInput}  
                customKeyboardType="new-registered-keyboard"  
                placeholder="Tap to use the newly registered custom keyboard"  
              />  
            </View>  
          )}  
        </TestCase>  

        
        <TestCase style={styles.demoSection} itShould="customKeyboardType attribute demonstration">  
          <Text style={styles.demoTitle}>customKeyboardType attribute demonstration</Text>  

          <Text style={styles.description}>The only difference between these two text boxes is the customKeyboardType attribute value, different values mean two different registered keyboards are used, hence the display will differ</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="insert-text-keyboard"  
          />  

          <Text style={styles.description}></Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="backspace-keyboard"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='install interface demonstration'>  
          <Text style={styles.demoTitle}>install interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="insert-text-keyboard"  
            placeholder="Tap here to see a bound custom keyboard, indicating install success"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='insertText interface demonstration'>  
          <Text style={styles.demoTitle}>insertText interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="insert-text-keyboard"  
            placeholder="Enter numbers, click insert"  
          />  
        </TestCase>           
        <TestCase style={styles.demoSection} itShould='backSpace interface demonstration'>  
          <Text style={styles.demoTitle}>backSpace interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="backspace-keyboard"  
            placeholder="Enter numbers, click backspace"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='doDelete interface demonstration'>  
          <Text style={styles.demoTitle}>doDelete interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="delete-keyboard"  
            placeholder="Enter numbers, click delete"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='moveLeft interface demonstration'>  
          <Text style={styles.demoTitle}>moveLeft interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="move-left-keyboard"  
            placeholder="Enter numbers, click cursor left"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='moveRight interface demonstration'>  
          <Text style={styles.demoTitle}>moveRight interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="move-right-keyboard"  
            placeholder="Enter numbers, click cursor right"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='switchSystemKeyboard interface demonstration'>  
          <Text style={styles.demoTitle}>switchSystemKeyboard interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="switch-system-keyboard"  
            placeholder="Enter numbers, click to switch to system keyboard"  
          />  
        </TestCase>  
        <TestCase style={styles.demoSection} itShould='uninstall interface demonstration'>  
          <Text style={styles.demoTitle}>uninstall interface demonstration</Text>  
          <CustomTextInput  
            style={styles.textInput}  
            customKeyboardType="uninstall-keyboard"  
            placeholder="Enter numbers, click to uninstall custom keyboard"  
          />  
        </TestCase>  
        <View style={styles.bottomSpacer} />  
          </TestSuite>  
        </Tester>  
      </ScrollView>  
    </SafeAreaView>  
  );  
}  

/**  
 * Style definitions  
 */  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
  },  
  tester: {  
    backgroundColor:'#eeeeee'  
  },  
  scrollContainer: {  
    padding: 16,  
  },  
  demoSection: {  
    marginBottom: 32,  
  },  
  demoTitle: {  
    fontSize: 18,  
    fontWeight: 'bold',  
    marginBottom: 8,  
  },  
  description: {  
    fontSize: 16,  
    marginTop: 8,  
    marginBottom: 4,  
  },  
  textInput: {  
    height: 40,  
    borderColor: 'gray',  
    borderWidth: 1,  
    paddingHorizontal: 8,  
  },  
  keyboardContainer: {  
    backgroundColor: '#e0e0e0',  
    padding: 16,  
  },  
  numberKeysContainer: {  
    // Use column layout to arrange keys in three rows  
    flexDirection: 'column',  
    alignItems: 'center',  
  },  
  numberRow: {  
    flexDirection: 'row',  
    justifyContent: 'center',  
    marginBottom: 8,  
  },  
  numberKey: {  
    width: 60,  
    height: 40,  
    marginHorizontal: 5,  
    backgroundColor: '#fff',  
    alignItems: 'center',  
    justifyContent: 'center',  
    borderRadius: 4,  
  },  
  numberKeyText: {  
    fontSize: 18,  
  },  
  functionKey: {  
    backgroundColor: '#2196f3',  
  },  
  functionKeyText: {  
    color: '#fff',  
    fontSize: 16,  
  },  
  button: {  
    backgroundColor: '#4caf50',  
    padding: 12,  
    borderRadius: 8,  
    marginBottom: 8,
  },  
  buttonText: {  
    color: '#fff',  
    textAlign: 'center',  
    fontSize: 16,  
  },  
  statusText: {  
    fontSize: 14,  
    color: '#333',  
  },  
  bottomSpacer: {  
    height: 300, // Or adjust height as needed  
  },  
});  