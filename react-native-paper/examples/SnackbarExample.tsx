import * as React from 'react';
import { ScrollView, View } from 'react-native';
import {Snackbar,Button, MD2Colors} from 'react-native-paper';
  
type SnackbarVisibility = {
  [key: string]: boolean | undefined;
};


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { useRef } from 'react';

function SnackbarDemo() { 

  const [visible, setVisible] = React.useState<SnackbarVisibility>({});
  const _getVisible = (name: string) => !!visible[name];
  const _showSnackbar = (name: string) => () =>
  setVisible({ ...visible, [name]: !visible[name] });
  
  const _onIconPress =(name: string)=>()=> {
    setVisible({ ...visible, [name]: !visible[name] });
  }

  const SegmentedButtonProps = [
    {
      key: ' ProgressBar style:visible={_getVisible("Snackbar")}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar"),
        text:_getVisible("Snackbar") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar"),
        onDismiss:_showSnackbar("Snackbar"),
        action:{label: 'Undo',onPress: () => {}}
      }
    },
    {
      key: ' ProgressBar style:action={{label:"Undo",onPress: () => {}}}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar1"),
        text:_getVisible("Snackbar1") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar1"),
        onDismiss:_showSnackbar("Snackbar1"),
        action:{label: 'Undo',onPress: () => {}}
      }
    },
    {
      key: ' ProgressBar style:action={{label:"Undo",onPress: () => {}}}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar2"),
        text:_getVisible("Snackbar2") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar2"),
        onDismiss:_showSnackbar("Snackbar2"),
        action:{label: 'Undo',onPress: () => {}}
      }
    },
    {
      key: ' ProgressBar style:icon={"camera"}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar3"),
        text:_getVisible("Snackbar3") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar3"),
        onDismiss:_showSnackbar("Snackbar3"),
        action:{label: 'Undo',onPress: () => {}},
        icon:'camera',
        onIconPress:_onIconPress("Snackbar3")
      }
    },
    {
      key: ' ProgressBar fuction:onIconPress={"_onIconPress"}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar3"),
        text:_getVisible("Snackbar3") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar3"),
        onDismiss:_showSnackbar("Snackbar3"),
        action:{label: 'Undo',onPress: () => {}},
        icon:'camera',
        onIconPress:_onIconPress("Snackbar3")
      }
    },
    {
      key: ' ProgressBar style:rippleColor ={MD2Colors.red100}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar4"),
        text:_getVisible("Snackbar4") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar4"),
        onDismiss:_showSnackbar("Snackbar4"),
        action:{label: 'Undo',onPress: () => {}},
        icon:'camera',
        onIconPress:_onIconPress("Snackbar4"),
        rippleColor:MD2Colors.red100
      }
    },
    {
      key: ' ProgressBar style:iconAccessibilityLabel ={"iconAccessibilityLabel"}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar5"),
        text:_getVisible("Snackbar5") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar5"),
        onDismiss:_showSnackbar("Snackbar5"),
        action:{label: 'Undo',onPress: () => {}},
        iconAccessibilityLabel:"iconAccessibilityLabel"
      }
    },
    {
      key: ' ProgressBar style:iconAccessibilityLabel ={"iconAccessibilityLabel1"}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar6"),
        text:_getVisible("Snackbar6") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar6"),
        onDismiss:_showSnackbar("Snackbar6"),
        action:{label: 'Undo',onPress: () => {}},
        iconAccessibilityLabel:"iconAccessibilityLabel1"
      }
    },
    {
      key: ' ProgressBar style:duration ={10000}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar7"),
        text:_getVisible("Snackbar7") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar"),
        onDismiss:_showSnackbar("Snackbar7"),
        action:{label: 'Undo',onPress: () => {}},
        duration:10000
      }
    },
    {
      key: ' ProgressBar style:duration ={50000}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar8"),
        text:_getVisible("Snackbar8") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar8"),
        onDismiss:_showSnackbar("Snackbar8"),
        action:{label: 'Undo',onPress: () => {}},
        duration:50000
      }
    },
    {
      key: ' ProgressBar style:elevation ={0}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar9"),
        text:_getVisible("Snackbar9") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar9"),
        onDismiss:_showSnackbar("Snackbar9"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :0 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:elevation ={1}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar10"),
        text:_getVisible("Snackbar10") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar10"),
        onDismiss:_showSnackbar("Snackbar10"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :1 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:elevation ={2}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar11"),
        text:_getVisible("Snackbar11") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar11"),
        onDismiss:_showSnackbar("Snackbar11"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :2 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:elevation ={3}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar12"),
        text:_getVisible("Snackbar12") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar12"),
        onDismiss:_showSnackbar("Snackbar12"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :3 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:elevation ={4}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar13"),
        text:_getVisible("Snackbar13") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar13"),
        onDismiss:_showSnackbar("Snackbar13"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :4 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:elevation ={5}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar14"),
        text:_getVisible("Snackbar14") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar14"),
        onDismiss:_showSnackbar("Snackbar14"),
        action:{label: 'Undo',onPress: () => {}},
        elevation :5 as 0 | 1 | 2 | 3 | 4 | 5 
      }
    },
    {
      key: ' ProgressBar style:maxFontSizeMultiplier ={1}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar15"),
        text:_getVisible("Snackbar15") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar15"),
        onDismiss:_showSnackbar("Snackbar15"),
        action:{label: 'Undo',onPress: () => {}},
        maxFontSizeMultiplier : 1
      }
    },
    {
      key: ' ProgressBar style:maxFontSizeMultiplier ={2}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar15"),
        text:_getVisible("Snackbar15") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar15"),
        onDismiss:_showSnackbar("Snackbar15"),
        action:{label: 'Undo',onPress: () => {}},
        maxFontSizeMultiplier : 2
      }
    },
    {
      key: ' ProgressBar style:wrapperStyle ={backgroundColor:MD2Colors.red100}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar16"),
        text:_getVisible("Snackbar16") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar16"),
        onDismiss:_showSnackbar("Snackbar16"),
        action:{label: 'Undo',onPress: () => {}},
        wrapperStyle :{backgroundColor:MD2Colors.red100},
      }
    },
    {
      key: ' ProgressBar style:wrapperStyle ={backgroundColor:MD2Colors.red100}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar17"),
        text:_getVisible("Snackbar17") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar17"),
        onDismiss:_showSnackbar("Snackbar17"),
        action:{label: 'Undo',onPress: () => {}},
        style :{backgroundColor:MD2Colors.red100},
      }
    },
    {
      key: ' ProgressBar style:theme ={ colors: { primary:"green" } }',
      buttonValue:{
        onPress:_showSnackbar("Snackbar18"),
        text:_getVisible("Snackbar18") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar18"),
        onDismiss:_showSnackbar("Snackbar18"),
        action:{label: 'Undo',onPress: () => {}},
        theme :{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' ProgressBar style:testID ={"Snackbar"}',
      buttonValue:{
        onPress:_showSnackbar("Snackbar19"),
        text:_getVisible("Snackbar19") ? 'Hide': 'Show'
      },
      value: {
        visible:_getVisible("Snackbar19"),
        onDismiss:_showSnackbar("Snackbar19"),
        action:{label: 'Undo',onPress: () => {}},
        testID :'Snackbar'
      }
    },
  ]

  // 创建一个ref，它将被用来引用View组件  
  const viewRef = useRef(null); 
  // 你可以使用这个ref来访问View组件，例如测量其尺寸  
  const measureView = () => {  
    if (viewRef.current) {  
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }  
  };  

  return (
    <ScrollView>
      <Tester>
    <TestCase itShould={'fab style:ref={viewRef}'}  >
    <Snackbar
        visible={true}
        onDismiss={_showSnackbar("Snackbar18")}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
        <Button onPress={measureView} >Press me</Button>  
      </TestCase>
    <TestSuite name='SnackbarDemo' >
       {SegmentedButtonProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <View style={{height:60, justifyContent: 'center',}}>
                <Button onPress={item.buttonValue.onPress} >{item.buttonValue.text}</Button>
                <Snackbar {...item.value} >
                  Hey there! I'm a Snackbar.
                </Snackbar>
              </View>
            </TestCase>
          );
        })},
     </TestSuite>
    </Tester>
    </ScrollView>
  )
}


export default SnackbarDemo ;