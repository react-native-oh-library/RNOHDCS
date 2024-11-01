import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {HelperText, MD2Colors, MD3Colors, Text, TextInput} from 'react-native-paper';
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
        key: ' TextInputProps style:mode =outlined',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          left:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInputs1'),
          onChangeText:_onValueChange('TextInputs1')
        }
      },
      {
        key: ' TextInputProps style:mode =flat',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          left:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInputs2'),
          onChangeText:_onValueChange('TextInputs2')
        }
      },
      {
        key: ' TextInputProps style:selectionColor =MD2Colors.red100',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          left:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInputs3'),
          onChangeText:_onValueChange('TextInputs3'),
          selectionColor:MD2Colors.red100
        }
      },
      {
        key: ' TextInputProps style:left =<TextInput.Icon icon="magnify"/>',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          left:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInput2'),
          onChangeText:_onValueChange('TextInput2')
        }
      },

      {
        key: ' TextInputProps style:right ={<TextInput.Icon icon="magnify"/>',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          right:<TextInput.Icon icon="magnify"/>,
          value:_getTextInputValue('TextInput2'),
          onChangeText:_onValueChange('TextInput2')
        }
      },
      {
        key: ' TextInputProps style:left ={<TextInput.Affix text={"/100" } />}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          right:<TextInput.Affix text={"/100" } />,
          value:_getTextInputValue('TextInput3'),
          onChangeText:_onValueChange('TextInput3')
        }
      },
      {
        key: ' TextInputProps style:disabled ={true}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          disabled:true,
          value:_getTextInputValue('TextInput4'),
          onChangeText:_onValueChange('TextInput4')
        }
      },
      {
        key: ' TextInputProps style:disabled ={false}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          disabled:false,
          value:_getTextInputValue('TextInput5'),
          onChangeText:_onValueChange('TextInput5')
        }
      },
      {
        key: ' TextTextInputPropsProps style:label ={"Email1"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email1',
          value:_getTextInputValue('TextInput5'),
          onChangeText:_onValueChange('TextInput5')
        }
      },
      {
        key: ' TextInputProps style:placeholder ={"Type something"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something",
          value:_getTextInputValue('TextInput6'),
          onChangeText:_onValueChange('TextInput6')
        }
      },
      {
        key: ' TextInputProps style:placeholder ={"Type something1"}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          value:_getTextInputValue('TextInput6'),
          onChangeText:_onValueChange('TextInput6')
        }
      },
      {
        key: ' TextInputProps fuction:onChangeText ={_onValueChange}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          value:_getTextInputValue('TextInput7'),
          onChangeText:_onValueChange('TextInput7')
        }
      },
      {
        key: ' TextInputProps style:underlineColor ={MD2Colors.pink400}',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          underlineColor:MD2Colors.pink400,
          value:_getTextInputValue('TextInput8'),
          onChangeText:_onValueChange('TextInput8')
        }
      },
      {
        key: ' TextInputProps style:underlineColor ={MD3Colors.primary70}',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          underlineColor:MD3Colors.primary70,
          value:_getTextInputValue('TextInput9'),
          onChangeText:_onValueChange('TextInput9')
        }
      },
      {
        key: ' TextInputProps style:activeUnderlineColor ={MD3Colors.tertiary50}',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeUnderlineColor:MD3Colors.tertiary50,
          value:_getTextInputValue('TextInput10'),
          onChangeText:_onValueChange('TextInput10')
        }
      },
      {
        key: ' TextInputProps style:activeUnderlineColor ={MD2Colors.amber900}',
        value: {
          mode:'flat' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          activeUnderlineColor:MD2Colors.amber900,
          value:_getTextInputValue('TextInput11'),
          onChangeText:_onValueChange('TextInput11')
        }
      },
      {
        key: ' TextInputProps style:outlineColor ={MD2Colors.pink400}',
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
        key: ' TextInputProps style:activeOutlineColor ={MD2Colors.amber900}',
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
        key: ' TextInputProps style:activeOutlineColor ={MD3Colors.tertiary50}',
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
        key: ' TextInputProps style:textColor ={MD2Colors.red100}',
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
        key: ' TextInputProps style:textColor ={MD2Colors.blue100}',
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
        key: ' TextInputProps style:dense ={true}',
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
        key: ' TextInputProps style:dense ={false}',
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
        key: ' TextInputProps style:multiline ={false}',
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
        key: ' TextInputProps style:multiline ={true}',
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
        key: ' TextInputProps fuction:onFocus ={_onFocus}',
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
        key: ' TextInputProps fuction:onBlur ={_onBlur}',
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
        key: ' TextInputProps style:value ={_getTextInputValue("TextInput20")}',
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
        key: ' TextInputProps style:style ={backgroundColor:MD2Colors.blue100}',
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
        key: ' TextInputProps style:theme ={ colors: { primary:"green"} }',
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
        key: ' TextInputProps style:underlineStyle ={backgroundColor:MD2Colors.blue100}',
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
        key: ' TextInputProps style:editable ={true}',
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
        key: ' TextInputProps style:editable ={false}',
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
      {
        key: ' TextInputProps style:contentStyle ={backgroundColor:MD2Colors.red100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput22'),
          onChangeText:_onValueChange('TextInput22'),
          contentStyle:{backgroundColor:MD2Colors.red100}
        }
      },
      {
        key: ' TextInputProps style:outlineStyle ={backgroundColor:MD2Colors.red100}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput23'),
          onChangeText:_onValueChange('TextInput23'),
          outlineStyle:{backgroundColor:MD2Colors.red100}
        }
      },
      {
        key: ' TextInputProps style:testID = {test1}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput24'),
          onChangeText:_onValueChange('TextInput24'),
          testID: 'test1'
        }
      },
      {
        key: ' TextInputProps style:testID = {test2}',
        value: {
          mode:'outlined' as 'flat' | 'outlined',
          label:'Email',
          placeholder:"Type something1",
          textColor:MD2Colors.blue100 ,
          value:_getTextInputValue('TextInput24'),
          onChangeText:_onValueChange('TextInput24'),
          testID: 'test2'
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
        key: ' TextInputAffix style:text ={"/100"}',
        value: {
          text:"/100"
        }
      },
      {
        key: ' TextInputAffix fucyion:onLayout ={_onLayout}',
        value: {
          text:"/100",
          onLayout:_onLayout,
        }
      },
      {
        key: ' TextInputAffix fucyion:onLayout ={_onPress}',
        value: {
          text:"/100",
          onPress:_onPress,
        }
      },
      {
        key: ' TextInputAffix style:accessibilityLabel ={"accessibility Label"}',
        value: {
          text:"/100",
          accessibilityLabel:'accessibility Label',
        }
      },
      {
        key: ' TextInputAffix style:accessibilityLabel ={"accessibility Label1"}',
        value: {
          text:"/100",
          accessibilityLabel:'accessibility Label1',
        }
      },
      {
        key: ' TextInputAffix style:textStyle ={backgroundColor:MD2Colors.blue100}',
        value: {
          text:"/100",
          textStyle:{backgroundColor:MD2Colors.blue100},
        }
      },
      {
        key: ' TextInputAffix style: theme:{ colors: { primary: "green" }',
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
        key: ' TextInputIconProps style:icon ={"eye"}',
        value: {
          icon:"eye",
        }
      },
      {
        key: ' TextInputIconProps fuction:onPress ={_iconPress}',
        value: {
          icon:"eye",
          onPress:_iconPress
        }
      },
      {
        key: ' TextInputIconProps style:forceTextInputFocus ={true}',
        value: {
          icon:"eye",
          forceTextInputFocus:true
        }
      },
      {
        key: ' TextInputIconProps style:forceTextInputFocus ={false}',
        value: {
          icon:"eye",
          forceTextInputFocus:false
        }
      },
      {
        key: ' TextInputIconProps style:color ={MD2Colors.red100}',
        value: {
          icon:"eye",
          color:MD2Colors.red100
        }
      },
      {
        key: ' TextInputIconProps style:rippleColor ={MD2Colors.red100}',
        value: {
          icon:"eye",
          rippleColor:MD2Colors.red100
        }
      },
      {
        key: ' TextInputIconProps style:{backgroundColor:MD2Colors.blue100},',
        value: {
          icon:"eye",
          style:{backgroundColor:MD2Colors.blue100},
        }
      },
      {
        key: ' TextInputIconProps style:theme ={ colors: { primary: "green"} }',
        value: {
          icon:"eye",
          theme:{ colors: { primary: 'green' } }
        }
      },
    ]

  return (
    <ScrollView>
    <Tester>
    <TestCase itShould={"TextProps style:render =<Text variant='labelLarge'>Label Large</Text>"}>
    <TextInput
        label="Phone number"
        render={props =>
          <Text variant="labelLarge">Label Large</Text>
        }
      />
    </TestCase> 
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
                <Text style = {{height: 20}}></Text>
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