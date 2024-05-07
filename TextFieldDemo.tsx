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

import React, {useState} from 'react';
import {  StyleSheet,SafeAreaView,Platform,ScrollView,View,Button} from 'react-native';
import {
  TextField,
} from 'react-native-material-textfield';


let defaults = {
  firstname: 'Eddard',
  lastname: 'Stark',
  about: 'Stoic, dutiful, and honorable man',
};


// 导出组件
export default function TextfieldDemo() {
  const [errors, setErrors] = useState({});  
  const [combinedState, setCombinedState] = useState({  
    ...defaults,  
    secureTextEntry:true, // 从上面的 useState 中取得值  
  }); 
  const firstnameRef  = React.createRef();;
  const lastnameRef  = React.createRef();
  const aboutRef  = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const onSubmit = () => {
    let errors = {};
    ['firstname', 'lastname','about', 'email', 'password']
    .forEach((name) => {
        const ref = name === 'firstname' ? firstnameRef :  
                    name === 'lastname' ? lastnameRef :
                    name === 'email' ? emailRef : 
                    passwordRef;       
        let value = ref.current ? ref.current.value() : ''; // 从 ref 中获取值 
        if(!value) {
          errors[name] = 'Should not be empty';
        } else {
          if('password' === name && value.length < 6) {
            errors[name] = 'Too short';
          }
        }
    });
    setErrors(errors)
  }

  const onChangeText= () => {
    ['firstname', 'lastname','about', 'email', 'password']
    .forEach((name) => {
      const ref = name === 'firstname' ? firstnameRef :  
      name === 'lastname' ? lastnameRef :
      name === 'email' ? emailRef : 
      passwordRef;      
      let value = ref.current ? ref.current.value() : ''; // 从 ref 中获取值  
      setCombinedState({  
        ...combinedState,  
        // 例如，更新 text 属性  
        [name]: value
      });  
    })
  }
 

  return (
    <SafeAreaView style={styles.safeContainer}>
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps='handled'
          >
          <View style={styles.container}>
              <TextField
                ref={firstnameRef}
                value={defaults.firstname}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='First Name'
                onChangeText={onChangeText}
                error={errors.firstname}
              />

             <TextField
                ref={lastnameRef}
                value={defaults.lastname}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}      
                returnKeyType='next'
                label='Last Name'
                onChangeText={onChangeText}
                error={errors.lastname}
              />  

              
              <TextField
                ref={aboutRef}
                value={defaults.about}
                returnKeyType='next'
                multiline={true}
                blurOnSubmit={true}
                label='About (optional)'
                onChangeText={onChangeText}
                characterRestriction={140}
              />


              <TextField
                ref={emailRef}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='next'
                label='Email Address'
                onChangeText={onChangeText}
                error={errors.email}
              />

              <TextField 
                ref={passwordRef}
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType='done'
                label='Password'
                title='Choose wisely'
                maxLength={30}
                onChangeText={onChangeText}
                characterRestriction={20}
                error={errors.password}
              />

             <Button title='运行' color='#841584' onPress={onSubmit}></Button>
              
          </View>
        </ScrollView>

    </SafeAreaView>
  );
}

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