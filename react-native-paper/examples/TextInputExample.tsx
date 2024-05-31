import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TextInputDemo() { 

  const [text, setText] = React.useState('');
  const [customIconText, setCustomIconText] = React.useState('');
  const [flatTextPassword, setFlatTextPassword] = React.useState('');
  const [largeText, setLargeText] = React.useState('');
  const onChangeText = (text: React.SetStateAction<string>) => setText(text);
  const onChangeCustomIconText = (text: React.SetStateAction<string>) => setCustomIconText(text);
  const onChangeLargeText = (text: React.SetStateAction<string>) => setLargeText(text);
  const onChangeFlatTextPassword = (text: React.SetStateAction<string>) => setFlatTextPassword(text);
  const [flatTextSecureEntry, setFlatTextSecureEntry] = React.useState<boolean>(true);
  
  return (
    <Tester>
    <TestSuite name='TextInputDemo'>
        <TestCase itShould='Flat inputs'>
        <TextInput
              style={styles.inputContainerStyle}
              label="Flat input"
              placeholder="Type something"
              value={text}
              onChangeText={onChangeText}
              left={
                <TextInput.Icon
                  icon="magnify"
                />
              }
              maxLength={100}
              right={<TextInput.Affix text={`${text.length}/100`} />}
            />
        </TestCase>

        <TestCase itShould='Flat input with custom icon'>
          <TextInput
              style={styles.inputContainerStyle}
              label="Flat input with custom icon"
              placeholder="Type something"
              value={customIconText}
              onChangeText={onChangeCustomIconText}
              maxLength={100}
              right={<TextInput.Affix text={`${customIconText.length}/100`} />}
              left={
                <TextInput.Icon
                
                  icon={() => (
                    <Icon
                      name="home"
                      size={24}
                    />
                  )}
                />
              }
            />
        </TestCase>

        <TestCase itShould='Flat input large font'>
           <TextInput
              style={[styles.inputContainerStyle, styles.fontSize]}
              label="Flat input large font"
              placeholder="Type something"
              value={largeText}
              onChangeText={onChangeLargeText}
              left={<TextInput.Affix text="#" />}
              right={
                <TextInput.Icon
                  icon="magnify"

                />
              }
            />
        </TestCase>

        <TestCase itShould='Flat input password large font'>
          <TextInput
                style={[styles.inputContainerStyle, styles.fontSize]}
                label="Flat input large font"
                placeholder="Type something"
                value={flatTextPassword}
                onChangeText={onChangeFlatTextPassword}
                secureTextEntry={flatTextSecureEntry}
                right={
                  <TextInput.Icon
                    icon={flatTextSecureEntry ? 'eye' : 'eye-off'}
                    onPress={() =>
                      setFlatTextSecureEntry(!flatTextSecureEntry)
                    }
                    forceTextInputFocus={false}
                  />
                }
              />
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const styles = StyleSheet.create({

  inputContainerStyle: {
    margin: 8,
  },
  inputContentStyle: {
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  fontSize: {
    fontSize: 32,
  },
  
});


export default TextInputDemo  ;