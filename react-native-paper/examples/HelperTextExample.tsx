import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { HelperText, MD2Colors, TextInput } from 'react-native-paper';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';


function HelperTextDemo() { 
  const [text, setText] = React.useState('');
  const onChangeText = (text: React.SetStateAction<string>) => setText(text);
  const hasErrors = () => {
    return !text.includes('@');
  };

  const HelperTextBProps = [
    {
      key: ' HelperText style:type={"error"}',
      value: {
        type :'error' as 'error' | 'info',
        visible:hasErrors()
      },
      textValue: {
        label:'Email',
        value:text,
        onChangeText:onChangeText
      }
    },
    {
      key: ' HelperText style:type={"info"}',
      value: {
        type :'info' as 'error' | 'info',
      },
      textValue: {
        label:'Email1',
        value:text,
      }
    },
    {
      key: ' HelperText children:Email address is invalid!',
      value: {
        type :'info' as 'error' | 'info',
      },
      textValue: {
        label:'Email2',
        value:text,
      }
    },
    {
      key: ' HelperText style:padding ={none}',
      value: {
        type :'info' as 'error' | 'info',
        padding:'none' as 'none' | 'normal'
      },
      textValue: {
        label:'Email3',
        value:text,
      }
    },
    {
      key: ' HelperText style:padding ={normal}',
      value: {
        type :'info' as 'error' | 'info',
        padding:'normal' as 'none' | 'normal'
      },
      textValue: {
        label:'Email4',
        value:text,
      }
    },
    {
      key: ' HelperText style:visible ={true}',
      value: {
        type :'error' as 'error' | 'info',
        visible:true
      },
      textValue: {
        label:'Email5',
        value:text,
      }
    },
    {
      key: ' HelperText style:visible ={false}',
      value: {
        type :'error' as 'error' | 'info',
        visible:false
      },
      textValue: {
        label:'Email6',
        value:text,
      }
    },
    {
      key: ' HelperText style:{backgroundColor:MD2Colors.red100}',
      value: {
        type :'error' as 'error' | 'info',
        style :{backgroundColor:MD2Colors.red100}
      },
      textValue: {
        label:'Email7',
        value:text,
      }
    },
    {
      key: ' HelperText style:theme ={ colors: { primary: "green"} }',
      value: {
        type :'error' as 'error' | 'info',
        theme :{ colors: { primary: 'green' } }
      },
      textValue: {
        label:'Email8',
        value:text,
      }
    },
    {
      key: ' HelperText style:testID ={"HelperText"}',
      value: {
        type :'error' as 'error' | 'info',
        testID :'HelperText'
      },
      textValue: {
        label:'Email8',
        value:text,
      }
    },
    {
      key: ' HelperText style:testID ={"HelperText1"}',
      value: {
        type :'error' as 'error' | 'info',
        testID :'HelperText1'
      },
      textValue: {
        label:'Email8',
        value:text,
      }
    },
  ]

  return (
    <ScrollView>
    <Tester>
    <TestSuite name='HelperText' >
         {HelperTextBProps.map((item) => {
              return (
                <TestCase itShould={item.key}  key={item.key}>
                  <View>
                    <TextInput {...item.textValue} />
                    <HelperText {...item.value}>
                      Email address is invalid!
                    </HelperText>
                  </View>
              </TestCase>
              );
          })},
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}


export default HelperTextDemo;