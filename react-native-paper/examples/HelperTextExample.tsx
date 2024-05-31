import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function HelperTextDemo() { 
  return (
    <Tester>
    <TestSuite name='HelperText' >
        <TestCase itShould='Default'>
          <HelperTextExample></HelperTextExample>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const HelperTextExample = () => {
  const [text, setText] = React.useState('');

  const onChangeText = (text: React.SetStateAction<string>) => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };

 return (
    <View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

export default HelperTextDemo;