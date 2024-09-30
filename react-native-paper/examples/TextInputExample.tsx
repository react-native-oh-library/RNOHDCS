import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {HelperText, MD2Colors, MD3Colors, TextInput} from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

type TextInputValue = {
  [key: string]: string;
};

function TextInputDemo() { 

  const [textInpuValue, setTextInpuValue] = React.useState<TextInputValue>({});
  const _getTextInputValue = (name: string) => textInpuValue[name]

  const _onValueChange=(name: string) => (query: string) =>
  setTextInpuValue({ ...textInpuValue, [name]: query});

  const _onFocus = () => {
    console.info('fuction onFoucus')
  }

  const _onBlur = () => {
    console.info('fuction onBlur')
  }

    const TextInputProps = [
      {
        key: ' TextProps style:variant ={"displayLarge"}',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          value:_getTextInputValue('TextInput'),
          onChangeText:_onValueChange('TextInput')
        }
      },
      {
        key: ' TextProps style:variant ={"displayLarge"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          value:_getTextInputValue('TextInput1'),
          onChangeText:_onValueChange('TextInput1')
        }
      },
      {
        key: ' TextProps style:left ={<TextInput.Icon icon="magnify"/>}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          left:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInput2'),
          onChangeText:_onValueChange('TextInput2')
        }
      },
      {
        key: ' TextProps style:left ={<TextInput.Affix text={"/100" } />}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          right:<TextInput.Affix text={"/100" } />,
          value:_getTextInputValue('TextInput3'),
          onChangeText:_onValueChange('TextInput3')
        }
      },
      {
        key: ' TextProps style:disabled ={true}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          disabled:true,
          value:_getTextInputValue('TextInput4'),
          onChangeText:_onValueChange('TextInput4')
        }
      },
      {
        key: ' TextProps style:disabled ={false}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          disabled:false,
          value:_getTextInputValue('TextInput5'),
          onChangeText:_onValueChange('TextInput5')
        }
      },
      {
        key: ' TextProps style:label ={"Email"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          value:_getTextInputValue('TextInput5'),
          onChangeText:_onValueChange('TextInput5')
        }
      },
      {
        key: ' TextProps style:placeholder ={"Type something"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something",
          value:_getTextInputValue('TextInput6'),
          onChangeText:_onValueChange('TextInput6')
        }
      },
      {
        key: ' TextProps style:placeholder ={"Type something1"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          value:_getTextInputValue('TextInput6'),
          onChangeText:_onValueChange('TextInput6')
        }
      },
      {
        key: ' TextProps fuction:onChangeText ={_onValueChange}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          value:_getTextInputValue('TextInput7'),
          onChangeText:_onValueChange('TextInput7')
        }
      },
      {
        key: ' TextProps style:underlineColor ={MD2Colors.pink400}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          underlineColor:MD2Colors.pink400,
          value:_getTextInputValue('TextInput8'),
          onChangeText:_onValueChange('TextInput8')
        }
      },
      {
        key: ' TextProps style:underlineColor ={MD3Colors.primary70}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          underlineColor:MD3Colors.primary70,
          value:_getTextInputValue('TextInput9'),
          onChangeText:_onValueChange('TextInput9')
        }
      },
      {
        key: ' TextProps style:activeUnderlineColor ={MD3Colors.tertiary50}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeUnderlineColor:MD3Colors.tertiary50,
          value:_getTextInputValue('TextInput10'),
          onChangeText:_onValueChange('TextInput10')
        }
      },
      {
        key: ' TextProps style:activeUnderlineColor ={MD2Colors.amber900}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeUnderlineColor:MD2Colors.amber900,
          value:_getTextInputValue('TextInput11'),
          onChangeText:_onValueChange('TextInput11')
        }
      },
      {
        key: ' TextProps style:outlineColor ={MD2Colors.pink400}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          outlineColor:MD2Colors.pink400,
          value:_getTextInputValue('TextInput12'),
          onChangeText:_onValueChange('TextInput12')
        }
      },
      {
        key: ' TextProps style:activeOutlineColor ={MD2Colors.amber900}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeOutlineColor:MD2Colors.amber900,
          value:_getTextInputValue('TextInput13'),
          onChangeText:_onValueChange('TextInput13')
        }
      },
      {
        key: ' TextProps style:activeOutlineColor ={MD3Colors.tertiary50}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeOutlineColor:MD3Colors.tertiary50 ,
          value:_getTextInputValue('TextInput14'),
          onChangeText:_onValueChange('TextInput14')
        }
      },
      {
        key: ' TextProps style:textColor ={MD2Colors.red100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.red100 ,
          value:_getTextInputValue('TextInput15'),
          onChangeText:_onValueChange('TextInput15')
        }
      },
      {
        key: ' TextProps style:textColor ={MD2Colors.blue100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput15'),
          onChangeText:_onValueChange('TextInput15')
        }
      },
      {
        key: ' TextProps style:dense ={true}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          dense:true,
          value:_getTextInputValue('TextInput16'),
          onChangeText:_onValueChange('TextInput16')
        }
      },
      {
        key: ' TextProps style:dense ={false}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          dense:false,
          value:_getTextInputValue('TextInput17'),
          onChangeText:_onValueChange('TextInput17')
        }
      },
      {
        key: ' TextProps style:multiline ={false}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          multiline:false,
          value:_getTextInputValue('TextInput18'),
          onChangeText:_onValueChange('TextInput18')
        }
      },
      {
        key: ' TextProps style:multiline ={true}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          multiline:true,
          value:_getTextInputValue('TextInput19'),
          onChangeText:_onValueChange('TextInput19')
        }
      },
      {
        key: ' TextProps fuction:onFocus ={_onFocus}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          onFocus:_onFocus,
          value:_getTextInputValue('TextInput20'),
          onChangeText:_onValueChange('TextInput20')
        }
      },
      {
        key: ' TextProps fuction:onBlur ={_onBlur}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          onBlur:_onBlur,
          value:_getTextInputValue('TextInput20'),
          onChangeText:_onValueChange('TextInput20')
        }
      },
      {
        key: ' TextProps style:value ={_getTextInputValue("TextInput20")}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
      
          value:_getTextInputValue('TextInput20'),
          onChangeText:_onValueChange('TextInput20')
        }
      },
      {
        key: ' TextProps style:value ={backgroundColor:MD2Colors.blue100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput21'),
          onChangeText:_onValueChange('TextInput21'),
          style:{backgroundColor:MD2Colors.blue100},
        }
      },
      {
        key: ' TextProps style:value ={ colors: { primary:"green"} }',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput21'),
          onChangeText:_onValueChange('TextInput21'),
          theme:{ colors: { primary: 'green' } }
        }
      },
      {
        key: ' TextProps style:underlineStyle ={backgroundColor:MD2Colors.blue100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput21'),
          onChangeText:_onValueChange('TextInput21'),
          underlineStyle:{backgroundColor:MD2Colors.blue100}
        }
      },
      {
        key: ' TextProps style:underlineStyle ={true}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput21'),
          onChangeText:_onValueChange('TextInput21'),
          editable:true
        }
      },
      {
        key: ' TextProps style:underlineStyle ={false}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput21'),
          onChangeText:_onValueChange('TextInput21'),
          editable:false
        }
      },
    ]

    const _onLayout = () => {
      console.info("function onLayout")
    }

    
    const _onPress = () => {
      console.info("function onPress")
    }
    
    

    const TextInputAffixProps = [
      {
        key: ' TextProps style:text ={"/100"}',
        value: {
          text:"/100"
        }
      },
      {
        key: ' TextProps fucyion:onLayout ={_onLayout}',
        value: {
          text:"/100",
          onLayout:_onLayout,
        }
      },
      {
        key: ' TextProps fucyion:onLayout ={_onPress}',
        value: {
          text:"/100",
          onPress:_onPress,
        }
      },
      {
        key: ' TextProps style:accessibilityLabel ={"accessibility Label"}',
        value: {
          text:"/100",
          accessibilityLabel:'accessibility Label',
        }
      },
      {
        key: ' TextProps style:accessibilityLabel ={"accessibility Label"}',
        value: {
          text:"/100",
          accessibilityLabel:'accessibility Label',
        }
      },
      {
        key: ' TextProps style:textStyle ={backgroundColor:MD2Colors.blue100}',
        value: {
          text:"/100",
          textStyle:{backgroundColor:MD2Colors.blue100},
        }
      },
      {
        key: ' TextProps style:textStyle ={backgroundColor:MD2Colors.blue100}',
        value: {
          text:"/100",
          theme:{ colors: { primary: 'green' } }
        }
      },
    ]

    const _iconPress =() => {
      console.info('fuction icon Press')
    }

    const TextInputIconProps = [
      {
        key: ' TextProps style:icon ={"eye"}',
        value: {
          icon:"eye",
        }
      },
      {
        key: ' TextProps fuction:onPress ={_iconPress}',
        value: {
          icon:"eye",
          onPress:_iconPress
        }
      },
      {
        key: ' TextProps style:forceTextInputFocus ={true}',
        value: {
          icon:"eye",
          forceTextInputFocus:true
        }
      },
      {
        key: ' TextProps style:forceTextInputFocus ={false}',
        value: {
          icon:"eye",
          forceTextInputFocus:false
        }
      },
      {
        key: ' TextProps style:color ={MD2Colors.red100}',
        value: {
          icon:"eye",
          color:MD2Colors.red100
        }
      },
      {
        key: ' TextProps style:rippleColor ={MD2Colors.red100}',
        value: {
          icon:"eye",
          rippleColor:MD2Colors.red100
        }
      },
      {
        key: ' TextProps style:{backgroundColor:MD2Colors.blue100},',
        value: {
          icon:"eye",
          style:{backgroundColor:MD2Colors.blue100},
        }
      },
      {
        key: ' TextProps style:theme ={ colors: { primary: "green"} }',
        value: {
          icon:"eye",
          theme:{ colors: { primary: 'green' } }
        }
      },
    ]

  return (
    <ScrollView>
    <Tester>
    <TestCase itShould={"TextProps style:error ={true}"}>
      <TextInput
          label="Input with helper text"
          placeholder="Enter username, only letters"
          error={true}
        />
      <HelperText type="error" visible={true}>
            Error: Only letters are allowed
      </HelperText>
    </TestCase> 
    <TestCase itShould={"TextProps style:error ={false}"}>
      <TextInput
          label="Input with helper text"
          placeholder="Enter username, only letters"
          error={false}
        />
      <HelperText type="error" visible={false}>
            Error: Only letters are allowed
      </HelperText>
    </TestCase> 
    <TestSuite name='TextInputDemo'>
    {TextInputProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                <TextInput {...item.value}/>
            </TestCase>
          );
        })},
     {TextInputAffixProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                 <TextInput
                    mode="outlined"
                    label="Outlined input"
                    placeholder="Type something"
                    right={<TextInput.Affix {...item.value} />}/>
            </TestCase>
          );
        })},
           {TextInputIconProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon {...item.value} />}
              />
            </TestCase>
          );
        })},
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}


export default TextInputDemo  ;