import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Button, IconButton, MD2Colors, MD3Colors, } from 'react-native-paper';


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function IconButtonDemo() { 

  const [icon , setIcon ] = React.useState<string>('camera');
  const [icon1 , setIcon1 ] = React.useState<string>('camera');

  const _onPress =() => {
    console.info('function onpress')
  }
  const _onPress1 =() => {
    if(icon === 'camera') {
      setIcon('email')
    } else {
      setIcon('camera')
    }
  }

  const _onPress2 =() => {
    if(icon1 === 'camera') {
      setIcon1('email')
    } else {
      setIcon1('camera')
    }
  }
  
  const IconBProps = [
    {
      key: ' Icon style:source={"camera"}',
      value: {
        icon :"camera",
        iconColor:MD3Colors.error50,
        size:40
      }
    },
    {
      key: ' Icon style:mode={"outlined"}',
      value: {
        icon :"camera",
        mode:'outlined' as 'outlined' | 'contained' | 'contained-tonal',
        iconColor:MD3Colors.error50,
        size:40
      }
    },
    {
      key: ' Icon style:mode={"contained"}',
      value: {
        icon :"camera",
        mode:'contained' as 'outlined' | 'contained' | 'contained-tonal',
        iconColor:MD3Colors.error50,
        size:40
      }
    },
    {
      key: ' Icon style:mode={"contained-tonal"}',
      value: {
        icon :"camera",
        mode:'contained-tonal' as 'outlined' | 'contained' | 'contained-tonal',
        iconColor:MD3Colors.error50,
        size:40
      }
    }
    ,
    {
      key: ' Icon style:iconColor={MD2Colors.blue100}',
      value: {
        icon :"camera",
        mode:'contained-tonal' as 'outlined' | 'contained' | 'contained-tonal',
        iconColor:MD2Colors.blue100,
        size:40
      }
    },
    {
      key: ' Icon style:containerColor={MD2Colors.black}',
      value: {
        icon :"camera",
        containerColor:MD2Colors.blue100,
        iconColor:MD3Colors.error50,
        size:40
      }
    },
    {
      key: ' Icon style:rippleColor={MD2Colors.blue100}',
      value: {
        icon :"camera",
        rippleColor:MD2Colors.blue100,
        iconColor:MD3Colors.error50,
        size:40,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:rippleColor={MD2Colors.blue100}',
      value: {
        icon :"camera",
        rippleColor:MD2Colors.blue100,
        iconColor:MD3Colors.error50,
        size:40,
        selected:true,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:selected={false}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        selected:false,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:selected={true}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        selected:true,
        onPress:_onPress
      }
    }
    ,
    {
      key: ' Icon style:size={40}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        selected:true,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:size={60}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:60,
        selected:true,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:disabled={true}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        disabled:true,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:disabled={false}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        disabled:false,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:animated={false}',
      value: {
        icon :icon,
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        animated:false,
        onPress:_onPress1
      }
    },
    {
      key: ' Icon style:animated={true}',
      value: {
        icon :icon1,
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        animated:true,
        onPress:_onPress2
      }
    },
    {
      key: ' Icon fuction:onPress',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        onPress:_onPress
      }
    },
    {
      key: ' Icon style:{backgroundColor:MD2Colors.red100}',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        style :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' Icon style:theme = { colors: { primary:"green" } }',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' Icon style:loading = { true }',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        loading:true
      }
    },
    {
      key: ' Icon style:loading = { false }',
      value: {
        icon :"camera",
        mode:"contained"  as 'outlined' | 'contained' | 'contained-tonal',
        size:40,
        loading:false
      }
    },
  ]

  // 创建一个ref，它将被用来引用View组件  
  const viewRef = React.useRef(null); 
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
      <TestSuite name='IconButton' >
        <TestCase itShould={'fab style:ref={viewRef}'}  >
          <IconButton
            icon="camera"
            iconColor={MD3Colors.error50}
            ref={viewRef}
            size={20}
            onPress={() => console.log('Pressed')}
          />
         <Button onPress={measureView} >Press me</Button>  
         </TestCase>
        {IconBProps.map((item) => {
                return (
                  <TestCase itShould={item.key}  key={item.key}>
                    <IconButton {...item.value} />
                </TestCase>
                );
            })},
      </TestSuite>
      </Tester>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  v2Container: {
    flexDirection: 'row',
    padding: 8,
  },
  v3Container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  square: {
    borderRadius: 0,
  },
});

export default IconButtonDemo;