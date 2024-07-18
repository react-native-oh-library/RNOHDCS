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

import React,{useState}from 'react';
import {  StyleSheet,Platform,ScrollView,View,Image, Text} from 'react-native';
import {
  TextField
} from 'react-native-material-textfield';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
let defaults = {
  firstname: 'Eddard',
  lastname: 'Stark'
};

function TextfieldDemo() { 

  const firstnameRef  = React.createRef();;
  const lastnameRef  = React.createRef();

  const passwordRef = React.createRef();
  const [firstnameErrors, setFirstnameRef] = useState('');
  const [lastnameRefErrors, setLastnameRef] = useState('');
  const [passwordRefErrors, setpasswordRef] = useState('');
  const [lableName, setLableName] = useState('onFoucus is false');
  const [blurName, setBlurName] = useState('onBlur is false');

  const onFirstnameChangeText = (text: React.SetStateAction<string>) => {
    console.info('text change'+text)
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
      setLastnameRef('')
    }
  };
  
  const onFormatText = (text:string) => {
    return text.replace(/[^+\d]/g, '');
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

  const TextfielProps = [
    {
      key: 'style:disabledLineWidth is 0.5',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'solid',
        disabledLineWidth:0.5
      }
    },
    {
      key: 'style:disabledLineWidth is 1',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'solid',
        disabledLineWidth:1
      }
    },
    {
      key: 'style:inputContainerStyle is {"height":"70"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        inputContainerStyle: {
          height: 70,
        }
      }
    },
    {
      key: 'style:formatText text.replace(/[^+\d]/g,"")',
      value: {
        label:'Phone number',
        keyboardType:'phone-pad',
        formatText:onFormatText,
      }
    },
   
    {
      key: 'style:containerStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        containerStyle: {
          backgroundColor: 'red',
          fontSize:26
        }
      }
    },
    {
      key: 'style:labelTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        labelTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:titleTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        title:'Choose wisely',
        titleTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:affixTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        prefix:'prefix',
        affixTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:error text Should not be empty',
      value: {
        ref:firstnameRef,
        value:'lastname',
        enablesReturnKeyAutomatically:true,    
        label:'first Name',
        onChangeText:onFirstnameChangeText,
        error:firstnameErrors
      }
    },
    {
      key: 'style:errorColor is blue',
      value: {
        ref:lastnameRef,
        value:'lastname',
        enablesReturnKeyAutomatically:true,    
        label:'first Name',
        onChangeText:onLastnameRefChangeText,
        error:lastnameRefErrors,
        errorColor:'blue'
      }
    },
    {
      key: 'style:errorColor is red',
      value: {
        ref:lastnameRef,
        value:'lastname',
        enablesReturnKeyAutomatically:true,    
        label:'first Name',
        onChangeText:onLastnameRefChangeText,
        error:lastnameRefErrors,
        errorColor:'red'
      }
    },
    {
      key: 'style:textColor is black',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name'
      }
    },
    {
      key: 'style:textColor is red',
      value: {
        textColor: '#FF0000',
        value:'Stark',
        label:'first Name'
      }
    },
    {
      key: 'style:fontSize is 26',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        fontSize:26
      }
    },
    {
      key: 'style:fontSize is 30',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        fontSize:30
      }
    },
    {
      key: 'style:labelFontSize is 20',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        enablesReturnKeyAutomatically:true,
        labelFontSize:20
      }
    },
    {
      key: 'style:labelFontSize is 26',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        enablesReturnKeyAutomatically:true,
        labelFontSize:26
      }
    },
    {
      key: 'style:lineWidth is 1',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineWidth:1
      }
    },
    {
      key: 'style:lineWidth is 5',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineWidth:5
      }
    },
    {
      key: 'style:activeLineWidth is 4',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        activeLineWidth:4
      }
    },
    {
      key: 'style:activeLineWidth is 10',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        activeLineWidth:10
      }
    },
    {
      key: 'style:tintColor is red',
      value: {
        textColor: '#FF0000',
        value:'Stark',
        label:'first Name',
        tintColor:'red'
      }
    },
    {
      key: 'style:tintColor is black',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        tintColor:'red'
      }
    },
    {
      key: 'style:baseColor is blue',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        baseColor:'blue'
      }
    },
    {
      key: 'style:label is default name',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'default name',
      }
    },
    {
      key: 'style:label is frist name',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'frist name',
      }
    },
    {
      key: 'style:title is Choose wisely',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        title:'Choose wisely'
      }
    },
    {
      key: 'style:title is Choose ',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        title:'Choose'
      }
    },
    {
      key: 'style:title is prefix',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        prefix:'prefix'
      }
    },
    {
      key: 'style:title is prefix frist',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        prefix:'prefix frist'
      }
    },
    {
      key: 'style:title is suffix',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        suffix:'suffix'
      }
    },
    {
      key: 'style:title is suffix frist',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        suffix:'suffix frist'
      }
    },
    {
      key: 'style:lineType is solid',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'solid'
      }
    },
    {
      key: 'style:lineType is dotted',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'dotted'
      }
    },
    {
      key: 'style:lineType is dashed',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'dashed'
      }
    },
    {
      key: 'style:animationDuration is 500',
      value: {
        textColor: '#000000',
        label:'first Name',
        animationDuration:500
      }
    },
    {
      key: 'style:animationDuration is 1000',
      value: {
        textColor: '#000000',
        label:'first Name',
        animationDuration:1000
      }
    },
    {
      key: 'style:characterRestriction is 50',
      value: {
        textColor: '#000000',
        label:'first Name',
        characterRestriction:50
      }
    },
    {
      key: 'style:characterRestriction is 200',
      value: {
        textColor: '#000000',
        label:'first Name',
        characterRestriction:200
      }
    },
    {
      key: 'style:disabledLineType is dotted',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'dotted'
      }
    },
    {
      key: 'style:disabledLineType is solid',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'solid'
      }
    },
    {
      key: 'style:disabledLineType is dashed',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        lineType:'dashed'
      }
    },
    {
      key: 'style:disabled is true',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        disabled:true
      }
    },
    {
      key: 'style:editable is true',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        editable:true
      }
    },
    {
      key: 'style:multiline is true',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        multiline:true
      }
    },
    {
      key: 'style:contentInset is {"top":"5","left":"20","right":"0","label":"4","input":"8"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        contentInset:{top:5,left:20,right:0,label:4,input:8}
      }
    },
    {
      key: 'style:labelOffset is {"x0":"2","y0":"2","x1":"4","y1":"4"}',
      value: {
        textColor: '#000000',
        value:'Stark',
        label:'first Name',
        labelOffset:{x0:2,y0:2,x1:4,y1:4}
      }
    },
    {
      key: 'style:keyboardType is email-address',
      value: {
        ref:passwordRef,
        value:'lastname',
        enablesReturnKeyAutomatically:true,    
        label:'first Name',
        keyboardType:'email-address'
      }
    },
    {
      key: 'function:ChangeText',
      value: {
        ref:passwordRef,
        value:'lastname',
        enablesReturnKeyAutomatically:true,    
        label:'first Name',
        onChangeText:onPasswordChangeText,
        error:passwordRefErrors
      }
    },
  ]
  
  return (
    <ScrollView>
        <Tester>
    
        <TestCase itShould='renderLeftAccessory Text '>
            <TextField
                  value={defaults.lastname}
                  label='first Name'
                  renderLeftAccessory={() => (  
                    <Image source={require('./assets/images/favorite.png')}></Image>
                  )}  
                />    
          </TestCase>
          <TestCase itShould='renderRightAccessory Text '>
            <TextField
                  value={defaults.lastname}
                  label='first Name'
                  renderRightAccessory={() => (  
                    <Image source={require('./assets/images/favorite.png')}></Image>
                  )}  
                />    
          </TestCase>npm 
          <TestCase itShould='onFocus is true'>
            <TextField
                  label={lableName}
                  onFocus={() => (  
                    setLableName('onFocus true')
                  )}  
                />    
          </TestCase>
          <TestCase itShould='onBlur is true'>
            <TextField
                  label={blurName}
                  onBlur={() => (  
                
                    setBlurName('onBlur true')
                  )}  
                />    
          </TestCase>
            {TextfielProps.map((item) => {
                return (
                    <TestCase itShould={item.key} tags={['Textfiel']} key={item.key}>
                        <TextField 
                           {...item.value}
                          ></TextField>
                    </TestCase>
                );
            })}
        </Tester>
    </ScrollView>
   );
}


export default TextfieldDemo ;

const styles = StyleSheet.create({
  textArea: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
});