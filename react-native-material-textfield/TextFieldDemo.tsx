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

import React, { useRef, useState } from 'react';
import { StyleSheet, Platform, ScrollView, View, Image, Text, Button } from 'react-native';
import {
  TextField
} from 'react-native-material-textfield';

import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

let defaults = {
  firstname: 'Eddard',
  lastname: 'Stark'
};

type TextFieldRefTestProps = {
  buttonTitle?: string;
  secondButtonTitle?: string;
  buttonPressCallback: (
    ref: React.MutableRefObject<any>,
    setResult: React.Dispatch<React.SetStateAction<string>>) => void;
  secondButtonPressCallback?: (
    ref: React.MutableRefObject<any>,
    setResult: React.Dispatch<React.SetStateAction<string>>) => void;
  showSecondButton?: boolean;
  textFieldPorps?: any
}

const TextFieldRefTest: React.FC<TextFieldRefTestProps> = (props) => {
  const textFieldRef = useRef<any>(null);
  const [result, setResult] = useState("");
  return (
    <View style={{ gap: 8 }}>
      <Text>{result}</Text>
      <TextField
        ref={textFieldRef}
        textColor='#000000'
        label="textField test"
        {...props?.textFieldPorps}
      ></TextField>

      <Button title={props.buttonTitle ?? "btn1"} onPress={() => {
        props.buttonPressCallback(textFieldRef, setResult);
      }}></Button>

      {
        props.showSecondButton ?
        <Button title={props.secondButtonTitle ?? "btn2"} onPress={() => {
          props.secondButtonPressCallback!(textFieldRef, setResult);
        }}></Button> : void 0
      }

    </View>
  )
}

function TextfieldDemo() {

  const firstnameRef = React.createRef();;
  const lastnameRef = React.createRef();

  const passwordRef = React.createRef();
  const [firstnameErrors, setFirstnameRef] = useState('');
  const [lastnameRefErrors, setLastnameRef] = useState('');
  const [passwordRefErrors, setpasswordRef] = useState('');
  const [lableName, setLableName] = useState('onFoucus is false');
  const [blurName, setBlurName] = useState('onBlur is false');

  const onFirstnameChangeText = (text: React.SetStateAction<string>) => {
    console.info('text change' + text)
    if (!text) {
      setFirstnameRef('Should not be empty')
    } else {
      setFirstnameRef('')
    }
  };


  const onLastnameRefChangeText = (text: React.SetStateAction<string>) => {
    if (!text) {
      setLastnameRef('Should not be empty')
    } else {
      setLastnameRef('')
    }
  };

  const onFormatText = (text: string) => {
    return text.replace(/[^+\d]/g, '');
  };

  const onPasswordChangeText = (text: React.SetStateAction<string>) => {
    if (!text) {
      setpasswordRef('Should not be empty')
    } else if (text.length < 6) {
      setpasswordRef('Too short')
    } else {
      setpasswordRef('')
    }
  };

  const TextfielProps = [
    {
      key: 'style:disabledLineWidth is 4',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineType: 'solid',
        disabled: true,
        disabledLineWidth: 4
      }
    },
    {
      key: 'style:disabledLineWidth is 8',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineType: 'solid',
        disabled: true,
        disabledLineWidth: 8
      }
    },
    {
      key: 'style:inputContainerStyle is {"height":"70"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        inputContainerStyle: {
          height: 70,
        }
      }
    },
    {
      key: 'style:formatText text.replace(/[^+\d]/g,"")',
      value: {
        label: 'Phone number',
        keyboardType: 'phone-pad',
        formatText: onFormatText,
      }
    },

    {
      key: 'style:containerStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        containerStyle: {
          backgroundColor: 'red',
          fontSize: 26
        }
      }
    },
    {
      key: 'style:labelTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        labelTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:titleTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        title: 'Choose wisely',
        titleTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:affixTextStyle is {"backgroundColor":"red"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        prefix: 'prefix',
        affixTextStyle: {
          backgroundColor: 'red',
        }
      }
    },
    {
      key: 'style:error text Should not be empty',
      value: {
        ref: firstnameRef,
        value: 'lastname',
        enablesReturnKeyAutomatically: true,
        label: 'first Name',
        onChangeText: onFirstnameChangeText,
        error: firstnameErrors
      }
    },
    {
      key: 'style:errorColor is blue',
      value: {
        ref: lastnameRef,
        value: 'lastname',
        enablesReturnKeyAutomatically: true,
        label: 'first Name',
        onChangeText: onLastnameRefChangeText,
        error: lastnameRefErrors,
        errorColor: 'blue'
      }
    },
    {
      key: 'style:errorColor is red',
      value: {
        ref: lastnameRef,
        value: 'lastname',
        enablesReturnKeyAutomatically: true,
        label: 'first Name',
        onChangeText: onLastnameRefChangeText,
        error: lastnameRefErrors,
        errorColor: 'red'
      }
    },
    {
      key: 'style:textColor is black',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name'
      }
    },
    {
      key: 'style:textColor is red',
      value: {
        textColor: '#FF0000',
        value: 'Stark',
        label: 'first Name'
      }
    },
    {
      key: 'style:fontSize is 26',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        fontSize: 26
      }
    },
    {
      key: 'style:fontSize is 30',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        fontSize: 30
      }
    },
    {
      key: 'style:labelFontSize is 20',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        enablesReturnKeyAutomatically: true,
        labelFontSize: 20
      }
    },
    {
      key: 'style:labelFontSize is 26',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        enablesReturnKeyAutomatically: true,
        labelFontSize: 26
      }
    },
    {
      key: 'style:lineWidth is 1',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineWidth: 1
      }
    },
    {
      key: 'style:lineWidth is 5',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineWidth: 5
      }
    },
    {
      key: 'style:activeLineWidth is 4',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        activeLineWidth: 4
      }
    },
    {
      key: 'style:activeLineWidth is 10',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        activeLineWidth: 10
      }
    },
    {
      key: 'style:tintColor is red',
      value: {
        textColor: '#FF0000',
        value: 'Stark',
        label: 'first Name',
        tintColor: 'red'
      }
    },
    {
      key: 'style:tintColor is black',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        tintColor: 'red'
      }
    },
    {
      key: 'style:baseColor is blue',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        baseColor: 'blue'
      }
    },
    {
      key: 'style:label is default name',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'default name',
      }
    },
    {
      key: 'style:label is frist name',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'frist name',
      }
    },
    {
      key: 'style:title is Choose wisely',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        title: 'Choose wisely'
      }
    },
    {
      key: 'style:title is Choose ',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        title: 'Choose'
      }
    },
    {
      key: 'style:title is prefix',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        prefix: 'prefix'
      }
    },
    {
      key: 'style:title is prefix frist',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        prefix: 'prefix frist'
      }
    },
    {
      key: 'style:title is suffix',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        suffix: 'suffix'
      }
    },
    {
      key: 'style:title is suffix frist',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        suffix: 'suffix frist'
      }
    },
    {
      key: 'style:lineType is solid',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineType: 'solid'
      }
    },
    {
      key: 'style:lineType is dotted',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineType: 'dotted'
      }
    },
    {
      key: 'style:lineType is dashed',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        lineType: 'dashed'
      }
    },
    {
      key: 'style:animationDuration is 500',
      value: {
        textColor: '#000000',
        label: 'first Name',
        animationDuration: 500
      }
    },
    {
      key: 'style:animationDuration is 1000',
      value: {
        textColor: '#000000',
        label: 'first Name',
        animationDuration: 1000
      }
    },
    {
      key: 'style:characterRestriction is 50',
      value: {
        textColor: '#000000',
        label: 'first Name',
        characterRestriction: 50
      }
    },
    {
      key: 'style:characterRestriction is 200',
      value: {
        textColor: '#000000',
        label: 'first Name',
        characterRestriction: 200
      }
    },
    {
      key: 'style:disabledLineType is dotted',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        disabled: true,
        disabledLineType: 'dotted',
        disabledLineWidth: 8,
      }
    },
    {
      key: 'style:disabledLineType is solid',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        disabled: true,
        disabledLineType: 'solid',
        disabledLineWidth: 8,
      }
    },
    {
      key: 'style:disabledLineType is dashed',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        disabledLineType: 'dashed',
        disabledLineWidth: 8,
        disabled: true,
      }
    },
    {
      key: 'style:disabled is true',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        disabled: true
      }
    },
    {
      key: 'style:editable is true',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        editable: true
      }
    },
    {
      key: 'style:multiline is true',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        multiline: true
      }
    },
    {
      key: 'style:contentInset is {"top":"5","left":"20","right":"0","label":"4","input":"8"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        contentInset: { top: 5, left: 20, right: 0, label: 4, input: 8 }
      }
    },
    {
      key: 'style:labelOffset is {"x0":"2","y0":"2","x1":"4","y1":"4"}',
      value: {
        textColor: '#000000',
        value: 'Stark',
        label: 'first Name',
        labelOffset: { x0: 2, y0: 2, x1: 4, y1: 4 }
      }
    },
    {
      key: 'style:keyboardType is email-address',
      value: {
        ref: passwordRef,
        value: 'lastname',
        enablesReturnKeyAutomatically: true,
        label: 'first Name',
        keyboardType: 'email-address'
      }
    },
    {
      key: 'function:ChangeText',
      value: {
        ref: passwordRef,
        value: 'lastname',
        enablesReturnKeyAutomatically: true,
        label: 'first Name',
        onChangeText: onPasswordChangeText,
        error: passwordRefErrors
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
        </TestCase>

        <TestCase itShould='call method focus'>
          <TextFieldRefTest buttonTitle='focus' buttonPressCallback={(ref, setResult) => {
            ref.current?.focus();
            setResult('focus');
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method blur(点击focus聚焦，3秒后调用blur失去焦点）'>
          <TextFieldRefTest buttonTitle='focus' buttonPressCallback={(ref, setResult) => {
            ref.current?.focus();
            setResult('focus');
            setTimeout(() => {
              ref.current?.blur();
              setResult('blur');
            }, 3000);
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method clear(清除输入框内容)'>
          <TextFieldRefTest buttonTitle='clear' buttonPressCallback={(ref, setResult) => {
            ref.current?.clear();
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method value(获取输入框内容)'>
          <TextFieldRefTest buttonTitle='value' buttonPressCallback={(ref, setResult) => {
            const val = ref.current?.value();
            setResult(val);
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method setValue(设置输入框内容)'>
          <TextFieldRefTest buttonTitle='value' buttonPressCallback={(ref, setResult) => {
            ref.current?.setValue("我是setValue设置的输入内容!");
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isFocused(点击focus聚焦， 3秒后判断是否focus状态)'>
          <TextFieldRefTest buttonTitle='focus'
           buttonPressCallback={(ref, setResult) => {
            ref.current?.focus();
            setTimeout(() => {
              setResult(`isFocused: ${ref.current?.isFocused()}`);
            }, 3000);
          }}
          showSecondButton={true}
          secondButtonTitle='isFocused'
          secondButtonPressCallback={(ref, setResult) => {
            setResult(`isFocused: ${ref.current?.isFocused()}`);
          }}
          ></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isErrored: false'>
          <TextFieldRefTest buttonTitle='isErrored' textFieldPorps={{error: false}} buttonPressCallback={(ref, setResult) => {
            const val = ref.current?.isErrored();
            setResult('isErrored: ' + (val ? 'true' : 'false'));
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isErrored: true'>
          <TextFieldRefTest buttonTitle='isErrored' textFieldPorps={{error: true}} buttonPressCallback={(ref, setResult) => {
            const val = ref.current?.isErrored();
            setResult('isErrored: ' + (val ? 'true' : 'false'));
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isRestricted(是否超过了输入限制长度，这里设置为了5)'>
          <TextFieldRefTest buttonTitle='isRestricted' textFieldPorps={{characterRestriction: 5}} buttonPressCallback={(ref, setResult) => {
            setResult('isRestricted: ' + (ref.current?.isRestricted() ? 'true' : 'false'));
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isDefaultVisible(是否显示的默认值, 有输入后不在生效)'>
          <TextFieldRefTest buttonTitle='isDefaultVisible' textFieldPorps={{defaultValue: 'abc'}} buttonPressCallback={(ref, setResult) => {
            setResult('isDefaultVisible: ' + (ref.current?.isDefaultVisible() ? 'true' : 'false'));
          }}></TextFieldRefTest>
        </TestCase>

        <TestCase itShould='call method isPlaceholderVisible(是否显示的是placeholder)'>
          <TextFieldRefTest buttonTitle='isPlaceholderVisible' textFieldPorps={{placeholder: '请输入...'}}  buttonPressCallback={(ref, setResult) => {
            setResult('isPlaceholderVisible: ' + (ref.current?.isPlaceholderVisible() ? 'true' : 'false'));
          }}></TextFieldRefTest>
        </TestCase>

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


export default TextfieldDemo;

const styles = StyleSheet.create({
  textArea: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
});

// 使用 export 导出
export const displayName = "TextfieldExample";
export const framework = "React";
export const category = "UI";
export const title = "react-native-material-textfield";
export const documentationURL = "https://github.com/react-native-oh-library/react-native-material-textfield";
export const description = "Simple React Native material textfield component.";

export const examples = [
  {
    title: "Material textfield with default styling",
    render: function (): any {
      return <TextfieldDemo />;
    },
  },
];