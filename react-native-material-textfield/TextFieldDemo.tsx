/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {  StyleSheet,Platform,Button} from 'react-native';
import {
  TextField
} from 'react-native-material-textfield';
let defaults = {
  firstname: 'Eddard',
  lastname: 'Stark'
};
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TextfieldDemo() { 
  const firstnameRef  = React.createRef();;
  const lastnameRef  = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [firstnameErrors, setFirstnameRef] = React.useState('');
  const [lastnameRefErrors, setLastnameRef] = React.useState('');
  const [emailRefErrors, setEmailRef] = React.useState('');
  const [passwordRefErrors, setpasswordRef] = React.useState('');

  const onFirstnameChangeText = (text: React.SetStateAction<string>) => {
    if(!text) {
      setFirstnameRef('Should not be empty')
    } else {
      setFirstnameRef('')
    }
  };
  
  const onLastnameRefChangeText = (text: React.SetStateAction<string>) => {
    if(!text) {
      setLastnameRef('Should not be empty')
    } else {
      setEmailRef('')
    }
  };
  
  const onEmialChangeText = (text: React.SetStateAction<string>) => {
    if(!text) {
      setEmailRef('Should not be empty')
    } else {
      setEmailRef('')
    } 
  };
  
  const onPasswordChangeText = (text: React.SetStateAction<string>) => {
    if(!text) {
      setpasswordRef('Should not be empty')
    } else if(text.length < 6){
      setpasswordRef('Too short')
    } else {
      setpasswordRef('')
    }
  };
  
  return (
    <Tester>
    <TestSuite name='MaterialTextfielText' >
        <TestCase itShould='Default Material Textfiel Text'>
          <TextField
                ref={firstnameRef}
                value={defaults.lastname}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}      
                returnKeyType='next'
                label='first Name'
                onChangeText = {onFirstnameChangeText}
                error={firstnameErrors}
              />    
        </TestCase>
        <TestCase itShould='Flat input large font'>
            <TextField
                  ref={lastnameRef}
                  value={defaults.firstname}
                  fontSize= {26}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}      
                  returnKeyType='next'
                  label='Last Name'
                  onChangeText = {onLastnameRefChangeText}
                  error={lastnameRefErrors}
                />    
        </TestCase>

        <TestCase itShould='Flat input email large font'>
             <TextField
                ref={emailRef}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Email Address'
                fontSize= {26}
                onChangeText = {onEmialChangeText}
                error={emailRefErrors}
              />  
        </TestCase>

        <TestCase itShould='Flat input password large font'>
            <TextField 
                ref={passwordRef}
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='done'
                label='Password'
                title='Choose wisely'
                secureTextEntry = {true}
                maxLength={30}
                fontSize= {26}
                onChangeText = {onPasswordChangeText}
                characterRestriction={20}
                error={passwordRefErrors}
              />   
        </TestCase>
    
     </TestSuite>
    </Tester>
  )
}

export default TextfieldDemo ;


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    backgroundColor: 'transparent',
  },

  container: {
    margin: 8,
    marginTop: Platform.select({ harmony:8,ios: 8,android: 32 }),
    flex: 1,
  },

  contentContainer: {
    padding: 8,
  },

  buttonContainer: {
    paddingTop: 8,
    margin: 8,
  }
});