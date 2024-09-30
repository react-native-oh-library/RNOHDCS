import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Image, Alert, ScrollView, View, AccessibilityRole } from 'react-native';
import {
  Chip,
  MD2Theme,
  MD3Theme,
  useTheme,
  MD2Colors,
  MD3Colors,
  Icon,
  TouchableRipple,
  Text
} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { EllipsizeProp } from 'react-native-paper/lib/typescript/types';

export function ChipText() {

  const [snackbarProperties, setSnackbarProperties] = React.useState({
    visible: false,
    text: '',
  });
  const _onClose =() => {
    console.info('chip onClose')
    setSnackbarProperties({
      visible: true,
      text: 'Custom icon close button pressed',
    })
  }

  const _onPress =() => {
    console.info('chip onPress')
  }

  const _onLongPress =()=> {
    console.info('chip onLongPress');
  }

  const _onPressIn =()=> {
    console.info('chip onPressIn')
  }

  
  const _onPressOut =()=> {
    console.info('chip onPressIn')
  }

  const CheckboxProps = [
    {
        key: 'Checkbox style: mode  is flat',
        value: {
          icon:'information',
          Type:'flat'
        } ,
        text:'Example Chip'
    },
    {
      key: 'Checkbox style: mode  is outlined',
      value: {
        icon:'information',
        Type:'outlined',
        style:[styles.chip]
      },
      text:'Chip Content' 
     },
     {
      key: 'Checkbox style: children  is children  Content',
      value: {
        icon:'information',
        Type:'outlined',
        style:[styles.chip]
      },
      text:'children  Content' 
     },
     {
      key: 'Checkbox style: icon  is heart',
      value: {
        icon:'heart',
        Type:'outlined',
        style:[styles.chip]
      },
      text:'Chip Content' 
     },
     {
      key: 'Checkbox style: icon  is <Image source={require("../assets/images/avatar.png")} accessibilityIgnoresInvertColors/>',
      value: {
        style:[styles.chip],
        avatar:<Image
        source={require('../assets/images/avatar.png')}
        accessibilityIgnoresInvertColors
      />
      },
      text:'Avatar(selected)' 
     },
     {
      key: 'Checkbox style: closeIcon is arrow-down',
      value: {
        closeIcon:'arrow-down',
        style:[styles.chip],
        closeIconAccessibilityLabel:"Custom Close icon accessibility label",
        onClose:_onClose
      },
      text:'With custom close icon' 
     },
     {
      key: 'Checkbox style: selected is true',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true

      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: selected is false',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:false

      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: selectedColor is MD2Colors.purple900',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true,
        selectedColor:MD2Colors.purple900
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: showSelectedOverlay  is true',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true,
        showSelectedOverlay:true
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: showSelectedOverlay  is false',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true,
        showSelectedOverlay:false
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: showSelectedCheck  is true',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true,
        showSelectedCheck:true
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: showSelectedCheck  is false',
      value: {
        mode:'outlined' as 'flat' | 'outlined',
        style:[styles.chip],
        selected:true,
        showSelectedCheck:false
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: rippleColor  is false',
      value: {
        style:[styles.chip],
        selected:true,
        showSelectedOverlay:true,
        onPress:_onPress,
        rippleColor:MD2Colors.red100
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: disabled  is true',
      value: {
        style:[styles.chip],
        selected:true,
        showSelectedOverlay:true,
        onPress:_onPress,
        rippleColor:MD2Colors.red100,
        disabled:true
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: disabled  is false',
      value: {
        style:[styles.chip],
        selected:true,
        showSelectedOverlay:true,
        onPress:_onPress,
        rippleColor:MD2Colors.red100,
        disabled:false,
        //background:{color:'red',borderless:false,radius:10,foreground:true}
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: background  is {color:MD2Colors.red100}',
      value: {
        style:[styles.chip,{backgroundColor:MD2Colors.red100}],
        selected:true,
        showSelectedOverlay:true,
        onPress:_onPress,
        background:{color:MD2Colors.red100}
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: accessibilityLabel  is accessibilityLabel',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        accessibilityLabel:'accessibilityLabel'
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: accessibilityLabel  is Close icon accessibility label',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onClose:_onClose,
        closeIconAccessibilityLabel:'Close icon accessibility label'
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox fuction: onPress',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onPress:_onPress,
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox fuction: onLongPress',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onLongPress:_onLongPress,
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox fuction: onPressIn',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onPressIn:_onPressIn,
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox fuction: onPressOut',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onPressOut:_onPressOut,
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox fuction: onClose',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onClose:_onClose,
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: delayLongPress is 10000(延时10秒)',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onLongPress:_onLongPress,
        delayLongPress:10000
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: delayLongPress is 1000(延时1秒)',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        onLongPress:_onLongPress,
        delayLongPress:1000
      },
      text:'With selected overlay' 
     },
     {
      key: 'Checkbox style: compact is true',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        compact:true,
      },
      text:'Compact chip' 
     },
     {
      key: 'Checkbox style: compact is false',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.chip],
        compact:false,
        onPress:_onPress
      },
      text:'Compact chip' 
     },
     {
      key: 'Checkbox style: textStyle is {styles.tiny}',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        textStyle:styles.tiny
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: style is [styles.chip]',
      value: {
        style:[styles.chip],
        onPress:_onPress,
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: theme is { colors: { primary: "green" } }',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        theme:{ colors: { primary: 'green' } }
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: testID is chip ',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        testID:'chip'
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: testID is chip1',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        testID:'chip1'
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: ellipsizeMode is head',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.bigTextFlex],
        textStyle:styles.bigTextStyle,
        onPress:_onPress,
        onClose:_onClose,
        ellipsizeMode:'head' as 'head' | 'middle' | 'tail' | 'clip'
      },
      text:' With a very big text: React Native Paper is a high-quality,standard-compliant Material Design library that has you covered inall major use-cases.' 
     },
     {
      key: 'Checkbox style: ellipsizeMode is middle',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.bigTextFlex],
        textStyle:styles.bigTextStyle,
        onPress:_onPress,
        onClose:_onClose,
        ellipsizeMode:'middle' as 'head' | 'middle' | 'tail' | 'clip'
      },
      text:' With a very big text: React Native Paper is a high-quality,standard-compliant Material Design library that has you covered inall major use-cases.' 
     },
     {
      key: 'Checkbox style: ellipsizeMode is tail',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.bigTextFlex],
        textStyle:styles.bigTextStyle,
        onPress:_onPress,
        onClose:_onClose,
        ellipsizeMode:'tail' as 'head' | 'middle' | 'tail' | 'clip'
      },
      text:' With a very big text: React Native Paper is a high-quality,standard-compliant Material Design library that has you covered inall major use-cases.' 
     },
     {
      key: 'Checkbox style: ellipsizeMode is clip',
      value: {
        mode:"outlined" as 'flat' | 'outlined',
        style:[styles.bigTextFlex],
        textStyle:styles.bigTextStyle,
        onPress:_onPress,
        onClose:_onClose,
        ellipsizeMode:'clip' as 'head' | 'middle' | 'tail' | 'clip'
      },
      text:' With a very big text: React Native Paper is a high-quality,standard-compliant Material Design library that has you covered inall major use-cases.' 
     },
     {
      key: 'Checkbox style: maxFontSizeMultiplier is 1',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        maxFontSizeMultiplier:1
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: maxFontSizeMultiplier is 2',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        maxFontSizeMultiplier:2
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: accessibilityRole is button',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        accessibilityRole:'button' as AccessibilityRole
      },
      text:'With custom text' 
     },
     {
      key: 'Checkbox style: theme = {{ colors: { primary:"green"}}}',
      value: {
        style:[styles.chip],
        onPress:_onPress,
        theme:{ colors: { primary:"green"}}
      },
      text:'With custom text' 
     }
  ]

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='Chip' >
         {CheckboxProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                 <Chip {...item.value}>{item.text}</Chip>
              </TestCase>
            );
        })} 
        </TestSuite>
      </ScrollView> 
    </Tester>
  ) 
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
  ripple: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiny: {
    marginVertical: 2,
    marginRight: 2,
    marginLeft: 2,
    minHeight: 19,
    lineHeight: 19,
  },
  bigTextFlex: {
    flex: 1,
    backgroundColor:'red'
  },
  bigTextStyle: {
    flex: -1,
  },
  fullWidthChip: {
    marginVertical: 4,
    marginHorizontal: 12,
  },
  customBorderRadius: {
    borderRadius: 16,
  },
});

export default ChipText;